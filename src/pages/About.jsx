import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { agriProducts, cleaningProducts } from '../data/products';
import Img from '../components/Img';
import { images } from '../data/images';
import '../styles/pages.css';

export default function About() {
  const { t, pick } = useLang();
  const a = t.aboutPage;
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <Reveal as="h1">{a.title}</Reveal>
          <Reveal as="p" delay={150}>{a.story}</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="photos">
            {[images.farmer, images.garden, images.cleaning].map((src, i) => (
              <Reveal key={i} delay={i * 150} className="photos__item"><Img src={src} alt="" /></Reveal>
            ))}
          </div>

          <div className="svc__text" style={{ marginBottom: 48 }}>
            <Reveal as="p">{a.agriText}</Reveal>
            <Reveal as="p" delay={150}>{a.cleanText}</Reveal>
            <Reveal as="p" delay={300}>{a.wholesaleText}</Reveal>
          </div>

          <SectionTitle title={a.whyTitle} />
          <div className="grid4">
            {a.why.map((w, i) => (
              <Reveal key={i} delay={i * 150} className="card">
                <FiCheckCircle />
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--pale">
        <div className="container">
          <SectionTitle title={t.products.agriHead} />
          <div className="chips">
            {agriProducts.map((p, i) => <Reveal as="span" key={i} delay={(i % 8) * 70}>{pick(p)}</Reveal>)}
          </div>
          <div style={{ height: 40 }} />
          <SectionTitle title={t.products.cleanHead} />
          <div className="chips">
            {cleaningProducts.map((p, i) => <Reveal as="span" key={i} delay={(i % 8) * 70}>{pick(p)}</Reveal>)}
          </div>
          <Reveal className="center" style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn--lime btn--lg">{t.nav.contact} <FiArrowRight /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}