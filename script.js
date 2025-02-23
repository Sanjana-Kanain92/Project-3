let exploreShop = document.querySelector("#Explore")
exploreShop.addEventListener('click',function() {
  window.location.href='products.html';
});
let buyNow = document.querySelector("#buynow")
buyNow.addEventListener('click',function() {
  window.location.href='products.html';
});
let contactUs = document.querySelector("#contactus")
contactUs.addEventListener('click',function() {
  window.location.href='contact us.html';
});
let visitOrchard = document.querySelector("#visit")
visitOrchard.addEventListener('click',function() {
  window.location.href='visit.html';
});
/*Sample product data
const products = [
  { id: 1, name: "Royal Delicious Apples", price: 1200, image: "apple1.jpg" },
  { id: 2, name: "Golden Apples", price: 1000, image: "apple2.jpg" },
  { id: 3, name: "Fenzed Apples", price: 1300, image: "apple3.jpg" },
  { id: 4, name: "Spur Apples", price: 1000, image: "apple4.jpg" },
  { id: 5, name: "Fresh Cherries", price: 400, image: "cherries.jpg" },
  { id: 6, name: "Juicy Pears", price: 600, image: "pears.jpg" },
];

let cart = [];

// Function to add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
      cartItem.quantity += 1;
  } else {
      cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

// Function to render cart
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const subtotalElem = document.getElementById("subtotal");
  const discountElem = document.getElementById("discount");
  const totalElem = document.getElementById("total");

  cartItemsContainer.innerHTML = ""; // Clear previous items
  let subtotal = 0;

  cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      cartItemsContainer.innerHTML += `
          <tr>
              <td><img src="${item.image}" alt="${item.name}"></td>
              <td>${item.name}</td>
              <td>$${item.price}</td>
              <td>
                  <button onclick="changeQuantity(${item.id}, -1)">-</button>
                  ${item.quantity}
                  <button onclick="changeQuantity(${item.id}, 1)">+</button>
              </td>
              <td>$${itemTotal.toFixed(2)}</td>
              <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
          </tr>
      `;
  });

  const discount = subtotal * 0.05; // 5% discount
  const total = subtotal - discount;

  subtotalElem.textContent = {subtotal.toFixed(2)};
  discountElem.textContent = {discount.toFixed(2)};
  totalElem.textContent = {total.toFixed(2)};
}

// Function to change quantity
function changeQuantity(productId, amount) {
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
      cartItem.quantity += amount;

      if (cartItem.quantity <= 0) {
          removeFromCart(productId);
      } else {
          renderCart();
      }
  }
}

// Function to remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

// Add event listeners to "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
  products.forEach((product) => {
      const button = document.querySelector(button[data-id='{product.id}']);
      if (button) {
          button.addEventListener("click", () => addToCart(product.id));
      }
  });
});*/