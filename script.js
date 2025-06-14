// --- TRANSLATIONS ---

// Text and products for supported languages
const translations = {
  en: {
    title: "GreenRoot",
    subtitle: "Buy & Sell All Types of Vegetation in Somalia",
    productsTitle: "🌟 Our Products",
    shopTitle: "Are you a Shop or Farmer?",
    shopDesc: "✅ Bulk Orders   ✅ Sell Products   ✅ Get Supply",
    evcPaymentConfirmed: "✅ Payment Successful! EVC number:",
    products: [
      { id: "1", name: "🍅 Tomato Seeds", price: 50000 },
      { id: "2", name: "🍋 Lemon Sapling", price: 70000 },
      { id: "3", name: "🌿 Mint Plant", price: 40000 }
    ],
    buttons: ["Buy Now", "Buy Now", "Buy Now"],
    cartTitle: "Your Cart",
    checkout: "Checkout",
    closeCart: "Close",
    evcPlaceholder: "Enter EVC number",
    cashMessage: "Cash on Delivery selected. Thank you!",
    cartEmpty: "(Empty)"
  },
  so: {
    title: "GreenRoot",
    subtitle: "Iibso & Iibi Dhammaan Noocyada Dhirta ee Soomaaliya",
    productsTitle: "🌟 Alaabtayada",
    shopTitle: "Ma tahay Dukaan ama Beeraley?",
    shopDesc: "✅ Iibka Badan   ✅ Alaab Iibi   ✅ Hel Sahal",
    evcPaymentConfirmed: "✅ Lacag Bixin Guul leh! Nambarka EVC:",
    products: [
      { id: "1", name: "🍅 Abuur Yaanyo", price: 50000 },
      { id: "2", name: "🍋 Geedka Liinta", price: 70000 },
      { id: "3", name: "🌿 Geedka Nacnaca", price: 40000 }
    ],
    buttons: ["Iibso Hadda", "Iibso Hadda", "Iibso Hadda"],
    cartTitle: "Gaadhigaaga",
    checkout: "Bixi",
    closeCart: "Xir",
    evcPlaceholder: "Gali lambarka EVC",
    cashMessage: "Bixinta Lacag Markaad Gaarto ayaa la doortay. Mahadsanid!",
    cartEmpty: "(Faaruq)"
  },
  ar: {
    title: "GreenRoot",
    subtitle: "شراء وبيع جميع أنواع النباتات في الصومال",
    productsTitle: "🌟 منتجاتنا",
    shopTitle: "هل أنت متجر أو مزارع؟",
    shopDesc: "✅ طلبات كبيرة   ✅ بيع المنتجات   ✅ الحصول على الإمدادات",
    evcPaymentConfirmed: "✅ تم الدفع بنجاح! رقم EVC:",
    products: [
      { id: "1", name: "🍅 بذور الطماطم", price: 50000 },
      { id: "2", name: "🍋 شتلات الليمون", price: 70000 },
      { id: "3", name: "🌿 نبات النعناع", price: 40000 }
    ],
    buttons: ["اشتر الآن", "اشتر الآن", "اشتر الآن"],
    cartTitle: "سلة التسوق",
    checkout: "الدفع",
    closeCart: "إغلاق",
    evcPlaceholder: "أدخل رقم EVC",
    cashMessage: "تم اختيار الدفع نقدًا عند التسليم. شكرًا لك!",
    cartEmpty: "(فارغ)"
  },
  fr: {
    title: "GreenRoot",
    subtitle: "Acheter et vendre toutes sortes de végétation en Somalie",
    productsTitle: "🌟 Nos produits",
    shopTitle: "Êtes-vous un magasin ou un agriculteur ?",
    shopDesc: "✅ Commandes en gros   ✅ Vendre des produits   ✅ Obtenir l'approvisionnement",
    evcPaymentConfirmed: "✅ Paiement réussi ! Numéro EVC :",
    products: [
      { id: "1", name: "🍅 Graines de tomate", price: 50000 },
      { id: "2", name: "🍋 Jeune citronnier", price: 70000 },
      { id: "3", name: "🌿 Plante de menthe", price: 40000 }
    ],
    buttons: ["Acheter", "Acheter", "Acheter"],
    cartTitle: "Votre panier",
    checkout: "Passer à la caisse",
    closeCart: "Fermer",
    evcPlaceholder: "Entrez le numéro EVC",
    cashMessage: "Paiement à la livraison sélectionné. Merci !",
    cartEmpty: "(Vide)"
  }
};

// --- VARIABLES ---

let currentLang = "en"; // default language
let cart = {}; // stores productId: quantity

// --- DOM ELEMENTS ---

const siteTitle = document.getElementById("site-title");
const siteSubtitle = document.getElementById("site-subtitle");
const productsTitle = document.getElementById("products-title");
const productList = document.getElementById("product-list");
const langButtons = document.querySelectorAll(".lang-btn");
const cartToggle = document.getElementById("cart-toggle");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");
const closeCartBtn = document.getElementById("close-cart");
const cartTitle = document.getElementById("cart-title");
const checkoutModal = document.getElementById("checkout-modal");
const payEvcBtn = document.getElementById("pay-evc");
const payCashBtn = document.getElementById("pay-cash");
const evcForm = document.getElementById("evc-form");
const evcNumberInput = document.getElementById("evc-number");
const confirmEvcBtn = document.getElementById("confirm-evc");
const confirmationMessage = document.getElementById("confirmation-message");
const evcSimulation = document.getElementById("evc-simulation");
const smsMessages = document.getElementById("sms-messages");
const simulateSmsBtn = document.getElementById("simulate-sms-btn");
const cancelCheckoutBtn = document.getElementById("cancel-checkout");
const searchInput = document.getElementById("search-input");
const shopTitle = document.getElementById("shop-title");
const shopDesc = document.getElementById("shop-desc");
const callShopBtn = document.getElementById("call-shop-btn");
const callFarmerBtn = document.getElementById("call-farmer-btn");

// --- FUNCTIONS ---

// Update UI texts based on current language
function updateTexts() {
  const t = translations[currentLang];
  siteTitle.textContent = t.title;
  siteSubtitle.textContent = t.subtitle;
  productsTitle.textContent = t.productsTitle;
  cartTitle.textContent = t.cartTitle;
  checkoutBtn.textContent = t.checkout;
  closeCartBtn.textContent = t.closeCart;
  evcNumberInput.placeholder = t.evcPlaceholder;
  shopTitle.textContent = t.shopTitle;
  shopDesc.textContent = t.shopDesc;
  // Update call buttons (can be localized too)
  callShopBtn.textContent = currentLang === "ar" ? "اتصل بالمتجر" : "Call Shop";
  callFarmerBtn.textContent = currentLang === "ar" ? "اتصل بالمزارع" : "Call Farmer";
}

// Render product list (with optional search filter)
function renderProducts(filter = "") {
  const t = translations[currentLang];
  productList.innerHTML = "";
  const filtered = t.products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
  filtered.forEach((product, i) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <span>${product.name} - ${product.price} SOS</span>
      <button data-id="${product.id}">${t.buttons[i] || "Buy Now"}</button>
    `;
    productList.appendChild(div);
  });
}

// Render cart items in sidebar
function renderCart() {
  const t = translations[currentLang];
  cartItemsContainer.innerHTML = "";
  const productListLang = translations[currentLang].products;
  let total = 0;
  let totalCount = 0;
  for (const [productId, qty] of Object.entries(cart)) {
    if (qty <= 0) continue;
    const product = productListLang.find(p => p.id === productId);
    if (!product) continue;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${product.name} x ${qty}</span>
      <button data-id="${productId}">&times;</button>
    `;
    cartItemsContainer.appendChild(div);
    total += product.price * qty;
    totalCount += qty;
  }
  cartTotal.textContent = total.toLocaleString();
  cartCount.textContent = totalCount;
  if (totalCount === 0) {
    cartItemsContainer.textContent = t.cartEmpty;
  }
}

// Add product to cart
function addToCart(productId) {
  if (cart[productId]) {
    cart[productId]++;
  } else {
    cart[productId] = 1;
  }
  renderCart();
}

// Remove product from cart
function removeFromCart(productId) {
  if (cart[productId]) {
    cart[productId]--;
    if (cart[productId] <= 0) {
      delete cart[productId];
    }
  }
  renderCart();
}

// Open cart sidebar
function openCart() {
  cartSidebar.classList.remove("hidden");
}

// Close cart sidebar
function closeCart() {
  cartSidebar.classList.add("hidden");
}

// Open checkout modal
function openCheckout() {
  if (Object.keys(cart).length === 0) {
    alert(translations[currentLang].cartEmpty);
    return;
  }
  checkoutModal.classList.remove("hidden");
  evcForm.classList.add("hidden");
  confirmationMessage.classList.add("hidden");
  evcSimulation.classList.add("hidden");
  evcNumberInput.value = "";
}

// Close checkout modal
function closeCheckout() {
  checkoutModal.classList.add("hidden");
}

// Handle EVC payment flow
function startEvcPayment() {
  evcForm.classList.remove("hidden");
  confirmationMessage.classList.add("hidden");
  evcSimulation.classList.add("hidden");
  evcNumberInput.value = "";
  evcNumberInput.focus();
}

// Confirm EVC payment simulation
function confirmEvcPayment() {
  const evcNum = evcNumberInput.value.trim();
  if (!evcNum) {
    alert("Please enter a valid EVC number.");
    return;
  }
  const t = translations[currentLang];
  confirmationMessage.textContent = `${t.evcPaymentConfirmed} ${evcNum}`;
  confirmationMessage.classList.remove("hidden");
  evcSimulation.classList.remove("hidden");
  smsMessages.innerHTML = ""; // clear previous messages
  simulateSmsBtn.disabled = false;
}

// Simulate SMS sending and receiving (for EVC payment)
function simulateSms() {
  simulateSmsBtn.disabled = true;
  const messages = [
    "Sending SMS to 501: PAY 50000 to GreenRoot",
    "Message sent successfully.",
    "Receiving SMS from 501: Payment of 50000 SOS confirmed.",
    "Thank you for your payment!"
  ];
  let idx = 0;

  const interval = setInterval(() => {
    if (idx >= messages.length) {
      clearInterval(interval);
      // After simulation, clear cart and close modals
      cart = {};
      renderCart();
      closeCheckout();
      closeCart();
      return;
    }
    const p = document.createElement("p");
    p.textContent = messages[idx];
    smsMessages.appendChild(p);
    smsMessages.scrollTop = smsMessages.scrollHeight;
    idx++;
  }, 1500);
}

// Handle cash payment flow
function payCashOnDelivery() {
  alert(translations[currentLang].cashMessage);
  cart = {};
  renderCart();
  closeCheckout();
  closeCart();
}

// Filter products by search input
function filterProducts() {
  const val = searchInput.value.trim();
  renderProducts(val);
}

// --- EVENT LISTENERS ---

// Language switch buttons
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    updateTexts();
    renderProducts();
    renderCart();
    filterProducts();
  });
});

// Buy buttons (delegated event)
productList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.dataset.id;
    addToCart(id);
    openCart();
  }
});

// Cart toggle
cartToggle.addEventListener("click", () => {
  if (cartSidebar.classList.contains("hidden")) {
    openCart();
  } else {
    closeCart();
  }
});

// Cart remove item buttons (delegated)
cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.dataset.id;
    removeFromCart(id);
  }
});

// Checkout button
checkoutBtn.addEventListener("click", openCheckout);

// Close cart button
closeCartBtn.addEventListener("click", closeCart);

// Pay with EVC button
payEvcBtn.addEventListener("click", startEvcPayment);

// Confirm EVC payment button
confirmEvcBtn.addEventListener("click", confirmEvcPayment);

// Simulate SMS button
simulateSmsBtn.addEventListener("click", simulateSms);

// Pay cash button
payCashBtn.addEventListener("click", payCashOnDelivery);

// Cancel checkout button
cancelCheckoutBtn.addEventListener("click", closeCheckout);

// Search input filter
searchInput.addEventListener("input", filterProducts);

// Shop / Farmer call buttons
callShopBtn.addEventListener("click", () => {
  window.location.href = "tel:+252612345678"; // Replace with actual shop number
});

callFarmerBtn.addEventListener("click", () => {
  window.location.href = "tel:+252698765432"; // Replace with actual farmer number
});

// --- INITIAL SETUP ---

updateTexts();
renderProducts();
renderCart();
