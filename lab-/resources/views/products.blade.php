@extends('layout')
@section('title', 'Products')
@section('content')

<div class="container products">
<div class="row">
@foreach($products as $product)
<div class="col-xs-18 col-sm-6 col-md-3">
<div class="thumbnail">
<img src="{{ $product->photo }}" width="500" height="300">
<div class="caption">
<h4>{{ $product->name }}</h4>
<p>{{ \Illuminate\Support\Str::limit(strtolower($product->description), 50) }}</p>
<p><strong>Price: </strong> {{ $product->price }}$</p>
<p class="btn-holder"><a href="{{ url('add-product-to-basket/'.$product->id) }}" 
                         class="btn btn-warning btn-block text-center"
role="button">Add to basket</a> </p>
<p class="btn-holder">
<a href="{{ url('read/' .$product->id)}}" 
   class="btn btn-warning btn-block text-center" role="button">Info</a></p>
</div>
</div>
</div>
@endforeach
</div>
</div>

@endsection