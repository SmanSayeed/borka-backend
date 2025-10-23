<?php

namespace App\Trait;

trait ResponseTrait
{
    protected function response($data, $message, $error, $validation_error, $success, $status)
    {
        return response()->json([
            'success' => $success,
            'message' => $message,
            'data' => $data,
            'error' => $error,
            'validation_error' => $validation_error,
        ], $status);
    }

    public function successResponse($data = [], $message = '', $status = 200)
    {
        return $this->response($data, $message, '', [], true, $status);
    }

    public function errorResponse($message = '', $error = '', $validation_error = [], $status = 400)
    {
        return $this->response([], $message, $error, $validation_error, false, $status);
    }
}
