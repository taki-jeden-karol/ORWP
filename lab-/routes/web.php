<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'ProductsController@index');
Route::get('delete-item/{id}', 'ProductsController@delete');
Route::get('read/{id}', 'ProductsController@read');
Route::get('add-product-to-basket/{id}', 'BasketController@addProductToBasket');