<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RedirectUrl extends Model
{
    use HasFactory;

    protected $fillable = [
      'base_url',
      'redirect_url_id',
      'user_id'
    ];
}
