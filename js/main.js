const WHATSAPP_NUMBER = "212771363091";
const INSTAGRAM_URL = "https://www.instagram.com/beauty_shop_sousou/";
const BRAND_PHOTO = "data:image/jpeg;base64,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";

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("product-search");
const categoryFilter = document.getElementById("category-filter");
const sortSelect = document.getElementById("sort-products");
const productModal = document.getElementById("product-modal");
const modalContent = document.getElementById("modal-content");
let toastTimeout;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function productPrice(product) {
  return product.salePrice || product.price;
}

function productCard(product, featured = false) {
  const card = document.createElement("article");
  card.className = `product-card${featured ? " featured-card" : ""}`;
  const badge = product.badge ? `<span class="product-badge ${product.badge === "Promotion" ? "sale-badge" : ""}">${product.badge}</span>` : "";
  const oldPrice = product.salePrice ? `<del>${formatPrice(product.price)}</del>` : "";
  card.innerHTML = `
    <button class="product-image-button" type="button" data-product-details="${product.id}" aria-label="Voir les détails de ${product.name}">
      <span class="product-image-wrap"><img src="${product.image}" alt="${product.alt}" loading="lazy">${badge}<span class="quick-view">Voir le produit <span aria-hidden="true">↗</span></span></span>
    </button>
    <div class="product-info">
      <p class="product-category">${product.category}</p>
      <button class="product-name-button" type="button" data-product-details="${product.id}">${product.name}</button>
      <div class="product-card-bottom"><p class="product-price">${oldPrice}<strong>${formatPrice(productPrice(product))}</strong></p><button class="add-cart-button" type="button" data-add-product="${product.id}" aria-label="Ajouter ${product.name} au panier">+</button></div>
      <button class="product-whatsapp" type="button" data-order-product="${product.id}">Commander sur WhatsApp <span aria-hidden="true">↗</span></button>
    </div>`;
  return card;
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("fr");
  const category = categoryFilter.value;
  let matches = PRODUCTS.filter((product) => {
    const searchable = `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase("fr");
    return (!query || searchable.includes(query)) && (!category || product.category === category);
  });
  if (sortSelect.value === "price-asc") matches.sort((a, b) => productPrice(a) - productPrice(b));
  if (sortSelect.value === "price-desc") matches.sort((a, b) => productPrice(b) - productPrice(a));
  if (sortSelect.value === "name") matches.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  productGrid.replaceChildren(...matches.map((product) => productCard(product)));
  document.getElementById("empty-state").hidden = matches.length > 0;
  const activeFilters = document.getElementById("active-filters");
  const filterLabel = [query ? `Recherche : « ${searchInput.value.trim()} »` : "", category].filter(Boolean).join(" · ");
  activeFilters.textContent = filterLabel;
  activeFilters.hidden = !filterLabel;
}

function renderFeatured() {
  const featured = PRODUCTS.filter((product) => product.featured).slice(0, 4);
  document.getElementById("featured-products").replaceChildren(...featured.map((product) => productCard(product, true)));
}

function renderCuratedSections() {
  const newProducts = PRODUCTS.filter((product) => product.badge === "Nouveau").slice(0, 4);
  const saleProducts = PRODUCTS.filter((product) => product.salePrice).slice(0, 4);
  document.getElementById("new-products").replaceChildren(...newProducts.map((product) => productCard(product)));
  document.getElementById("sale-products").replaceChildren(...saleProducts.map((product) => productCard(product)));
}

function setupCategories() {
  const categories = [...new Set(PRODUCTS.map((product) => product.category))];
  categoryFilter.replaceChildren(new Option("Toutes les catégories", ""));
  categories.forEach((category) => categoryFilter.add(new Option(category, category)));
}

function openProductModal(productId) {
  const product = getProduct(productId);
  if (!product) return;
  const oldPrice = product.salePrice ? `<del>${formatPrice(product.price)}</del>` : "";
  modalContent.innerHTML = `
    <div class="modal-image"><img src="${product.image}" alt="${product.alt}"></div>
    <div class="modal-details">
      <p class="eyebrow">${product.category}</p>
      <h2 id="modal-title">${product.name}</h2>
      <p class="modal-description">${product.description}</p>
      <p class="modal-price">${oldPrice}<strong>${formatPrice(productPrice(product))}</strong></p>
      <label class="modal-quantity">Quantité <input id="modal-quantity" type="number" min="1" value="1" inputmode="numeric"></label>
      <button class="button button-dark modal-add" id="modal-add" type="button">Ajouter au panier <span aria-hidden="true">↗</span></button>
      <button class="product-whatsapp modal-order" id="modal-order" type="button">Commander sur WhatsApp <span aria-hidden="true">↗</span></button>
    </div>`;
  document.getElementById("modal-add").addEventListener("click", () => {
    const quantity = Number.parseInt(document.getElementById("modal-quantity").value, 10);
    if (!Number.isInteger(quantity) || quantity < 1) {
      showToast("Choisissez une quantité supérieure à zéro.");
      return;
    }
    addToCart(productId, quantity);
    productModal.close();
  });
  document.getElementById("modal-order").addEventListener("click", () => {
    const quantity = Number.parseInt(document.getElementById("modal-quantity").value, 10);
    if (!Number.isInteger(quantity) || quantity < 1) {
      showToast("Choisissez une quantité supérieure à zéro.");
      return;
    }
    orderProduct(productId, quantity);
  });
  productModal.showModal();
}

function setInstagramLinks() {
  document.querySelectorAll(".brand-photo").forEach((image) => {
    image.src = window.BEAUTY_SHOP_BRAND_IMAGE;
    const showPhoto = () => image.parentElement.classList.add("has-photo");
    if (image.complete && image.naturalWidth > 0) showPhoto();
    else image.addEventListener("load", showPhoto, { once: true });
  });
  document.querySelectorAll(".instagram-link, .instagram-tile").forEach((link) => {
    link.href = INSTAGRAM_URL;
  });
  const message = encodeURIComponent("Bonjour Beauty Shop, j’aimerais en savoir plus sur vos produits.");
  const whatsAppLinks = [
    document.getElementById("footer-whatsapp"),
    document.getElementById("floating-whatsapp")
  ];
  whatsAppLinks.forEach((link) => {
    link.href = /^\d{8,15}$/.test(WHATSAPP_NUMBER)
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
      : "#contact";
    link.addEventListener("click", (event) => {
      if (/^\d{8,15}$/.test(WHATSAPP_NUMBER)) return;
      event.preventDefault();
      showToast("Configurez le numéro WhatsApp de la boutique dans js/main.js.");
    });
  });
}

function setupNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
    nav.classList.toggle("is-open", !isOpen);
  });
  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  });
  document.querySelectorAll("[data-category-link]").forEach((link) => {
    link.addEventListener("click", () => {
      categoryFilter.value = link.dataset.categoryLink;
      renderProducts();
    });
  });
}

function setupCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const open = () => {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
    document.body.classList.add("drawer-open");
    document.getElementById("close-cart").focus();
  };
  const close = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
    document.body.classList.remove("drawer-open");
  };
  document.getElementById("cart-trigger").addEventListener("click", open);
  document.getElementById("close-cart").addEventListener("click", close);
  document.getElementById("continue-shopping").addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

document.addEventListener("click", (event) => {
  const details = event.target.closest("[data-product-details]");
  const add = event.target.closest("[data-add-product]");
  const order = event.target.closest("[data-order-product]");
  if (details) openProductModal(details.dataset.productDetails);
  if (add) addToCart(add.dataset.addProduct);
  if (order) orderProduct(order.dataset.orderProduct, 1);
});

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);
document.getElementById("close-modal").addEventListener("click", () => productModal.close());
productModal.addEventListener("click", (event) => {
  if (event.target === productModal) productModal.close();
});
document.getElementById("current-year").textContent = new Date().getFullYear();

setupCategories();
renderFeatured();
renderCuratedSections();
renderProducts();
setInstagramLinks();
setupNavigation();
setupCartDrawer();
