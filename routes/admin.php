<?php

use App\Http\Controllers\Admin\BusinessCategoryController;
use Illuminate\Support\Facades\Route;

// Business Categories
Route::group(['prefix' => 'business-categories', 'as' => 'business-categories.'], function () {
    Route::get('/', [BusinessCategoryController::class, 'index'])->name('index');
});
