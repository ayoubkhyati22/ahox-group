import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Home, Building, TrendingUp, Target, CheckCircle2, 
  ArrowRight, Phone, Mail, MapPin, Search, Key, FileText 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RealEstatePage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Search,
      title: 'Immobilienvermittlung',
      titleEn: 'Property Brokerage',
      description: 'Professionelle Vermittlung zwischen Käufern und Verkäufern von Immobilien und Grundstücken',
      features: ['Akquise von Immobilien', 'Verhandlungen führen', 'Preisklärung', 'Besichtigungen', 'Vertragsverhandlungen']
    },
    {
      icon: Target,
      title: 'Immobilienbewertung',
      titleEn: 'Property Valuation',
      description: 'Expertenbewertung von Immobilien mit Kenntnis des lokalen Marktes',
      features: ['Marktanalyse', 'Bewertung', 'Rechtliche Rahmenbedingungen', 'Verhandlungstechniken']
    },
    {
      icon: FileText,
      title: 'Investmentberatung',
      titleEn: 'Investment Consulting',
      description: 'Maßgeschneiderte Immobilien- und Bauinvestitionskonzepte',
      features: ['Off-Market Zugang', 'Projektmatching', 'Renditeszenarien', 'Risikominimierung']
    }
  ];

  const locations = [
    { city: 'Casablanca', country: 'Morocco', type: 'Emerging Market', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop' },
    { city: 'Dubai', country: 'UAE', type: 'High Growth', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop' },
    { city: 'Frankfurt', country: 'Germany', type: 'Stable Returns', image: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=800&h=600&fit=crop' },
    { city: 'Pristina', country: 'Kosovo', type: 'First Mover', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop' }
  ];

  const stats = [
    { value: '€500M+', label: 'Transaction Volume' },
    { value: '300+', label: 'Properties Sold' },
    { value: '4', label: 'Global Markets' },
    { value: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* Hero Section - Gold Themed */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop"
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gold/95 via-orange/80 to-black/90" />
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
                  alt="AHOX Real Estate"
                  className="h-32 w-auto object-contain"
                />
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                Real<br />
                <span className="text-black">Estate</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed font-light">
                Immobilienvermittlung und Investmentberatung für nachhaltige Renditen
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-gold px-8 py-4 font-bold uppercase text-sm flex items-center gap-3 hover:bg-black hover:text-gold transition-all"
                >
                  Our Services <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#markets"
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white px-8 py-4 font-bold uppercase text-sm hover:bg-white hover:text-gold transition-all"
                >
                  Explore Markets
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
      <section className="py-20 bg-gradient-to-r from-gold to-orange">
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
              Comprehensive real estate services from acquisition to closing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 border-4 border-purple-light hover:border-gold transition-all duration-500 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 group-hover:bg-gold mb-6 transition-colors">
                  <service.icon className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-purple mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section id="markets" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-purple mb-6 uppercase tracking-tighter">
              Global Markets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four strategic cities with distinct investment profiles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {locations.map((location, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] overflow-hidden"
              >
                <Link to={`/${location.city.toLowerCase()}`}>
                  <img 
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-gold text-xs font-black uppercase tracking-widest mb-2">{location.type}</span>
                    <h3 className="text-white text-4xl font-black uppercase mb-2 group-hover:text-gold transition-colors">{location.city}</h3>
                    <p className="text-white/70 text-sm mb-4">{location.country}</p>
                    <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span>Explore Market</span> <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-purple mb-6 uppercase tracking-tighter">
              Investment Process
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { num: '01', title: 'Bedarfsanalyse', desc: 'Analyse Ihrer Investmentziele, Budget und Risikotoleranz' },
              { num: '02', title: 'Projekt-Matching', desc: 'Auswahl passender Immobilien entsprechend Ihrer Anforderungen' },
              { num: '03', title: 'Konzeptentwicklung', desc: 'Entwicklung der Investmentstruktur und Renditeszenarien' },
              { num: '04', title: 'Vermittlung', desc: 'Professionelle Koordination zwischen allen Parteien' },
              { num: '05', title: 'Abschluss', desc: 'Begleitung bis zur erfolgreichen Transaktion' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start group"
              >
                <div className="text-6xl font-black text-gold/20 group-hover:text-gold transition-colors">
                  {step.num}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-purple mb-2 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-gold via-orange to-purple">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter">
              Start Your<br />Investment Journey
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Kontaktieren Sie uns für eine persönliche Investmentanalyse
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.a
                href="mailto:info@ahox-cm.de"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-gold px-10 py-5 font-black uppercase text-sm flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
              <motion.a
                href="tel:+496927278761"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-10 py-5 font-black uppercase text-sm hover:bg-white hover:text-gold transition-all flex items-center gap-3"
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

export default RealEstatePage;