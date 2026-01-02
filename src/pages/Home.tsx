import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, TrendingUp, Shield, Globe2,
  ArrowRight, Building2, Palmtree,
  Landmark, Mountain, Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useImages, getCityImage, getLogo } from '../hooks/useImages';

const MovingLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.line
        x1="15" y1="0" x2="15" y2="100"
        stroke="rgba(255, 255, 255, 0.05)"
        strokeWidth="0.05"
        animate={{ x1: [15, 16, 15] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.line
        x1="85" y1="0" x2="85" y2="100"
        stroke="rgba(197, 160, 89, 0.1)"
        strokeWidth="0.05"
        animate={{ x1: [85, 84, 85] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      {[...Array(6)].map((_, i) => (
        <motion.line
          key={i}
          x1="0" y1={18 * i} x2="100" y2={18 * i + 1}
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="0.02"
          animate={{ y1: [18 * i, 18 * i + 2, 18 * i] }}
          transition={{ duration: 10, delay: i * 0.5, repeat: Infinity }}
        />
      ))}
    </svg>
  </div>
);

const HomePage = () => {
  const { t } = useTranslation();
  const images = useImages();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = images.hero.slides;

  const cities = [
    { name: 'casablanca', icon: Building2, tag: t('locations.casablanca.subtitle'), image: getCityImage('casablanca', 'thumbnail') },
    { name: 'dubai', icon: Palmtree, tag: t('locations.dubai.subtitle'), image: getCityImage('dubai', 'thumbnail') },
    { name: 'frankfurt', icon: Landmark, tag: t('locations.frankfurt.subtitle'), image: getCityImage('frankfurt', 'thumbnail') },
    { name: 'pristina', icon: Mountain, tag: t('locations.pristina.subtitle'), image: getCityImage('pristina', 'thumbnail') },
  ];

  const divisions = [
    { id: 'construction', logo: getLogo('construction'), color: '#14B3AA', link: '/construction' },
    { id: 'realEstate', logo: getLogo('realEstate'), color: '#E8D700', link: '/real-estate' },
    { id: 'security', logo: getLogo('security'), color: '#D10A11', link: '/security' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToContent = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#0A0A0A] selection:bg-gold/30 text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex].url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/95 via-transparent to-[#0A0A0A]" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-8 px-6 py-2 border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-zinc-400 font-bold text-[10px] uppercase tracking-[0.5em]">{t('about.tagline')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.8] tracking-tighter uppercase italic italic-subtle">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <motion.button
              onClick={scrollToContent}
              whileHover={{ scale: 1.05 }}
              className="px-12 py-5 bg-gold text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all"
            >
              {t('hero.cta')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="py-32 md:py-40 relative bg-[#111111]">
        <MovingLines />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
             <Compass className="w-10 h-10 md:w-12 md:h-12 text-zinc-600 mx-auto mb-10 opacity-50" />
             <h2 className="text-2xl md:text-4xl lg:text-5xl font-extralight leading-tight text-zinc-200">
               {t('about.text')}
             </h2>
             
             <div className="mt-20 grid md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center">
                   <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group hover:border-gold/50 transition-colors">
                      <Globe2 className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-gold transition-colors" />
                   </div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t('common.international')}</p>
                </div>
                <div className="flex flex-col items-center">
                   <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group hover:border-teal/50 transition-colors">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-teal transition-colors" />
                   </div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t('common.stability')}</p>
                </div>
                <div className="flex flex-col items-center">
                   <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group hover:border-gold/50 transition-colors">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-gold transition-colors" />
                   </div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{t('common.strategy')}</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THREE DIVISIONS */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 text-white">
              {t('divisions.title')}
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto opacity-30" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {divisions.map((div, i) => (
              <motion.div key={div.id} whileHover={{ y: -10 }}>
                <Link to={div.link} className="block relative bg-[#141414] p-10 md:p-12 border border-white/5 h-full group hover:border-zinc-700 transition-all duration-500">
                  <div className="relative z-10 text-center">
                    <img src={div.logo} alt={div.id} className="h-16 md:h-20 mx-auto mb-8 md:mb-10 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4 tracking-tighter" style={{ color: div.color }}>{t(`divisions.${div.id}.title`)}</h3>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed mb-6 md:mb-8">{t(`divisions.${div.id}.description`)}</p>
                    <div className="flex justify-center items-center gap-2 text-zinc-600 group-hover:text-white transition-colors">
                        <span className="text-[9px] font-black uppercase tracking-widest">{t('divisions.inquireNow')}</span>
                        <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY INVEST */}
      <section className="py-32 md:py-40 bg-[#111111] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-end mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none flex-1">
              <span className="text-zinc-600 block">{t('value.investIn')}</span> {t('value.proven')}
            </h2>
            <p className="text-zinc-500 max-w-md font-light uppercase text-xs tracking-widest pb-4 border-b border-zinc-800">
              {t('value.technicalExcellence')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             {(t('value.benefits', { returnObjects: true }) as any[]).map((benefit, index) => (
                <div key={index} className="bg-[#1A1A1A] p-10 md:p-12 group border-l border-zinc-800 hover:border-gold transition-all duration-500">
                  <span className="text-2xl md:text-3xl font-black text-white/5 block mb-6 md:mb-8 group-hover:text-gold/20 transition-colors">0{index + 1}</span>
                  <h3 className="text-base md:text-lg font-black uppercase mb-3 md:mb-4 tracking-widest">{benefit.title}</h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">{benefit.description}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-32 md:py-40 bg-[#0A0A0A] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-32 md:space-y-40">
            {(t('services.steps', { returnObjects: true }) as any[]).map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative grid md:grid-cols-2 gap-16 md:gap-20 items-center"
              >
                <div className={`relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                   <span className="absolute -top-16 md:-top-24 -left-6 md:-left-10 text-[120px] md:text-[180px] font-black text-white/[0.02] select-none">{step.number}</span>
                   <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-5 md:mb-6 relative z-10">{step.title}</h3>
                   <p className="text-zinc-500 text-base md:text-lg font-extralight leading-relaxed italic">{step.description}</p>
                </div>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TARGET AUDIENCE */}
      <section className="py-24 md:py-32 bg-[#121212]">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 md:gap-32">
              <div>
                <span className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">{t('targetAudience.profiles')}</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter italic mb-6 md:mb-8 italic-subtle">{t('targetAudience.title')}</h2>
                <div className="p-6 md:p-8 border-l-2 border-zinc-700 bg-white/[0.02]">
                   <p className="text-xl md:text-2xl font-light italic text-zinc-400 leading-snug">"{t('targetAudience.subtitle')}"</p>
                </div>
              </div>
              <div className="space-y-4 self-center">
                 {(t('targetAudience.investors', { returnObjects: true }) as string[]).map((investor, idx) => (
                    <motion.div key={idx} whileHover={{ x: 10 }} className="p-5 md:p-6 border border-zinc-800 flex justify-between items-center group cursor-pointer hover:bg-zinc-800/30">
                       <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{investor}</span>
                       <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-gold" />
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 7. CITIES */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
           <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-16 md:mb-20 italic italic-subtle text-white">{t('cities.locations')}</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
             {cities.map((city) => (
               <Link to={`/${city.name}`} key={city.name}>
                  <motion.div className="h-[400px] md:h-[500px] relative group overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
                     <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${city.image})` }} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                     <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                        <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2">{city.tag}</span>
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">{t(`nav.${city.name}`)}</h3>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center -mb-16 md:-mb-20 group-hover:mb-0 transition-all duration-500">
                           <ArrowRight className="text-black w-5 h-5 md:w-6 md:h-6" />
                        </div>
                     </div>
                  </motion.div>
               </Link>
             ))}
           </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .italic-subtle {
          font-style: italic;
          letter-spacing: -0.06em;
        }
      `}} />
    </div>
  );
};

export default HomePage;