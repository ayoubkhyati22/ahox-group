import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Building2, Users, Award, TrendingUp, Phone, Mail, ChevronRight, ArrowRight } from 'lucide-react';

interface LocationPageProps {
  location: 'casablanca' | 'dubai' | 'frankfurt' | 'pristina';
}

const LocationPage = ({ location }: LocationPageProps) => {
  const { t } = useTranslation();

  const locationData: Record<string, {
    heroImage: string;
    gallery: string[];
    accentColor: string;
    stats: { icon: any; value: string; label: string }[];
  }> = {
    casablanca: {
      heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558011687-e93c5c49e0c7?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      ],
      accentColor: '#2563eb', // Blue
      stats: [
        { icon: Building2, value: '50+', label: 'Projects Completed' },
        { icon: Users, value: '200+', label: 'Team Members' },
        { icon: Award, value: '15+', label: 'Years Experience' },
        { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
      ],
    },
    dubai: {
      heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&q=80',
      ],
      accentColor: '#f59e0b', // Amber
      stats: [
        { icon: Building2, value: '80+', label: 'Projects Completed' },
        { icon: Users, value: '300+', label: 'Team Members' },
        { icon: Award, value: '20+', label: 'Years Experience' },
        { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
      ],
    },
    frankfurt: {
      heroImage: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
      ],
      accentColor: '#9333ea', // Purple
      stats: [
        { icon: Building2, value: '120+', label: 'Projects Completed' },
        { icon: Users, value: '400+', label: 'Team Members' },
        { icon: Award, value: '25+', label: 'Years Experience' },
        { icon: TrendingUp, value: '99%', label: 'Client Satisfaction' },
      ],
    },
    pristina: {
      heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80',
      ],
      accentColor: '#10b981', // Green
      stats: [
        { icon: Building2, value: '35+', label: 'Projects Completed' },
        { icon: Users, value: '150+', label: 'Team Members' },
        { icon: Award, value: '10+', label: 'Years Experience' },
        { icon: TrendingUp, value: '96%', label: 'Client Satisfaction' },
      ],
    },
  };

  const data = locationData[location];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden selection:bg-black selection:text-white">
      {/* 
        HERO SECTION: BRUTALIST GRID 
      */}
      <section className="relative h-screen flex flex-col justify-end lg:flex-row lg:items-end">
        {/* Main Hero Background - Zero Radius */}
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

        {/* Content Box - Solid, Sharp Edges */}
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
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Decorative Location Overlay (Vertical Text) */}
        <div className="hidden lg:block absolute top-10 right-10 z-10 pointer-events-none">
          <span className="text-[12rem] leading-none font-black text-white/10 select-none transform rotate-180 [writing-mode:vertical-lr]">
            AHOX-CM
          </span>
        </div>
      </section>

      {/* 
        STATS SECTION: MONOCHROME GRID 
      */}
      <section className="bg-black border-y border-white/10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {data.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-16 flex flex-col gap-4 group hover:bg-white transition-all duration-500"
            >
              <stat.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
              <div className="text-5xl font-bold text-white group-hover:text-black transition-colors">{stat.value}</div>
              <div className="text-white/40 group-hover:text-black/60 uppercase tracking-widest text-xs transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 
        ABOUT / GALLERY GRID: RECTANGULAR ASYMMETRY
      */}
      <section className="py-32 container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col gap-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              ELEVATED <br />
              <span className="text-gray-400">STRUCTURES.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-loose font-light">
              Through sharp execution and zero-tolerance for compromise, we've defined the skyline of {location}. Our process combines architectural integrity with commercial precision.
            </p>
            
            {/* Project List Feature */}
            <div className="flex flex-col border-t border-black pt-10 gap-6">
              {['Concept Analysis', 'Strategic Sourcing', 'Structural Management'].map((item) => (
                <div key={item} className="flex justify-between items-center group cursor-default">
                  <span className="text-xl font-bold uppercase group-hover:translate-x-4 transition-transform duration-300">
                    {item}
                  </span>
                  <div className="w-12 h-[2px] bg-black group-hover:w-20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <motion.div 
               whileInView={{ opacity: [0, 1], y: [40, 0] }}
               className="aspect-[3/4] bg-gray-100 relative"
            >
               <img src={data.gallery[0]} className="w-full h-full object-cover grayscale" />
               <div className="absolute inset-0 border border-black/5" />
            </motion.div>
            <motion.div 
               whileInView={{ opacity: [0, 1], y: [100, 0] }}
               transition={{ delay: 0.2 }}
               className="aspect-[3/4] bg-gray-100 mt-12"
            >
               <img src={data.gallery[1]} className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 
        GALLERY SECTION: SHARP MASONRY 
      */}
      <section className="bg-[#f2f2f2] py-24 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-l border-black/10">
            {data.gallery.slice(2).map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square relative overflow-hidden group border-b border-r border-black/10"
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover transition-transform duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 bg-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-bold uppercase text-[10px] tracking-widest tracking-[0.2em]">View Phase 0{i+1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        CONTACT CTA: BIG BLACK BOX 
      */}
      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="bg-black text-white flex flex-col lg:flex-row p-1 lg:p-12 relative overflow-hidden">
          {/* Accent Line Decoration */}
          <div 
            className="absolute top-0 right-0 h-full w-2" 
            style={{ backgroundColor: data.accentColor }} 
          />

          <div className="lg:w-2/3 p-12 lg:p-24 flex flex-col gap-8">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.8]">
              PARTNER <br />
              WITH US IN <br />
              <span className="italic" style={{ color: data.accentColor }}>{location.toUpperCase()}</span>
            </h2>
            <p className="text-white/50 text-xl font-light max-w-lg">
              Bring professional engineering and construction management to your next venture. We operate with radical transparency.
            </p>
          </div>

          <div className="lg:w-1/3 bg-white text-black p-12 lg:p-20 flex flex-col justify-between">
            <div className="flex flex-col gap-10">
               <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-gray-400 mb-2">Electronic Mail</span>
                  <a href="mailto:info@ahox-cm.de" className="text-2xl font-bold border-b-2 border-black pb-2 hover:border-white transition-all">
                    info@ahox-cm.de
                  </a>
               </div>
               <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-gray-400 mb-2">Telephone Connection</span>
                  <a href="tel:+496927278761" className="text-2xl font-bold">
                    +49 69 2727 8761
                  </a>
               </div>
            </div>

            <button className="w-full bg-black text-white p-6 uppercase font-bold flex justify-between items-center group mt-12 lg:mt-0 hover:bg-gray-800 transition-colors">
              Request Details
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-black/5 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black">AHOX-CM</div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <span>© 2024 Portfolio</span>
            <span>Imprint</span>
            <span>Privacy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LocationPage;