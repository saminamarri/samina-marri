import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { siteConfig } from '../data/config';

// Official Behance SVG Icon Component
const BehanceIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M22 7h-7v-2h7v2zm-11.75 3.75c0-.69-.25-1.25-.75-1.68s-1.21-.65-2.13-.65H3v8.32h4.59c.98 0 1.74-.24 2.28-.71.53-.48.8-1.14.8-1.99 0-.68-.19-1.22-.57-1.63.53-.38.8-1.07.8-1.66zm-4.75-.85h1.77c.41 0 .73.08.97.25.23.16.35.41.35.73 0 .34-.12.6-.36.77-.24.16-.57.25-.99.25H5.5v-2zm2.14 5.92H5.5v-2.12h2.09c.47 0 .83.1 1.09.3.26.2.39.49.39.87 0 .37-.13.66-.4.86-.26.19-.62.29-1.07.29zM21.57 14.28c0-1.12-.31-2.02-.93-2.7-.62-.68-1.47-1.02-2.55-1.02-1.06 0-1.93.35-2.61 1.05s-1.02 1.63-1.02 2.79c0 1.14.33 2.06 1 2.76.67.7 1.57 1.05 2.7 1.05 1.65 0 2.82-.76 3.51-2.28h-1.97c-.19.34-.44.6-.74.77-.3.17-.65.25-1.05.25-.5 0-.91-.14-1.23-.42-.32-.28-.5-.69-.54-1.23h7.41c.01-.1.02-.2.02-.28zm-5.41-1.39c.04-.44.19-.78.44-1.03.26-.25.59-.37 1-.37.4 0 .73.12.98.36.25.24.39.58.42 1.04h-2.84z" />
  </svg>
);

export default function SocialLinks({ className = "flex items-center gap-3" }) {
  const { socialLinks } = siteConfig;

  const links = [
    {
      key: 'linkedin',
      url: socialLinks.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
      external: true,
    },
    {
      key: 'instagram',
      url: socialLinks.instagram,
      icon: Instagram,
      label: 'Instagram',
      external: true,
    },
    {
      key: 'behance',
      url: socialLinks.behance,
      icon: BehanceIcon,
      label: 'Behance',
      external: true,
    },
    {
      key: 'email',
      url: socialLinks.email,
      icon: Mail,
      label: 'Email',
      external: false,
    }
  ].filter(item => item.url && item.url.trim() !== '');

  return (
    <div className={className}>
      {links.map(({ key, url, icon: Icon, label, external }) => (
        <a
          key={key}
          href={url}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={label}
          title={label}
          className="group relative p-2.5 rounded-full border border-purple-500/20 dark:border-purple-400/30 bg-slate-100 dark:bg-[#121324] text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/60 dark:hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 flex items-center justify-center"
        >
          <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}
