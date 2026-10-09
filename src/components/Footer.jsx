import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { siteConfig } from '../data/config';
import SocialLinks from './SocialLinks';

export default function Footer({ hideCta = false }) {
  return (
    <footer className="bg-slate-50 dark:bg-[#06060A] text-slate-800 dark:text-slate-200 border-t border-slate-200 dark:border-purple-500/20 pt-16 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Texture Detail */}
      <div className="absolute inset-0 canvas-texture opacity-30 pointer-events-none" />

      {/* Pre-Footer Call to Action */}
      {!hideCta && (
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <div className="bg-gradient-to-br from-white to-slate-100 dark:from-[#121324] dark:to-[#1A1C38] border border-purple-500/20 dark:border-purple-400/30 rounded-3xl p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 dark:bg-purple-600/20 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 dark:bg-blue-600/20 rounded-full filter blur-3xl pointer-events-none" />

            <span className="text-xs uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold mb-3 block">
              SERVICES &amp; COLLABORATIONS
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4 max-w-2xl mx-auto">
              HAVE A FINE ART, BRANDING, WEB/APP, OR AI PROJECT IN MIND?
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8 font-light">
              LET'S CREATE SOMETHING MEANINGFUL TOGETHER.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-xl shadow-purple-600/20"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-purple-500/20">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-wider text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {siteConfig.artistName}
              </span>
            </Link>
            <p className="text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 font-semibold">
              {siteConfig.title}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed font-light">
              Transforming ideas into thoughtful visual expressions across fine arts, logo branding, web &amp; application development, and agentic AI technology.
            </p>
            <div className="pt-2">
              <SocialLinks />
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-slate-900 dark:text-white font-bold mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium">
              <li>
                <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Education</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Achievements</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/exhibitions" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Exhibitions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Services */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-slate-900 dark:text-white font-bold mb-4">
              DIRECT INQUIRIES
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 hover:underline font-mono font-medium"
              aria-label="Send Email to Samina Marri"
            >
              <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>{siteConfig.email}</span>
            </a>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 font-light leading-relaxed">
              Available for Fine Art Commissions, Logo Branding, Web &amp; Application Development, Agentic AI Systems, Gallery Exhibitions, and Creative Collaborations.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-light">
          <p>© {siteConfig.copyrightYear} {siteConfig.artistName}. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 tracking-wider">Fine Art, Web/App &amp; Creative Technology Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
