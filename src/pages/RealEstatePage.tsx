import { motion } from 'framer-motion';
import {
  Search,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Handshake
} from 'lucide-react';

const RealEstatePage = () => {

  const coreServices = [
    {
      icon: Search,
      title: 'Immobilienakquise',
      description: 'Wir suchen aktiv nach potenziellen Verkaufsobjekten durch gezielte Recherche und unser weitreichendes Netzwerk zu Eigentümern und Projektentwicklern.',
    },
    {
      icon: TrendingUp,
      title: 'Marktgerechte Bewertung',
      description: 'Fundierte Wertermittlung basierend auf tiefgreifender Kenntnis lokaler Märkte und rechtlicher Rahmenbedingungen.',
    },
    {
      icon: Handshake,
      title: 'Verhandlungsführung',
      description: 'Professionelle Koordination zwischen Käufer und Verkäufer zur Klärung von Preisen, Bedingungen und Vertragsdetails.',
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-teal selection:text-white">

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
              <span className="h-px w-12 bg-teal"></span>
              <span className="text-teal font-bold tracking-[0.3em] uppercase text-sm">AHOX GmbH</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[0.9] mb-8 text-white">
              Exzellenz in der <br />
              <span className="font-bold italic text-teal">Immobilienvermittlung</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
              Ihr strategischer Partner für die Vermittlung von Immobilien und Grundstücken –
              professionell, marktorientiert und diskret.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CORE PHILOSOPHY (Using your specific text) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-teal/5 rounded-full -z-10" />
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                Die Brücke zwischen <br />
                <span className="text-teal">Angebot und Nachfrage</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Die Vermittlung von Immobilien ist eine bedeutende Tätigkeit in der Immobilienbranche.
                  Die <strong>AHOX GmbH</strong> dient als spezialisiertes Vermittlungsunternehmen zwischen
                  potenziellen Käufern und Verkäufern von Immobilien und Grundstücken.
                </p>
                <p>
                  Unser Ziel ist es, den Verkaufsprozess effizient und reibungslos abzuwickeln.
                  Dabei stützen wir uns auf fundiertes Fachwissen über lokale Märkte,
                  rechtliche Rahmenbedingungen und erprobte Verhandlungstechniken.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Lux" />
                <div className="bg-teal p-8 rounded-lg text-white">
                  <p className="text-4xl font-bold mb-1">100%</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest">Diskretion</p>
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
            <h2 className="text-sm font-bold text-teal uppercase tracking-[0.4em] mb-4">Dienstleistungen</h2>
            <p className="text-3xl font-bold">Unser Aufgabengebiet in der Vermittlung</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {coreServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 shadow-sm border-b-4 border-transparent hover:border-teal transition-all group"
              >
                <div className="w-14 h-14 bg-teal/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-teal transition-colors">
                  <service.icon className="w-6 h-6 text-teal group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS STEP-BY-STEP --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold mb-6">Der AHOX Weg zum Erfolg.</h2>
              <p className="text-slate-500 mb-8">
                Nachdem die Immobilie für Sie gefunden wurde, begleiten wir Sie durch jeden entscheidenden Schritt der Transaktion.
              </p>
              <ul className="space-y-4">
                {[
                  "Gezielte Akquise von Verkaufsobjekten",
                  "Professionelle Immobilienbewertung",
                  "Kooperation mit Bauunternehmen",
                  "Durchführung von Besichtigungen",
                  "Finale Vertragsverhandlungen"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle className="w-5 h-5 text-teal" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-2/3 grid gap-6 relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-100 lg:hidden" />
              {[
                { title: 'Recherche & Akquise', text: 'Wir identifizieren Potenziale durch Kooperationen mit Projektentwicklern.' },
                { title: 'Bewertung & Marktcheck', text: 'Analyse der lokalen Marktgegebenheiten für eine optimale Preisstrategie.' },
                { title: 'Verhandlung & Klärung', text: 'Wir führen Verhandlungen mit Eigentümern über Preise und Bedingungen.' },
                { title: 'Abschlussbegleitung', text: 'Vollständige Begleitung bis zur Protokollierung und Übergabe.' },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl relative z-10 group-hover:bg-teal transition-colors">
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