import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from './Reveal';

export default function SectionTitle({ label, title, highlight, center = false }) {
  return (
    <Reveal className={`sectionTitle ${center ? 'center' : ''}`}>
      {label && <span className="sectionTitle__label">{label} <FiArrowUpRight /></span>}
      <h2>{title} {highlight && <span className="hl">{highlight}</span>}</h2>
    </Reveal>
  );
}
