import { FaWhatsapp } from 'react-icons/fa';
import { waLink } from '../data/site';
import '../styles/components.css';

export default function WhatsAppFloat() {
  return (
    <a className="waFloat" href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <FaWhatsapp />
    </a>
  );
}
