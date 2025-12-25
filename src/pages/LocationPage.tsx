import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface LocationPageProps {
  location: 'casablanca' | 'dubai' | 'frankfurt' | 'pristina';
}

const LocationPage = ({ location }: LocationPageProps) => {
  const { t } = useTranslation();

  const locationImages: Record<string, string> = {
    casablanca: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920',
    dubai: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1920',
    frankfurt: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1920',
    pristina: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920',
  };

  return (
    <div className="min-h-screen pt-24">
      <section
        className="h-[70vh] relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 27, 61, 0.7), rgba(0, 0, 0, 0.7)), url('${locationImages[location]}')`,
        }}
      >
        <div className="container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-12 h-12 text-gold" />
              <h1 className="text-7xl font-bold">{t(`locations.${location}.title`)}</h1>
            </div>
          </motion.div>
        </div>
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
            <p className="text-2xl leading-relaxed text-gray-800">
              {t(`locations.${location}.description`)}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-purple to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gold p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-black mb-8">
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

export default LocationPage;
