<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\BusinessCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BusinessCategoryController extends Controller
{
    public function getAllBusinessCategories()
    {
        try {
            $businessCategories = BusinessCategory::where('is_active', true)
                ->orderBy('order', 'asc')
                ->select('id', 'name', 'slug')
                ->get();
            return $this->successResponse($businessCategories, 'Business categories fetched successfully');
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            return $this->errorResponse('Failed to fetch business categories', $th->getMessage());
        }
    }
}
