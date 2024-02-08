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
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'REACT_APP_SITE_KEY' => env('REACT_APP_SITE_KEY'),
    ]);
})->name('welcome');

Route::post('/send', [Controller::class, 'send'])->name('send');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard-index');

    Route::post('/dashboard', [DashboardController::class, 'create'])->name('dashboard-create');

    Route::get('/dashboard/{id}', [DashboardController::class, 'redirect'])->name('dashboard-redirect');

    Route::get('/my-success', [SuccessController::class, 'showMySuccess'])->name('success-user-show');

});

Route::middleware(['auth', 'admin'])->group(function () {

    Route::get('/success', [SuccessController::class, 'index'])->name('success-index');

    Route::post('/success', [SuccessController::class, 'create'])->name('success-create');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
