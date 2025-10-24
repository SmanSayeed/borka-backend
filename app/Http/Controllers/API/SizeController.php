<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SizeController extends Controller
{
    public function getAllSizes()
    {
        try {
            $sizes = Size::where('is_active', true)
                ->get()
                ->makeHidden(['created_at', 'updated_at']);
            return $this->successResponse($sizes, 'Sizes fetched successfully');
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            return $this->errorResponse('Failed to fetch sizes', $th->getMessage());
        }
    }
}
