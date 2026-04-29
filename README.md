# 🌿 FLORALIA — E-commerce IA Générative

> Boutique de plantes rares avec assistant botanique propulsé par **Claude (Anthropic)**.  
> Stack : HTML · CSS · JavaScript vanilla · Anthropic API

---

## 📸 Aperçu

```
FLORALIA/
├── index.html      ← Structure de la page (hero, catalogue, panier, modal)
├── style.css       ← Design complet (thème organique, animations, responsive)
└── app.js          ← Logique métier + intégration API Claude (IA générative)
```

---

## ✨ Fonctionnalités

| Feature | Description |
|--------|-------------|
| 🛒 **Boutique complète** | Catalogue filtrable, panier dynamique, modal produit |
| 🌿 **Assistant IA (Botanica)** | Chatbot expert en plantes, alimenté par Claude |
| 💬 **Suggestions rapides** | Boutons pré-remplis pour démarrer la conversation |
| 🎨 **Design luxueux** | Curseur custom, animations scroll, strip défilant |
| 📱 **Responsive** | Adapté mobile et desktop |

---

## 🚀 Lancer le projet

### Option 1 — Ouvrir directement (sans serveur)

```bash
# Clone ou télécharge les 3 fichiers, puis double-clique sur :
index.html
```

> ⚠️ L'assistant IA nécessite un serveur local (voir option 2) à cause des restrictions CORS.

---

### Option 2 — Serveur local (recommandé pour l'IA)

#### Avec Python (aucune installation requise)

```bash
# Dans le dossier du projet :
python3 -m http.server 8080

# Puis ouvre dans ton navigateur :
# http://localhost:8080
```

#### Avec Node.js / npx

```bash
npx serve .
# http://localhost:3000
```

#### Avec VS Code

Installe l'extension **Live Server**, puis clic droit sur `index.html` → *Open with Live Server*.

---

## 🤖 L'IA générative — Comment ça marche ?

L'assistant **Botanica** utilise l'[API Anthropic](https://www.anthropic.com) pour générer des réponses contextuelles sur les plantes.

### Architecture

```
Utilisateur tape un message
        ↓
app.js → fetch() → api.anthropic.com/v1/messages
        ↓
Modèle : claude-sonnet-4-20250514
        ↓
Réponse affichée dans le chat
```

### Prompt système (dans `app.js`)

L'IA reçoit :
- Son rôle : expert botanique pour Floralia
- Le catalogue complet des plantes (nom, prix, soins)
- Les règles de réponse (français, concis, enthousiaste)

Elle peut donc :
- Recommander des plantes selon l'environnement du client
- Donner des conseils d'entretien personnalisés
- Orienter vers les produits du catalogue

### Configurer sa propre clé API (hébergement externe)

Par défaut, l'app appelle directement `api.anthropic.com`.  
En production, **ne jamais exposer une clé API côté client**.  
Crée un backend proxy minimal :

```js
// Exemple : proxy Express.js
app.post('/api/chat', async (req, res) => {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,  // clé côté serveur
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  });
  res.json(await response.json());
});
```

Puis dans `app.js`, remplace l'URL :
```js
// Avant
const response = await fetch('https://api.anthropic.com/v1/messages', { ... });

// Après
const response = await fetch('/api/chat', { ... });
```

---

## 🔧 Personnalisation

### Ajouter une plante

Dans `app.js`, ajoute un objet dans le tableau `PRODUCTS` :

```js
{
  id: 9,
  name: "Nom de ta plante",
  latin: "Genus species",
  emoji: "🌺",
  bgColor: "#F0E8D0",           // couleur de fond de la carte
  category: "tropicale",        // tropicale | succulente | rare | aromatique
  price: 45,
  badge: "new",                 // null | "new" | "rare"
  badgeLabel: "Nouveau",
  care: ["☀️ Lumière vive", "💧 1x/semaine"],
  description: "Description longue pour la modal...",
  careDetails: {
    lumiere:     { icon: "☀️", label: "Lumière",     value: "Vive indirecte" },
    arrosage:    { icon: "💧", label: "Arrosage",    value: "1× / semaine" },
    temperature: { icon: "🌡️", label: "Température", value: "18 – 28°C" }
  },
  tags: ["Débutant", "Déco"]
}
```

### Modifier les couleurs du thème

Dans `style.css`, édite les variables CSS :

```css
:root {
  --cream: #F5F0E8;       /* fond principal */
  --green: #2D4A2D;       /* couleur primaire */
  --green-light: #4A7A4A; /* survol, accents */
  --gold: #B8922A;        /* badges, labels */
  --dark: #1A1A14;        /* texte, footer */
}
```

### Changer le modèle IA

Dans `app.js` :

```js
model: 'claude-sonnet-4-20250514',  // ← remplace ici
// Options disponibles :
// 'claude-opus-4-20250514'    — plus puissant, plus lent
// 'claude-haiku-4-5-20251001' — plus rapide, moins cher
```

---

## 📦 Dépendances

Aucune installation requise. Le projet est **100% vanilla**.

| Ressource | Usage | Source |
|-----------|-------|--------|
| Google Fonts | Cormorant Garamond + DM Mono | CDN |
| Anthropic API | Modèle Claude (IA générative) | api.anthropic.com |

---

## 🗂️ Structure détaillée

```
index.html
├── <header>          Navigation fixe + bouton panier
├── <section.hero>    Bannière principale animée
├── <div.strip>       Bandeau promotionnel défilant
├── <section.catalogue> Grille produits + filtres
├── <section.about>   Présentation + stats
├── <div.ai-bubble>   Bouton flottant IA
├── <div.ai-panel>    Interface chat IA
├── <div.cart-panel>  Panneau panier latéral
├── <div.modal>       Modal détail produit
└── <footer>          Liens + mentions

style.css
├── Variables CSS     Thème global
├── Curseur custom    Animation souris
├── Header           Navigation sticky
├── Hero             Animations d'entrée
├── Strip            Scroll infini
├── Catalogue        Grid + cards
├── About            Section stats
├── AI Panel         Interface chatbot
├── Cart Panel       Panneau latéral
├── Modal            Popup produit
└── Responsive       Mobile / tablette

app.js
├── PRODUCTS[]       Données catalogue (8 plantes)
├── Curseur          Animation follow
├── renderProducts() Rendu dynamique + filtres
├── addToCart()      Gestion panier
├── openModal()      Détail produit
├── sendAIMessage()  Appel API Claude
└── init()           Bootstrap de l'app
```

---

## 🧠 Modèle utilisé

| Paramètre | Valeur |
|-----------|--------|
| Modèle | `claude-sonnet-4-20250514` |
| Max tokens | `1000` |
| Langue | Français |
| Mémoire | Historique de conversation en session |

---

## 🪪 Licence

Projet libre — utilisation et modification autorisées.  
Construit avec 🌿 et [Claude](https://www.anthropic.com) par Floralia.