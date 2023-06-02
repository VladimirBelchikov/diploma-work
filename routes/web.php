<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::group(['prefix' => 'admin'], function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin');
    Route::get('application/mk', [AdminController::class, 'mk'])->name('application.mk');
    Route::get('application/photo', [AdminController::class, 'photo'])->name('application.photo');
    Route::get('application/couch', [AdminController::class, 'couch'])->name('application.couch');
    Route::get('application/exhibition', [AdminController::class, 'exhibition'])->name('application.exhibition');
    Route::get('application/callback', [AdminController::class, 'callback'])->name('application.callback');
});
