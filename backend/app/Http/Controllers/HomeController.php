<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use Validator;
class HomeController extends Controller
{
    //
    public function contactUs(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'detail' => 'required',
        ],[
            'detail.required' => "Please, fill out message field"
        ]);
        if ($validator->fails()) {
            $errors = [];
            return response()->json([
                'success' => false,
                'message' => "Success! We will contact you soon.",
                "errors" => $validator->messages()->all()
            ], 400);

        }
        $data = $request->all();
        try {
            Mail::send('email.contactus', $data, function ($message) {
                $message->from(env('MAIL_FROM_ADDRESS'), env('APP_NAME'));
                $message->to(env('MAIL_FROM_ADDRESS'), env('APP_NAME'));
                $message->subject('Contact Us');
            });
            return response()->json([
                'success' => true,
                'message' => "Success! We will contact you soon.",
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }

    }
}
