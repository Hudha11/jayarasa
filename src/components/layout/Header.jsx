import { useState } from 'react';
import { ArrowRight, Menu, ShoppingBag, X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig.js';
import { getWhatsAppLink } from '../../utils/whatsapp.js';

const navLinks = [
  ['Beranda', '#beranda'],
  ['Cerita Kami', '#cerita'],
  ['Produk', '#produk'],
  ['Komitmen', '#komitmen'],
  ['Kontak', '#kontak'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <a className="brand" href="#beranda" aria-label="Jaya Rasa beranda" onClick={closeMenu}>
        <span className="brand-mark"><ShoppingBag size={21} /></span>
        <span className="brand-copy">
          <strong>Jaya Rasa<span>.</span></strong>
          <small>{siteConfig.tagline.toUpperCase()}</small>
        </span>
      </a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navigasi utama">
        {navLinks.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a className="nav-cta" href={getWhatsAppLink()} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Tanya Produk <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}