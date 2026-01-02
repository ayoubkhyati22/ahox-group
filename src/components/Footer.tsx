import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('footer.address'),
      content: ['Ostendstraße 80', '60314 Frankfurt a.M.', 'Germany'],
    },
    {
      icon: Phone,
      title: t('footer.phone'),
      content: ['+49 69 272 787 61', '+49 157 33 44 88 98'],
    },
    {
      icon: Mail,
      title: t('footer.email'),
      content: ['info@ahox-group.com'],
    },
  ];

  const locations = [
    { name: 'frankfurt', code: 'DE' },
    { name: 'casablanca', code: 'MA' },
    { name: 'dubai', code: 'UAE' },
    { name: 'pristina', code: 'XK' },
  ];

  return (
    <footer className="relative bg-[#050505] text-white pt-24 overflow-hidden">
      {/* Decorative Grid Pattern (Matching Home) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* 1. BRAND MONOLITH */}
          <div className="lg:col-span-4 border-l border-white/10 pl-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/ahox-group-main-logo-white.png" 
                alt="AHOX Logo" 
                className="h-18 w-auto object-contain mb-8 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* 2. CONTACT (ZINC & GOLD) */}
          <div className="lg:col-span-3">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 block mb-10">Communications</span>
             <div className="space-y-8">
                {contactInfo.map((item, i) => (
                  <div key={i} className="group">
                    <p className="text-[10px] text-gold font-bold uppercase mb-2 tracking-widest">{item.title}</p>
                    {item.content.map((line, idx) => (
                       <p key={idx} className="text-zinc-400 text-sm font-light hover:text-white transition-colors">
                         {line}
                       </p>
                    ))}
                  </div>
                ))}
             </div>
          </div>

          {/* 3. GLOBAL FOOTPRINT (DARK GRAY CARDS) */}
          <div className="lg:col-span-3">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 block mb-10">Our Network</span>
             <ul className="space-y-4">
               {locations.map((loc, i) => (
                 <li key={i}>
                   <Link 
                     to={`/${loc.name}`}
                     className="flex items-center justify-between group p-3 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all"
                   >
                     <span className="text-sm font-bold text-zinc-400 group-hover:text-white transition-colors">
                       {t(`nav.${loc.name}`)}
                     </span>
                     <span className="text-[10px] text-zinc-600 group-hover:text-gold transition-colors font-mono tracking-tighter">
                       / {loc.code}
                     </span>
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* 4. SECTORS (TEXT STROKE FEEL) */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 block mb-10">Sectors</span>
            <div className="flex flex-col gap-4 text-xs font-black tracking-widest uppercase">
                <Link to="/construction" className="hover:text-gold transition-colors">{t('divisions.construction.title')}</Link>
                <Link to="/real-estate" className="hover:text-gold transition-colors">{t('divisions.realEstate.title')}</Link>
                <Link to="/security" className="hover:text-gold transition-colors">{t('divisions.security.title')}</Link>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL BAR (DARK GREY BACKGROUND) */}
      <div className="bg-[#0A0A0A] border-t border-white/5 py-10 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-10">
            <span className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase">
             AHOX GROUP
            </span>
          </div>



          {/* Top of page trigger */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-[10px] text-zinc-600 hover:text-white transition-all uppercase font-black"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-gold transition-all">
              <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Finishing Gold Accent Rule */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        .italic-subtle {
          font-style: italic;
          letter-spacing: -0.02em;
        }
      `}} />
    </footer>
  );
};

export default Footer;