<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTerritory extends Model
{
    use HasFactory;
    protected $table = "UserTerritory";
    public $timestamps = false;
    public $primaryKey = false;
    public $incrementing = false;
    protected $guarded = [];
}
