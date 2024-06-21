<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Group;
use Illuminate\Support\Facades\Storage;

class GroupController extends Controller
{
    public function index()
    {
        $groups = Group::all();
        foreach ($groups as $group) {
            $group->pdf_url = $group->emploi ? Storage::url($group->emploi) : null;
        }
        return response()->json($groups);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'pdf' => 'nullable|mimes:pdf|max:2048', // Validation pour le fichier PDF
        ]);

        if ($request->hasFile('pdf')) {
            $pdfPath = $request->file('pdf')->store('pdfs', 'public');
        } else {
            $pdfPath = null;
        }

        $group = Group::create([
            'name' => $request->name,
            'emploi' => $pdfPath,
        ]);

        $group->pdf_url = $pdfPath ? Storage::url($pdfPath) : null;

        return response()->json($group, 201);
    }

    public function show($id)
    {
        $group = Group::findOrFail($id);
        $group->pdf_url = $group->emploi ? Storage::url($group->emploi) : null;
        return response()->json($group);
    }

    public function destroy($id)
    {
        $group = Group::findOrFail($id);
        if ($group) {
            if ($group->emploi) {
                Storage::delete('public/' . $group->emploi);
            }

            $group->delete();
            return response()->json(['message' => 'Group deleted successfully']);
        }

        return response()->json(['message' => 'Group not found'], 404);
    }
}
