import { useMemo, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { useLang } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import ProductCard from '../components/ProductCard';
import { agriProducts, cleaningProducts, featured } from '../data/products';
import { images } from '../data/images';
import { productImage } from '../data/productImages';
import { waLink } from '../data/site';
import '../styles/pages.css';

function ItemCard({ item, image, label }) {
  const { t, pick } = useLang();
  return (
    <article className="item">
      <div className="item__img"><Img src={image} alt={item.en} /></div>
      <div className="item__body">
        <small>{label}</small>
        <h3>{pick(item)}</h3>
        <a
          className="btn btn--lime btn--block"
          href={waLink(`Hello Everest Agencies, I would like to enquire about ${item.en}.`)}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp /> {t.products.enquire}
        </a>
      </div>
    </article>
  );
}

export default function Products() {
  const { t } = useLang();
  const p = t.productsPage;
  const [tab, setTab] = useState('all');
  const [q, setQ] = useState('');

  const match = (item) => {
    const s = q.trim().toLowerCase();
    return !s || item.en.toLowerCase().includes(s) || item.ml.includes(s);
  };
  const feat = useMemo(
    () => featured.filter((f) => !q.trim() || f.name.toLowerCase().includes(q.trim().toLowerCase())),
    [q]
  );
  const agri = useMemo(() => agriProducts.filter(match), [q]);
  const clean = useMemo(() => cleaningProducts.filter(match), [q]);

  const showFeat = tab === 'all' || tab === 'featured';
  const showAgri = tab === 'all' || tab === 'agri';
  const showClean = tab === 'all' || tab === 'cleaning';
  const empty =
    (!showFeat || !feat.length) &&
    (!showAgri || !agri.length) &&
    (!showClean || !clean.length);

  return (
    <>
      <section className="pageHero pageHero--img">
        <Img className="pageHero__bg" src={images.greens} alt="" />
        <div className="container pageHero__in">
          <Reveal as="h1">{p.title}</Reveal>
          <Reveal as="p" delay={150}>{p.sub}</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="filters">
            <div className="tabs">
              {['all', 'featured', 'agri', 'cleaning'].map((k) => (
                <button key={k} className={tab === k ? 'active' : ''} onClick={() => setTab(k)}>
                  {p.tabs[k]}
                </button>
              ))}
            </div>
            <label className="search">
              <FiSearch />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={p.search} />
            </label>
          </Reveal>

          {showFeat && feat.length > 0 && (
            <>
              <h2 className="groupTitle">{p.tabs.featured}</h2>
              <div className="grid4">
                {feat.map((f, i) => (
                  <Reveal key={f.name} delay={(i % 4) * 120}>
                    <ProductCard product={f} image={productImage(f.name)} />
                  </Reveal>
                ))}
              </div>
              <p className="note">{t.products.note}</p>
            </>
          )}

          {showAgri && agri.length > 0 && (
            <>
              <h2 className="groupTitle">{t.products.agriHead}</h2>
              <div className="grid4">
                {agri.map((item, i) => (
                  <Reveal key={item.en} delay={(i % 4) * 100}>
                    <ItemCard item={item} label={t.products.agriHead} image={productImage(item.en)} />
                  </Reveal>
                ))}
              </div>
            </>
          )}

          {showClean && clean.length > 0 && (
            <>
              <h2 className="groupTitle">{t.products.cleanHead}</h2>
              <div className="grid4">
                {clean.map((item, i) => (
                  <Reveal key={item.en} delay={(i % 4) * 100}>
                    <ItemCard item={item} label={t.products.cleanHead} image={productImage(item.en)} />
                  </Reveal>
                ))}
              </div>
            </>
          )}

          {empty && <p className="empty">{p.empty}</p>}
        </div>
      </section>
    </>
  );
}