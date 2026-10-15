import { useState } from 'react';
import { FiMapPin, FiPhone, FiClock, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import { phones, waLink, mapLink } from '../data/site';
import '../styles/pages.css';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', mobile: '', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello Everest Agencies,\nName: ${form.name}\nPhone: ${form.mobile}\n${form.message}`;
    window.open(waLink(msg), '_blank', 'noopener');
  };

  return (
    <>
      <section className="pageHero">
        <div className="container">
          <Reveal as="h1">{c.title}</Reveal>
          <Reveal as="p" delay={150}>{c.sub}</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <Reveal className="card">
              <FiMapPin /><h3>{c.address}</h3>
              <p>{c.addressText}</p>
              <a className="btn btn--outline" href={mapLink} target="_blank" rel="noreferrer">{c.map} <FiArrowUpRight /></a>
            </Reveal>

            <Reveal delay={150} className="card">
              <FiPhone /><h3>{c.phone}</h3>
              <ul className="phones">
                {phones.map((p) => (
                  <li key={p.number}>
                    <div>
                      <a href={`tel:+91${p.number}`}>{p.number}</a>
                      {p.whatsapp && <small>{c.waCall}</small>}
                    </div>
                    <span>
                      <a className="iconBtn" href={`tel:+91${p.number}`} aria-label={c.call}><FiPhone /></a>
                      <a className="iconBtn iconBtn--wa" href={`https://wa.me/91${p.number}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300} className="card">
              <FiClock /><h3>{c.hours}</h3>
              <p>{c.hoursText}</p>
            </Reveal>
          </div>

          <Reveal delay={200} as="form" className="card form" onSubmit={submit}>
            <h3>{c.formTitle}</h3>
            <input required placeholder={c.name} value={form.name} onChange={set('name')} />
            <input required type="tel" placeholder={c.mobile} value={form.mobile} onChange={set('mobile')} />
            <textarea required rows="5" placeholder={c.message} value={form.message} onChange={set('message')} />
            <button className="btn btn--lime btn--lg" type="submit"><FaWhatsapp /> {c.send}</button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
