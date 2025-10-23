<?php

use App\Http\Controllers\API\BusinessCategoryController;
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

// ** Business Categories Routes **

Route::group(['as' => 'business-categories.'], function () {
    Route::get('/get-all-business-categories', [BusinessCategoryController::class, 'getAllBusinessCategories'])->name('get-all-business-categories');
});
