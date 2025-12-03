<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\BusinessBranch;
use App\Models\Designation;
use App\Models\Menu;
use App\Models\User;
use App\Models\UserMenu;
use App\Models\UserTerritory;
use App\Traits\CommonTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    use CommonTrait;
    public function index(Request $request){
//        $roleId = Auth::user()->RoleId;
        $take = $request->take;
        $search = $request->search;

        $data = User::select(
            'UserId',
            'StaffID',
            'UserName',
            'UserLevel',
            'Branch as BranchName',
            DB::raw("CONVERT(date,EntryDate) as EntryDate")
        )
            ->where(function ($q) use ($search) {
                $q->where('StaffID', 'like', '%' . $search . '%');
                $q->Orwhere('UserName', 'like', '%' . $search . '%');
            })
            ->orderBy('EntryDate','desc');

        if (!empty($request->startDate)) {
            $first = $request->startDate;
            $second = $request->endDate;

            $start_date = date("Y-m-d", strtotime($first));
            $end_date = date("Y-m-d", strtotime($second));

            $data = $data->whereBetween(DB::raw("CONVERT(DATE, EntryDate)"), [$start_date, $end_date]);
        }

        if ($request->type === 'export') {
            return response()->json([
                'data' => $data->get(),
            ]);
        } else {
            return $data->paginate($take);
        }
    }

    public function getSupportingData(){
        $menu = $this->getUserMenu(Auth::user()->UserId, Auth::user()->DefaultBusiness);
        $businessBranch = BusinessBranch::where('Business',Auth::user()->DefaultBusiness)->get();
        $designation = Designation::where('Business',Auth::user()->DefaultBusiness)->get();
        $territory = $this->getUserTerritory(Auth::user()->UserId, Auth::user()->DefaultBusiness);
        return response()->json([
            'menu' => $menu,
            'businessBranch' => $businessBranch,
            'designation' => $designation,
            'territory' => $territory,
        ]);
    }
    public function checkUserId($userId)
    {
        try {
            // Validate input
            if (empty($userId)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'User ID is required'
                ], 400);
            }

            $exists = User::where('UserId', $userId)->exists();

            return response()->json([
                'exists' => $exists,
                'message' => $exists ? 'User ID already exists' : 'User ID is available'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error checking user ID',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function storeUser( Request $request){
        $validator = Validator::make($request->formData, [
            'userid' => 'required',
            'staffid' => 'required',
            'password' => 'required',
            'confirmpassword' => 'required',
            'username' => 'required',
            'business' => 'required',
            'designation' => 'required',
            'userLevel' => 'required',
            'active' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 401, 'error' => $validator->errors()]);
        }

        DB::beginTransaction();
        try{

            $dataToAdd = $request->formData;
            //Insert User
            $password = $dataToAdd['password'];
            $passwordData = DB::select("select dbo.ufn_PasswordEncode('$password') as RawPass");
            $user = new User();
            $user->UserId = $dataToAdd['userid'];
            $user->StaffID = $dataToAdd['staffid'];
            $user->Password = $passwordData[0]->RawPass;;
            $user->UserName = $dataToAdd['username'];
            $user->Branch = $dataToAdd['business'];
            $user->Designation = $dataToAdd['designation'];
            $user->UserLevel = $dataToAdd['userLevel'];
            $user->Active = $dataToAdd['active'];
            $user->DefaultBusiness = Auth::user()->DefaultBusiness;
            $user->LevelCode = $dataToAdd['levelCode'];
            $user->UserType = $dataToAdd['userType'];
            $user->EntryDate = date('Y-m-d H:i:s');
            $user->EntryBy = Auth::user()->UserId;
            $user->EntryIpAddress = $_SERVER['REMOTE_ADDR'];
            $user->save();


            //Insert User Menu
            //UserMenu::where('UserID', $dataToAdd['userid'])->delete();

            // 3. Insert new UserMenu records
            if (isset($dataToAdd['usermenu']) && is_array($dataToAdd['usermenu'])) {
                $menuInsertData = [];

                foreach ($dataToAdd['usermenu'] as $parentMenu => $menuIds) {
                    if (is_array($menuIds)) {
                        foreach ($menuIds as $menuId) {
                            $menuInsertData[] = [
                                'UserId' => $dataToAdd['userid'],
                                'MenuId' => $menuId
                            ];
                        }
                    }
                }
                if (!empty($menuInsertData)) {
                    $result = DB::table('UserMenu')->insert($menuInsertData);
                }
            }

            //Insert into UserTerritory
            UserTerritory::where('UserID', $dataToAdd['userid'])->delete();
            $territories = $dataToAdd['territory'];
            foreach ($territories as $territory) {
                $userTerritory = new UserTerritory();
                $userTerritory->UserID = $user->UserId;
                $userTerritory->TTYCode = $territory;
                $userTerritory->save();
            }
            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'User added successfully'
            ],200);

        }
        catch (\Exception $exception) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong!' . $exception->getMessage()
            ], 500);
        }
    }

    public function getExistingUserData($userId){

        $userData = User::select('UserManager.*', DB::raw('dbo.ufn_PasswordDecode(UserManager.Password) as DecodedPassword'))
            ->where('UserManager.UserId', $userId)
            ->first();
        $menu = $this->getUserMenu($userId, Auth::user()->DefaultBusiness);
        $territory = UserTerritory::join('ViewTerritory', 'ViewTerritory.TTYCode', '=', 'UserTerritory.TTYCode')->where('UserID', $userId)->get();

        return response()->json([
            'user' => $userData,
            'menu' => $menu,
            'territory' => $territory,
        ]);

    }

    public function updateUser(Request $request)
    {
        $validator = Validator::make($request->formData, [
            'userid' => 'required',
            'staffid' => 'required',
            'username' => 'required',
            'business' => 'required',
            'designation' => 'required',
            'userLevel' => 'required',
            'active' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 401, 'error' => $validator->errors()]);
        }

        DB::beginTransaction();
        try {
            $dataToAdd = $request->formData;
            $userId = $dataToAdd['userid'];

            // Find existing user
            $user = User::where('UserId', $userId)->firstOrFail();

            // Update user data
            $user->StaffID = $dataToAdd['staffid'];
            $user->UserName = $dataToAdd['username'];
            $user->Branch = $dataToAdd['business'];
            $user->Designation = $dataToAdd['designation'];
            $user->UserLevel = $dataToAdd['userLevel'];
            $user->Active = $dataToAdd['active'];
            $user->LevelCode = $dataToAdd['levelCode'];
            $user->UserType = $dataToAdd['userType'];

            // Update password only if provided
            if (!empty($dataToAdd['password'])) {
                $password = $dataToAdd['password'];
                $passwordData = DB::select("select dbo.ufn_PasswordEncode('$password') as RawPass");
                $user->Password = $passwordData[0]->RawPass;
            }

            $user->EditedDate = date('Y-m-d H:i:s');
            $user->EditedBy = Auth::user()->UserId;
            $user->EntryIpAddress = $_SERVER['REMOTE_ADDR'];
            $user->save();

            // Update User Menu
            // Delete existing menus first
            DB::table('UserMenu')->where('UserId', $userId)->delete();

            // Insert new UserMenu records
            if (isset($dataToAdd['usermenu']) && is_array($dataToAdd['usermenu'])) {
                $menuInsertData = [];

                foreach ($dataToAdd['usermenu'] as $parentMenu => $menuIds) {
                    if (is_array($menuIds)) {
                        foreach ($menuIds as $menuId) {
                            $menuInsertData[] = [
                                'UserId' => $userId,
                                'MenuId' => $menuId
                            ];
                        }
                    }
                }

                if (!empty($menuInsertData)) {
                    DB::table('UserMenu')->insert($menuInsertData);
                }
            }

            // Update UserTerritory
            UserTerritory::where('UserID', $userId)->delete();

            if (isset($dataToAdd['territory']) && is_array($dataToAdd['territory'])) {
                $territories = $dataToAdd['territory'];
                foreach ($territories as $territory) {
                    $userTerritory = new UserTerritory();
                    $userTerritory->UserID = $userId;
                    $userTerritory->TTYCode = $territory;
                    $userTerritory->save();
                }
            }

            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'User updated successfully'
            ], 200);

        } catch (\Exception $exception) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong! ' . $exception->getMessage()
            ], 500);
        }
    }

}
