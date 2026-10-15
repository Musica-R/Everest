import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp, FaLeaf } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import { waLink } from '../data/site';
import '../styles/navbar.css';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/dealers', label: t.nav.dealers },
    { to: '/services', label: t.nav.services },
    { to: '/products', label: t.nav.products },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logoIcon"><FaLeaf /></span>
          <span>
            <b className="nav__brand">{t.brand}<em>{t.brand2}</em></b>
            <small>{t.brandSub}</small>
          </span>
        </Link>

        <nav className={`nav__links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end>{l.label}</NavLink>
          ))}
          {/* <a className="btn btn--lime nav__wa--mobile" href={waLink()} target="_blank" rel="noreferrer">
            <FaWhatsapp /> {t.whatsapp}
          </a> */}
        </nav>

        <div className="nav__actions">
          <div className="lang" role="group" aria-label="Language">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'ml' ? 'active' : ''} onClick={() => setLang('ml')}>മലയാളം</button>
          </div>
          <a className="btn btn--lime nav__wa" href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp /> <span className="waText">{t.whatsapp}</span>
            <span className="btn__arrow"><FiArrowUpRight /></span>
          </a>
          <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
