<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index() {
        $list = Order::select('*')->paginate(50);

        return view('admin.index', compact('list'));
    }
}
