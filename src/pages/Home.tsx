import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Building2, Palmtree, Landmark, Mountain, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1541976590-713941681591?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=1080&fit=crop',
  ];

  const cities = [
    {
      name: 'casablanca',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop',
    },
    {
      name: 'dubai',
      icon: Palmtree,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
    },
    {
      name: 'frankfurt',
      icon: Landmark,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=800&h=600&fit=crop',
    },
    {
      name: 'pristina',
      icon: Mountain,
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
    },
  ];

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.2,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={1}>
            <motion.div
              key={currentImageIndex}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.7 },
                rotateY: { duration: 0.7 },
              }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay with gradient */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-purple/80 via-black/70 to-purple/80"
              />
              
              {/* Animated particles overlay */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gold rounded-full"
                    initial={{
                      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                      opacity: 0,
                    }}
                    animate={{
                      y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content - Left Aligned */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Label */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="flex items-center gap-3 bg-gold/20 backdrop-blur-md border-2 border-gold px-6 py-3 rounded-full">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                  <span className="text-gold font-bold text-sm uppercase tracking-wider">Premium Construction</span>
                </div>
              </motion.div>

              {/* Title with modern design */}
              <motion.h1 
                className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
              >
                Building excellence across four continents with premium construction, real estate, and security solutions.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                onClick={scrollToContent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold to-orange px-8 py-4 text-lg font-bold text-white overflow-hidden"
              >
                <span className="relative z-10">Explore Our Work</span>
                <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Scroll Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-6"
        >
          {/* Vertical Line */}
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
          
          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToContent}
            className="flex flex-col items-center gap-2 group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-8 h-12 border-2 border-gold rounded-full flex items-start justify-center p-2 group-hover:border-orange transition-colors">
              <motion.div
                className="w-1.5 h-1.5 bg-gold rounded-full group-hover:bg-orange"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span className="text-gold text-xs font-semibold uppercase tracking-wider rotate-90 origin-center whitespace-nowrap mt-8 group-hover:text-orange transition-colors">
              Scroll
            </span>
          </motion.button>

          {/* Vertical Line */}
          <div className="w-px h-24 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>

        {/* Image indicators - Bottom Center */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'w-12 bg-gold shadow-lg shadow-gold/50' 
                  : 'w-8 bg-white/30 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gold/30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gold/30"></div>
      </section>

      {/* About Section */}
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

      {/* Cities Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold text-purple mb-6">OUR GLOBAL PRESENCE</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Operating in 4 strategic locations across continents, bringing premium construction and real estate services worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => {
              const Icon = city.icon;
              return (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/${city.name}`}
                    className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url(${city.image})` }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-70 group-hover:opacity-80 transition-opacity duration-500`} />
                      
                      <div className="absolute top-6 right-6">
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors"
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>

                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="text-white font-bold text-3xl mb-2 transform group-hover:translate-y-[-8px] transition-transform duration-500">
                          {t(`nav.${city.name}`)}
                        </h3>
                        <p className="text-white/90 text-sm mb-4 line-clamp-2">
                          {t(`locations.${city.name}.description`).substring(0, 100)}...
                        </p>
                        
                        <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>

                      <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-white/30 rounded-tl-2xl" />
                      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-white/30 rounded-br-2xl" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-purple-light to-gray-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold text-purple mb-6">{t('services.title')}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              logo="https://ahox-cm.de/wp-content/uploads/2023/07/Asset-16.png"
              title={t('services.construction.title')}
              description={t('services.construction.description')}
              index={0}
            />
            <ServiceCard
              logo="https://ahox-cm.de/wp-content/uploads/2023/09/ahox-logo-real-estate-v1.png"
              title={t('services.realEstate.title')}
              description={t('services.realEstate.description')}
              index={1}
            />
            <ServiceCard
              logo="https://ahox-cm.de/wp-content/uploads/2023/07/Asset-14-901x1024.png"
              title={t('services.security.title')}
              description={t('services.security.description')}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-gold to-orange">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
              {t('cta.title')}
            </h2>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-purple px-12 py-6 text-xl font-bold hover:bg-purple-light transition-colors"
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