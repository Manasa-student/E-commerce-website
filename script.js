// ---------------- Cart & LocalStorage ----------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count in navbar
function updateCartCount() {
  const countEl = document.getElementById("cartCount");
  if (countEl) countEl.innerText = cart.length;
}
updateCartCount();

// ---------------- Add to Cart ----------------
function addToCart(title, price, img) {
  let user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    alert("⚠️ Please login to add items to cart.");
    window.location.href = "login.html";
    return;
  }
  cart.push({ title, price, img });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("✅ " + title + " added to cart!");
  updateCartCount();
}

// ---------------- Logout ----------------
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}


