<?php

namespace App\Http\Controllers;

use App\Trait\ResponseTrait;

abstract class Controller
{
    // For structured response
    use ResponseTrait;
}
