import { useTranslation } from 'react-i18next';
import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black text-white py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <Building2 className="w-10 h-10 text-gold" />
            <span className="text-3xl font-bold">PREMIUM BUILD</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} PREMIUM BUILD. {t('footer.rights')}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
