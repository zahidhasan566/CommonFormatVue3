<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = "UserManager";
    protected $guarded = [];
    public $primaryKey = 'UserId';
    public $incrementing = false; // Add this if UserId is not auto-incrementing
    protected $keyType = 'string';


//    public function getJWTIdentifier()
//    {
//        return $this->id; // The unique identifier of the user (e.g., user ID)
//    }
    public function getJWTIdentifier() {
        return $this->getKey(); // This will use the primary key (UserId)
        // OR explicitly: return $this->UserId;
    }

    public function getJWTCustomClaims()
    {
        return []; // Custom claims (optional)
    }


}
