# stryko-s-merchandise
STRYKO Premium Sports E-Commerce Demo Website
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>STRYKO – Premium Sports Merchandise</title>
<meta name="description" content="STRYKO Premium Sports Shoes & Athletic Wear">
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
  <div class="logo">STRYKO</div>
  <nav>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">Contact</a>
  </nav>
</header>

<section class="hero">
  <div class="hero-content">
    <h1>Unleash Your Power</h1>
    <p>Premium Sports Merchandise</p>
    <button onclick="shopNow()">Shop Now</button>
  </div>
</section>

<section class="products">
  <h2>Featured Products</h2>
  <div class="product-grid">
    
    <div class="card">
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Shoes">
      <h3>STRYKO Pro Shoes</h3>
      <p>₹2,999</p>
      <button>Add to Cart</button>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1520975922071-cd8f0b1b1d8c" alt="Jersey">
      <h3>STRYKO Elite Jersey</h3>
      <p>₹1,499</p>
      <button>Add to Cart</button>
    </div>

  </div>
</section>

<section class="contact">
  <h2>Contact Us</h2>
  <p>Email: <a href="mailto:rohankadam2208@gmail.com">rohankadam2208@gmail.com</a></p>
  <p>Phone: <a href="tel:+919372984221">+91 9372984221</a></p>
  <p>Instagram: <a href="https://www.instagram.com/0taku_sama_" target="_blank">Follow Us</a></p>
</section>

<footer>
  <p>© 2026 STRYKO | Designed by Rohan Kadam</p>
</footer>

<script src="script.js"></script>
</body>
</html>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #0f0f0f;
  color: white;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 20px 10%;
  background: black;
  position: fixed;
  width: 100%;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #ff2e2e;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: white;
  transition: 0.3s;
}

nav a:hover {
  color: #ff2e2e;
}

.hero {
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content {
  background: rgba(0,0,0,0.6);
  padding: 40px;
  border-radius: 10px;
  animation: fadeIn 2s ease-in-out;
}

.hero h1 {
  font-size: 50px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  background: #ff2e2e;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: white;
  color: black;
}

.products {
  padding: 100px 10%;
  text-align: center;
}

.product-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
}

.card {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.contact {
  padding: 60px 10%;
  text-align: center;
  background: black;
}

.contact a {
  color: #ff2e2e;
  text-decoration: none;
}

footer {
  text-align: center;
  padding: 20px;
  background: #111;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
function shopNow() {
  alert("Welcome to STRYKO Store!");
}
