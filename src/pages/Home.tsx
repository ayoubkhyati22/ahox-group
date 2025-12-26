// src/pages/Home.tsx
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, TrendingUp, Shield, Globe2, Target, ArrowRight, CheckCircle2, Building2, Palmtree, Landmark, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&h=1080&fit=crop',
  ];

  const cities = [
    {
      name: 'casablanca',
      icon: Building2,
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop',
      tag: 'Emerging Market',
    },
    {
      name: 'dubai',
      icon: Palmtree,
      gradient: 'from-amber-600 via-orange-500 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
      tag: 'High Growth',
    },
    {
      name: 'frankfurt',
      icon: Landmark,
      gradient: 'from-purple-600 via-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=800&h=600&fit=crop',
      tag: 'Stable Returns',
    },
    {
      name: 'pristina',
      icon: Mountain,
      gradient: 'from-emerald-600 via-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
      tag: 'First Mover',
    },
  ];

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

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="flex items-center gap-2 bg-gold/10 backdrop-blur-xl border border-gold/30 px-5 py-2 rounded-full">
                  <Globe2 className="w-4 h-4 text-gold" />
                  <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em]">
                    {t('about.tagline')}
                  </span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* Reduced Button Size */}
              <motion.button
                onClick={scrollToContent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold via-orange-500 to-gold px-7 py-3 text-sm font-bold text-black overflow-hidden rounded-full shadow-xl shadow-gold/20"
              >
                <span className="relative z-10 uppercase tracking-wider">{t('hero.cta')}</span>
                <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Side Vertical Slider Indicators - REDESIGNED */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className="group flex items-center gap-4 transition-all"
            >
              <span className={`text-[10px] font-bold transition-all duration-500 ${
                index === currentImageIndex ? 'text-gold opacity-100' : 'text-white opacity-0 group-hover:opacity-40'
              }`}>
                0{index + 1}
              </span>
              <div className={`h-12 w-[2px] transition-all duration-500 relative overflow-hidden ${
                index === currentImageIndex ? 'bg-gold' : 'bg-white/20 group-hover:bg-white/40'
              }`}>
                {index === currentImageIndex && (
                  <motion.div 
                    layoutId="activeSlide"
                    className="absolute inset-0 bg-white"
                    initial={{ y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <motion.button
            onClick={scrollToContent}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold/0 via-gold to-gold/0"></div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold">{t('hero.scrollDown')}</span>
          </motion.button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] font-black text-gold mb-6 block">Our Philosophy</span>
            <p className="text-2xl md:text-4xl leading-snug text-gray-900 font-light italic">
              "{t('about.text')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-[#050505] relative border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              {t('value.title')}
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {Array.from({ length: 6 }).map((_, index) => {
              const icons = [Target, Shield, TrendingUp, Globe2, CheckCircle2, Building2];
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-500 group"
                >
                  <Icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">{t(`value.benefits.${index}.title`)}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(`value.benefits.${index}.description`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-gold font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Markets</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter">
                {t('cities.title')}
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-md font-light">
              {t('cities.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city, index) => (
              <motion.div key={city.name} whileHover={{ scale: 0.99 }}>
                <Link to={`/${city.name}`} className="group relative block h-[450px] overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${city.image})` }} />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80`} />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{city.tag}</span>
                    <h3 className="text-white text-4xl font-black uppercase mb-4">{t(`nav.${city.name}`)}</h3>
                    <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-32 overflow-hidden bg-zinc-950">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter">
            {t('cta.title')}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Reduced Footer Buttons */}
            <motion.a
              href="mailto:info@ahox-cm.de"
              whileHover={{ scale: 1.05 }}
              className="bg-gold text-black px-8 py-3.5 text-sm font-black uppercase tracking-widest rounded-full hover:bg-white transition-colors"
            >
              {t('cta.button')}
            </motion.a>
            <motion.a
              href="tel:+496927278761"
              whileHover={{ scale: 1.05 }}
              className="bg-transparent border border-white/20 text-white px-8 py-3.5 text-sm font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors"
            >
              {t('cta.secondaryButton')}
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;