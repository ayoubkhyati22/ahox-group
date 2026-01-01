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

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'darija' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  // Get the appropriate logo based on scroll state
  const logoSrc = isScrolled ? getLogo('mainColor') : getLogo('mainWhite');

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo - Made Bigger - Switches based on scroll */}
          <Link to="/" onClick={handleLogoClick} className="relative z-[80]">
            <img 
              src={logoSrc} 
              alt="AHOX" 
              className="h-16 sm:h-20 w-auto transition-opacity duration-300" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative py-2 ${
                  location.pathname === link.path 
                    ? isScrolled ? 'text-teal' : 'text-white'
                    : isScrolled ? 'text-slate-600 hover:text-teal' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline" 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-colors duration-300 ${
                      isScrolled ? 'bg-teal' : 'bg-white'
                    }`} 
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Language Selector (Shared Desktop/Mobile) */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 group ${
                  isScrolled ? 'hover:bg-slate-50' : 'hover:bg-white/10'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg border transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-slate-100 border-gray-100 group-hover:border-teal/30' 
                    : 'bg-white/10 border-white/20 group-hover:border-white/40'
                }`}>
                  {currentLanguage.flag}
                </div>
                <span className={`hidden sm:block text-sm font-semibold uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}>
                  {currentLanguage.code}
                </span>
                <ChevronDown className={`w-3 h-3 transition-all duration-300 ${
                  isScrolled ? 'text-slate-400' : 'text-white/70'
                } ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-200/50 border border-gray-100 p-2 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${
                          i18n.language === lang.code 
                            ? 'bg-teal/5 text-teal font-semibold' 
                            : 'hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-lg">{lang.flag}</span>
                          {lang.label}
                        </span>
                        {i18n.language === lang.code && (
                          <div className="w-1.5 h-1.5 bg-teal rounded-full" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`z-[80] lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-slate-900 hover:bg-slate-800' 
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white block rounded-full"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-5 h-0.5 bg-white block rounded-full"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white block rounded-full"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col pt-32 px-8"
          >
            <nav className="flex flex-col space-y-4">
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
                    className="text-4xl font-bold tracking-tight text-slate-900 hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Contact Info for Mobile */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-12 pt-8 border-t border-gray-100"
            >
              <p className="text-sm text-slate-400 mb-2 uppercase tracking-widest">{t('contact.getInTouch')}</p>
              <a href="mailto:info@ahox-group.com" className="text-xl font-medium text-slate-900">
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