import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, HardHat, Home, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const HomePage = () => {
  const { t } = useTranslation();

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section className="h-screen bg-gradient-to-br from-purple via-black to-purple flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-12">
              {t('hero.title')}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center gap-8 text-gold text-6xl font-bold"
          >
            {['01', '02', '03', '04'].map((num, index) => (
              <motion.span
                key={num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {num}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.5 },
            y: { duration: 2, repeat: Infinity },
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white hover:text-gold transition-colors"
        >
          <span className="text-sm uppercase tracking-wider">{t('hero.scrollDown')}</span>
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 text-center">
              {t('about.text')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-purple to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold text-white mb-6">{t('services.title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={HardHat}
              title={t('services.construction.title')}
              description={t('services.construction.description')}
              index={0}
            />
            <ServiceCard
              icon={Home}
              title={t('services.realEstate.title')}
              description={t('services.realEstate.description')}
              index={1}
            />
            <ServiceCard
              icon={Shield}
              title={t('services.security.title')}
              description={t('services.security.description')}
              index={2}
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-r from-gold to-orange">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-12">
              {t('cta.title')}
            </h2>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-purple text-white px-12 py-6 text-xl font-bold hover:bg-black transition-colors"
            >
              {t('cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
