let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function scrollToProducts(){
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart!");
}

function addToWishlist(name){
  wishlist.push(name);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert(name + " added to wishlist!");
}

function updateCartCount(){
  document.getElementById("cart-count").innerText = cart.length;
}

function viewCart(){
  let total = 0;
  cart.forEach(item => total += item.price);
  alert("Total Items: " + cart.length + "\nTotal Price: ₹" + total);
}

function login(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email && password){
    localStorage.setItem("user", email);
    alert("Login Successful!");
    window.location.href = "index.html";
  } else {
    alert("Please enter email and password");
  }
}

updateCartCount();
