@extends('layout')
@section('title', 'Products')
@section('content')

<img scr="{{ $product->photo }}" width="500" height="300">
<div class="caption">
<h4>{{ $product->name }}</h4>
<p>{{ $product->description }}</p>
<p><strong>Price: </strong> {{ $product->price }}$</p>
<p class="btn-holder">
<a href="{{ url('add-product-to-
basket/'.$product->id) }}" class="btn btn-warning btn-block text-center"
role="button">Add to basket</a> </p>
<p class="btn-holder">
<a href="{{ url('delete-item/' .$product->id)}}" 
class="btn btn-warning btn-block text-center" role="button">Delete</a></p>
</div>
@endsection