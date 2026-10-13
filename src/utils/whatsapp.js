import { siteConfig } from '../data/siteConfig.js';

export function getWhatsAppLink(productName = '') {
  const message = productName
    ? `Halo Jaya Rasa, saya ingin bertanya tentang ${productName}. Mohon informasi ketersediaan dan harganya.`
    : 'Halo Jaya Rasa, saya ingin bertanya tentang produk dan cara pemesanan.';
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}