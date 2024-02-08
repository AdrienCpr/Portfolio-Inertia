<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RefreshCsrfTokenController extends Controller
{
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->session()->regenerateToken();

        return response()->json();
    }
}
