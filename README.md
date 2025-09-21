index.html
<!DOCTYPE html>
<html lang=“en”>
<head>
  <meta charset=“UTF-8”>
  <title>My Online Shop</title>
  <link rel=“stylesheet” href=“style.css”>
</head>
<body>
  <h1>Welcome to My Shop</h1>

  <div class=“product”>
    <h3>Product 1</h3>
    <p>$10</p>
    <button onclick=“checkout(‘Product 1’, 10)”>Buy Now</button>
  </div>

  <div class=“product”>
    <h3>Product 2</h3>
    <p>$20</p>
    <button onclick=“checkout(‘Product 2’, 20)”>Buy Now</button>
  </div>

  <script src=“script.js”></script>
</body>
</html>
style.css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 50px;
}
.product {
  background: #f4f4f4;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
}
button {async function checkout(name, price) {
  const response = await fetch(“/create-checkout-session”, {
    method: “POST”,
    headers: { “Content-Type”: “application/json” },
    body: JSON.stringify({ items: [{ name, price, quantity: 1 }] })
  });
  const data = await response.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    alert(data.error || “Checkout error”);
  }
}
  background: #007bff;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background: #0056b3;
}
script.js
success.html
<!DOCTYPE html>
<html>
<head><meta charset=“utf-8”><title>Success</title></head>
<body>
  <h1>🎉 Төлбөр амжилттай боллоо!</h1>
  <a href=“/“>Дэлгүүр рүү буцах</a>
</body>
</html>
cancel.html
<!DOCTYPE html>
<html>
<head><meta charset=“utf-8”><title>Cancelled</title></head>
<body>
  <h1>❌ Төлбөр цуцлагдлаа</h1>
  <a href=“/“>Дахин оролдох</a>
</body>
</html>
