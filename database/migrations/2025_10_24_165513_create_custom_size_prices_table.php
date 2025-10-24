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
        Schema::create('custom_size_prices', function (Blueprint $table) {
            // Will be update after produc creation
            $table->id();
            $table->decimal("in_value");
            $table->decimal("cm_value");
            $table->decimal("price")->comment("Extra amount to be added to the base price");
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('custom_size_prices');
    }
};
