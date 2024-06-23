<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PvNote extends Model
{
    use HasFactory;
    protected $fillable = ['module_name', 'module_number', 'pdf_path'];

}
