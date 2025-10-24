<?php

namespace Database\Seeders;

use App\Models\Size;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sizes = [
            [
                'name' => 'Small',
                'code' => 'S',
                'in_value' => 48,
                'cm_value' => 121.92,
            ],
            [
                'name' => 'Medium',
                'code' => 'M',
                'in_value' => 50,
                'cm_value' => 121.92,
            ],
            [
                'name' => 'Large',
                'code' => 'L',
                'in_value' => 52,
                'cm_value' => 121.92,
            ],
            [
                'name' => 'Extra Large',
                'code' => 'XL',
                'in_value' => 54,
                'cm_value' => 121.92,
            ],
            [
                'name' => 'Extra Extra Large',
                'code' => 'XXL',
                'in_value' => 56,
                'cm_value' => 121.92,
            ],
        ];
        foreach ($sizes as $size) {
            Size::create($size);
        }
    }
}
