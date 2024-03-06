// This is the boilerplate code given for you
// You can modify this code
// Product data
// JavaScript (script.js)
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  cartList.innerHTML = ""; // Clear the previous cart items

  // Retrieve cart items from session storage
  const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const productToAdd = products.find((product) => product.id === productId);

  // Retrieve cart items from session storage
  const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Add the new item to the cart
  cartItems.push(productToAdd);

  // Update session storage with the updated cart items
  sessionStorage.setItem("cart", JSON.stringify(cartItems));

  // Re-render the cart
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
  // Retrieve cart items from session storage
  let cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Remove the item with the specified productId from the cart
  cartItems = cartItems.filter((item) => item.id !== productId);

  // Update session storage with the updated cart items
  sessionStorage.setItem("cart", JSON.stringify(cartItems));

  // Re-render the cart
  renderCart();
}

// Clear cart
function clearCart() {
  // Clear cart items in session storage
  sessionStorage.removeItem("cart");

  // Re-render the cart
  renderCart();
}

// Event listener for adding items to cart
productList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    const productId = parseInt(event.target.dataset.id);
    addToCart(productId);
  }
});

// Event listener for removing items from cart
cartList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const productId = parseInt(event.target.dataset.id);
    removeFromCart(productId);
  }
});

// Event listener for clearing the cart
clearCartBtn.addEventListener("click", clearCart);

// Initial render
renderProducts();
renderCart();

