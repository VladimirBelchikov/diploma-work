<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Throwable;

class OrderController extends Controller
{
    public function postOrder(Request $request)
    {
        $order = new Order;
        $order->name = $request->name;
        $order->phone = $request->phone;
        $order->note = Str::of($request->note)->replace('\n','<p>&nbsp;</p>') ?? null;
        $order->type = $request->type ?? null;

        try {
            $order->save();

            $success = true;
        } catch (Throwable $e) {
            report($e);

            $success = false;
        }

        return json_encode(['success' => $success]);
    }
}
