<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BasketController extends Controller
{
    public function addProductToBasket($id)
    {
        $basket = session('basket');
        $basket[] = $id;
        session(['basket'=>$basket]);
        return view('basket', ['basket'=>$basket]);
    }
}
