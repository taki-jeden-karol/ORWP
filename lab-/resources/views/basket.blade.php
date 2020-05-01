@extends('layout')
@section('title', 'Cart')
@section('content')

<h4>Number of products in the basket: {{ count($basket) }}</h4>

@endsection