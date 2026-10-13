import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp.js';

export default function ProductCard({ product, index }) {
  return (
    <article className={`product-card${product.id === 'crispy-baby-crabs' ? ' product-card-featured' : ''}`}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.imageAlt} loading="lazy" />
        <span className="product-tag">{product.tag}</span>
        <span className="product-number">0{index + 1}</span>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card-bottom">
          <span className="price-note">Tanyakan harga</span>
          <a href={getWhatsAppLink(product.name)} target="_blank" rel="noreferrer" aria-label={`Tanya harga ${product.name} via WhatsApp`}>
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </article>
  );
}