<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    protected $guarded = [];
    protected $cast = [
        'is_active' => 'boolean'
    ];
    protected $appends = [
        'label'
    ];

    public function getLabelAttribute()
    {
        // S-48in
        return $this->code . "-" . $this->in_value . "in";
    }
}
