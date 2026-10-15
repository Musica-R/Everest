import { useState } from 'react';

// Image with a green gradient fallback if the photo link ever fails to load.
export default function Img({ src, alt = '', className = '' }) {
  const [bad, setBad] = useState(false);
  if (bad || !src) return <div className={`img img--fallback ${className}`} role="img" aria-label={alt} />;
  return <img className={`img ${className}`} src={src} alt={alt} loading="lazy" onError={() => setBad(true)} />;
}
