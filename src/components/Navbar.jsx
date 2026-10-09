import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { siteConfig } from '../data/config';
import { useTheme } from '../context/ThemeContext';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'EDUCATION', path: '/education' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'ACHIEVEMENTS', path: '/achievements' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'EXHIBITIONS', path: '/exhibitions' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#09090D]/90 backdrop-blur-md border-b border-slate-200 dark:border-purple-500/20 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="group flex flex-col">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {siteConfig.artistName}
          </span>
          <span className="text-[10px] tracking-[0.25em] text-purple-600 dark:text-purple-400 uppercase font-semibold -mt-1">
            Fine Artist &amp; Creative Tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.15em] transition-all duration-300 font-medium ${
                  isActive
                    ? 'text-purple-600 dark:text-purple-400 font-bold border-b-2 border-purple-500 pb-1'
                    : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Header Right Actions: Social Links + Theme Toggle + CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Social Icons in Header */}
          <SocialLinks className="flex items-center gap-2" />

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2.5 rounded-full border border-purple-500/20 dark:border-purple-400/30 bg-slate-100 dark:bg-[#121324] text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors shadow-sm"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-purple-600" />
            )}
          </button>

          {/* CTA Button */}
          <Link
            to="/gallery"
            className="group relative inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-purple-500/30"
          >
            <span>VIEW ART</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="xl:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-purple-500/20 dark:border-purple-400/30 text-slate-800 dark:text-slate-200"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-purple-600" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-800 dark:text-slate-100 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 top-[70px] bg-white/95 dark:bg-[#09090D]/98 backdrop-blur-xl z-40 flex flex-col px-8 py-8 border-t border-slate-200 dark:border-purple-500/20 animate-fade-in overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-serif tracking-widest uppercase transition-colors ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-400 font-bold pl-2 border-l-2 border-purple-600 dark:border-purple-400'
                      : 'text-slate-700 dark:text-slate-300'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-purple-500/20 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                Social Links
              </span>
              <SocialLinks />
            </div>

            <Link
              to="/gallery"
              className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 to-blue-600 py-3.5 rounded-full font-semibold shadow-lg"
            >
              <span>VIEW MY ART</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="text-center text-xs text-slate-500 dark:text-slate-400">
              {siteConfig.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
