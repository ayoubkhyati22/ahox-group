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

      {/* Cities Section - Perfect Modern Design */}
      <section className="py-32 relative overflow-hidden bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
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
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-3 bg-gradient-to-r from-purple/10 to-gold/10 backdrop-blur-sm border-2 border-purple/20 px-8 py-3 rounded-full">
                <div className="w-2 h-2 bg-purple rounded-full animate-pulse"></div>
                <span className="text-purple font-bold text-sm uppercase tracking-wider">Global Network</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8"
            >
              <span className="bg-gradient-to-r from-purple via-gold to-purple bg-clip-text text-transparent">
                OUR GLOBAL PRESENCE
              </span>
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Operating in 4 strategic locations across continents, bringing premium construction and real estate services worldwide.
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-purple via-gold to-purple"
            ></motion.div>
          </motion.div>

          {/* Cities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {cities.map((city, index) => {
              const Icon = city.icon;
              return (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    to={`/${city.name}`}
                    className="block relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700"
                  >
                    {/* Card Container */}
                    <div className="relative h-[450px] overflow-hidden">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-1000"
                          style={{ backgroundImage: `url(${city.image})` }}
                        />
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-75 group-hover:opacity-85 transition-opacity duration-700`} />
                        
                        {/* Animated Mesh Pattern */}
                        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)`
                          }}></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col">
                        {/* Top Section - Icon */}
                        <div className="p-8 flex justify-between items-start">
                          <motion.div
                            animate={{ 
                              rotate: [0, 5, -5, 0],
                              y: [0, -8, 0]
                            }}
                            transition={{ 
                              duration: 4, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border-2 border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-500 shadow-2xl"
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </motion.div>

                          {/* Index Number */}
                          <div className="text-white/30 font-black text-7xl leading-none group-hover:text-white/50 transition-colors duration-500">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Bottom Section - Info */}
                        <div className="mt-auto p-8 bg-gradient-to-t from-black/60 to-transparent">
                          {/* City Name */}
                          <motion.h3 
                            className="text-white font-black text-4xl mb-4 transform group-hover:translate-x-2 transition-transform duration-500"
                          >
                            {t(`nav.${city.name}`)}
                          </motion.h3>

                          {/* Description */}
                          <p className="text-white/90 text-sm mb-6 line-clamp-3 leading-relaxed transform group-hover:translate-x-2 transition-transform duration-500 delay-75">
                            {t(`locations.${city.name}.description`).substring(0, 120)}...
                          </p>

                          {/* Learn More Button */}
                          <div className="flex items-center gap-3 text-white font-bold opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:bg-white/30 transition-all">
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <span className="text-lg">Explore</span>
                          </div>
                        </div>

                        {/* Hover Border Effect */}
                        <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 rounded-3xl transition-all duration-500"></div>
                      </div>

                      {/* Corner Decorations */}
                      <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-white/20 group-hover:border-white/50 rounded-tl-3xl transition-colors duration-500"></div>
                      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-white/20 group-hover:border-white/50 rounded-br-3xl transition-colors duration-500"></div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-purple to-gold bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                04
              </div>
              <div className="text-gray-600 font-semibold">Global Offices</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-purple to-gold bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                3
              </div>
              <div className="text-gray-600 font-semibold">Continents</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-purple to-gold bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-600 font-semibold">Support</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black bg-gradient-to-r from-purple to-gold bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-600 font-semibold">Commitment</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Perfect Modern Design */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-3 bg-gold/10 backdrop-blur-sm border border-gold/30 px-6 py-2 rounded-full">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                {t('services.title')}
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              {t('services.subtitle')}
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service 1 - Construction */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-gold/50 p-10 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center">
                  <span className="text-6xl font-black text-gold/20 group-hover:text-gold/40 transition-colors">01</span>
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Logo */}
                  <div className="mb-8 w-28 h-28 flex items-center justify-center bg-white/5 backdrop-blur-sm border-2 border-gold/30 group-hover:border-gold group-hover:scale-110 transition-all duration-500 p-4 flex-shrink-0">
                    <img 
                      src="https://ahox-cm.de/wp-content/uploads/2023/07/Asset-16.png" 
                      alt={t('services.construction.title')}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors flex-shrink-0">
                    {t('services.construction.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors flex-grow">
                    {t('services.construction.description')}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-gold font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex-shrink-0">
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/20 group-hover:border-gold/60 transition-colors"></div>
              </div>
            </motion.div>

            {/* Service 2 - Real Estate */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-gold/50 p-10 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center">
                  <span className="text-6xl font-black text-gold/20 group-hover:text-gold/40 transition-colors">02</span>
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Logo */}
                  <div className="mb-8 w-28 h-28 flex items-center justify-center bg-white/5 backdrop-blur-sm border-2 border-gold/30 group-hover:border-gold group-hover:scale-110 transition-all duration-500 p-4 flex-shrink-0">
                    <img 
                      src="https://ahox-cm.de/wp-content/uploads/2023/09/ahox-logo-real-estate-v1.png" 
                      alt={t('services.realEstate.title')}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors flex-shrink-0">
                    {t('services.realEstate.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors flex-grow">
                    {t('services.realEstate.description')}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-gold font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex-shrink-0">
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/20 group-hover:border-gold/60 transition-colors"></div>
              </div>
            </motion.div>

            {/* Service 3 - Security */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-gold/50 p-10 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center">
                  <span className="text-6xl font-black text-gold/20 group-hover:text-gold/40 transition-colors">03</span>
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Logo */}
                  <div className="mb-8 w-28 h-28 flex items-center justify-center bg-white/5 backdrop-blur-sm border-2 border-gold/30 group-hover:border-gold group-hover:scale-110 transition-all duration-500 p-4 flex-shrink-0">
                    <img 
                      src="https://ahox-cm.de/wp-content/uploads/2023/07/Asset-14-901x1024.png" 
                      alt={t('services.security.title')}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors flex-shrink-0">
                    {t('services.security.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors flex-grow">
                    {t('services.security.description')}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-gold font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex-shrink-0">
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/20 group-hover:border-gold/60 transition-colors"></div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          ></motion.div>
        </div>
      </section>

      {/* CTA Section - Perfect Design with Background Image */}
      <section className="relative py-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop)',
            }}
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-purple/80 to-black/85"></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 215, 0, 0.1) 50px, rgba(255, 215, 0, 0.1) 51px),
                               repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255, 215, 0, 0.1) 50px, rgba(255, 215, 0, 0.1) 51px)`
            }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gold rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
                  opacity: 0,
                }}
                animate={{
                  y: [null, Math.random() * -200 - 100],
                  opacity: [0, 0.6, 0],
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
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block mb-8"
              >
                <div className="flex items-center gap-3 bg-gold/20 backdrop-blur-md border-2 border-gold px-8 py-3 rounded-full">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                  <span className="text-gold font-bold text-sm uppercase tracking-wider">Start Your Project</span>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
              >
                <span className="block mb-4">{t('cta.title')}</span>
                <span className="block bg-gradient-to-r from-gold via-orange to-gold bg-clip-text text-transparent">
                  Let's Build Together
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Transform your vision into reality with our expert team across construction, real estate, and security services.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                {/* Primary Button */}
                <motion.a
                  href="mailto:info@ahox-cm.de"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold to-orange px-10 py-5 text-lg font-bold text-white overflow-hidden shadow-2xl"
                >
                  <span className="relative z-10">{t('cta.button')}</span>
                  <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-gold to-orange transition-opacity"></div>
                </motion.a>

                {/* Secondary Button */}
                <motion.a
                  href="tel:+496927278761"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-gold px-10 py-5 text-lg font-bold text-white transition-all"
                >
                  <span>Call Us Now</span>
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center text-gray-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Email us</p>
                    <p className="font-semibold">info@ahox-cm.de</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Call us</p>
                    <p className="font-semibold">+49 69 272 787 61</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Visit us</p>
                    <p className="font-semibold">Frankfurt, Germany</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </section>
    </div>
  );
};

export default HomePage;