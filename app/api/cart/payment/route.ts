import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const params: Stripe.Checkout.SessionCreateParams = {
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NHaKeAlO7kd0onJ0Fwq0y2m",
          quantity: 1,
        },
      ],
      success_url: "https://example.com/success",
      // `${request.headers.origin}/result?session_id=${process.env.SESSION_ID}`,
      cancel_url: "https://example.com/cancel",
      // `"https://example.com/cancel"${request.headers.origin}/result?session_id=${process.env.SESSION_ID}`,
    };

    const sessoin = await stripe.checkout.sessions.create(params);
    const paymentIntent = await stripe.paymentIntents.create({
      // price: "price_1NHaKeAlO7kd0onJ0Fwq0y2m",
      // quantity: 1,
      amount: 100,
      currency: "usd",
    });

    return NextResponse.json({
      status: 200,
      data: {
        clientSecret: paymentIntent.client_secret,
        sessoin,
      },
      message: "success",
    });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "An error occurred" });
  }
}
