<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Designation extends Model
{
    use HasFactory;
    protected $table = "Designation";
    public $primaryKey = 'DesignationID';
    protected $guarded = [];
    public $timestamps = false;
}
