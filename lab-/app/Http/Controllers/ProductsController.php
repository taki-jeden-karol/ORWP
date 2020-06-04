<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use Session;
use App\Cart;

class ProductsController extends Controller
{
  public function index()
  {
    if(\Cache::get('products')==null) 
      \Cache::put('products', Product::all());
    $products = \Cache::get('products');
    return view('products', compact('products'));
  }

  public function addProducts(Request $req)
  {
      $product = new Product();
      $product->name = $req->input('name');
      $product->description = $req->input('description');
      $product->photo = $req->input('photo');
      $product->price = (float)$req->input('price');
      $product->save();
      \Cache::put('products', null);
      return redirect()->intended('/');
  }

  public function delete($id)
  {
      Product::find($id)->delete();
      \Cache::put('products', null);
      return redirect()->intended('/');
  }

  public function addToCart($id, Request $request)
    {
      $product = Product::find($id);
      $oldCart = Session::has('cart') ? Session::get('cart') : null;
      $cart = new Cart($oldCart);
      $cart->add($product);
      $request->session()->put('cart', $cart);
      $request->session()->save();
      return redirect()->intended('/');
    }

  public function showShoppingCart(Request $request){
if (Session::has('cart')){
$cart = $request->session()->get('cart');
return view('shoppingCart', ['products'=> $cart->items, 'totalPrice' => $cart->totalPrice]);
}
}

public function deleteFromCart($id, Request $request){
$oldCart = Session::get('cart');
$cart = new Cart($oldCart);
$product = Product::find($id);
$cart->delete($product);
$request->session()->put('cart', $cart);
$request->session()->save();
return redirect()->intended('showShoppingCart');  
}
}
