import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FileCheck, Construction, TrendingUp
} from 'lucide-react';

const ConstructionManagementPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-[#14B3AA] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction Site Management"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[#14B3AA]"></span>
              <span className="text-[#14B3AA] font-bold tracking-[0.3em] uppercase text-sm">
                {t('construction.hero.tagline')}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[0.9] mb-8 text-white">
              {t('construction.hero.title')} <br />
              <span className="font-bold italic text-[#14B3AA]">{t('construction.hero.titleBold')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
              {t('construction.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CORE PHILOSOPHY --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {t('construction.philosophy.title')} <br />
                <span className="text-[#14B3AA]">{t('construction.philosophy.titleAccent')}</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>{t('construction.philosophy.text1')}</p>
                <p>{t('construction.philosophy.text2')}</p>
                <div className="bg-slate-50 p-6 border-l-4 border-[#14B3AA] italic">
                  "{t('construction.philosophy.quote')}"
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1000&auto=format&fit=crop" className="rounded-lg shadow-xl mt-12" alt="Architecture" />
              <div className="space-y-4">
                <div className="bg-[#14B3AA] p-8 rounded-lg text-white">
                  <p className="text-4xl font-bold mb-1">AHOX</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest">Construction Management</p>
                </div>
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" className="rounded-lg shadow-xl" alt="Engineering" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPREHENSIVE SERVICE GRID --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-[#14B3AA] uppercase tracking-[0.4em] mb-4">
              {t('construction.services.title')}
            </h2>
            <p className="text-3xl font-bold">{t('construction.services.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t('construction.services.categories', { returnObjects: true })).map(([key, cat]: [string, any], idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 shadow-sm border-b-4 border-transparent hover:border-[#14B3AA] transition-all"
              >
                <h3 className="text-lg font-bold mb-6 text-slate-900 border-b pb-4 border-slate-100">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-[#14B3AA] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADDED VALUE SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">
                {t('construction.value.title')} <br/>
                <span className="text-[#14B3AA]">{t('construction.value.titleAccent')}</span>
              </h2>
              <div className="grid gap-8">
                {(t('construction.value.benefits', { returnObjects: true }) as any[]).map((benefit, idx) => {
                  const icons = [FileCheck, Construction, TrendingUp];
                  const Icon = icons[idx % icons.length];
                  return (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                        <p className="text-slate-500">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="bg-slate-900 p-12 text-white h-full flex flex-col justify-center rounded-sm">
                <h3 className="text-2xl font-bold mb-6 italic text-[#14B3AA]">
                  {t('construction.value.promise.title')}
                </h3>
                <p className="text-xl font-light leading-relaxed opacity-90 mb-8">
                  "{t('construction.value.promise.text')}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-[#14B3AA]" />
                  <span className="uppercase tracking-widest text-sm font-bold">
                    {t('construction.value.promise.signature')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionManagementPage;