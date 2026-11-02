const CART_STORAGE_KEY = "beauty-shop-cart";

function getProduct(productId) {
  return PRODUCTS.find((product) => product.id === productId);
}

function readCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    if (!Array.isArray(savedCart)) return [];
    return savedCart.filter((item) =>
      item &&
      typeof item.id === "string" &&
      getProduct(item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    );
  } catch (error) {
    console.error("Impossible de lire le panier enregistré.", error);
    return [];
  }
}

let cart = readCart();

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Impossible d’enregistrer le panier dans ce navigateur.", error);
    showToast("Le panier ne peut pas être enregistré sur cet appareil.");
  }
}

function formatPrice(price) {
  return `${new Intl.NumberFormat("fr-MA").format(price)} DH`;
}

function addToCart(productId, quantity = 1) {
  const product = getProduct(productId);
  if (!product || !Number.isInteger(quantity) || quantity < 1) return;
  const item = cart.find((entry) => entry.id === productId);
  if (item) item.quantity += quantity;
  else cart.push({ id: productId, quantity });
  saveCart();
  renderCart();
  showToast(`${product.name} ajouté au panier`);
}

function changeCartQuantity(productId, change) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== productId);
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? (product.salePrice || product.price) * item.quantity : 0);
  }, 0);
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
  document.getElementById("drawer-item-count").textContent = `(${count})`;
  document.getElementById("cart-total").textContent = formatPrice(getCartTotal());
  document.getElementById("cart-empty").hidden = cart.length > 0;
  document.getElementById("drawer-footer").hidden = cart.length === 0;
  container.replaceChildren(...cart.map((item) => {
    const product = getProduct(item.id);
    const row = document.createElement("article");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${product.image}" alt="${product.alt}">
      <div class="cart-item-details">
        <h3>${product.name}</h3>
        <p>${formatPrice(product.salePrice || product.price)}</p>
        <div class="quantity-control" aria-label="Quantité de ${product.name}">
          <button type="button" data-cart-action="decrease" data-product-id="${product.id}" aria-label="Diminuer la quantité">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-action="increase" data-product-id="${product.id}" aria-label="Augmenter la quantité">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-cart-action="remove" data-product-id="${product.id}" aria-label="Retirer ${product.name} du panier">×</button>`;
    return row;
  }));
}

function makeWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    showToast("Configurez le numéro WhatsApp de la boutique dans js/main.js.");
    return;
  }
  window.open(makeWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

function orderProduct(productId, quantity) {
  const product = getProduct(productId);
  if (!product || !Number.isInteger(quantity) || quantity < 1) return;
  const price = product.salePrice || product.price;
  const message = [
    "Bonjour, je souhaite passer une commande :",
    "",
    `Produit : ${product.name}`,
    `Prix : ${formatPrice(price)}`,
    `Quantité : ${quantity}`,
    `Total : ${formatPrice(price * quantity)}`,
    "",
    "Merci de me confirmer la disponibilité."
  ].join("\n");
  openWhatsApp(message);
}

function orderCart() {
  if (cart.length === 0) return;
  const lines = cart.map((item) => {
    const product = getProduct(item.id);
    const price = product.salePrice || product.price;
    return `• ${product.name} — ${formatPrice(price)} × ${item.quantity} = ${formatPrice(price * item.quantity)}`;
  });
  openWhatsApp([
    "Bonjour, je souhaite passer une commande :",
    "",
    ...lines,
    "",
    `Total : ${formatPrice(getCartTotal())}`,
    "",
    "Merci de me confirmer la disponibilité."
  ].join("\n"));
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  const { cartAction, productId } = button.dataset;
  if (cartAction === "increase") changeCartQuantity(productId, 1);
  if (cartAction === "decrease") changeCartQuantity(productId, -1);
  if (cartAction === "remove") removeFromCart(productId);
});

document.getElementById("order-cart").addEventListener("click", orderCart);
renderCart();
