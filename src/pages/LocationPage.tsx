import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Building2, Users, Award, TrendingUp, Compass } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { getCityImage } from '../hooks/useImages';

// Background Moving Lines
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
      accentColor: '#D1D1D1',
      stats: [
        { icon: TrendingUp, value: '€120K – €2.5M', labelKey: 'investmentRange' },
        { icon: Award, value: '#1', labelKey: 'economicCapital' },
        { icon: Building2, value: '5+', labelKey: 'growthDistricts' },
        { icon: Users, value: '60%+', labelKey: 'demandConcentration' },
      ],
    },
    dubai: {
      heroImage: getCityImage('dubai', 'hero'),
      accentColor: '#A1A1AA',
      stats: [
        { icon: TrendingUp, value: '€300K – €10M', labelKey: 'investmentRange' },
        { icon: Award, value: '0%', labelKey: 'personalTax' },
        { icon: Users, value: '200+', labelKey: 'investorNationalities' },
        { icon: Building2, value: 'Top 5', labelKey: 'globalCities' },
      ],
    },
    frankfurt: {
      heroImage: getCityImage('frankfurt', 'hero'),
      accentColor: '#FFFFFF',
      stats: [
        { icon: TrendingUp, value: '€250K – €5M', labelKey: 'investmentRange' },
        { icon: Award, value: 'Top 3', labelKey: 'germanCities' },
        { icon: Building2, value: '300+', labelKey: 'financialInstitutions' },
        { icon: Users, value: '70+', labelKey: 'investorNationalities' },
      ],
    },
    pristina: {
      heroImage: getCityImage('pristina', 'hero'),
      accentColor: '#71717A',
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

        <div className="relative z-10 w-full lg:w-2/5 bg-[#0D0D0D] border-t lg:border-t-0 lg:border-r border-white/10 p-8 lg:p-16 flex flex-col items-start gap-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 px-4 py-2 border border-white/5 bg-white/[0.02]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-100" />
            <span className="text-zinc-100 text-[10px] uppercase tracking-[0.4em] font-black">
              {t('locationPage.locationDesk')}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none italic uppercase italic-subtle"
          >
            {t(`locations.${location}.title`)}
          </motion.h1>

          <p className="text-zinc-500 text-base md:text-lg max-w-xl font-light leading-relaxed border-l border-white/10 pl-6 italic">
            {t(`locations.${location}.description`)}
          </p>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-[#111111] border-y border-white/5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {data.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-10 lg:p-12 flex flex-col gap-4 group hover:bg-white/[0.02] transition-colors"
            >
              <stat.icon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              <div className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                <AnimatedCounter value={stat.value} duration={2500} />
              </div>
              <div className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em]">
                {t(`locationPage.stats.${stat.labelKey}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CONTENT SECTION */}
      <section className="py-32 md:py-40 relative overflow-hidden bg-[#050505]">
        <MovingLines />
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-6 space-y-12">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase italic italic-subtle leading-none">
                {t('locationPage.elevated')} <br />
                <span className="text-zinc-800">{t('locationPage.facilitation')}</span>
              </h2>
              
              <div className="p-8 bg-[#111111] border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-white opacity-20 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-zinc-100 text-2xl md:text-3xl font-black uppercase mb-3 italic tracking-tight">
                  {t(`locations.${location}.title`)}
                </h3>
                <p className="text-lg md:text-xl text-zinc-400 font-light">
                   {t(`locations.${location}.subtitle`)}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-10 py-8">
               <p className="text-zinc-400 text-lg md:text-xl font-extralight leading-loose border-l border-zinc-800 pl-6 italic">
                 {t(`locations.${location}.description`)}
               </p>

               <div className="grid gap-4">
                  {(t(`locations.${location}.highlights`, { returnObjects: true }) as string[]).map((highlight, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-2 h-px bg-zinc-700 group-hover:w-6 transition-all group-hover:bg-white" />
                      <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-500 uppercase group-hover:text-zinc-100 transition-colors">{highlight}</span>
                    </div>
                  ))}
               </div>

               <div className="pt-10 mt-10 border-t border-white/5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-zinc-600">
                    {t('locationPage.targetProfiles')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {(t(`locations.${location}.features`, { returnObjects: true }) as string[]).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border border-white/5 bg-white/[0.01]">
                        <Award className="w-4 h-4 text-zinc-700 flex-shrink-0" />
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
      <section id="contact" className="py-20 md:py-28 container mx-auto px-6">
        <div className="bg-[#0D0D0D] border border-white/5 flex flex-col lg:flex-row relative group overflow-hidden">
          <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="lg:w-2/3 p-10 lg:p-20 flex flex-col gap-8 relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.8] uppercase italic italic-subtle">
               {t('locationPage.contact.inquire')} <br /> 
               <span className="text-zinc-700">{t(`locations.${location}.title`)}</span>
            </h2>
            <div className="w-12 h-1 bg-white" />
            <p className="text-zinc-500 text-lg md:text-xl font-light italic">
               {t('locationPage.contact.facilitatingEntry', { location: t(`locations.${location}.title`) })}
            </p>
          </div>

          <div className="lg:w-1/3 bg-[#1A1A1A] p-10 lg:p-16 flex flex-col justify-center gap-12 border-t lg:border-t-0 lg:border-l border-white/5 relative z-10">
               <div className="flex flex-col group">
                  <span className="text-[10px] uppercase font-black text-zinc-600 mb-2 tracking-[0.5em] group-hover:text-white transition-colors">
                    {t('locationPage.contact.officialEmail')}
                  </span>
                  <a href="mailto:info@ahox-group.com" className="text-xl md:text-2xl font-black text-zinc-100 italic transition-all group-hover:tracking-tighter break-all">
                    info@ahox-group.com
                  </a>
               </div>
               <div className="flex flex-col group">
                  <span className="text-[10px] uppercase font-black text-zinc-600 mb-2 tracking-[0.5em] group-hover:text-white transition-colors">
                    {t('locationPage.contact.telephone')}
                  </span>
                  <a href="tel:+496927278761" className="text-xl md:text-2xl font-black text-zinc-100 italic transition-all group-hover:tracking-tighter">
                    +49 69 2727 8761
                  </a>
               </div>
          </div>
        </div>
      </section>

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