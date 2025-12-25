import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'darija', label: 'العربية', flag: '🇲🇦' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'darija' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLangOpen(false);
    };
    if (isLangOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLangOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-xl border-b-2 border-gold/30"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://ahox-cm.de/wp-content/uploads/2023/07/ahox-logo-png.png" 
              alt="AHOX Logo" 
              className="h-14 w-auto object-contain"
            />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              to="/"
              className="relative px-5 py-2.5 text-gray-700 hover:text-gold font-semibold transition-all group"
            >
              <span className="relative z-10">{t('nav.home')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <Link
              to="/casablanca"
              className="relative px-5 py-2.5 text-gray-700 hover:text-gold font-semibold transition-all group"
            >
              <span className="relative z-10">{t('nav.casablanca')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <Link
              to="/dubai"
              className="relative px-5 py-2.5 text-gray-700 hover:text-gold font-semibold transition-all group"
            >
              <span className="relative z-10">{t('nav.dubai')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <Link
              to="/frankfurt"
              className="relative px-5 py-2.5 text-gray-700 hover:text-gold font-semibold transition-all group"
            >
              <span className="relative z-10">{t('nav.frankfurt')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <Link
              to="/pristina"
              className="relative px-5 py-2.5 text-gray-700 hover:text-gold font-semibold transition-all group"
            >
              <span className="relative z-10">{t('nav.pristina')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          </nav>

          {/* Language Dropdown & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Dropdown with premium effects */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangOpen(!isLangOpen);
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-50 to-white hover:from-gold/10 hover:to-orange/10 rounded-lg transition-all group border-2 border-gray-200 hover:border-gold shadow-md hover:shadow-lg"
              >
                <Globe className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-gray-700 hidden sm:inline">
                  {currentLanguage.flag} {currentLanguage.label}
                </span>
                <span className="text-sm font-semibold text-gray-700 sm:hidden">
                  {currentLanguage.flag}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                    isLangOpen ? 'rotate-180' : ''
                  }`} 
                />
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border-2 border-gold/30 overflow-hidden"
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          changeLanguage(lang.code);
                        }}
                        className={`w-full px-5 py-3.5 text-left transition-all flex items-center gap-3 relative group ${
                          i18n.language === lang.code 
                            ? 'bg-gradient-to-r from-gold/20 to-orange/20 border-l-4 border-gold' 
                            : 'hover:bg-gradient-to-r hover:from-gold/5 hover:to-orange/5'
                        }`}
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className={`font-semibold ${i18n.language === lang.code ? 'text-gold' : 'text-gray-700'}`}>
                          {lang.label}
                        </span>
                        {i18n.language === lang.code && (
                          <motion.span 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto text-gold text-xl font-bold"
                          >
                            ✓
                          </motion.span>
                        )}
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-gray-700 hover:text-gold hover:bg-gold/10 rounded-lg transition-all border-2 border-gray-200 hover:border-gold"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t-2 border-gold/20 py-4 space-y-2"
            >
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-gold hover:bg-gradient-to-r hover:from-gold/10 hover:to-orange/10 rounded-lg transition-all font-semibold"
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/casablanca"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-gold hover:bg-gradient-to-r hover:from-gold/10 hover:to-orange/10 rounded-lg transition-all font-semibold"
              >
                {t('nav.casablanca')}
              </Link>
              <Link
                to="/dubai"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-gold hover:bg-gradient-to-r hover:from-gold/10 hover:to-orange/10 rounded-lg transition-all font-semibold"
              >
                {t('nav.dubai')}
              </Link>
              <Link
                to="/frankfurt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-gold hover:bg-gradient-to-r hover:from-gold/10 hover:to-orange/10 rounded-lg transition-all font-semibold"
              >
                {t('nav.frankfurt')}
              </Link>
              <Link
                to="/pristina"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-gold hover:bg-gradient-to-r hover:from-gold/10 hover:to-orange/10 rounded-lg transition-all font-semibold"
              >
                {t('nav.pristina')}
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Bottom Line - Gold Gradient */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </motion.header>
  );
};

export default Header;