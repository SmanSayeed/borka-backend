<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];
    protected $cast = [
        'is_active' => 'boolean'
    ];
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }
    public function businessCategory()
    {
        return $this->belongsTo(BusinessCategory::class);
    }
}
