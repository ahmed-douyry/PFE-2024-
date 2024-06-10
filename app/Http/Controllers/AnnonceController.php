<?php

namespace App\Http\Controllers;

use App\Models\Annonce;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AnnonceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $annonces = Annonce::all();
        // Ajouter le chemin complet de l'image à chaque annonce
        foreach ($annonces as $annonce) {
            $annonce->url = asset('storage/' . $annonce->url);
        }
        return response()->json($annonces);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'url' => 'required|file'
        ]);

        $path = $request->file(''.'url')->store('photos', 'public');

        // Créer une nouvelle annonce
        $annonce = new Annonce();

        // Définir l'URL de l'image dans le modèle Annonce
        $annonce->url = $path;

        // Enregistrer l'annonce en base de données
        $annonce->save();

        // Retourner le chemin complet de l'image dans la réponse JSON
        $annonce->url = asset('storage/' . $path);

        return response()->json($annonce, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Annonce $annonce)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Annonce $annonce)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Annonce $annonce)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $annonce = Annonce::find($id);

        if (!$annonce) {
            return response()->json(['error' => 'Photo not found'], 404);
        }

        // Log pour le débogage
        \Log::info('Deleting photo:', ['id' => $id, 'url' => $annonce->url]);

        try {
            // Supprimer le fichier de stockage
            Storage::disk('public')->delete($annonce->url);

            // Supprimer l'annonce de la base de données
            $annonce->delete();

            return response()->json(['message' => 'Photo deleted successfully']);
        } catch (\Exception $e) {
            // Log de l'exception
            \Log::error('Error deleting photo:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json(['error' => 'Error deleting photo'], 500);
        }
    }
}

