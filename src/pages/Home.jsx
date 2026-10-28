import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight, FiChevronDown, FiPhone, FiMapPin, FiGrid, FiPackage, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp, FaLeaf, FaBroom } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { agriProducts, cleaningProducts, featured } from '../data/products';
import { waLink, since } from '../data/site';
import Img from '../components/Img';
import { images } from '../data/images';
import '../styles/home.css';
import { productImage } from '../data/productImages';

// One icon per "Why choose" card (same order as t.why.items)
const whyIcons = [FiGrid, FiPackage, FaLeaf, FiMapPin, FiPhoneCall];

export default function Home() {
  const { t, pick } = useLang();
  const [active, setActive] = useState(0);
  const productCount = agriProducts.length + cleaningProducts.length;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg"><Img src={images.hero} alt="" /></div>
        <div className="container hero__grid">
          <div className="hero__text">
            <Reveal><span className="pill pill--eyebrow">{t.hero.tag}</span></Reveal>
            <Reveal delay={150} as="h1">
              {t.hero.title1} <span className="hl">{t.hero.highlight}</span>
            </Reveal>
            <Reveal delay={300} as="p">{t.hero.text}</Reveal>
            <Reveal delay={450} className="hero__btns">
              <Link className="btn btn--lime btn--lg" to="/products">
                {t.hero.btn1} <span className="btn__arrow"><FiArrowUpRight /></span>
              </Link>
              <Link className="btn btn--ghost btn--lg" to="/contact">
                <FiPhone /> {t.hero.btn2}
              </Link>
            </Reveal>
            <Reveal delay={600} className="hero__chips">
              <div>{t.hero.highlights.map((c) => <span key={c}>{c}</span>)}</div>
            </Reveal>
          </div>

          <div className="hero__panels">
            <Reveal delay={300} className="panel panel--1"><Img src="/assets/pes1.jpg" alt="" /><span>{t.hero.chips[0]}</span></Reveal>
            <Reveal delay={500} className="panel panel--2"><Img src="/assets/seed.jpg" alt="" /><span>{t.hero.chips[2]}</span></Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT + STATS */}
      <section className="section">
        <div className="container">
          <div className="about">
            <SectionTitle label={t.about.label} title={t.about.title} highlight={t.about.highlight} />
            <Reveal delay={100} as="p" className="about__p">{t.about.p1}</Reveal>
            <Reveal delay={250} as="p" className="about__p">{t.about.p2}</Reveal>
          </div>

          <div className="photos">
            {["/assets/fer.jpg", "/assets/p4.jpg", "/assets/p19.jpg"].map((src, i) => (
              <Reveal key={i} delay={i * 150} className="photos__item"><Img src={src} alt="" /></Reveal>
            ))}
          </div>

          <div className="stats">
            {[
              { n: `${new Date().getFullYear() - since}+`, l: t.stats.years },
              { n: since, l: t.stats.since, dark: true },
              { n: `${productCount}+`, l: t.stats.products },
              { n: '7:30–7:30', l: t.stats.hours },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 150} className={`stat ${s.dark ? 'stat--dark' : ''}`}>
                <strong>{s.n}</strong><span>{s.l}</span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="center">
            <Link to="/about" className="btn btn--outline">{t.knowMore} <FiArrowRight /></Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--pale">
        <div className="container">
          <div className="rowHead">
            <SectionTitle label={t.services.label} title={t.services.title} />
            <Reveal><Link to="/about" className="btn btn--lime">{t.viewAll} <span className="btn__arrow"><FiArrowUpRight /></span></Link></Reveal>
          </div>
          <div className="services">
            <Reveal className="services__img"><Img src={images.garden} alt="" /></Reveal>
            <div className="acc">
              {t.services.items.map((s, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className={`acc__item ${active === i ? 'open' : ''}`}>
                    <button onClick={() => setActive(active === i ? -1 : i)}>
                      <span>{s.title}</span>
                      <FiChevronDown />
                    </button>
                    <div className="acc__body"><p>{s.text}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISTRICTS */}
      <section className="section">
        <div className="container">
          <div className="rowHead">
            <SectionTitle label={t.network.distLabel} title={t.network.distTitle} highlight={t.network.distHighlight} />
            <Reveal><Link to="/dealers" className="btn btn--lime">{t.network.viewMore} <span className="btn__arrow"><FiArrowUpRight /></span></Link></Reveal>
          </div>
          <div className="districts">
            {t.network.districts.map((d, i) => (
              <Reveal key={d} delay={(i % 4) * 100} className="district">
                <FiMapPin /> <span>{d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS & COMPANIES */}
      <section className="section section--pale">
        <div className="container">
          <SectionTitle label={t.network.brandLabel} title={t.network.brandTitle} highlight={t.network.brandHighlight} />
          <div className="brands">
            {t.network.brands.map((b, i) => (
              <Reveal key={b.name} delay={(i % 3) * 120} className="brand">
                <h3>{b.name}</h3>
                {b.tag && <em>{b.tag}</em>}
                <p>{b.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <SectionTitle title={t.products.title} highlight={t.products.highlight} />
          <div className="grid4">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 120}>
                <ProductCard product={p} image={productImage(p.name)} />
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="note">{t.products.note}</Reveal>

          <div className="lists">
            <Reveal className="list">
              <h3><FaLeaf /> {t.products.agriHead}</h3>
              <ul>{agriProducts.map((p, i) => <Reveal as="li" key={i} delay={(i % 6) * 60}>{pick(p)}</Reveal>)}</ul>
            </Reveal>
            <Reveal delay={150} className="list">
              <h3><FaBroom /> {t.products.cleanHead}</h3>
              <ul>{cleaningProducts.map((p, i) => <Reveal as="li" key={i} delay={(i % 6) * 60}>{pick(p)}</Reveal>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE EVEREST AGENCIES */}
      <section className="section section--pale">
        <div className="container">
          <SectionTitle title={t.why.title} highlight={t.why.highlight} />
          <Reveal as="p" className="why__sub">{t.why.sub}</Reveal>
          <div className="why__grid">
            {t.why.items.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <Reveal key={w.t} delay={(i % 3) * 120} className="why__card">
                  <span className="why__icon"><Icon /></span>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal className="cta">
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
            <div className="cta__btns">
              <a className="btn btn--white btn--lg" href={waLink()} target="_blank" rel="noreferrer"><FaWhatsapp /> {t.whatsapp}</a>
              <Link to="/contact" className="btn btn--ghost btn--lg">{t.nav.contact} <FiArrowRight /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}