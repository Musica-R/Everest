import { FaWhatsapp } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import { waLink } from '../data/site';
import Img from './Img';
import '../styles/components.css';

export default function ProductCard({ product, image }) {
  const { t } = useLang();
  const basis = product.basis === 'acre' ? t.products.perAcre : t.products.pack;
  const msg = `Hello Everest Agencies, I would like to enquire about ${product.name} (${product.amount} ${product.basis === 'acre' ? 'per acre' : 'pack'}).`;

  return (
    <article className="pcard">
      <div className="pcard__img">
        <Img src={image} alt={product.name} />
        <span className="pcard__badge">{t.products.agri}</span>
      </div>
      <div className="pcard__body">
        <h3>{product.name}</h3>
        <p className="pcard__qty"><b>{product.amount}</b> / {basis}</p>
        <a className="btn btn--lime btn--block" href={waLink(msg)} target="_blank" rel="noreferrer">
          <FaWhatsapp /> {t.products.enquire}
        </a>
      </div>
    </article>
  );
}
