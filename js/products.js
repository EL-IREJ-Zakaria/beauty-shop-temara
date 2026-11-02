const PRODUCTS = [
  {
    id: "fond-de-teint-velours",
    name: "Fond de teint velours",
    category: "Fonds de teint et correcteurs",
    description: "Un fini naturel et lumineux qui accompagne votre peau tout au long de la journée.",
    price: 189,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=760&q=85",
    alt: "Fond de teint et essentiels de maquillage",
    badge: "Nouveau",
    featured: true
  },
  {
    id: "gloss-rose-tendre",
    name: "Gloss rose tendre",
    category: "Rouge à lèvres et gloss",
    description: "Une touche de rose délicate et une brillance confortable pour les lèvres.",
    price: 95,
    salePrice: 79,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=760&q=85",
    alt: "Rouge à lèvres rose pour une touche de couleur",
    badge: "Promotion",
    featured: true
  },
  {
    id: "palette-nude",
    name: "Palette Nude Éclat",
    category: "Palettes de maquillage",
    description: "Des nuances faciles à porter pour créer un regard doux du matin au soir.",
    price: 229,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=760&q=85",
    alt: "Palette et pinceaux de maquillage dans des tons nude",
    badge: "Nouveau",
    featured: true
  },
  {
    id: "mascara-regard",
    name: "Mascara Regard Intense",
    category: "Maquillage des yeux",
    description: "Un mascara noir pour souligner le regard et apporter une jolie définition.",
    price: 119,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=760&q=85",
    alt: "Maquillage pour les yeux",
    featured: true
  },
  {
    id: "creme-hydratante",
    name: "Crème douceur hydratante",
    category: "Soins du visage",
    description: "Une crème réconfortante à intégrer à votre rituel beauté quotidien.",
    price: 149,
    salePrice: 129,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=760&q=85",
    alt: "Soin visage dans un pot à la texture crème",
    badge: "Promotion",
    featured: true
  },
  {
    id: "blush-peche",
    name: "Blush pêche frais",
    category: "Maquillage du visage",
    description: "Une couleur pêche subtile pour rehausser le teint d’un voile de fraîcheur.",
    price: 105,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=760&q=85",
    alt: "Produits de maquillage pour un teint frais",
    featured: false
  },
  {
    id: "correcteur-lumiere",
    name: "Correcteur lumière",
    category: "Fonds de teint et correcteurs",
    description: "Un correcteur pratique pour unifier et illuminer les zones souhaitées.",
    price: 99,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=760&q=85",
    alt: "Essentiels beauté et maquillage",
    badge: "Nouveau",
    featured: false
  },
  {
    id: "rouge-levres-mat",
    name: "Rouge à lèvres velours",
    category: "Rouge à lèvres et gloss",
    description: "Une teinte élégante au fini velours pour un sourire plein de caractère.",
    price: 125,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=760&q=85",
    alt: "Rouge à lèvres au fini velours",
    featured: false
  },
  {
    id: "pinceaux-essentiels",
    name: "Pinceaux essentiels",
    category: "Accessoires beauté",
    description: "Un assortiment de pinceaux doux pour appliquer vos produits avec précision.",
    price: 159,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=760&q=85",
    alt: "Pinceaux de maquillage professionnels",
    featured: false
  },
  {
    id: "palette-coucher-soleil",
    name: "Palette Coucher de soleil",
    category: "Palettes de maquillage",
    description: "Des couleurs chaudes et lumineuses pour composer des looks qui vous ressemblent.",
    price: 249,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=760&q=85",
    alt: "Couleurs de maquillage chaudes et lumineuses",
    featured: false
  },
  {
    id: "masque-eclat",
    name: "Masque éclat du visage",
    category: "Soins du visage",
    description: "Un moment de douceur à ajouter à votre routine de soin hebdomadaire.",
    price: 89,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=760&q=85",
    alt: "Soin visage et produits beauté",
    badge: "Nouveau",
    featured: false
  },
  {
    id: "eponge-teint",
    name: "Éponge teint parfaite",
    category: "Accessoires beauté",
    description: "Un accessoire tout doux pour estomper le teint et obtenir un fini homogène.",
    price: 49,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=760&q=85",
    alt: "Accessoires et indispensables de maquillage",
    featured: false
  }
];
