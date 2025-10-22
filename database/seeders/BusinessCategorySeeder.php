<?php

namespace Database\Seeders;

use App\Models\BusinessCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BusinessCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BusinessCategory::create([
            'name' => 'Women',
            'slug' => 'women',
            'icon' => 'women.png',
            'description' => 'All women fashion / Clothing / Accessories',
            'order' => 1,
            'is_active' => true,
        ]);
    }
}
