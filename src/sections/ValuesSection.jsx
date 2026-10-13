import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow.jsx';
import { companyValues, visionItems, missionItems } from '../data/companyProfile.js';

export default function ValuesSection() {
  return (
    <section className="values-section" id="komitmen">
      <div className="values-heading">
        <Eyebrow light>ARAH DAN KOMITMEN</Eyebrow>
        <h2>Berakar dari lokal,<br /><em>melangkah lebih jauh.</em></h2>
        <p>Jaya Rasa ingin tumbuh sebagai produsen olahan pangan khas daerah sekaligus memberi nilai bagi ekonomi lokal.</p>
      </div>
      <div className="values-grid">
        {companyValues.map((value) => (
          <article className="value-card" key={value.number}>
            <span>{value.number}</span><ArrowUpRight size={19} />
            <h3>{value.title}</h3><p>{value.description}</p>
          </article>
        ))}
      </div>
      <div className="vision-mission">
        <div><h3>Visi</h3><ul>{visionItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><h3>Misi</h3><ul>{missionItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div>
    </section>
  );
}