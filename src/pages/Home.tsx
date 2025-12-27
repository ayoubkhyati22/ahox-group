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

// --- Sub-component for the Bento Grid Cards ---
const BenefitCard = ({ index, icon: Icon, title, desc, className, isLarge = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true }}
    className={`group relative p-8 border border-white/10 overflow-hidden flex flex-col justify-between hover:border-gold/40 transition-all duration-700 ${className}`}
  >
    {/* Animated background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative z-10">
      <div className={`mb-6 flex items-center justify-center rounded-full border border-gold/20 group-hover:border-gold/50 transition-all duration-500 bg-black/40 backdrop-blur-sm ${isLarge ? 'w-16 h-16' : 'w-12 h-12'}`}>
        <Icon className={`${isLarge ? 'w-8 h-8' : 'w-5 h-5'} text-gold group-hover:scale-110 transition-transform`} />
      </div>
      <h3 className={`${isLarge ? 'text-2xl' : 'text-lg'} font-bold text-white mb-3 uppercase tracking-wider group-hover:text-gold transition-colors duration-500`}>
        {title}
      </h3>
      <p className={`text-zinc-400 font-light leading-relaxed ${isLarge ? 'text-base' : 'text-xs line-clamp-3 group-hover:line-clamp-none'}`}>
        {desc}
      </p>
    </div>

    {/* Background Numbering */}
    <div className="absolute bottom-4 right-6 text-5xl font-black text-white/[0.02] group-hover:text-gold/[0.05] transition-colors pointer-events-none">
      0{index + 1}
    </div>
  </motion.div>
);

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
    { name: 'casablanca', icon: Building2, tag: 'Emerging Market', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop' },
    { name: 'dubai', icon: Palmtree, tag: 'High Growth', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop' },
    { name: 'frankfurt', icon: Landmark, tag: 'Stable Returns', image: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=800&h=600&fit=crop' },
    { name: 'pristina', icon: Mountain, tag: 'First Mover', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop' },
  ];

  // Three divisions with logo URLs from the uploaded images
  const divisions = [
    {
      id: 'construction',
      logo: '/src/images/ahox-construction-management-logo.svg', // Teal Construction logo
      color: '#14B3AA',
      link: '/construction'
    },
    {
      id: 'realEstate',
      logo: '/src/images/ahox-real-estate-logo.svg', // Yellow Real Estate logo (using same for now)
      color: '#E8D700',
      link: '/real-estate'
    },
    {
      id: 'security',
      logo: '/src/images/ahox-security-logo.svg', // Red Security logo (using same for now)
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

        {/* Right Side Vertical Luxury Slider Indicators */}
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

      {/* Philosophy Section */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-gold font-black text-[11px] uppercase tracking-[0.5em] mb-8 block">Investment Philosophy</span>
            <p className="text-2xl md:text-4xl leading-snug font-light italic">"{t('about.text')}"</p>
          </motion.div>
        </div>
      </section>

      {/* Three Divisions Section - NEW */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
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

          {/* Three Logo Cards */}
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
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Animated background gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${division.color}20 0%, transparent 100%)` }}
                  />

                  {/* Logo */}
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={division.logo}
                        alt={t(`divisions.${division.id}.title`)}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl font-bold text-center uppercase tracking-wide transition-colors duration-500"
                      style={{ color: division.color }}
                    >
                      {t(`divisions.${division.id}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center leading-relaxed font-light">
                      {t(`divisions.${division.id}.description`)}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span style={{ color: division.color }}>Learn More</span>
                      <ArrowRight className="w-4 h-4" style={{ color: division.color }} />
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, transparent 50%, ${division.color}15 50%)`
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid: Why Invest With Us */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-gold"></div>
                <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em]">Strategic Excellence</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold/50">Invest</span> <br />
                With AHOX?
              </h2>
            </motion.div>
            <p className="text-zinc-500 text-lg max-w-sm font-light border-l border-gold/20 pl-6 leading-relaxed">
              {t('value.subtitle')}
            </p>
          </div>

          {/* Creative Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[250px]">
            {/* Row 1 */}
            <BenefitCard 
              index={0} icon={Target} title={t('value.benefits.0.title')} desc={t('value.benefits.0.description')}
              className="md:col-span-3 md:row-span-2 bg-gradient-to-br from-white/[0.05] to-transparent" isLarge
            />
            <BenefitCard 
              index={1} icon={Shield} title={t('value.benefits.1.title')} desc={t('value.benefits.1.description')}
              className="md:col-span-3 md:row-span-1 bg-white/[0.02]"
            />
            
            {/* Row 2 */}
            <BenefitCard 
              index={2} icon={TrendingUp} title={t('value.benefits.2.title')} desc={t('value.benefits.2.description')}
              className="md:col-span-2 md:row-span-1 bg-white/[0.02]"
            />
            <BenefitCard 
              index={3} icon={Globe2} title={t('value.benefits.3.title')} desc={t('value.benefits.3.description')}
              className="md:col-span-2 md:row-span-2 border-gold/10 bg-gold/[0.01]" isLarge
            />
            
            {/* Row 3 */}
            <BenefitCard 
              index={4} icon={CheckCircle2} title={t('value.benefits.4.title')} desc={t('value.benefits.4.description')}
              className="md:col-span-2 md:row-span-1 bg-white/[0.02]"
            />
            <BenefitCard 
              index={5} icon={Building2} title={t('value.benefits.5.title')} desc={t('value.benefits.5.description')}
              className="md:col-span-2 md:row-span-1 bg-white/[0.02]"
            />
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
                      <span>Enter Market</span> <ArrowRight className="w-4 h-4" />
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