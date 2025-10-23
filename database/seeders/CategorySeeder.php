<?php

namespace Database\Seeders;

use App\Models\BusinessCategory;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $businessCategory = BusinessCategory::first();
        $parentCategoriesData = [
            [
                'id' => 1,
                'name' => 'Abaya',
                'slug' => 'abaya',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'order' => 1,
                'is_active' => true,
            ],
            [
                'id' => 2,
                'name' => 'Cover Up',
                'slug' => 'cover-up',
                'icon' => 'cover-up.png',
                'business_category_id' => $businessCategory->id,
                'order' => 2,
                'is_active' => true,
            ],
            [
                'id' => 3,
                'name' => 'Tops/Kurti',
                'slug' => 'tops-kurti',
                'icon' => 'tops-kurti.png',
                'business_category_id' => $businessCategory->id,
                'order' => 3,
                'is_active' => true,
            ],
            [
                'id' => 4,
                'name' => 'Embroidery',
                'slug' => 'embroidery',
                'icon' => 'embroidery.png',
                'business_category_id' => $businessCategory->id,
                'order' => 4,
                'is_active' => true,
            ],
            [
                'id' => 5,
                'name' => 'Karchupi',
                'slug' => 'karchupi',
                'icon' => 'karchupi.png',
                'business_category_id' => $businessCategory->id,
                'order' => 5,
                'is_active' => true,
            ],
            [
                'id' => 6,
                'name' => 'Festive Special',
                'slug' => 'festive-special',
                'icon' => 'festive-special.png',
                'business_category_id' => $businessCategory->id,
                'order' => 6,
                'is_active' => true,
            ],
            [
                'id' => 7,
                'name' => 'Kaftan',
                'slug' => 'kaftan',
                'icon' => 'kaftan.png',
                'business_category_id' => $businessCategory->id,
                'order' => 7,
                'is_active' => true,
            ],
            [
                'id' => 8,
                'name' => 'Jubba',
                'slug' => 'jubba',
                'icon' => 'jubba.png',
                'business_category_id' => $businessCategory->id,
                'order' => 8,
                'is_active' => true,
            ],
        ];
        $oneSub = [
            [
                'name' => 'Abaya Vinca',
                'parent_id' => 1,
                'slug' => 'abaya-vinca',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
            [
                'name' => 'Raheiya Prime Abaya',
                'parent_id' => 1,
                'slug' => 'raheiya-prime-abaya',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
            [
                'name' => 'Abaya Tashdeed (2nd Edition)',
                'parent_id' => 1,
                'slug' => 'abaya-tashdeed-2nd-edition',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
            [
                'name' => 'Abaya At-Tuba',
                'parent_id' => 1,
                'slug' => 'abaya-at-tuba',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
            [
                'name' => 'Abaya Raheiya',
                'parent_id' => 1,
                'slug' => 'abaya-raheiya',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
        ];
        $twoSub = [
            [
                'name' => 'Imarah Kurti Set',
                'parent_id' => 2,
                'slug' => 'imarah-kurti-set',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
            [
                'name' => 'Afgani Ayra Kurti Set',
                'parent_id' => 2,
                'slug' => 'afgani-ayra-kurti-set',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
            [
                'name' => 'Afgani Pashtun Kurti',
                'parent_id' => 2,
                'slug' => 'afgani-pashtun-kurti',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
            [
                'name' => 'Turco Kurti Set V2',
                'parent_id' => 2,
                'slug' => 'turco-kurti-set-v2',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
        ];
        $threeSub = [
            [
                'name' => 'Sunflower Embroidery Abaya',
                'parent_id' => 3,
                'slug' => 'sunflower-embroidery-abaya',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
            [
                'name' => 'Dehra Embroidery Abaya',
                'parent_id' => 3,
                'slug' => 'dehra-embroidery-abaya',
                'icon' => 'abaya.png',
                'business_category_id' => $businessCategory->id,
                'is_active' => true,
            ],
        ];
        foreach ($parentCategoriesData as $parentCategoryData) {
            Category::create($parentCategoryData);
        }
        foreach ($oneSub as $sub) {
            Category::create($sub);
        }
        foreach ($twoSub as $sub) {
            Category::create($sub);
        }
        foreach ($threeSub as $sub) {
            Category::create($sub);
        }
    }
}
