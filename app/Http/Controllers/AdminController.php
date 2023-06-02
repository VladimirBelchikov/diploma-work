<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $list = Order::select('*')->paginate(50);

        return view('admin.index', compact('list'));
    }

    public function all()
    {
        $list = Order::select('*')->get();

        return view('admin.index', compact('list'));
    }

    public function mk()
    {
        $list = Order::select('*')->where('type', 1)->get();

        return view('admin.index', compact('list'));
    }

    public function photo()
    {
        $list = Order::select('*')->where('type', 2)->get();

        return view('admin.index', compact('list'));
    }

    public function couch()
    {
        $list = Order::select('*')->where('type', 3)->get();

        return view('admin.index', compact('list'));
    }

    public function exhibition()
    {
        $list = Order::select('*')->where('type', 4)->get();

        return view('admin.index', compact('list'));
    }

    public function callback()
    {
        $list = Order::select('*')->where('type', null)->get();

        return view('admin.index', compact('list'));
    }
}
