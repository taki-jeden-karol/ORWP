<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('products', compact('products'));
    }
    
    public function delete($id){
        Product::where('id', $id)->delete();
        return redirect('/');
    }
    
    public function read($id){
        $product = Product::where('id', $id)->first();
        return view('productInfo', ['product'=>$product]);
    }
}
