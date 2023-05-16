<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function postOrder(Request $request) {
        $order = new Order;
        $order->name = $request->name;
        $order->phone = $request->phone;
        $order->note = $request->note ?? null;

        $order->save();

        return json_encode(['success' => true]);
    }
}
