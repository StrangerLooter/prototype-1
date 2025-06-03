// Sample product data
const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 9999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Headphones",
    price: 1999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Laptop",
    price: 49999,
    image: "https://via.placeholder.com/150",
  },
];

// Function to display products on the homepage
function displayProducts() {
  const productsContainer = document.getElementById("products");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(productCard);
  });
}

// Function to add product to cart
function addToCart(productId) {
  // For simplicity, we'll just alert the product added
  const product = products.find((p) => p.id === productId);
  alert(`${product.name} has been added to your cart.`);
}

// Initialize the product display
document.addEventListener("DOMContentLoaded", displayProducts);
