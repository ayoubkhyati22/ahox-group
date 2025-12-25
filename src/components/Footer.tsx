import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: ['AHOX GmbH', 'Ostendstraße 80', '60314 Frankfurt a.M.', 'Germany'],
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['+49 69 272 787 61', '+49 157 33 44 88 98'],
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['info@ahox-cm.de'],
    },
    {
      icon: Globe,
      title: 'Website',
      content: ['www.ahox-cm.de'],
    },
  ];

  const locations = [
    { name: 'Frankfurt', region: 'Germany' },
    { name: 'Casablanca', region: 'Morocco' },
    { name: 'Dubai', region: 'UAE' },
    { name: 'Pristina', region: 'Kosovo' },
  ];

  const services = [
    'Construction Management',
    'Real Estate Development',
    'Security Solutions',
    'Project Consulting',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <img 
              src="https://ahox-cm.de/wp-content/uploads/2023/07/ahox-logo-png.png" 
              alt="AHOX Logo" 
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Premium construction, real estate, and security solutions across four continents. Building excellence since day one.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold rounded-lg flex items-center justify-center transition-colors">
                <span className="text-gold hover:text-white text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold rounded-lg flex items-center justify-center transition-colors">
                <span className="text-gold hover:text-white text-xl">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold rounded-lg flex items-center justify-center transition-colors">
                <span className="text-gold hover:text-white text-xl">𝕏</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <Icon className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-1">{item.title}</p>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-sm text-gray-400">
                          {item.title === 'Email' ? (
                            <a href={`mailto:${line}`} className="hover:text-gold transition-colors">
                              {line}
                            </a>
                          ) : item.title === 'Website' ? (
                            <a href={`https://${line}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                              {line}
                            </a>
                          ) : item.title === 'Phone' ? (
                            <a href={`tel:${line.replace(/\s/g, '')}`} className="hover:text-gold transition-colors">
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Our Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gold mb-6">Our Locations</h3>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index}>
                  <a 
                    href={`/${location.name.toLowerCase()}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors group"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="font-medium">{location.name}</span>
                    <span className="text-sm text-gray-500">({location.region})</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-gold/10 rounded-lg border border-gold/20">
              <p className="text-sm text-gray-300 font-semibold mb-1">Geschäftsführer</p>
              <p className="text-gold font-bold">Armend Hoxhaj</p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gold mb-6">Our Services</h3>
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors cursor-pointer">
                  <span className="text-gold">▸</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-gradient-to-br from-gold/20 to-orange/20 rounded-lg border border-gold/30">
              <p className="text-sm font-semibold mb-2">Ready to start your project?</p>
              <a 
                href="mailto:info@ahox-cm.de"
                className="inline-flex items-center gap-2 bg-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-orange transition-colors text-sm"
              >
                Get in Touch
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AHOX GmbH. {t('footer.rights')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Impressum</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </footer>
  );
};

export default Footer;