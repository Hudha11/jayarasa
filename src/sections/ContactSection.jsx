import { ArrowRight, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';
import { getWhatsAppLink } from '../utils/whatsapp.js';
import Button from '../components/ui/Button.jsx';
import Eyebrow from '../components/ui/Eyebrow.jsx';

export default function ContactSection() {
  return (
    <section className="contact-section" id="kontak">
      <div className="contact-copy">
        <Eyebrow light>HUBUNGI JAYA RASA</Eyebrow>
        <h2>Ingin membawa<br /><em>rasa khas Balikpapan?</em></h2>
        <p>Hubungi kami untuk bertanya tentang produk, harga, ketersediaan, dan cara pemesanan.</p>
        <Button href={getWhatsAppLink()} variant="cream" target="_blank" rel="noreferrer">Chat via WhatsApp <ArrowRight size={17} /></Button>
      </div>
      <div className="contact-details">
        <div className="contact-detail">
          <span><MessageCircle /></span>
          <div><small>WHATSAPP / TELEPON</small><strong>{siteConfig.phoneDisplay}</strong><p>Untuk pertanyaan produk dan pemesanan.</p></div>
        </div>
        <div className="contact-detail">
          <span><MapPin /></span>
          <div><small>ALAMAT</small><strong>Jaya Rasa</strong><p>{siteConfig.address}</p></div>
        </div>
        <div className="contact-detail">
          <span><Instagram /></span>
          <div><small>INSTAGRAM</small><strong>@{siteConfig.instagramHandle}</strong><p>Ikuti kabar dan aktivitas Jaya Rasa.</p></div>
          <a className="contact-arrow" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label="Buka Instagram Jaya Rasa"><ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}