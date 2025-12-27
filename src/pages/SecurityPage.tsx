import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Shield, Eye, Lock, Users, AlertTriangle, Camera,
  ArrowRight, Phone, Mail, MapPin, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Users,
      title: 'Sicherheitsdienste',
      titleEn: 'Security Services',
      description: 'Professionelle bewaffnete oder unbewaffnete Sicherheitskräfte für Personen, Veranstaltungen oder Einrichtungen',
      features: ['Personenschutz', 'Veranstaltungssicherheit', 'Objektschutz', 'Einzelhandelsgeschäfte', 'Wohnanlagen']
    },
    {
      icon: Camera,
      title: 'Alarmanlagen & Überwachung',
      titleEn: 'Alarm & Surveillance Systems',
      description: 'Installation und Wartung moderner Sicherheitssysteme',
      features: ['Alarmanlagen', 'Videoüberwachung', 'Zugangskontrollsysteme', '24/7 Monitoring']
    },
    {
      icon: AlertTriangle,
      title: 'Sicherheitsberatung',
      titleEn: 'Security Consulting',
      description: 'Expertenberatung zur Entwicklung und Umsetzung von Sicherheitskonzepten',
      features: ['Risikoanalyse', 'Sicherheitskonzepte', 'Krisenmanagement', 'Schulungen']
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      titleEn: 'Cybersecurity',
      description: 'Schutz vor digitalen Bedrohungen',
      features: ['Bedrohungserkennung', 'Datenschutz', 'Hacking-Abwehr', 'Betrugsbekämpfung']
    },
    {
      icon: Shield,
      title: 'Sicherheitstraining',
      titleEn: 'Security Training',
      description: 'Professionelle Schulungen für Sicherheitspersonal',
      features: ['Erste Hilfe', 'Selbstverteidigung', 'Brandschutz', 'Notfallmanagement']
    },
    {
      icon: Eye,
      title: 'Detektivdienste',
      titleEn: 'Detective Services',
      description: 'Privatdetektive für rechtliche Angelegenheiten',
      features: ['Aufklärung von Straftaten', 'Betrugsermittlung', 'Observation', 'Beweissicherung']
    }
  ];

  const sectors = [
    { name: 'Banken', icon: '🏦' },
    { name: 'Bürogebäude', icon: '🏢' },
    { name: 'Einzelhandel', icon: '🏪' },
    { name: 'Veranstaltungen', icon: '🎪' },
    { name: 'Wohnanlagen', icon: '🏘️' },
    { name: 'Konzerte', icon: '🎵' },
    { name: 'Messen', icon: '🎯' },
    { name: 'Sportveranstaltungen', icon: '⚽' }
  ];

  const stats = [
    { value: '10,000+', label: 'Protected Events' },
    { value: '500+', label: 'Trained Personnel' },
    { value: '24/7', label: 'Monitoring' },
    { value: '99.9%', label: 'Success Rate' }
  ];

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* Hero Section - Red Themed */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&h=1080&fit=crop"
            alt="Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-red-800/80 to-black/90" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src="/mnt/user-data/uploads/1766785480981_image.png"
                  alt="AHOX Security"
                  className="h-32 w-auto object-contain"
                />
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                Security<br />
                <span className="text-gold">Solutions</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed font-light">
                Professionelle Sicherheitsdienstleistungen mit höchsten Qualitätsstandards
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-red-900 px-8 py-4 font-bold uppercase text-sm flex items-center gap-3 hover:bg-gold hover:text-black transition-all"
                >
                  Our Services <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white px-8 py-4 font-bold uppercase text-sm hover:bg-white hover:text-red-900 transition-all"
                >
                  Request Security
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 uppercase text-xs tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-purple mb-6 uppercase tracking-tighter">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Sicherheitsdienstleistungen für jeden Bedarf
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 border-4 border-purple-light hover:border-red-900 transition-all duration-500 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-900/10 group-hover:bg-red-900 mb-6 transition-colors">
                  <service.icon className="w-8 h-8 text-red-900 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-purple mb-3 group-hover:text-red-900 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-purple mb-6 uppercase tracking-tighter">
              Sectors We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sicherheitsdienste für verschiedene Bereiche
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {sectors.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 border-2 border-gray-200 hover:border-red-900 transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-4">{sector.icon}</div>
                <h3 className="font-bold text-purple group-hover:text-red-900 transition-colors">
                  {sector.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-purple mb-6 uppercase tracking-tighter">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { title: 'Zuverlässigkeit', desc: 'Höchste Qualitätsstandards und professionelles Personal' },
              { title: 'Kompetenz', desc: 'Sorgfältig ausgewählte und regelmäßig geschulte Sicherheitskräfte' },
              { title: 'Kundenzufriedenheit', desc: 'Maßgeschneiderte Lösungen für Ihre spezifischen Sicherheitsbedürfnisse' },
              { title: 'Transparenz', desc: 'Klare Kommunikation und verlässliche Partnerschaft' },
              { title: '24/7 Verfügbarkeit', desc: 'Rund um die Uhr für Ihre Sicherheit im Einsatz' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start group"
              >
                <div className="text-6xl font-black text-red-900/20 group-hover:text-red-900 transition-colors">
                  0{idx + 1}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-purple mb-2 group-hover:text-red-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-red-900 via-red-800 to-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter">
              Your Security<br />Is Our Priority
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Kontaktieren Sie uns für professionelle Sicherheitsdienstleistungen
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.a
                href="mailto:info@ahox-cm.de"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-red-900 px-10 py-5 font-black uppercase text-sm flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
              <motion.a
                href="tel:+496927278761"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-10 py-5 font-black uppercase text-sm hover:bg-white hover:text-red-900 transition-all flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-3 text-white/80">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Ostendstraße 80, 60314 Frankfurt a.M., Germany</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-6 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-widest font-bold"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;