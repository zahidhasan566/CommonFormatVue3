<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingController extends Controller
{
    public function appSupportingData()
    {
        try {
            $auth = Auth::user();
            $query = Menu::select('Menus.*')->lock('WITH(NOLOCK)');
            $data = $query->with('subMenus')
                ->orderBy('MenuOrder','asc')
                ->get();
            return response()->json([
                'status' => 'success',
                'menus' => $data,
//                'user' => User::where('UserId',$auth->UserId)->first()
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }
}
