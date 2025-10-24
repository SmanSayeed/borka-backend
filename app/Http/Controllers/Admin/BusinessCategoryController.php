<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BusinessCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $perPage = request()->get('per_page', 10);
            $search = request()->get('search', '');
            $businessCategories = BusinessCategory::orderBy('order', 'asc')
                ->when($search, function ($query) use ($search) {
                    $query->where('name', 'like', '%' . $search . '%');
                })
                ->paginate($perPage)->withQueryString()->toArray();
            // Filter Data
            $filterData = [
                'search' => $search,
                'per_page' => $perPage,
            ];
            return Inertia::render('Admin/BusinessCategories/Index', [
                'data' => $businessCategories,
                'filterData' => $filterData,
            ]);
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function toggleStatus(BusinessCategory $businessCategory)
    {
        try {
            $businessCategory->is_active = !$businessCategory->is_active;
            $businessCategory->save();
            return redirect()->back()->with('success', 'Business category status updated successfully');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255|unique:business_categories,name',
            'slug' => 'required|string|max:255|unique:business_categories,slug',
            'description' => 'nullable|string|max:255',
            'order' => 'nullable|integer',
        ]);

        BusinessCategory::create($data);

        return redirect()->back()->with('success', 'Business category created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
