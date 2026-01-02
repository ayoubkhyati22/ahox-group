import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { getLogo } from '../hooks/useImages';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'sq', label: 'Albania', flag: '🇦🇱' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  const navLinks = [
    { path: '/dubai', label: t('nav.dubai') },
    { path: '/frankfurt', label: t('nav.frankfurt') },
    { path: '/casablanca', label: t('nav.casablanca') },
    { path: '/pristina', label: t('nav.pristina') },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keep logo white for premium dark look regardless of scroll
  const logoSrc = getLogo('mainWhite');

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 py-1 shadow-2xl shadow-black/50' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo Monolith */}
          <Link to="/" onClick={handleLogoClick} className="relative z-[80] group">
            <img 
              src={logoSrc} 
              alt="AHOX" 
              className={`h-16 sm:h-18 w-auto transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 relative py-2 ${
                  location.pathname === link.path 
                    ? 'text-gold' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline" 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-6">
            
            {/* Language Selector (Stone Effect) */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
              >
                <span className="text-lg opacity-80 group-hover:opacity-100 grayscale-[0.5] group-hover:grayscale-0">{currentLanguage.flag}</span>
                <span className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-white">
                  {currentLanguage.code}
                </span>
                <ChevronDown className={`w-3 h-3 text-zinc-500 group-hover:text-gold transition-all ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-44 bg-[#111111] border border-white/10 rounded-sm shadow-2xl p-1 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                          i18n.language === lang.code 
                            ? 'bg-gold/10 text-gold font-black' 
                            : 'hover:bg-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-sm grayscale-[0.2]">{lang.flag}</span>
                          {lang.label}
                        </span>
                        {i18n.language === lang.code && (
                          <div className="w-1 h-1 bg-gold rounded-full shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Trigger (Zinc Plate) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="z-[80] lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-white/5 border border-white/10 rounded-sm transition-all hover:bg-white/10"
            >
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 4.5, backgroundColor: "#C5A059" } : { rotate: 0, y: 0 }}
                className="w-6 h-[1px] bg-white block"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-[1px] bg-white block"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -4.5, backgroundColor: "#C5A059" } : { rotate: 0, y: 0 }}
                className="w-6 h-[1px] bg-white block"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu (Dark Onyx Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col pt-32 px-10 border-l border-white/10"
          >
            {/* Blueprint Grid Lines for Mobile Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                   <div key={i} className="h-full w-px bg-white absolute" style={{ left: `${(i+1)*20}%` }} />
                ))}
            </div>

            <nav className="flex flex-col space-y-8 relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.path}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-5xl font-black italic tracking-tighter uppercase transition-all duration-300 ${
                       location.pathname === link.path ? 'text-gold' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-20 relative z-10"
            >
              <div className="w-12 h-1 bg-gold mb-8" />
              <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em] mb-4">Facilitating Global Wealth</p>
              <a href="mailto:info@ahox-group.com" className="text-lg font-black text-white italic">
                info@ahox-group.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;  