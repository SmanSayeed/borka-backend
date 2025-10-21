<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'name' => 'Borka API Collection',
        'version' => '1.0.0',
        'country' => "Bangladesh",
        "current_time" => now()->format('Y-m-d H:i:s'),
    ], 200);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
