import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Building2, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part from value (e.g., "€120K" -> "120", "60%+" -> "60", "Top 3" -> "3")
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
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = targetNumber * easeOutQuart;
      
      if (progress === 1) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        // Format based on whether it's a decimal or integer
        const formattedNumber = numericMatch[0].includes('.') 
          ? current.toFixed(1)
          : Math.floor(current).toString();
        setDisplayValue(prefix + formattedNumber + suffix);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <div ref={ref}>{displayValue}</div>;
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
      heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80',
      accentColor: '#2563eb',
      stats: [
        { icon: TrendingUp, value: '€120K – €2.5M', labelKey: 'investmentRange' },
        { icon: Award, value: '#1', labelKey: 'economicCapital' },
        { icon: Building2, value: '5+', labelKey: 'growthDistricts' },
        { icon: Users, value: '60%+', labelKey: 'demandConcentration' },
      ],
    },
    dubai: {
      heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
      accentColor: '#f59e0b',
      stats: [
        { icon: TrendingUp, value: '€300K – €10M', labelKey: 'investmentRange' },
        { icon: Award, value: '0%', labelKey: 'personalTax' },
        { icon: Users, value: '200+', labelKey: 'investorNationalities' },
        { icon: Building2, value: 'Top 5', labelKey: 'globalCities' },
      ],
    },
    frankfurt: {
      heroImage: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?auto=format&fit=crop&q=80',
      accentColor: '#9333ea',
      stats: [
        { icon: TrendingUp, value: '€250K – €5M', labelKey: 'investmentRange' },
        { icon: Award, value: 'Top 3', labelKey: 'germanCities' },
        { icon: Building2, value: '300+', labelKey: 'financialInstitutions' },
        { icon: Users, value: '70+', labelKey: 'investorNationalities' },
      ],
    },
    pristina: {
      heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80',
      accentColor: '#10b981',
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
    <div className="bg-white text-gray-900 overflow-x-hidden selection:bg-black selection:text-white">
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-end lg:flex-row lg:items-end">
        <motion.div 
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={data.heroImage} 
            alt={location} 
            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </motion.div>

        <div className="relative z-10 w-full lg:w-3/5 bg-black p-10 lg:p-24 flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 border border-white/20 px-4 py-2"
          >
            <div className="w-2 h-2 bg-white" />
            <span className="text-white text-xs uppercase tracking-[0.3em] font-light">
              Office Location
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white text-7xl md:text-9xl font-bold tracking-tighter leading-none"
          >
            {location.toUpperCase()}
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 1 }}
            className="h-[1px] bg-white/20" 
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/70 text-lg md:text-xl max-w-xl font-light leading-relaxed"
          >
            {t(`locations.${location}.description`)}
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="px-10 py-5 bg-white text-black font-bold uppercase text-sm flex items-center gap-4 hover:bg-gray-200 transition-colors"
          >
            {t('locationPage.contact.button')} <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-black border-y border-white/10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {data.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-16 flex flex-col gap-4 group"
            >
              <stat.icon className="w-6 h-6 text-white transition-all duration-500 group-hover:scale-110" />
              <div className="text-5xl font-bold text-white transition-all duration-500">
                <AnimatedCounter value={stat.value} duration={2000} />
              </div>
              <div className="text-white/40 uppercase tracking-widest text-xs transition-colors duration-500 group-hover:text-white/60">
                {t(`locationPage.stats.${stat.labelKey}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT / GALLERY GRID */}
      <section className="py-32 container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col gap-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              {t('locationPage.elevated')} <br />
              <span className="text-gray-400">{t('locationPage.structures')}</span>
            </h2>
            
            {/* Market Profile Title */}
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-2">
                {t(`locations.${location}.title`)}
              </h3>
              <p className="text-lg text-gray-600 italic">
                {t(`locations.${location}.subtitle`)}
              </p>
            </div>

            {/* Investor-Friendly Text */}
            <p className="text-gray-600 text-lg leading-loose font-light">
              {t(`locations.${location}.description`)}
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {(t(`locations.${location}.highlights`, { returnObjects: true }) as string[]).map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Ideal For Section */}
            <div className="border-t border-black pt-8">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-500">
                {t(`locations.${location}.idealFor`)}
              </h4>
              <div className="space-y-3">
                {(t(`locations.${location}.features`, { returnObjects: true }) as string[]).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-black rounded-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="bg-black text-white flex flex-col lg:flex-row p-1 lg:p-12 relative overflow-hidden">
          <div 
            className="absolute top-0 right-0 h-full w-2" 
            style={{ backgroundColor: data.accentColor }} 
          />

          <div className="lg:w-2/3 p-12 lg:p-24 flex flex-col gap-8">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.8]">
              {t('locationPage.contact.title')} <br />
              <span className="italic" style={{ color: data.accentColor }}>
                {location.toUpperCase()}
              </span>
            </h2>
            <p className="text-white/50 text-xl font-light max-w-lg">
              {t('locationPage.contact.description')}
            </p>
          </div>

          <div className="lg:w-1/3 bg-white text-black p-12 lg:p-20 flex flex-col justify-between">
            <div className="flex flex-col gap-10">
               <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-gray-400 mb-2">
                    {t('locationPage.contact.email')}
                  </span>
                  <a href="mailto:info@ahox-cm.de" className="text-2xl font-bold border-b-2 border-black pb-2 hover:border-white transition-all">
                    info@ahox-cm.de
                  </a>
               </div>
               <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-gray-400 mb-2">
                    {t('locationPage.contact.phone')}
                  </span>
                  <a href="tel:+496927278761" className="text-2xl font-bold">
                    +49 69 2727 8761
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;