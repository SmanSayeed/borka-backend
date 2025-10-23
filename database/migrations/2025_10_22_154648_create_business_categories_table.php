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
        Schema::create('business_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->string('icon')->nullable()->comment("Icon / Image of the category");
            $table->string('description')->nullable()->comment("Short description about the category");
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
        Schema::dropIfExists('business_categories');
    }
};
