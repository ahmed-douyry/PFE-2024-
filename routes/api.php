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
// routes/api.php
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
