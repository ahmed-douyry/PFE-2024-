<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
use App\Http\Controllers\AnnonceController;

Route::get('/photos', [AnnonceController::class, 'index']);
Route::post('/photos', [AnnonceController::class, 'store']);
Route::delete('/photos/{id}', [AnnonceController::class, 'destroy']); // Mise à jour ici
use App\Http\Controllers\AnnouncementController;

Route::get('/announcements', [AnnouncementController::class, 'index']);
Route::get('/announcements/{id}', [AnnouncementController::class, 'show']);
Route::post('/announcements', [AnnouncementController::class, 'store']);
Route::put('/announcements/{id}', [AnnouncementController::class, 'update']);
Route::delete('/announcements/{id}', [AnnouncementController::class, 'destroy']);
use App\Http\Controllers\GroupController;

Route::get('/groups', [GroupController::class, 'index']);
Route::post('/groups', [GroupController::class, 'store']);
Route::get('/groups/{id}', [GroupController::class, 'show']);
Route::DELETE('/groups/{id}', [GroupController::class, 'destroy']);

use App\Http\Controllers\PvNoteController;

Route::get('/pv-notes', [PvNoteController::class, 'index']);
Route::post('/pv-notes', [PvNoteController::class, 'store']);
Route::get('/pv-notes/{id}', [PvNoteController::class, 'show']);
Route::delete('/pv-notes/{id}', [PvNoteController::class, 'destroy']);