import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp.js';

export default function FloatingWhatsApp() {
  return (
    <a className="floating-wa" href={getWhatsAppLink()} target="_blank" rel="noreferrer" aria-label="Hubungi Jaya Rasa melalui WhatsApp">
      <MessageCircle size={22} />
      <span>Hubungi Kami</span>
    </a>
  );
}