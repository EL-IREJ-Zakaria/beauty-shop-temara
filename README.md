# Beauty Shop — Témara

Site vitrine beauté entièrement statique, réalisé en HTML, CSS et JavaScript natif. Aucun serveur, compte client, paiement ou stockage distant n'est utilisé. Le panier est conservé temporairement dans le stockage local du navigateur ; les commandes sont préparées dans WhatsApp.

## Lancer le site

Ouvrez `index.html` dans un navigateur, ou publiez le dossier sur GitHub Pages, Netlify ou Vercel. Aucun processus de build ou dépendance n'est requis.

## Configurer les liens de la boutique

Avant publication, renseignez les coordonnées réelles dans `js/main.js` :

```js
const WHATSAPP_NUMBER = "212771363091"; // votre numéro marocain au format international
const INSTAGRAM_URL = "https://www.instagram.com/beauty_shop_sousou/";
```

Le numéro doit être au format international sans `+`, espaces ni tirets. Les liens Instagram et WhatsApp de la navigation, du pied de page, des produits et du bouton flottant utilisent ces réglages. Le bouton de commande WhatsApp signale si le numéro est encore un exemple.

## Produits

Les produits de démonstration, leurs catégories, prix et images sont définis dans `js/products.js`. Adaptez ces entrées avant la mise en ligne. Les prix sont exprimés en dirhams marocains (DH) ; le prix promotionnel, lorsqu'il existe, est utilisé dans le panier et le message WhatsApp.

## Structure

- `index.html` : contenu, navigation et zones interactives
- `css/style.css` : identité visuelle et adaptations responsive
- `js/products.js` : catalogue local de démonstration
- `js/main.js` : affichage, recherche, filtres, tri, navigation et détails
- `js/cart.js` : panier local et préparation des commandes WhatsApp
- `assets/` : emplacement réservé aux futurs médias locaux
- `js/brand-image.js` : première image fournie, optimisée et intégrée au site à côté du nom dans l’en-tête et le pied de page

Les photographies de démonstration sont servies par Unsplash et les polices par Google Fonts ; une connexion internet est nécessaire pour les charger. Pour une publication autonome, remplacez ces URL par des fichiers locaux dans `assets/images/` et des polices hébergées avec le site.
