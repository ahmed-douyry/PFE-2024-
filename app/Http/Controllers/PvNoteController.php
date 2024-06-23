<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PvNote;
use Illuminate\Support\Facades\Storage;

class PvNoteController extends Controller
{
    public function index()
    {
        $pvNotes = PvNote::all();
        foreach ($pvNotes as $pvNote) {
            $pvNote->pdf_url = $pvNote->pdf_path ? Storage::url($pvNote->pdf_path) : null;
        }
        return response()->json($pvNotes);
    }

    public function store(Request $request)
    {
        $request->validate([
            'module_name' => 'required|string|max:255',
            'module_number' => 'required|string|max:255',
            'pdf' => 'nullable|mimes:pdf|max:2048',
        ]);

        if ($request->hasFile('pdf')) {
            $pdfPath = $request->file('pdf')->store('pdfs', 'public');
        } else {
            $pdfPath = null;
        }

        $pvNote = PvNote::create([
            'module_name' => $request->module_name,
            'module_number' => $request->module_number,
            'pdf_path' => $pdfPath,
        ]);

        $pvNote->pdf_url = $pdfPath ? Storage::url($pdfPath) : null;

        return response()->json($pvNote, 201);
    }

    public function show($id)
    {
        $pvNote = PvNote::findOrFail($id);
        $pvNote->pdf_url = $pvNote->pdf_path ? Storage::url($pvNote->pdf_path) : null;
        return response()->json($pvNote);
    }

    public function destroy($id)
    {
        $pvNote = PvNote::findOrFail($id);
        if ($pvNote) {
            if ($pvNote->pdf_path) {
                Storage::delete('public/' . $pvNote->pdf_path);
            }

            $pvNote->delete();
            return response()->json(['message' => 'PV Note deleted successfully']);
        }

        return response()->json(['message' => 'PV Note not found'], 404);
    }
}