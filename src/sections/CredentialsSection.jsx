import { Award, BadgeCheck, ShieldCheck } from "lucide-react";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import { awards, credentials } from "../data/companyProfile.js";

export default function CredentialsSection() {
  return (
    <section className="credentials-section section-pad">
      <div className="section-heading">
        <div>
          <Eyebrow>JEJAK DAN PENGAKUAN</Eyebrow>
          <h2>
            Perjalanan yang
            <br />
            <em>mendapat apresiasi.</em>
          </h2>
        </div>
        <p>
          Jaya Rasa mencatat sejumlah penghargaan dan dokumen perizinan.
          Informasi berikut ditampilkan sebagai ringkasan profil UMKM.
        </p>
      </div>
      <div className="credentials-grid">
        <div className="credentials-panel">
          <span className="panel-icon">
            <Award size={22} />
          </span>
          <h3>Penghargaan</h3>
          <ul className="credentials-award-list">
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
          {/* <p className="small-note">
            Daftar ringkas berdasarkan company profile yang diberikan.
          </p> */}
        </div>
        <div className="credentials-panel credentials-panel-light">
          <span className="panel-icon">
            <ShieldCheck size={22} />
          </span>
          <h3>Sertifikasi & Perizinan</h3>
          <ul className="credentials-certificate-list">
            {credentials.map((credential) => (
              <li key={credential}>
                <BadgeCheck size={16} />
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
