import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'darija', label: 'العربية', flag: '🇲🇦' },
  ];

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/casablanca', label: t('nav.casablanca') },
    { path: '/dubai', label: t('nav.dubai') },
    { path: '/frankfurt', label: t('nav.frankfurt') },
    { path: '/pristina', label: t('nav.pristina') },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'darija' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Framer Motion Variants
  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
    opened: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
  };

  const containerVariants = {
    opened: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    opened: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-[70]">
            <img src="/images/ahox-group-main-logo.svg" alt="AHOX" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-teal ${
                  location.pathname === link.path ? 'text-teal' : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop Language Selector */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-teal transition-all text-sm font-medium text-slate-700"
              >
                <Globe className="w-4 h-4 text-teal" />
                {currentLanguage.code.toUpperCase()}
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-40 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 rounded-xl text-sm transition-colors flex items-center justify-between"
                      >
                        <span>{lang.label}</span>
                        {i18n.language === lang.code && <div className="w-1.5 h-1.5 bg-teal rounded-full" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger - Custom Minimalist */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="z-[70] lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative"
            >
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-slate-900 block rounded-full"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-slate-900 block rounded-full"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-slate-900 block rounded-full"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-[55] bg-white flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-10 pt-20">
              <motion.div variants={containerVariants} className="space-y-6">
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={itemVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl font-light tracking-tight text-slate-900 hover:text-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Language Selection (Horizontal Pills) */}
              <motion.div 
                variants={itemVariants}
                className="mt-16 pt-10 border-t border-gray-100"
              >
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">{t('Select Language')}</p>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        i18n.language === lang.code 
                        ? 'bg-teal text-white shadow-lg shadow-teal/20' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {lang.flag} {lang.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;