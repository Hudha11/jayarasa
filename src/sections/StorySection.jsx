import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Eyebrow from '../components/ui/Eyebrow.jsx';
import { milestones } from '../data/companyProfile.js';
import { getWhatsAppLink } from '../utils/whatsapp.js';

export default function StorySection() {
  return (
    <section className="story-section" id="cerita">
      <div className="story-visual">
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1100&q=85" alt="Ilustrasi suasana dapur untuk visual demo" loading="lazy" />
        <div className="story-stamp"><span>DARI</span><strong>1998</strong><span>HINGGA KINI</span></div>
        <span className="story-caption">Berawal dari usaha keluarga.</span>
      </div>
      <div className="story-copy">
        <Eyebrow>PERJALANAN KAMI</Eyebrow>
        <h2>Berawal sederhana,<br /><em>terus bertumbuh.</em></h2>
        <p className="story-lead">Di tengah krisis moneter 1998, Jaya Rasa memulai usaha telur asin dengan modal awal Rp200.000.</p>
        <p>Berangkat dari usaha keluarga, Jaya Rasa terus mengembangkan produk. Pada 2000, Telur Asin Pindang diperkenalkan sebagai olahan berbeda yang berpotensi menjadi buah tangan khas Balikpapan.</p>
        <div className="timeline">
          {milestones.map((item) => (
            <article className="timeline-item" key={item.year}>
              <span className="timeline-year">{item.year}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
        <Button href={getWhatsAppLink('informasi Jaya Rasa')} variant="dark">Kenali Produk Kami <ArrowRight size={17} /></Button>
      </div>
    </section>
  );
}