<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Size;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SizeController extends Controller
{
    public function index()
    {
        $sizes = Size::all();
        return Inertia::render('Admin/Sizes/Index', [
            'sizes' => $sizes
        ]);
    }

    public function toggleStatus() {}

    public function store() {}

    public function update() {}
}
