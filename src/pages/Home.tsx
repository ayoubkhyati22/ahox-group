// src/pages/Home.tsx
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, TrendingUp, Shield, Globe2, Target,
  ArrowRight, CheckCircle2, Building2, Palmtree,
  Landmark, Mountain
} from 'lucide-react';
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
    { name: 'casablanca', icon: Building2, tag: t('locations.casablanca.subtitle'), image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop' },
    { name: 'dubai', icon: Palmtree, tag: t('locations.dubai.subtitle'), image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop' },
    { name: 'frankfurt', icon: Landmark, tag: t('locations.frankfurt.subtitle'), image: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=800&h=600&fit=crop' },
    { name: 'pristina', icon: Mountain, tag: t('locations.pristina.subtitle'), image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop' },
  ];

  const divisions = [
    {
      id: 'construction',
      logo: '/images/ahox-construction-management-logo.svg',
      color: '#14B3AA',
      link: '/construction'
    },
    {
      id: 'realEstate',
      logo: '/images/ahox-real-estate-logo.svg',
      color: '#E8D700',
      link: '/real-estate'
    },
    {
      id: 'security',
      logo: '/images/ahox-security-logo.svg',
      color: '#D10A11',
      link: '/security'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-black selection:bg-gold/30">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/60 to-black/90" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-block mb-6 px-5 py-2 bg-gold/5 backdrop-blur-xl border border-gold/30 rounded-full">
              <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em]">{t('about.tagline')}</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              {t('hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <motion.button
              onClick={scrollToContent}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold via-yellow-500 to-gold px-8 py-3.5 text-[12px] font-black text-black uppercase tracking-widest rounded-full shadow-2xl shadow-gold/20 overflow-hidden"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side Vertical Slider */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className="group flex items-center gap-4 transition-all outline-none"
            >
              <span className={`text-[10px] font-bold transition-all duration-500 ${index === currentImageIndex ? 'text-gold' : 'text-white/20 opacity-0 group-hover:opacity-100'}`}>
                0{index + 1}
              </span>
              <div className={`h-12 w-[1px] transition-all duration-700 relative overflow-hidden ${index === currentImageIndex ? 'bg-gold w-[2px]' : 'bg-white/10 group-hover:bg-white/30'}`}>
                {index === currentImageIndex && (
                  <motion.div
                    layoutId="activeSlide"
                    className="absolute inset-0 bg-white"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
          <span className="text-[9px] uppercase tracking-[0.5em] text-gold font-black opacity-60">{t('hero.scrollDown')}</span>
        </div>
      </section>

      {/* Philosophy Section - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Premium Tagline Badge */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-black rounded-full shadow-xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-teal rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-white font-black text-xs uppercase tracking-[0.3em]">
                  {t('about.tagline')}
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-teal rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>

            {/* Main Quote */}
            <div className="relative">
              {/* Decorative Quote Marks */}
              <div className="absolute -top-8 -left-4 md:-left-12 text-9xl font-serif text-gold/10 leading-none select-none">
                "
              </div>
              <div className="absolute -bottom-16 -right-4 md:-right-12 text-9xl font-serif text-gold/10 leading-none select-none">
                "
              </div>

              <blockquote className="relative text-center">
                <p className="text-3xl md:text-5xl lg:text-6xl leading-tight font-light text-slate-900 mb-8">
                  {t('about.text')}
                </p>
              </blockquote>
            </div>

            {/* Accent Line */}
            <div className="flex items-center justify-center gap-4 mt-16">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="w-3 h-3 rotate-45 border-2 border-gold" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            {/* Key Points Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-8 mt-20"
            >
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Global Network</h3>
                <p className="text-slate-600 text-sm">Connecting investors across four strategic markets</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal to-cyan-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Verified Partners</h3>
                <p className="text-slate-600 text-sm">Vetted construction companies and real estate professionals</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Sustainable Returns</h3>
                <p className="text-slate-600 text-sm">Tailored investment concepts with long-term value</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three Divisions Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-purple mb-6 uppercase tracking-tighter">
              {t('divisions.title')}
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              {t('divisions.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {divisions.map((division, index) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative"
              >
                <Link
                  to={division.link}
                  className="group block bg-white p-10 border-4 border-purple-light hover:border-gold transition-all duration-500 overflow-hidden cursor-pointer"
                  style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${division.color}20 0%, transparent 100%)` }}
                  />

                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={division.logo}
                        alt={t(`divisions.${division.id}.title`)}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h3
                      className="text-2xl font-bold text-center uppercase tracking-wide transition-colors duration-500"
                      style={{ color: division.color }}
                    >
                      {t(`divisions.${division.id}.title`)}
                    </h3>

                    <p className="text-gray-600 text-center leading-relaxed font-light">
                      {t(`divisions.${division.id}.description`)}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span style={{ color: division.color }}>{t('divisions.learnMore')}</span>
                      <ArrowRight className="w-4 h-4" style={{ color: division.color }} />
                    </div>
                  </div>

                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, transparent 50%, ${division.color}15 50%)` }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY INVEST WITH US: DISPLAY-TIER VERSION --- */}
      <section className="py-32 bg-[#f8fafc] relative overflow-hidden">

        {/* Architectural Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[2px] bg-[#14B3AA]" />
              <span className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.5em]">
                {t('value.engineering')}
              </span>
            </motion.div>

            <motion.h2
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter"
            >
              {t('value.proven')} <br />
              <span className="text-[#14B3AA]">{t('value.frameworks')}</span>
            </motion.h2>
          </div>

          {/* Luxury Tile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('value.benefits', { returnObjects: true }) as any[]).map((benefit, index) => {
              const icons = [Target, Shield, TrendingUp, Globe2, CheckCircle2, Building2];
              const Icon = icons[index % icons.length];
              const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* The "Display" Card Body */}
                  <div className={`
                    relative h-full p-10 
                    bg-white 
                    border border-slate-200/60
                    shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
                    rounded-sm overflow-hidden
                    transition-all duration-500
                    group-hover:shadow-[0_30px_60px_-15px_rgba(20,179,170,0.15)]
                    group-hover:border-[#14B3AA]/30
                  `}>

                    {/* Interior Subtle Gradient Shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Header: Roman & Icon */}
                    <div className="flex justify-between items-center mb-12 relative z-10">
                      <div className="flex flex-col">
                        <span className="text-[#14B3AA] text-xs font-black mb-1">{romanNumerals[index]}</span>
                        <div className="w-4 h-[2px] bg-slate-200 group-hover:w-8 group-hover:bg-[#14B3AA] transition-all" />
                      </div>
                      <div className="p-3 bg-slate-50 group-hover:bg-[#14B3AA]/5 rounded-lg transition-colors">
                        <Icon className="w-6 h-6 text-slate-400 group-hover:text-[#14B3AA] transition-all duration-500" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Footer Graphic - Active line */}
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-100 group-hover:bg-[#14B3AA] transition-colors duration-500" />
                  </div>

                  {/* Aesthetic Shadow Mirror (makes the card 'pop' off the page) */}
                  <div className="absolute -z-10 inset-4 bg-slate-400/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>

          {/* Integrated Trust-Bar */}
          <div className="mt-24 p-1 rounded-sm bg-gradient-to-r from-slate-200 via-white to-slate-200">
            <div className="flex flex-wrap justify-between items-center gap-10 py-10 px-12 bg-white">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
                  <Shield className="text-[#14B3AA] w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{t('common.riskProfile')}</p>
                  <p className="text-xl font-black text-slate-900 uppercase">{t('common.minimizedExposure')}</p>
                </div>
              </div>

              <div className="hidden lg:block w-px h-10 bg-slate-100" />

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center">
                  <TrendingUp className="text-[#14B3AA] w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{t('common.assetGrowth')}</p>
                  <p className="text-xl font-black text-slate-900 uppercase">{t('common.precisionTargets')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INVESTMENT PROCESS SECTION --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/5 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal rounded-full" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-600">
                How We Work
              </span>
              <div className="w-2 h-2 bg-teal rounded-full" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              {t('services.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              {t('services.subtitle')}
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal via-gold to-teal opacity-20" />

            {/* Steps */}
            <div className="space-y-16">
              {(t('services.steps', { returnObjects: true }) as any[]).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border-2 border-slate-100 rounded-lg p-8 hover:border-teal/30 hover:shadow-xl transition-all duration-300 group">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="px-4 py-1 bg-teal/10 rounded-full">
                          <span className="text-teal font-black text-sm">{step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-teal/20">
                      <span className="text-white font-black text-xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal/10 to-gold/10 rounded-full border border-teal/20">
              <CheckCircle2 className="w-5 h-5 text-teal" />
              <span className="text-slate-700 font-semibold">Structured Process · Professional Support · Proven Results</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TARGET AUDIENCE SECTION --- */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter">
                {t('targetAudience.title')}
              </h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
              <p className="text-2xl md:text-3xl text-white/80 font-light italic leading-relaxed">
                "{t('targetAudience.subtitle')}"
              </p>
            </motion.div>

            {/* Investor Types Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {(t('targetAudience.investors', { returnObjects: true }) as string[]).map((investor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-gold/50 transition-all duration-300">
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center">
                        <span className="text-black font-black text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                          {investor}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex flex-col gap-4 px-8 py-6 bg-gradient-to-r from-gold/10 to-teal/10 backdrop-blur-xl border border-gold/20 rounded-2xl">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  <span className="text-gold font-black text-xs uppercase tracking-[0.3em]">
                    Your Investment Partner
                  </span>
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                </div>
                <p className="text-white/90 text-lg font-light">
                  International real estate investments. <br />
                  <span className="font-semibold">Personally facilitated. Strategically structured.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              {t('cities.title')}
            </h2>
            <p className="text-zinc-500 text-lg max-w-xs text-right font-light italic">{t('cities.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cities.map((city) => (
              <motion.div key={city.name} whileHover={{ y: -10 }} transition={{ duration: 0.5 }}>
                <Link to={`/${city.name}`} className="group relative block h-[500px] overflow-hidden rounded-sm">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${city.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-2">{city.tag}</span>
                    <h3 className="text-white text-4xl font-black uppercase mb-4 group-hover:text-gold transition-colors">{t(`nav.${city.name}`)}</h3>
                    <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span>{t('locationPage.enterMarket')}</span> <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12 uppercase tracking-tighter leading-none">
            {t('cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:info@ahox-cm.de"
              whileHover={{ scale: 1.05 }}
              className="bg-gold text-black px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl shadow-gold/10"
            >
              {t('cta.button')}
            </motion.a>
            <motion.a
              href="tel:+496927278761"
              whileHover={{ scale: 1.05 }}
              className="bg-transparent border border-white/20 text-white px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all"
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