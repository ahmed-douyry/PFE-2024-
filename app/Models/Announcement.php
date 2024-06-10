<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Announcement extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'image_url'];
    protected $appends = ['full_image_url'];

    public function getFullImageUrlAttribute()
    {
        return url(Storage::url($this->image_url));
    }
}
