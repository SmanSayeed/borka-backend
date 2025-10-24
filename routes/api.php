<?php

use App\Http\Controllers\API\BusinessCategoryController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\SizeController;
use Illuminate\Support\Facades\Route;

// ** Test Route **
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

// ** Categories Routes **

Route::group(['prefix' => 'categories', 'as' => 'categories.'], function () {
    Route::get('/', [CategoryController::class, 'getCategories'])->name('get-categories');
});

// ** Sizes Routes **

Route::group(['as' => 'sizes.'], function () {
    Route::get('/get-all-sizes', [SizeController::class, 'getAllSizes'])->name('get-all-sizes');
});
