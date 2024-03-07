<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);


Route::get('/list',[TodoController::class,'index']);
    Route::delete('/delete/{id}',[TodoController::class,'destroy']);
    Route::post('/create',[TodoController::class,'store']);
    Route::put('/update/{id}',[TodoController::class,'update']);
    Route::post('/logout',[AuthController::class,'logout']);


//can be only accessed by auth users.
Route::group(['middleware'=>['auth:sanctum']],function(){
    
});
