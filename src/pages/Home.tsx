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
      {/* Hero Section - Investment Focus */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        {/* Dynamic Background */}
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
              
              {/* Animated Grid Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full" style={{
                  backgroundImage: `linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px',
                }}/>
              </div>
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
              {/* Tagline Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-8"
              >
                <div className="flex items-center gap-3 bg-gold/20 backdrop-blur-xl border border-gold/40 px-8 py-4 rounded-full">
                  <Globe2 className="w-5 h-5 text-gold" />
                  <span className="text-gold font-bold text-sm uppercase tracking-[0.2em]">
                    {t('about.tagline')}
                  </span>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* CTA Button - MODIFIED SIZE */}
              <motion.button
                onClick={scrollToContent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-gold via-orange to-gold px-8 py-4 text-lg font-bold text-black overflow-hidden rounded-full shadow-2xl shadow-gold/30"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <ChevronRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.button
            onClick={scrollToContent}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3 text-gold hover:text-orange transition-colors"
          >
            <div className="w-8 h-14 border-2 border-current rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-2 h-2 bg-current rounded-full"
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold">{t('hero.scrollDown')}</span>
          </motion.button>
        </motion.div>

        {/* Image Progress Dots */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'w-16 bg-gold shadow-lg shadow-gold/50' 
                  : 'w-8 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section - Investment Philosophy */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-block mb-8 px-6 py-3 bg-black/5 rounded-full">
              <span className="text-sm uppercase tracking-[0.2em] font-bold text-gray-600">Our Philosophy</span>
            </div>
            
            <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed text-gray-900 font-light mb-8">
              {t('about.text')}
            </p>

            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6 px-6 py-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full">
              <span className="text-sm uppercase tracking-[0.2em] font-bold text-gold">The AHOX Advantage</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                {t('value.title')}
              </span>
            </h2>
            
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              {t('value.subtitle')}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Array.from({ length: 6 }).map((_, index) => {
              const icons = [Target, Shield, TrendingUp, Globe2, CheckCircle2, Building2];
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gold/50 p-8 transition-all duration-500 relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-orange/10 transition-all duration-500"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 mb-6 w-16 h-16 flex items-center justify-center bg-gold/10 border-2 border-gold/30 group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                        {t(`value.benefits.${index}.title`)}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {t(`value.benefits.${index}.description`)}
                      </p>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 text-6xl font-black text-gold/10 group-hover:text-gold/20 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6 px-6 py-3 bg-black/5 rounded-full">
              <span className="text-sm uppercase tracking-[0.2em] font-bold text-gray-600">How It Works</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              {t('services.title')}
            </h2>
            
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="max-w-5xl mx-auto">
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Connector Line */}
                {index < 4 && (
                  <div className="absolute left-12 top-24 w-0.5 h-full bg-gradient-to-b from-gold to-orange"></div>
                )}

                <div className="flex gap-8 items-start group">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-gold to-orange flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-gold/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    {t(`services.steps.${index}.number`)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gold transition-colors">
                      {t(`services.steps.${index}.title`)}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {t(`services.steps.${index}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section - Investment Markets */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6 px-6 py-3 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full">
              <span className="text-sm uppercase tracking-[0.2em] font-bold text-gold">4 Strategic Cities</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                {t('cities.title')}
              </span>
            </h2>
            
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              {t('cities.subtitle')}
            </p>
          </motion.div>

          {/* Cities Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {cities.map((city, index) => {
              const Icon = city.icon;
              return (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    to={`/${city.name}`}
                    className="block relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-gold/20 transition-all duration-700"
                  >
                    <div className="relative h-[500px] overflow-hidden">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-1000"
                        style={{ backgroundImage: `url(${city.image})` }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${city.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-700`} />

                      {/* Content */}
                      <div className="relative h-full flex flex-col">
                        {/* Top - Icon & Tag */}
                        <div className="p-8 flex justify-between items-start">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                            className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border-2 border-white/40 group-hover:bg-white/30 transition-all shadow-2xl"
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </motion.div>

                          <div className="px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/40 rounded-full">
                            <span className="text-white text-xs font-bold uppercase tracking-wider">{city.tag}</span>
                          </div>
                        </div>

                        {/* Bottom - Info */}
                        <div className="mt-auto p-8 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-white font-black text-5xl mb-4 transform group-hover:translate-x-2 transition-transform">
                            {t(`nav.${city.name}`)}
                          </h3>

                          <p className="text-white/90 text-lg mb-2 font-semibold">
                            {t(`locations.${city.name}.subtitle`)}
                          </p>

                          <p className="text-white/80 text-sm mb-6 line-clamp-2 leading-relaxed">
                            {t(`locations.${city.name}.description`).substring(0, 100)}...
                          </p>

                          {/* Learn More */}
                          <div className="flex items-center gap-3 text-white font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <span className="text-lg">Explore Market</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple/85 to-black/90"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                  y: Math.random() * 800,
                  opacity: 0,
                }}
                animate={{
                  y: [null, Math.random() * -200 - 100],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-block mb-8 px-8 py-4 bg-gold/20 backdrop-blur-xl border-2 border-gold/40 rounded-full">
              <span className="text-gold font-bold text-sm uppercase tracking-[0.2em]">Ready to Invest?</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              {t('cta.title')}
            </h2>

            <p className="text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>

            {/* CTA Buttons - MODIFIED SIZES */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="mailto:info@ahox-cm.de"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-gold via-orange to-gold px-8 py-4 text-lg font-bold text-black overflow-hidden rounded-full shadow-2xl shadow-gold/40"
              >
                <span className="relative z-10">{t('cta.button')}</span>
                <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </motion.a>

              <motion.a
                href="tel:+496927278761"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:border-gold px-8 py-4 text-lg font-bold text-white transition-all rounded-full"
              >
                <span>{t('cta.secondaryButton')}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;