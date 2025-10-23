<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('parent_id')->nullable()->comment("For child categories. Using self reference to create a tree structure.");
            $table->foreign('parent_id')->references('id')->on('categories')->onDelete('cascade');
            $table->unsignedBigInteger('business_category_id')->nullable();
            $table->foreign('business_category_id')->references('id')->on('business_categories')->onDelete('cascade');
            $table->string('slug')->nullable();
            $table->string('icon')->nullable();
            $table->integer('order')->default(0)->comment("Data Order of the category");
            $table->boolean('is_active')->default(true)->comment("Active status of the category, 0 = false, 1 = true");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
