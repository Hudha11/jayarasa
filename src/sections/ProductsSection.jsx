import { useMemo, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { products } from '../data/products.js';
import { getWhatsAppLink } from '../utils/whatsapp.js';
import ProductCard from '../components/products/ProductCard.jsx';
import Eyebrow from '../components/ui/Eyebrow.jsx';

const categories = ['Semua', 'Olahan Telur', 'Camilan', 'Sambal', 'Minuman'];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const visibleProducts = useMemo(
    () => products.filter((product) => activeCategory === 'Semua' || product.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="products-section section-pad" id="produk">
      <div className="section-heading">
        <div><Eyebrow>PRODUK JAYA RASA</Eyebrow><h2>Temukan rasa<br /><em>favoritmu.</em></h2></div>
        <p>Dari olahan telur khas hingga camilan gurih, kenali pilihan produk Jaya Rasa untuk dinikmati sendiri atau dijadikan buah tangan.</p>
      </div>
      <div className="product-toolbar">
        <div className="product-tabs" role="group" aria-label="Filter kategori produk">
          {categories.map((category) => (
            <button key={category} className={activeCategory === category ? 'tab active' : 'tab'} onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <span className="product-count">{visibleProducts.length} produk</span>
      </div>
      <div className="product-grid">
        {visibleProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
      </div>
      <div className="catalog-note">
        <span className="catalog-note-icon"><MessageCircle size={19} /></span>
        <p>Ingin mengetahui harga, ukuran kemasan, atau ketersediaan produk? <strong>Tanyakan langsung kepada Jaya Rasa.</strong></p>
        <a href={getWhatsAppLink('katalog produk Jaya Rasa')} target="_blank" rel="noreferrer">Tanya katalog <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}