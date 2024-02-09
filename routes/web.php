<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SuccessController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/csrf-token', [\App\Http\Controllers\RefreshCsrfTokenController::class, 'index'])->name('csrf-token');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'REACT_APP_SITE_KEY' => env('REACT_APP_SITE_KEY')
    ]);
})->name('welcome');

Route::post('/send', [Controller::class, 'send'])->name('send');

