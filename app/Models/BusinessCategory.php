<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusinessCategory extends Model
{
    protected $guarded = [];
    protected $cast = [
        'is_active' => 'boolean'
    ];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
