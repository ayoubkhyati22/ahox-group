import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Building2, Users, Award, TrendingUp, ArrowRight, Compass } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { getCityImage } from '../hooks/useImages';

// Background Moving Lines (Brand Consistency)
const MovingLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.line
        x1="15" y1="0" x2="15" y2="100"
        stroke="rgba(255, 255, 255, 0.05)"
        strokeWidth="0.05"
        animate={{ x1: [15, 17, 15] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      {[...Array(4)].map((_, i) => (
        <motion.line
          key={i}
          x1="0" y1={25 * i} x2="100" y2={25 * i + 1}
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="0.02"
          animate={{ y1: [25 * i, 25 * i + 2, 25 * i] }}
          transition={{ duration: 10, delay: i * 0.5, repeat: Infinity }}
        />
      ))}
    </svg>
  </div>
);

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numericMatch[0]);
    const prefix = value.substring(0, value.indexOf(numericMatch[0]));
    const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length);
    
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = targetNumber * easeOutQuart;
      
      if (progress === 1) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        const formattedNumber = numericMatch[0].includes('.') 
          ? current.toFixed(1)
          : Math.floor(current).toString();
        setDisplayValue(prefix + formattedNumber + suffix);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <div ref={ref} className="text-zinc-100">{displayValue}</div>;
};

interface LocationPageProps {
  location: 'casablanca' | 'dubai' | 'frankfurt' | 'pristina';
}

const LocationPage = ({ location }: LocationPageProps) => {
  const { t } = useTranslation();

  const locationData: Record<string, {
    heroImage: string;
    accentColor: string;
    stats: { icon: any; value: string; labelKey: string }[];
  }> = {
    casablanca: {
      heroImage: getCityImage('casablanca', 'hero'),
      accentColor: '#D1D1D1', // Cool Silver
      stats: [
        { icon: TrendingUp, value: '€120K – €2.5M', labelKey: 'investmentRange' },
        { icon: Award, value: '#1', labelKey: 'economicCapital' },
        { icon: Building2, value: '5+', labelKey: 'growthDistricts' },
        { icon: Users, value: '60%+', labelKey: 'demandConcentration' },
      ],
    },
    dubai: {
      heroImage: getCityImage('dubai', 'hero'),
      accentColor: '#A1A1AA', // Zinc Grey
      stats: [
        { icon: TrendingUp, value: '€300K – €10M', labelKey: 'investmentRange' },
        { icon: Award, value: '0%', labelKey: 'personalTax' },
        { icon: Users, value: '200+', labelKey: 'investorNationalities' },
        { icon: Building2, value: 'Top 5', labelKey: 'globalCities' },
      ],
    },
    frankfurt: {
      heroImage: getCityImage('frankfurt', 'hero'),
      accentColor: '#FFFFFF', // High-Contrast White
      stats: [
        { icon: TrendingUp, value: '€250K – €5M', labelKey: 'investmentRange' },
        { icon: Award, value: 'Top 3', labelKey: 'germanCities' },
        { icon: Building2, value: '300+', labelKey: 'financialInstitutions' },
        { icon: Users, value: '70+', labelKey: 'investorNationalities' },
      ],
    },
    pristina: {
      heroImage: getCityImage('pristina', 'hero'),
      accentColor: '#71717A', // Stone Grey
      stats: [
        { icon: TrendingUp, value: '€80K – €1.5M', labelKey: 'investmentRange' },
        { icon: Award, value: '#1', labelKey: 'fastestGrowing' },
        { icon: Users, value: '30%+', labelKey: 'diasporaDemand' },
        { icon: Building2, value: 'Emerging', labelKey: 'residentialMarket' },
      ],
    },
  };

  const data = locationData[location];

  return (
    <div className="bg-[#050505] text-[#A1A1AA] overflow-x-hidden selection:bg-white selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-end lg:flex-row lg:items-end overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={data.heroImage} 
            alt={location} 
            className="w-full h-full object-cover grayscale opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full lg:w-2/5 bg-[#0D0D0D] border-t lg:border-t-0 lg:border-r border-white/10 p-10 lg:p-20 flex flex-col items-start gap-8 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 px-4 py-2 border border-white/5 bg-white/[0.02]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-100" />
            <span className="text-zinc-100 text-[10px] uppercase tracking-[0.4em] font-black">
              Location Desk
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-6xl md:text-9xl font-black tracking-tighter leading-none italic uppercase italic-subtle"
          >
            {location}
          </motion.h1>

          <p className="text-zinc-500 text-lg md:text-xl max-w-xl font-light leading-relaxed border-l border-white/10 pl-6 italic">
            {t(`locations.${location}.description`)}
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 bg-white text-black font-black uppercase text-[10px] tracking-widest flex items-center gap-4 hover:bg-gold transition-all"
          >
            {t('locationPage.contact.button')} <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* 2. STATS SECTION (ZINC STRIP) */}
      <section className="bg-[#111111] border-y border-white/5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {data.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-16 flex flex-col gap-6 group hover:bg-white/[0.02] transition-colors"
            >
              <stat.icon className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
              <div className="text-4xl font-black uppercase tracking-tighter">
                <AnimatedCounter value={stat.value} duration={2500} />
              </div>
              <div className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em]">
                {t(`locationPage.stats.${stat.labelKey}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CONTENT SECTION (MATTE LAYOUT) */}
      <section className="py-48 relative overflow-hidden bg-[#050505]">
        <MovingLines />
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-6 space-y-16">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic italic-subtle leading-none">
                {t('locationPage.elevated')} <br />
                <span className="text-zinc-800">FACILITATION</span>
              </h2>
              
              <div className="p-10 bg-[#111111] border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-white opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-zinc-100 text-3xl font-black uppercase mb-4 italic tracking-tight">
                  {t(`locations.${location}.title`)}
                </h3>
                <p className="text-xl text-zinc-400 font-light">
                   {t(`locations.${location}.subtitle`)}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-12 py-10">
               <p className="text-zinc-400 text-xl font-extralight leading-loose border-l border-zinc-800 pl-8 italic">
                 {t(`locations.${location}.description`)}
               </p>

               <div className="grid gap-4">
                  {(t(`locations.${location}.highlights`, { returnObjects: true }) as string[]).map((highlight, index) => (
                    <div key={index} className="flex items-center gap-6 group">
                      <div className="w-2 h-px bg-zinc-700 group-hover:w-6 transition-all group-hover:bg-white" />
                      <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase group-hover:text-zinc-100 transition-colors">{highlight}</span>
                    </div>
                  ))}
               </div>

               <div className="pt-12 mt-12 border-t border-white/5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-zinc-600">
                    TARGET PROFILES
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {(t(`locations.${location}.features`, { returnObjects: true }) as string[]).map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01]">
                        <Award className="w-4 h-4 text-zinc-700" />
                        <span className="text-xs font-bold uppercase tracking-tight text-zinc-400">{feature}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT MONOLITH */}
      <section id="contact" className="py-32 container mx-auto px-6">
        <div className="bg-[#0D0D0D] border border-white/5 flex flex-col lg:flex-row relative group overflow-hidden">
          {/* Subtle hover reveal on monolith border */}
          <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="lg:w-2/3 p-12 lg:p-24 flex flex-col gap-10 relative z-10">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase italic italic-subtle">
               Inquire <br /> 
               <span className="text-zinc-700">{location}</span>
            </h2>
            <div className="w-12 h-1 bg-white" />
            <p className="text-zinc-500 text-xl font-light italic">
               Facilitating entry into {location}'s high-growth assets.
            </p>
          </div>

          <div className="lg:w-1/3 bg-[#1A1A1A] p-12 lg:p-24 flex flex-col justify-center gap-16 border-t lg:border-t-0 lg:border-l border-white/5 relative z-10">
               <div className="flex flex-col group">
                  <span className="text-[10px] uppercase font-black text-zinc-600 mb-2 tracking-[0.5em] group-hover:text-white transition-colors">
                    Official Email
                  </span>
                  <a href="mailto:info@ahox-group.com" className="text-2xl font-black text-zinc-100 italic transition-all group-hover:tracking-tighter">
                    info@ahox-group.com
                  </a>
               </div>
               <div className="flex flex-col group">
                  <span className="text-[10px] uppercase font-black text-zinc-600 mb-2 tracking-[0.5em] group-hover:text-white transition-colors">
                    Telephone
                  </span>
                  <a href="tel:+496927278761" className="text-2xl font-black text-zinc-100 italic transition-all group-hover:tracking-tighter">
                    +49 69 2727 8761
                  </a>
               </div>
          </div>
        </div>
      </section>

      {/* 5. BACK BUTTON STICKER */}
      <div className="fixed bottom-10 left-10 z-[100]">
         <a 
           href="/" 
           className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-gold transition-colors shadow-2xl group"
         >
           <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
         </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .italic-subtle {
          letter-spacing: -0.06em;
          font-style: italic;
          font-family: 'Inter', sans-serif;
        }
      `}} />
    </div>
  );
};

export default LocationPage;