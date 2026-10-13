import { ArrowDownRight, ArrowRight, Award, CalendarDays } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Eyebrow from '../components/ui/Eyebrow.jsx';
import { siteConfig } from '../data/siteConfig.js';
import { getWhatsAppLink } from '../utils/whatsapp.js';

export default function HeroSection() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-copy">
        <Eyebrow>OLEH-OLEH KHAS BALIKPAPAN</Eyebrow>
        <h1>Dari perjalanan panjang,<br /><em>lahir rasa istimewa.</em></h1>
        <p className="hero-description">
          Sejak 1998, Jaya Rasa mengembangkan olahan pangan dengan cita rasa khas,
          dari Telur Asin Pindang hingga camilan yang menjadi favorit pelanggan.
        </p>
        <div className="hero-actions">
          <Button href="#produk">Kenali Produk <ArrowRight size={17} /></Button>
          <a className="text-link" href="#cerita">Cerita Jaya Rasa <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-trust">
          <div className="trust-icon"><CalendarDays size={19} /></div>
          <div><strong>Berpengalaman sejak {siteConfig.foundedYear}</strong><span>Berawal dari usaha keluarga di Balikpapan.</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1300&q=90" alt="Inspirasi hidangan untuk visual demo Jaya Rasa" />
        </div>
        <div className="hero-sticker"><Award size={22} /><span>RASA</span><strong>LOKAL</strong><small>sejak 1998</small></div>
        <div className="hero-note"><span className="note-star">✳</span><span>Tradisi yang<br />terus berinovasi</span></div>
        <div className="hero-dot-pattern" aria-hidden="true" />
      </div>
      <div className="hero-bottom-note"><span>01</span> CERITA RASA JAYA RASA <span className="note-rule" /></div>
    </section>
  );
}