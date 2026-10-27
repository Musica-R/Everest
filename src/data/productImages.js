// Local product images, saved directly in: public/assets/
// File name = English product name, lowercase, spaces/symbols replaced by "-", plus ".jpg"
//   "Floor Cleaner"            -> /assets/floor-cleaner.jpg
//   "Micro & Nutrient Products" -> /assets/micro-nutrient-products.jpg
//
// If one of your saved files has a different name, add it to `custom`.
// The key must match the product's English name exactly.

const custom = {
  // Featured
  'AYAKA': '/assets/new1.png',
  'NINJITSU': '/assets/new2.avif',
  'TRISTON': '/assets/new3.jpg',
  'JU VITA GOLD': '/assets/new4.avif',
  'ASOLANE': '/assets/new5.avif',
  'ECOMAX PLUS': '/assets/new6.avif',
  'JU-POTASH 2000': '/assets/new7.webp',
  'RAHAT': '/assets/new8.webp',

  // Agri
  'Agricultural Pesticides': '/assets/pes1.jpg',
  'Termite Control': '/assets/p2.jpg',
  'Micro & Nutrient Products': '/assets/p3.jpg',
  'Fungicides': '/assets/p4.jpg',
  'Insecticides': '/assets/p5.jpg',
  'Plant Disease Control': '/assets/p7.jpg',
  'Leaf Disease Control': '/assets/p6.jpg',
  'Pest Control': '/assets/p8.jpg',
  'Plant Growth Promoters': '/assets/p9.jpg',
  'Root Growth Promoters': '/assets/p10.jpg',
  'Plant Growth Enhancers': '/assets/p11.jpg',
  'Flowering Promoters': '/assets/p12.jpg',
  'Fruit-Setting Nutrients': '/assets/p13.jpg',
  'Plant Hormones': '/assets/p14.jpg',
  'Rat Poison': '/assets/p15.jpg',
  'Ant Powder': '/assets/p16.jpg',
  'Poultry Feed': '/assets/p17.jpg',
  'Seeds': '/assets/seed.jpg',
  'Grow Bags': '/assets/p18.jpg',
  'Organic Fertilizers': '/assets/p19.jpg',
  // Cleaning
  'Floor Cleaner': '/assets/c1.jpg',
  'Tile Cleaner': '/assets/c2.jpg',
  'Glass Cleaner': '/assets/c3.jpg',
  'Marble Cleaner': '/assets/c4.jpg',
  'Sonic Cleaner': '/assets/c5.jpg',
  'Tile Acid': '/assets/c6.jpg',
  'Phenyl': '/assets/c7.jpg',
  'Bleaching Liquid': '/assets/c8.jpg',
  'Bathroom Cleaner': '/assets/c9.jpg',
  'Whitewash': '/assets/c10.jpg',
  'Waste Bins': '/assets/c11.jpg',
  'Water-Coating Products': '/assets/c12.jpg',
  'Shampoo': '/assets/c13.jpg',
  'Hand Wash': '/assets/c14.jpg',
  'Dish Wash': '/assets/c15.jpg',
  'Soap': '/assets/c16.jpg',
  'Washing Powder': '/assets/c17.jpg',
  'Soap Oil': '/assets/c18.jpg',
  'Blue': '/assets/c19.jpg',
  'Refills': '/assets/c20.jpg',
  'Cleaning Brushes & Gloves': '/assets/c21.jpg',
};

const slug = (s) =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export function productImage(name) {
  if (custom[name]) return custom[name];
  return `/assets/${slug(name)}.jpg`;
}