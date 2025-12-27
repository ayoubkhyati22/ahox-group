import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Eye, Lock, Users, AlertTriangle, Camera,
  ArrowRight, Mail, Phone, MapPin, CheckCircle,
  Zap, Fingerprint, Search, ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Users,
      title: 'Sicherheitsdienste',
      description: 'Bewaffnete oder unbewaffnete Sicherheitskräfte zum Schutz von Personen, Veranstaltungen oder Einrichtungen.'
    },
    {
      icon: Camera,
      title: 'Überwachungssysteme',
      description: 'Installation und Wartung von Alarmanlagen, Videoüberwachung und modernsten Zugangskontrollsystemen.'
    },
    {
      icon: ShieldAlert,
      title: 'Sicherheitsberatung',
      description: 'Expertenanalyse und Entwicklung maßgeschneiderter Sicherheitskonzepte für Unternehmen und Privatpersonen.'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Identifizierung und Abwehr von Online-Bedrohungen wie Hacking, Datenlecks und digitalem Betrug.'
    },
    {
      icon: Zap,
      title: 'Sicherheitstraining',
      description: 'Professionelle Schulungen in Erster Hilfe, Selbstverteidigung und Brandschutz zur Gefahrenprävention.'
    },
    {
      icon: Search,
      title: 'Detektivdienste',
      description: 'Privatdetektive zur Aufklärung von Straftaten, Betrugsfällen oder anderen rechtlichen Angelegenheiten.'
    },
    {
      icon: Fingerprint,
      title: 'Risikomanagement',
      description: 'Gefahrenbewertung und Erstellung von Maßnahmenplänen zur effektiven Risikominimierung.'
    },
    {
      icon: ShieldCheck,
      title: 'Veranstaltungsschutz',
      description: 'Umfassende Sicherheit für Konzerte, Messen oder Sportveranstaltungen durch qualifiziertes Personal.'
    }
  ];

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
              <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm">AHOX GmbH</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[0.9] mb-8 text-white">
              Sicherheit durch <br />
              <span className="font-bold italic text-red-600">Kompetenz</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
              Ihr spezialisierter Partner für die Vermittlung professioneller Sicherheitsdienstleistungen – 
              Maßgeschneidert, zuverlässig und auf höchstem Niveau.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STRATEGIC PARTNERSHIP SECTION (Using your text) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                Vermittlung von <br />
                <span className="text-red-700">Sicherheitslösungen</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Die <strong>AHOX GmbH</strong> ist spezialisiert auf die Vermittlung von professionellen Sicherheitsdienstleistungen. 
                  Wir dienen als strategisches Bindeglied zwischen Kunden und erstklassigen Sicherheitsunternehmen.
                </p>
                <p>
                  Wir arbeiten eng mit einer Vielzahl zertifizierter Partner zusammen, um Ihnen maßgeschneiderte Lösungen zu bieten. 
                  Ob Banken, Bürogebäude, Einzelhandel oder exklusive Wohnanlagen – wir finden die passenden Experten für Ihren Schutz.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-700 mt-1" />
                    <div>
                      <p className="font-bold">Sorgfältige Auswahl</p>
                      <p className="text-sm">Regelmäßig geschultes Personal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-700 mt-1" />
                    <div>
                      <p className="font-bold">Höchste Standards</p>
                      <p className="text-sm">Qualität in jedem Szenario</p>
                    </div>
                  </div>
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
                  "Ihre Sicherheit liegt uns am Herzen. Wir sind Ihr vertrauenswürdiger Partner für professionelle Schutzleistungen."
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
            <h2 className="text-sm font-bold text-red-700 uppercase tracking-[0.4em] mb-4">Dienstleistungsportfolio</h2>
            <p className="text-3xl font-bold">Umfassende Sicherheitskonzepte</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 shadow-sm border-t-2 border-transparent hover:border-red-700 transition-all group"
              >
                <div className="w-12 h-12 bg-red-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                  <service.icon className="w-5 h-5 text-red-700 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTORS & VALUES --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-4xl font-bold mb-6 italic text-slate-950">Werte & Fokus.</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Wir legen großen Wert auf Zuverlässigkeit und Kundenzufriedenheit. Unser Fokus liegt auf Sektoren, die höchste Präzision erfordern.
                </p>
                <div className="space-y-4">
                  {["Banken & Finanzsektor", "Bürogebäude & Industrie", "Einzelhandel & Warenhäuser", "Wohnanlagen & Private Estates"].map((sector, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-sm border-l-4 border-red-700">
                      <span className="font-bold text-slate-900">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="grid gap-12">
                {[
                  { title: "Zuverlässigkeit", desc: "Wir garantieren ständige Erreichbarkeit und termingerechte Ausführung aller Sicherheitsleistungen." },
                  { title: "Kompetenz", desc: "Durch unser Netzwerk greifen wir nur auf zertifizierte Fachkräfte mit langjähriger Erfahrung zurück." },
                  { title: "Transparenz", desc: "Klare Kommunikation und detaillierte Einsatzplanung sind die Basis unserer Vermittlungstätigkeit." },
                  { title: "Qualitätssicherung", desc: "Ständige Kontrolle der vermittelten Leistungen nach modernsten Qualitätsstandards." }
                ].map((val, idx) => (
                  <div key={idx} className="flex gap-8 group pb-12 border-b border-slate-100 last:border-0">
                    <span className="text-6xl font-light text-slate-100 group-hover:text-red-100 transition-colors">0{idx + 1}</span>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">{val.title}</h4>
                      <p className="text-slate-500 text-lg">{val.desc}</p>
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