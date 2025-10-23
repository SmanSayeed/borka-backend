<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
    public function getCategories(Request $request)
    {
        try {
            $categories = Category::query()->where('is_active', true)
                // Get Parent Categories by business category
                ->when($request->has('business_category_id'), function ($query) use ($request) {
                    $query->where([
                        'business_category_id' => $request->business_category_id,
                        'parent_id' => null
                    ])->orderBy('order', 'asc');
                })
                // Get Parent Categories
                ->when(!$request->has('parent_id'), function ($query) {
                    $query->where('parent_id', null)->orderBy('order', 'asc');
                })
                // Get Sub categories by parent id
                ->when($request->has('parent_id'), function ($query) use ($request) {
                    $query->where('parent_id', $request->parent_id)->orderBy('id', 'desc');
                })
                // Search filter
                ->when($request->has('search'), function ($query) use ($request) {
                    // Name and Slug
                    $query->where('name', 'like', '%' . $request->search . '%')
                        ->orWhere('slug', 'like', '%' . $request->search . '%');
                })
                ->select('id', 'name', 'slug', 'business_category_id', 'parent_id')
                ->get();

            return $this->successResponse($categories, 'Categories fetched successfully');
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            return $this->errorResponse('Failed to fetch categories', $th->getMessage());
        }
    }
}
