<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        \Log::info('Upload request received', $request->all());
    
        // Validate the request to ensure an image file is provided
        $request->validate([
            'image' => 'required',
        ]);
    
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $path = $file->store('images', 'public');
            \Log::info('File uploaded successfully', ['path' => $path]);
            return response()->json(['url' => Storage::url($path)], 201);
        }
    
        \Log::error('File not uploaded');
        return response()->json(['message' => 'File not uploaded'], 400);
    }
}
