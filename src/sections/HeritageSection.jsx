import { MapPin, Sprout, Utensils } from 'lucide-react';

const highlights = [
  { icon: Sprout, number: '1998', title: 'Awal perjalanan', text: 'Usaha keluarga dimulai dari produksi telur asin.' },
  { icon: Utensils, number: '2000', title: 'Inovasi produk', text: 'Telur Asin Pindang dikembangkan sebagai oleh-oleh khas.' },
  { icon: MapPin, number: 'Balikpapan', title: 'Akar lokal', text: 'Tumbuh dengan semangat membawa olahan khas daerah.' },
];

export default function HeritageSection() {
  return (
    <section className="heritage-section" aria-label="Sekilas perjalanan Jaya Rasa">
      {highlights.map(({ icon: Icon, number, title, text }) => (
        <article className="heritage-item" key={title}>
          <span className="heritage-icon"><Icon size={20} /></span>
          <div><span className="heritage-number">{number}</span><h3>{title}</h3><p>{text}</p></div>
        </article>
      ))}
    </section>
  );
}