<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Mail;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function send(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $subject = "Portfolio";
        $message = $request->message;

        Mail::to("adriencompare@gmail.com")->send(new SendMail($name, $email, $subject, $message));
    }
}
