import { ShoppingBag } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig.js';

export default function Footer() {
  return (
    <footer className="footer">
      <a className="brand footer-brand" href="#beranda">
        <span className="brand-mark"><ShoppingBag size={21} /></span>
        <span className="brand-copy">
          <strong>Jaya Rasa<span>.</span></strong>
          <small>{siteConfig.tagline.toUpperCase()}</small>
        </span>
      </a>
      <p>Rasa lokal, cerita yang terus tumbuh.</p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.brandName}. Hak cipta dilindungi.</span>
        <a href="#beranda">Kembali ke atas ↑</a>
      </div>
    </footer>
  );
}