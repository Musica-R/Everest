export const phones = [
  { number: '9447835058', whatsapp: true },
  { number: '9207057897' },
  { number: '9495235058' },
  { number: '7034023917' },
];

export const WHATSAPP_NUMBER = '919447835058';

export const waLink = (msg = 'Hello Everest Agencies, I would like to enquire about your products.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const mapLink =
  'https://www.google.com/maps/search/?api=1&query=Everest+Agencies+Parakkulam+Kannadi+Palakkad';

export const since = 2002;

export const gstin = '32ABMPU9704C1ZL';
