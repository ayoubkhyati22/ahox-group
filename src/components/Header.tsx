import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Building2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Header = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'darija', label: 'ع' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'darija' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-purple/95 backdrop-blur-sm border-b-2 border-gold"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Building2 className="w-8 h-8 text-gold group-hover:text-orange transition-colors" />
            <span className="text-2xl font-bold text-white">PREMIUM BUILD</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-gold transition-colors font-medium"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/casablanca"
              className="text-white hover:text-gold transition-colors font-medium"
            >
              {t('nav.casablanca')}
            </Link>
            <Link
              to="/dubai"
              className="text-white hover:text-gold transition-colors font-medium"
            >
              {t('nav.dubai')}
            </Link>
            <Link
              to="/frankfurt"
              className="text-white hover:text-gold transition-colors font-medium"
            >
              {t('nav.frankfurt')}
            </Link>
            <Link
              to="/pristina"
              className="text-white hover:text-gold transition-colors font-medium"
            >
              {t('nav.pristina')}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-gold" />
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-3 py-1 font-medium transition-all ${
                    i18n.language === lang.code
                      ? 'bg-gold text-purple'
                      : 'bg-transparent text-white hover:text-gold'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
