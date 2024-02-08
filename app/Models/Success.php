<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Success extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'icon',
        'category_successes_id',
        'count_to_have'
    ];

    public function users(): HasMany
    {
        return $this->hasMany(SuccessUser::class);
    }
}
