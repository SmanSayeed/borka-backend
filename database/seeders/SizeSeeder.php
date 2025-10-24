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
                'length' => 48,
                'width' => 48,
                'sleeve' => 48,
                'unit_of_masurement' => "in",
            ],
            [
                'name' => 'Medium',
                'code' => 'M',
                'length' => 48,
                'width' => 48,
                'sleeve' => 48,
                'unit_of_masurement' => "in",
            ],
            [
                'name' => 'Large',
                'code' => 'L',
                'length' => 48,
                'width' => 48,
                'sleeve' => 48,
                'unit_of_masurement' => "in",
            ],
            [
                'name' => 'Extra Large',
                'code' => 'XL',
                'length' => 48,
                'width' => 48,
                'sleeve' => 48,
                'unit_of_masurement' => "in",
            ],
            [
                'name' => 'Extra Extra Large',
                'code' => 'XXL',
                'length' => 48,
                'width' => 48,
                'sleeve' => 48,
                'unit_of_masurement' => "in",
            ],
        ];
        foreach ($sizes as $size) {
            Size::create($size);
        }
    }
}
