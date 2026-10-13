import { Award, BadgeCheck, ShieldCheck } from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow.jsx';
import { awards, credentials } from '../data/companyProfile.js';

export default function CredentialsSection() {
  return (
    <section className="credentials-section section-pad">
      <div className="section-heading">
        <div><Eyebrow>JEJAK DAN PENGAKUAN</Eyebrow><h2>Perjalanan yang<br /><em>mendapat apresiasi.</em></h2></div>
        <p>Company profile Jaya Rasa mencatat sejumlah penghargaan dan dokumen perizinan. Informasi berikut ditampilkan sebagai ringkasan profil perusahaan.</p>
      </div>
      <div className="credentials-grid">
        <div className="credentials-panel">
          <span className="panel-icon"><Award size={22} /></span>
          <h3>Penghargaan</h3>
          <ul>{awards.map((award) => <li key={award}>{award}</li>)}</ul>
          <p className="small-note">Daftar ringkas berdasarkan company profile yang diberikan.</p>
        </div>
        <div className="credentials-panel credentials-panel-light">
          <span className="panel-icon"><ShieldCheck size={22} /></span>
          <h3>Sertifikasi & Perizinan</h3>
          <ul>{credentials.map((credential) => <li key={credential}><BadgeCheck size={16} />{credential}</li>)}</ul>
          <p className="small-note">Konfirmasi status dan detail dokumen terbaru sebelum publikasi final.</p>
        </div>
      </div>
    </section>
  );
}