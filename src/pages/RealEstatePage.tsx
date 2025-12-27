import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  Handshake,
  CheckCircle
} from 'lucide-react';

const RealEstatePage = () => {
  const { t } = useTranslation();

  const coreServicesIcons = [Search, TrendingUp, Handshake];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-[#E8D700] selection:text-black">

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Architecture"
            className="w-full h-full object-cover opacity-50 scale-105"
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
              <span className="h-px w-12 bg-[#E8D700]"></span>
              <span className="text-[#E8D700] font-bold tracking-[0.3em] uppercase text-sm">
                {t('realEstate.hero.tagline')}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[0.9] mb-8 text-white">
              {t('realEstate.hero.title')} <br />
              <span className="font-bold italic text-[#E8D700]">{t('realEstate.hero.titleBold')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
              {t('realEstate.hero.description')}
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
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#E8D700]/5 rounded-full -z-10" />
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {t('realEstate.philosophy.title')} <br />
                <span className="text-[#E8D700]">{t('realEstate.philosophy.titleAccent')}</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>{t('realEstate.philosophy.text1')}</p>
                <p>{t('realEstate.philosophy.text2')}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Lux" />
                <div className="bg-[#E8D700] p-8 rounded-lg text-black">
                  <p className="text-4xl font-bold mb-1">100%</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest">{t('realEstate.philosophy.text1').includes('diskret') ? 'Diskretion' : 'Discretion'}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900 p-8 rounded-lg text-white">
                  <p className="text-4xl font-bold mb-1">Expert</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest">Knowledge</p>
                </div>
                <img src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=1000&auto=format&fit=crop" className="rounded-lg shadow-2xl" alt="Architecture" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-[#E8D700] uppercase tracking-[0.4em] mb-4">
              {t('realEstate.services.title')}
            </h2>
            <p className="text-3xl font-bold">{t('realEstate.services.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {(t('realEstate.services.items', { returnObjects: true }) as any[]).map((service, idx) => {
              const Icon = coreServicesIcons[idx % coreServicesIcons.length];
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-[#E8D700] transition-all group"
                >
                  <div className="w-14 h-14 bg-[#E8D700]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#E8D700] transition-colors">
                    <Icon className="w-6 h-6 text-[#E8D700] group-hover:text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- PROCESS STEP-BY-STEP --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold mb-6">{t('realEstate.process.title')}</h2>
              <p className="text-slate-500 mb-8">{t('realEstate.process.description')}</p>
              <ul className="space-y-4">
                {(t('realEstate.process.checklist', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle className="w-5 h-5 text-[#E8D700]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-2/3 grid gap-6 relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-100 lg:hidden" />
              {(t('realEstate.process.steps', { returnObjects: true }) as any[]).map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl relative z-10 group-hover:bg-[#E8D700] group-hover:text-black transition-colors">
                    0{idx + 1}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-500">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;