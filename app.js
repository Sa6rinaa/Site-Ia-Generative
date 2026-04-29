/* =============================================
   FLORALIA — Application JavaScript
   ============================================= */

'use strict';

// =============================================
// DATA — Catalogue des Plantes
// =============================================
const PRODUCTS = [
  {
    id: 1,
    name: "Monstera Albo",
    latin: "Monstera deliciosa 'Albovariegata'",
    emoji: "🌿",
    bgColor: "#E8F0E0",
    category: "tropicale",
    price: 89,
    badge: "rare",
    badgeLabel: "Rare",
    care: ["☀️ Lumière indirecte", "💧 1x / semaine", "🌡️ 18-28°C"],
    description: "La reine des plantes d'intérieur. Ses feuilles marbrées blanc et vert sont le résultat d'une mutation génétique rare. Chaque feuille est unique — une véritable œuvre d'art de la nature. Originaire des forêts tropicales d'Amérique centrale.",
    careDetails: {
      lumiere: { icon: "☀️", label: "Lumière", value: "Indirecte vive" },
      arrosage: { icon: "💧", label: "Arrosage", value: "1× / semaine" },
      temperature: { icon: "🌡️", label: "Température", value: "18 – 28°C" }
    },
    tags: ["Débutant", "Déco", "XXL"]
  },
  {
    id: 2,
    name: "Alocasia Dragon Scale",
    latin: "Alocasia baginda",
    emoji: "🐉",
    bgColor: "#D8E8D0",
    category: "rare",
    price: 65,
    badge: "new",
    badgeLabel: "Nouveau",
    care: ["💡 Mi-ombre", "💧 2x / semaine", "💦 Humidité ++"],
    description: "Avec ses feuilles qui ressemblent à des écailles de dragon argentées, l'Alocasia Dragon Scale est un spécimen fascinant originaire de Bornéo. Sa texture unique est incomparable dans le monde végétal.",
    careDetails: {
      lumiere: { icon: "💡", label: "Lumière", value: "Mi-ombre" },
      arrosage: { icon: "💧", label: "Arrosage", value: "2× / semaine" },
      temperature: { icon: "🌡️", label: "Température", value: "20 – 30°C" }
    },
    tags: ["Expert", "Rare", "Terrarium"]
  },
  {
    id: 3,
    name: "Cactus San Pedro",
    latin: "Echinopsis pachanoi",
    emoji: "🌵",
    bgColor: "#EAE0D0",
    category: "succulente",
    price: 34,
    badge: null,
    care: ["☀️ Soleil plein", "💧 1x / mois", "🌵 Très facile"],
    description: "Le Cactus San Pedro pousse dans les Andes péruviennes à plus de 2000m d'altitude. Un monument vivant de la nature sud-américaine, avec ses côtes régulières et sa silhouette sculpturale.",
    careDetails: {
      lumiere: { icon: "☀️", label: "Lumière", value: "Soleil direct" },
      arrosage: { icon: "💧", label: "Arrosage", value: "1× / mois" },
      temperature: { icon: "🌡️", label: "Température", value: "5 – 35°C" }
    },
    tags: ["Débutant", "Extérieur", "Sculptural"]
  },
  {
    id: 4,
    name: "Ficus Elastica Ruby",
    latin: "Ficus elastica 'Ruby'",
    emoji: "🍂",
    bgColor: "#F0E0D8",
    category: "tropicale",
    price: 48,
    badge: null,
    care: ["☀️ Lumière vive", "💧 1x / semaine", "🌿 Facile"],
    description: "Le Ficus Ruby étonne par ses feuilles tricolores : rose foncé, vert profond et crème. Une explosion de couleurs dans votre intérieur. Résistant et peu exigeant, il est parfait même pour les jardiniers pressés.",
    careDetails: {
      lumiere: { icon: "☀️", label: "Lumière", value: "Lumière vive" },
      arrosage: { icon: "💧", label: "Arrosage", value: "1× / semaine" },
      temperature: { icon: "🌡️", label: "Température", value: "15 – 25°C" }
    },
    tags: ["Débutant", "Coloré", "Tall"]
  },
  {
    id: 5,
    name: "Lavande Officinale",
    latin: "Lavandula angustifolia",
    emoji: "💜",
    bgColor: "#E8E0F0",
    category: "aromatique",
    price: 18,
    badge: null,
    care: ["☀️ Plein soleil", "💧 Peu d'eau", "🌿 Très facile"],
    description: "La lavande de Provence, symbole de la garrigue méditerranéenne. Son parfum envoûtant chasse les insectes et apaise l'esprit. En pot sur votre balcon ou en pleine terre dans votre jardin.",
    careDetails: {
      lumiere: { icon: "☀️", label: "Lumière", value: "Plein soleil" },
      arrosage: { icon: "💧", label: "Arrosage", value: "Faible" },
      temperature: { icon: "🌡️", label: "Température", value: "-10 – 35°C" }
    },
    tags: ["Débutant", "Balcon", "Parfumée"]
  },
  {
    id: 6,
    name: "Philodendron Pink Princess",
    latin: "Philodendron erubescens",
    emoji: "🌸",
    bgColor: "#F0D8E8",
    category: "rare",
    price: 120,
    badge: "rare",
    badgeLabel: "Collector",
    care: ["💡 Lumière indirecte", "💧 Modéré", "💦 Brumiser"],
    description: "La Pink Princess est la star absolue des collectionneurs. Ses feuilles bicolores — vert sombre et rose magenta — sont le résultat d'une chimère génétique unique. Chaque poussin est différent de l'autre.",
    careDetails: {
      lumiere: { icon: "💡", label: "Lumière", value: "Indirecte vive" },
      arrosage: { icon: "💧", label: "Arrosage", value: "Modéré" },
      temperature: { icon: "🌡️", label: "Température", value: "18 – 30°C" }
    },
    tags: ["Expert", "Collector", "Rare"]
  },
  {
    id: 7,
    name: "Basilic Thaï",
    latin: "Ocimum basilicum var. thyrsiflora",
    emoji: "🌿",
    bgColor: "#D8F0D8",
    category: "aromatique",
    price: 12,
    badge: null,
    care: ["☀️ Soleil", "💧 Régulier", "🌿 Cuisine"],
    description: "Le basilic thaï aux notes anisées et légèrement épicées est indispensable dans la cuisine asiatique. Plus résistant que son cousin européen, ses feuilles brillantes et sa tige violacée en font une plante aussi belle qu'utile.",
    careDetails: {
      lumiere: { icon: "☀️", label: "Lumière", value: "Soleil direct" },
      arrosage: { icon: "💧", label: "Arrosage", value: "Régulier" },
      temperature: { icon: "🌡️", label: "Température", value: "20 – 30°C" }
    },
    tags: ["Débutant", "Cuisine", "Balcon"]
  },
  {
    id: 8,
    name: "Hoya Kerrii",
    latin: "Hoya kerrii",
    emoji: "💚",
    bgColor: "#E0EEE0",
    category: "succulente",
    price: 22,
    badge: null,
    care: ["☀️ Lumière vive", "💧 Peu d'eau", "❤️ Cadeau idéal"],
    description: "La Hoya Kerrii ou 'Sweetheart Plant' doit son surnom à ses feuilles en forme de cœur parfait. Succulente et très peu gourmande en eau, c'est la plante cadeau idéale pour toutes les occasions.",
    careDetails: {
      lumiere: { icon: "☀️", label: "Lumière", value: "Vive indirecte" },
      arrosage: { icon: "💧", label: "Arrosage", value: "Tous les 15 j." },
      temperature: { icon: "🌡️", label: "Température", value: "15 – 30°C" }
    },
    tags: ["Débutant", "Cadeau", "Mini"]
  }
];

// =============================================
// ÉTAT GLOBAL
// =============================================
const state = {
  cart: [],
  filter: 'all',
  aiMessages: []
};

// =============================================
// CURSEUR PERSONNALISÉ
// =============================================
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX - 4 + 'px';
  cursor.style.top = mouseY - 4 + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  cursorFollower.style.left = followerX - 16 + 'px';
  cursorFollower.style.top = followerY - 16 + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// =============================================
// HEADER SCROLL
// =============================================
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// =============================================
// RENDU DU CATALOGUE
// =============================================
function renderProducts(filter = 'all') {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';

  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  filtered.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.07}s`;
    card.dataset.category = product.category;

    const badgeHtml = product.badge
      ? `<div class="card-badge ${product.badge}">${product.badgeLabel}</div>`
      : '';

    const careHtml = product.care.map(c => `<span class="care-tag">${c}</span>`).join('');

    card.innerHTML = `
      ${badgeHtml}
      <div class="card-img" style="background: ${product.bgColor}">
        <span style="filter: drop-shadow(0 8px 20px rgba(0,0,0,0.1)); animation: float ${3 + index * 0.5}s ease-in-out infinite">
          ${product.emoji}
        </span>
      </div>
      <div class="card-body">
        <p class="card-category">${product.category}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-latin">${product.latin}</p>
        <div class="card-care">${careHtml}</div>
        <div class="card-footer">
          <div class="card-price">
            ${product.price} €
            <span>TTC, port inclus</span>
          </div>
          <div>
            <button class="card-info-btn" onclick="openModal(${product.id})">🔍</button>
            <button class="add-cart-btn" onclick="addToCart(${product.id})">Ajouter</button>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// =============================================
// FILTRES
// =============================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.filter = btn.dataset.filter;
    renderProducts(state.filter);
  });
});

// =============================================
// PANIER
// =============================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`${product.emoji} ${product.name} ajouté au panier`);
}

function updateCartUI() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count').textContent = count;

  const cartItems = document.getElementById('cart-items');
  const cartFooter = document.getElementById('cart-footer');

  if (state.cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Votre panier est vide 🌿</div>';
    cartFooter.style.display = 'none';
    return;
  }

  cartFooter.style.display = 'block';
  cartItems.innerHTML = '';

  state.cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price * item.qty} €</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, +1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">✕ Supprimer</button>
        </div>
      </div>
    `;
    cartItems.appendChild(div);
  });

  const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cart-total-price').textContent = `${total} €`;
}

function changeQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  updateCartUI();
}

// Ouvrir / Fermer le panier
const cartBtn = document.getElementById('cart-btn');
const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');

function openCart() {
  cartPanel.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartPanel.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// =============================================
// MODAL PRODUIT
// =============================================
function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById('modal-content');
  const careGrid = Object.values(product.careDetails).map(c => `
    <div class="care-item">
      <span class="care-item-icon">${c.icon}</span>
      <span class="care-item-label">${c.label}</span>
      <span class="care-item-value">${c.value}</span>
    </div>
  `).join('');

  content.innerHTML = `
    <span class="modal-emoji">${product.emoji}</span>
    <p class="modal-category">${product.category}</p>
    <h2 class="modal-name">${product.name}</h2>
    <p class="modal-latin">${product.latin}</p>
    <p class="modal-desc">${product.description}</p>
    <div class="modal-care-grid">${careGrid}</div>
    <div class="modal-actions">
      <span class="modal-price">${product.price} €</span>
      <button class="modal-add-btn" onclick="addToCart(${product.id}); closeModal()">
        Ajouter au panier
      </button>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// =============================================
// TOAST NOTIFICATION
// =============================================
let toastTimeout;
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// =============================================
// ASSISTANT IA BOTANIQUE
// =============================================
const aiPanel = document.getElementById('ai-panel');
const aiBubble = document.getElementById('ai-bubble');
const aiClose = document.getElementById('ai-close');
const aiMessages = document.getElementById('ai-messages');
const aiInput = document.getElementById('ai-input');
const aiSend = document.getElementById('ai-send');

// Contexte système pour l'IA
const AI_SYSTEM = `Tu es Botanica, un assistant expert en plantes d'intérieur et rares pour la boutique Floralia. 
Tu conseilles les clients avec expertise et passion sur le choix des plantes, leur entretien, et leur adaptation à l'environnement.
Tu connais parfaitement le catalogue Floralia :
${PRODUCTS.map(p => `- ${p.name} (${p.latin}) : ${p.price}€, catégorie ${p.category}, soins: ${p.care.join(', ')}`).join('\n')}

Réponds en français, de façon chaleureuse, précise et enthousiaste. 
Propose des recommandations concrètes du catalogue quand c'est pertinent.
Tes réponses doivent être concises (2-4 phrases maximum par défaut).
N'utilise PAS de markdown, juste du texte naturel.`;

let conversationHistory = [];

aiBubble.addEventListener('click', () => {
  aiPanel.classList.toggle('open');
});
aiClose.addEventListener('click', () => {
  aiPanel.classList.remove('open');
});

async function sendAIMessage(userMessage) {
  if (!userMessage.trim()) return;

  // Afficher le message utilisateur
  addAIMessage(userMessage, 'user');
  aiInput.value = '';

  // Afficher l'animation de frappe
  const typingEl = addTypingIndicator();

  // Ajouter à l'historique
  conversationHistory.push({ role: 'user', content: userMessage });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: AI_SYSTEM,
        messages: conversationHistory
      })
    });

    const data = await response.json();
    typingEl.remove();

    const botResponse = data.content?.[0]?.text || "Désolée, je n'ai pas pu obtenir de réponse. Veuillez réessayer.";
    conversationHistory.push({ role: 'assistant', content: botResponse });

    addAIMessage(botResponse, 'bot');

  } catch (error) {
    typingEl.remove();
    addAIMessage("Une erreur est survenue. Vérifiez votre connexion et réessayez.", 'bot');
    console.error('Erreur API:', error);
  }
}

function addAIMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `ai-msg ai-msg--${sender}`;

  if (sender === 'bot') {
    msgDiv.innerHTML = `
      <div class="ai-avatar">🌿</div>
      <div class="ai-bubble-msg">${text}</div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="ai-bubble-msg">${text}</div>
      <div class="ai-avatar">👤</div>
    `;
  }

  aiMessages.appendChild(msgDiv);
  aiMessages.scrollTop = aiMessages.scrollHeight;
  return msgDiv;
}

function addTypingIndicator() {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'ai-msg ai-msg--bot';
  msgDiv.innerHTML = `
    <div class="ai-avatar">🌿</div>
    <div class="ai-bubble-msg ai-typing">
      <span></span><span></span><span></span>
    </div>
  `;
  aiMessages.appendChild(msgDiv);
  aiMessages.scrollTop = aiMessages.scrollHeight;
  return msgDiv;
}

// Envoyer avec le bouton ou Entrée
aiSend.addEventListener('click', () => sendAIMessage(aiInput.value));
aiInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendAIMessage(aiInput.value);
});

// Suggestions rapides
document.querySelectorAll('.ai-suggestion').forEach(btn => {
  btn.addEventListener('click', () => {
    const msg = btn.dataset.msg;
    aiPanel.classList.add('open');
    sendAIMessage(msg);
  });
});

// =============================================
// ANIMATIONS AU SCROLL (Intersection Observer)
// =============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer les stats
document.querySelectorAll('.stat').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
  observer.observe(el);
});

// =============================================
// ANIMATION DES COMPTEURS DE STATS
// =============================================
function animateCounters() {
  const stats = [
    { el: document.querySelectorAll('.stat-number')[0], target: 340, suffix: '+' },
    { el: document.querySelectorAll('.stat-number')[1], target: 12, suffix: 'K' },
    { el: document.querySelectorAll('.stat-number')[2], target: 98, suffix: '%' },
    { el: document.querySelectorAll('.stat-number')[3], target: 5, suffix: '★' }
  ];

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach(({ el, target, suffix }) => {
          if (!el) return;
          let current = 0;
          const step = target / 40;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current) + suffix;
            if (current >= target) clearInterval(timer);
          }, 30);
        });
        sectionObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const aboutSection = document.getElementById('about');
  if (aboutSection) sectionObserver.observe(aboutSection);
}

// =============================================
// INITIALISATION
// =============================================
function init() {
  renderProducts();
  animateCounters();
  updateCartUI();

  // Animation d'entrée du logo
  const logo = document.querySelector('.logo');
  logo.style.opacity = '0';
  logo.style.transform = 'translateY(-10px)';
  setTimeout(() => {
    logo.style.transition = 'all 0.8s ease';
    logo.style.opacity = '1';
    logo.style.transform = 'translateY(0)';
  }, 100);

  // Bouton Commander
  document.querySelector('.checkout-btn')?.addEventListener('click', () => {
    const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    if (state.cart.length === 0) {
      showToast('Votre panier est vide 🌿');
      return;
    }
    showToast(`🎉 Commande de ${total}€ validée ! Merci pour votre confiance.`);
    state.cart = [];
    updateCartUI();
    closeCart();
  });

  console.log('🌿 Floralia — Boutique initialisée avec succès');
}

// Lancer l'application
document.addEventListener('DOMContentLoaded', init);