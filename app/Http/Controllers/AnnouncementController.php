<?php

// app/Http/Controllers/AnnouncementController.php
namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AnnouncementController extends Controller
{
    public function index()
    {
        $announcements = Announcement::all();
        foreach ($announcements as $announcement) {
            // Use Storage::url to generate the correct URL
            $announcement->image_url = Storage::url($announcement->image_url);
        }
        return response()->json($announcements);
    }

    public function show($id)
    {
        $announcement = Announcement::find($id);
        if ($announcement) {
            // Use Storage::url to generate the correct URL
            $announcement->image_url = Storage::url($announcement->image_url);
            return response()->json($announcement);
        }
        return response()->json(['message' => 'Announcement not found'], 404);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|max:2048',
        ]);

        $path = $request->file('image')->store('images', 'public');

        $announcement = new Announcement();
        $announcement->title = $request->title;
        $announcement->description = $request->description;
        $announcement->image_url = $path;
        $announcement->save();

        // Use Storage::url to generate the correct URL
        $announcement->url = asset('storage/' . $path);

        return response()->json(['message' => 'Announcement created successfully', 'announcement' => $announcement], 201);
    }

    public function destroy($id)
    {
        $announcement = Announcement::find($id);
        if ($announcement) {
            // Delete the image from storage
            $imagePath = str_replace('/storage', 'public', $announcement->image_url);
            Storage::delete($imagePath);

            $announcement->delete();
            return response()->json(['message' => 'Announcement deleted successfully']);
        }

        return response()->json(['message' => 'Announcement not found'], 404);
    }
}
