import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Users, Camera, ShieldAlert, Lock,
  Zap, Fingerprint, Search, ShieldCheck, CheckCircle
} from 'lucide-react';

const SecurityPage = () => {
  const { t } = useTranslation();

  const serviceIcons = [Users, Camera, ShieldAlert, Lock, Zap, Fingerprint, Search, ShieldCheck];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-red-700 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
            alt="Security Operations"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-red-600"></span>
              <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm">
                {t('security.hero.tagline')}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[0.9] mb-8 text-white">
              {t('security.hero.title')} <br />
              <span className="font-bold italic text-red-600">{t('security.hero.titleBold')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
              {t('security.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STRATEGIC PARTNERSHIP SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {t('security.philosophy.title')} <br />
                <span className="text-red-700">{t('security.philosophy.titleAccent')}</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>{t('security.philosophy.text1')}</p>
                <p>{t('security.philosophy.text2')}</p>
                <div className="pt-4 grid grid-cols-2 gap-6">
                  {(t('security.philosophy.values', { returnObjects: true }) as any[]).map((value, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-red-700 mt-1" />
                      <div>
                        <p className="font-bold">{value.title}</p>
                        <p className="text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute -inset-4 border border-slate-100 rounded-lg -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1454165833767-027eeef1596e?q=80&w=1000&auto=format&fit=crop" 
                className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
                alt="Professional Security Consulting" 
              />
              <div className="absolute bottom-6 right-6 bg-slate-950 p-6 text-white rounded-sm shadow-xl max-w-xs">
                <p className="text-sm italic font-light opacity-80">
                  {t('security.philosophy.text2').substring(0, 150)}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-red-700 uppercase tracking-[0.4em] mb-4">
              {t('security.services.title')}
            </h2>
            <p className="text-3xl font-bold">{t('security.services.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('security.services.items', { returnObjects: true }) as any[]).map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length];
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 shadow-sm border-t-2 border-transparent hover:border-red-700 transition-all group"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                    <Icon className="w-5 h-5 text-red-700 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTORS & VALUES --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-4xl font-bold mb-6 italic text-slate-950">
                  {t('security.sectors.title')}
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {t('security.sectors.description')}
                </p>
                <div className="space-y-4">
                  {(t('security.sectors.items', { returnObjects: true }) as string[]).map((sector, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-sm border-l-4 border-red-700">
                      <span className="font-bold text-slate-900">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="grid gap-12">
                {(t('security.sectors.values', { returnObjects: true }) as any[]).map((val, idx) => (
                  <div key={idx} className="flex gap-8 group pb-12 border-b border-slate-100 last:border-0">
                    <span className="text-6xl font-light text-slate-100 group-hover:text-red-100 transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">{val.title}</h4>
                      <p className="text-slate-500 text-lg">{val.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;