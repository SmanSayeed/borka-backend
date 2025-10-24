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
            'data' => $sizes
        ]);
    }

    public function toggleStatus(Size $size)
    {
        try {
            $size->is_active = !$size->is_active;
            $size->save();
            return redirect()->back()->with('success', 'Size status updated successfully');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    public function store() {}

    public function update() {}
}
