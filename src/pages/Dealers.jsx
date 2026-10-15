import { FiCheckCircle, FiMapPin, FiFileText } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { waLink, gstin } from '../data/site';
import '../styles/pages.css';
import '../styles/home.css';

export default function Dealers() {
  const { t } = useLang();
  const n = t.network;
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <Reveal as="h1">{n.brand}</Reveal>
          <Reveal as="p" delay={150}>{n.sub}</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label={n.aboutLabel} title={n.pageSub} />
          <Reveal as="p" delay={100} className="about__p">{n.about}</Reveal>
        </div>
      </section>

      <section className="section section--pale">
        <div className="container">
          <SectionTitle label={n.distLabel} title={n.distTitle} highlight={n.distHighlight} />
          <div className="districts">
            {n.districts.map((d, i) => (
              <Reveal key={d} delay={(i % 4) * 100} className="district"><FiMapPin /> <span>{d}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label={n.brandLabel} title={n.brandTitle} highlight={n.brandHighlight} />
          <div className="brands">
            {n.brands.map((b, i) => (
              <Reveal key={b.name} delay={(i % 3) * 120} className="brand">
                <h3>{b.name}</h3>
                {b.tag && <em>{b.tag}</em>}
                <p>{b.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--pale">
        <div className="container">
          <SectionTitle title={n.svcTitle} />
          <div className="grid4">
            {n.svc.map((s, i) => (
              <Reveal key={i} delay={(i % 4) * 120} className="card"><FiCheckCircle /><h3>{s}</h3></Reveal>
            ))}
          </div>
          <div className="lists" style={{ marginTop: 40 }}>
            <Reveal className="list" style={{ background: "#fff" }}><h3>{n.missionTitle}</h3><p>{n.mission}</p></Reveal>
            <Reveal delay={150} className="list" style={{ background: "#fff" }}><h3>{n.visionTitle}</h3><p>{n.vision}</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta">
            <h2>{n.contactTitle}</h2>
            <p><FiMapPin /> {n.location}: {n.locationText}</p>
            <p><FiFileText /> {n.gstin}: {gstin}</p>
            <p>{n.enquiry}</p>
            <div className="cta__btns">
              <a className="btn btn--white btn--lg" href={waLink('Hello Everest Agency, I would like to enquire about dealership opportunities.')} target="_blank" rel="noreferrer">
                <FaWhatsapp /> {n.enquire}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
