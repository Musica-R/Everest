import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLeaf } from 'react-icons/fa';
import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { useLang } from '../context/LanguageContext';
import { phones, waLink, gstin } from '../data/site';
import '../styles/components.css';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__logo"><FaLeaf /> {t.brand}<em>{t.brand2}</em></div>
          <p>{t.brandSub} · {t.hero.tag}</p>
          <a className="btn btn--lime" href={waLink()} target="_blank" rel="noreferrer"><FaWhatsapp /> {t.whatsapp}</a>
        </div>
        <div>
          <h4>{t.footer.quick}</h4>
          <Link to="/">{t.nav.home}</Link>
          <Link to="/about">{t.nav.about}</Link>
          <Link to="/services">{t.nav.services}</Link>
          <Link to="/products">{t.nav.products}</Link>
          <Link to="/dealers">{t.nav.dealers}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </div>
        <div>
          <h4>{t.footer.reach}</h4>
          <p><FiMapPin /> {t.contact.addressText}</p>
          <p><FiClock /> {t.contact.hoursText}</p>
          <p><FiPhone /> {phones.map((p) => p.number).join(' · ')}</p>
          <p>{t.network.footerServing}</p>
          <p>{t.network.gstin}: {gstin}</p>
        </div>
      </div>
      <div className="footer__bar">{t.footer.rights}</div>
    </footer>
  );
}
