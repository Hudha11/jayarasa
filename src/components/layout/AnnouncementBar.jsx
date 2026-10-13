import { Sparkles } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig.js';

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <Sparkles size={14} aria-hidden="true" />
      <span>{siteConfig.announcement}</span>
    </div>
  );
}