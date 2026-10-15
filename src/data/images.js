// All photos come from Unsplash (https://unsplash.com). To swap a photo, replace the photo ID below
// with the ID from the "images.unsplash.com/photo-XXXX" link of any free Unsplash photo you like.
export const unsplash = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

const P = {
  hero: 'photo-1500382017468-9049fed747ef',      // green farmland
  farmer: 'photo-1464226184884-fa280b87c399',    // farm field
  seedling: 'photo-1416879595882-3373a0480b5b',  // seedling in soil
  garden: 'photo-1523348837708-15d4a09cfac2',    // gardening
  crops: 'photo-1625246333195-78d9c38ad449',     // crop rows
  greens: 'photo-1574943320219-553eb213f72d',    // vegetable farm
  leaf: 'photo-1470058869958-2a77ade41c02',      // green leaves / farm
  seeds: 'photo-1589923188900-85dae523342b',     // seeds
  cleaning: 'photo-1563453392212-326f5e854473',  // cleaning supplies
  cleaning2: 'photo-1585421514284-efb74c2b69ba', // cleaning bottles
};

export const images = {
  hero: unsplash(P.hero, 1600),
  farmer: unsplash(P.farmer),
  seedling: unsplash(P.seedling),
  garden: unsplash(P.garden),
  crops: unsplash(P.crops),
  greens: unsplash(P.greens),
  leaf: unsplash(P.leaf),
  seeds: unsplash(P.seeds),
  cleaning: unsplash(P.cleaning),
  cleaning2: unsplash(P.cleaning2),
  // rotating sets used on product cards
  products: [unsplash(P.crops, 600), unsplash(P.seeds, 600), unsplash(P.leaf, 600), unsplash(P.greens, 600)],
  agriItems: [unsplash(P.seedling, 500), unsplash(P.crops, 500), unsplash(P.leaf, 500)],
  cleanItems: [unsplash(P.cleaning, 500), unsplash(P.cleaning2, 500)],
};
