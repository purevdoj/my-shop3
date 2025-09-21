const express = require(“express”);
const app = express();

// Stripe нууц түлхүүрээ энд оруул
const stripe = require(“stripe”)(“YOUR_STRIPE_SECRET_KEY”);

app.use(express.static(“public”));
app.use(express.json());

app.post(“/create-checkout-session”, async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [“card”],
      mode: “payment”,
      line_items: req.body.items.map(item => ({
        price_data: {
          currency: “usd”,
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: “http://localhost:3000/success.html”,
      cancel_url: “http://localhost:3000/cancel.html”,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => console.log(“Server running on http://localhost:3000”));
