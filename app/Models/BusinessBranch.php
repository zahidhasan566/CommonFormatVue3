<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessBranch extends Model
{
    use HasFactory;
    protected $table = "BusinessBranch";
    public $primaryKey = 'BusinessBranchID';
    protected $guarded = [];
    public $timestamps = false;
}
