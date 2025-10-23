<?php

use App\Http\Controllers\Admin\BusinessCategoryController;
use Illuminate\Support\Facades\Route;

// Business Categories
Route::group(['prefix' => 'business-categories', 'as' => 'business-categories.'], function () {
    Route::get('/', [BusinessCategoryController::class, 'index'])->name('index');
    Route::post('/store', [BusinessCategoryController::class, 'store'])->name('store');
    Route::post('/update/{businessCategory}', [BusinessCategoryController::class, 'update'])->name('update');
    Route::post('/toggle-status/{businessCategory}', [BusinessCategoryController::class, 'toggleStatus'])->name('toggle-status');
});
