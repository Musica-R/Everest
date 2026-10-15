import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import { agriProducts, cleaningProducts } from '../data/products';
import { serviceGroups } from '../data/services';
import { images } from '../data/images';
import { waLink } from '../data/site';
import '../styles/pages.css';

export default function Services() {
  const { t, pick } = useLang();
  const s = t.servicesPage;

  return (
    <>
      <section className="pageHero pageHero--img">
        <Img className="pageHero__bg" src={images.hero} alt="" />
        <div className="container pageHero__in">
          <Reveal as="h1">{s.title}</Reveal>
          <Reveal as="p" delay={150}>{s.sub}</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {t.services.items.map((item, i) => {
            const g = serviceGroups[i];
            const list = g.cleaning ? cleaningProducts : g.agri.map((n) => agriProducts[n]);
            return (
              <div key={i} className={`svc ${i % 2 ? 'svc--rev' : ''}`}>
                <Reveal className="svc__img"><Img src={images[g.image]} alt={item.title} /></Reveal>
                <div className="svc__text">
                  <Reveal as="h2" delay={100}>{item.title}</Reveal>
                  <Reveal as="p" delay={200}>{item.text}</Reveal>
                  <Reveal delay={300}>
                    <small className="svc__label">{s.supply}</small>
                    <div className="chips">{list.map((p, k) => <span key={k}>{pick(p)}</span>)}</div>
                  </Reveal>
                  <Reveal delay={400}>
                    <a className="btn btn--lime" href={waLink(`Hello Everest Agencies, I would like to enquire about: ${item.title}`)} target="_blank" rel="noreferrer">
                      <FaWhatsapp /> {s.enquire}
                    </a>
                  </Reveal>
                </div>
              </div>
            );
          })}
          <Reveal className="center">
            <Link to="/products" className="btn btn--outline btn--lg">{t.nav.products} <FiArrowRight /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
