<?php

namespace App\Traits;



use App\Services\RoleService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\Return_;
use Tymon\JWTAuth\Facades\JWTAuth;

trait CommonTrait
{

    public function CustomerInfo($request){
        $token = $request->bearerToken();
        $payload = JWTAuth::setToken($token)->getPayload();
        return $payload;
    }
    public function getUserMenu($userId, $defaultBusiness) {
        // Query to get the menus
        $menus = DB::table('Menu as M')
            ->leftJoin('UserMenu as U', function($join) use ($userId) {
                $join->on('M.MenuId', '=', 'U.MenuId')
                    ->where('U.UserId', '=', $userId);
            })
            ->where('M.Active', 'Y')
            ->where(function($query) use ($defaultBusiness) {
                $query->where('M.SpecificBusiness', '')
                    ->orWhere('M.SpecificBusiness', $defaultBusiness);
            })
            ->select(
                'M.MenuId',
                'M.MenuName as ParentMenuName',
                'M.SubMenuName as MenuName',
                DB::raw("CASE WHEN U.UserId IS NOT NULL THEN 1 ELSE 0 END as Selected")
//                DB::raw("COALESCE(U.UserId, '') as Selected")
            )
            ->orderBy('ParentMenuName')
            ->get();

        // Group menus by ParentMenuName
        $groupedMenus = $menus->groupBy('ParentMenuName');
        // Format the result for Vue
        $formattedMenus = $groupedMenus->map(function ($menus) {
            return $menus->map(function ($menu) {
                return [
                    'value' => $menu->MenuId,
                    'label' => $menu->MenuName,
                    'selected' => (int)$menu->Selected === 1
                ];
            });
        });
        return $formattedMenus;
    }

    public function getUserTerritory($userId, $defaultBusiness) {
        $territories = DB::table('viewTerritory as VT')
            ->leftJoin('UserTerritory as UT', function($join) use ($userId) {
                $join->on('UT.TTYCode', '=', 'VT.TTYCode')
                    ->where('UT.UserID', '=', $userId);
            })
            ->where('VT.Business', $defaultBusiness)
            ->where('VT.TTYName', '<>', '')
            ->select('VT.*', 'UT.UserID')
            ->orderBy('VT.TTYName')
            ->get();

        return $territories;
    }

}
