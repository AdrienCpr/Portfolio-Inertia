<?php

namespace App\Http\Controllers;

use App\Models\RedirectUrl;
use App\Models\Success;
use App\Models\SuccessUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Dashboard');
    }
}
