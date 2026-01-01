import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('footer.address'),
      content: ['AHOX GmbH', 'Ostendstraße 80', '60314 Frankfurt a.M.', 'Germany'],
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
    {
      icon: Globe,
      title: t('footer.website'),
      content: ['www.ahox-group.com'],
    },
  ];

  const locations = [
    { name: 'frankfurt', region: 'Germany' },
    { name: 'casablanca', region: 'Morocco' },
    { name: 'dubai', region: 'UAE' },
    { name: 'pristina', region: 'Kosovo' },
  ];

  const services = [
    t('divisions.construction.title'),
    t('divisions.realEstate.title'),
    t('divisions.security.title'),
    t('common.projectManagement'),
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
              src="/images/ahox-group-main-logo.svg" 
              alt="AHOX Logo" 
              className="h-22 w-auto object-contain mb-6"
            />
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold rounded-lg flex items-center justify-center transition-colors">
                <span className="text-gold hover:text-white text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold rounded-lg flex items-center justify-center transition-colors">
                <span className="text-gold hover:text-white text-xl">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 hover:bg-gold rounded-lg flex items-center justify-center transition-colors">
                <span className="text-gold hover:text-white text-xl">𝕏</span>
              </a>
            </div> */}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gold mb-6">{t('footer.contact')}</h3>
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
                          {item.title === t('footer.email') ? (
                            <a href={`mailto:${line}`} className="hover:text-gold transition-colors">
                              {line}
                            </a>
                          ) : item.title === t('footer.website') ? (
                            <a href={`https://${line}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                              {line}
                            </a>
                          ) : item.title === t('footer.phone') ? (
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
            <h3 className="text-xl font-bold text-gold mb-6">{t('footer.locations')}</h3>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index}>
                  <a 
                    href={`/${location.name}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors group"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="font-medium">{t(`nav.${location.name}`)}</span>
                    <span className="text-sm text-gray-500">({location.region})</span>
                  </a>
                </li>
              ))}
            </ul>
            
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors cursor-pointer">
                  <span className="text-gold">▸</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AHOX GmbH. {t('footer.rights')}
            </p> */}
            {/* <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">{t('footer.terms')}</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">{t('footer.impressum')}</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">{t('footer.datenschutz')}</a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </footer>
  );
};

export default Footer;