const products = [
    {
      name: "Organic Honey",
      price: 250,
      image: "honey.png"
    },
    {
      name: "Herbal Shampoo",
      price: 180,
      image: "herbalshampoo.png"
    },
    {
      name: "Cotton Towels",
      price: 399,
      image: "cottontowels.jpg"
    },
    {
      name: "Handmade Soaps",
      price: 120,
      image: "soaps.jpg"
    },
    {
      name: "Coffee Beans",
      price: 300,
      image: "coffee.jpg"
    },
    {
      name: "Travel Mug",
      price: 220,
      image: "mug.jpg"
    }
  ];
  
  let cart = [];
  
  function renderProducts() {
    const productContainer = document.getElementById("products");
    products.forEach((product, index) => {
      const item = document.createElement("div");
      item.classList.add("product");
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button class="btn" onclick="addToCart(${index})">Add to Cart</button>
      `;
      productContainer.appendChild(item);
    });
  }
  
  function addToCart(index) {
    cart.push(products[index]);
    document.getElementById("cart-count").textContent = cart.length;
    alert(`${products[index].name} added to cart!`);
  }
  
  function toggleCart() {
    const modal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item, i) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      cartItems.appendChild(li);
    });
    modal.classList.toggle("hidden");
  }
  
  function goToCheckout() {
    toggleCart();
    const section = document.getElementById("checkout-section");
    const list = document.getElementById("checkout-list");
    const total = document.getElementById("checkout-total");
  
    list.innerHTML = "";
    let sum = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      list.appendChild(li);
      sum += item.price;
    });
  
    total.textContent = sum;
    section.classList.remove("hidden");
  }
  
  function placeOrder() {
    alert("Order placed successfully! 🎉");
    cart = [];
    document.getElementById("cart-count").textContent = 0;
    document.getElementById("checkout-section").classList.add("hidden");
  }
  
  renderProducts();
  