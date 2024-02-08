<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CsrfMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        $statusCode = $response->status();
            $request->session()->regenerateToken();

//        dd($statusCode);

        if ($statusCode == 419) {
            dd('ici');
            // Return the response after regenerating the token
            return $response;
        }

        return $response;
    }
}
