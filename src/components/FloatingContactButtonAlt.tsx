import { MessageCircle, Mail, X, Send, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { COMPANY_INFO, getWhatsAppLink, getEmailLink } from '../constants/companyInfo';

const FloatingContactButtonAlt = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = t('whatsapp.message');
    window.open(getWhatsAppLink(message), '_blank');
    setIsOpen(false);
  };

  const handleEmail = () => {
    const subject = t('common.investmentInquiry', { defaultValue: 'Investment Inquiry' });
    const body = t('whatsapp.message');
    window.location.href = getEmailLink(subject, body);
    setIsOpen(false);
  };

  const contactOptions = [
    {
      id: 'whatsapp',
      label: t('contact.priorityWhatsApp', { defaultValue: 'Priority WhatsApp' }),
      subtext: t('contact.typicalReply', { defaultValue: 'Typical reply: < 5 min' }),
      icon: MessageCircle,
      color: '#25D366',
      bg: 'rgba(37, 211, 102, 0.1)',
      onClick: handleWhatsApp
    },
    {
      id: 'email',
      label: t('contact.institutionalSupport', { defaultValue: 'Institutional Support' }),
      subtext: t('contact.corporateInquiries', { defaultValue: 'Corporate inquiries' }),
      icon: Mail,
      color: '#E8D700',
      bg: 'rgba(232, 215, 0, 0.1)',
      onClick: handleEmail
    }
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[1000] font-sans">
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Ultra-Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Container */}
            <div className="absolute bottom-24 right-0 flex flex-col gap-4 items-end">
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 30, 
                        delay: index * 0.1 
                    }}
                    className="relative"
                  >
                    {/* Security Badge Layer */}
                    <div className="absolute -top-2 -left-2 z-20">
                         <div className="bg-slate-900 border border-white/10 rounded-full p-1 shadow-xl">
                            <ShieldCheck className="w-3 h-3 text-white" />
                         </div>
                    </div>

                    <button
                      onClick={option.onClick}
                      className="group flex items-center gap-6 p-1 pl-6 pr-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 w-[280px] shadow-2xl overflow-hidden"
                    >
                      {/* Geometric Grid Internal Background */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                         <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grid)" /></svg>
                      </div>

                      <div className="flex-1 text-right py-3 relative z-10">
                        <span className="block text-white text-[10px] font-black uppercase tracking-[0.3em] mb-1">
                          {option.label}
                        </span>
                        <div className="flex items-center justify-end gap-2">
                           <Clock className="w-3 h-3 opacity-40 text-white" />
                           <span className="text-[9px] text-white/50 uppercase font-bold tracking-widest">{option.subtext}</span>
                        </div>
                      </div>

                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg relative z-10 group-hover:scale-105"
                        style={{ background: option.bg }}
                      >
                         <Icon className="w-6 h-6" style={{ color: option.color }} />
                         
                         {/* Dynamic corner light */}
                         <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse m-2" />
                      </div>
                      
                      {/* Interaction Progress Bar (Top) */}
                      <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: "100%" }}
                         transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                         className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" 
                      />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </AnimatePresence>

      {/* --- Main Orbit Button --- */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-20 h-20 group"
        aria-label={t('contact.openContactMenu', { defaultValue: 'Open contact menu' })}
      >
        {/* The Outer Kinetic Ring */}
        <div className="absolute inset-[-4px] rounded-full overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
          <motion.div
            className="w-full h-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent, #14B3AA, transparent, #E8D700, transparent)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* The Central Command Hub */}
        <div className="absolute inset-0 bg-slate-900 border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(20,179,170,0.2)] overflow-hidden">
            
          {/* Animated Internal Scanning Light */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-8 h-8 text-white relative z-10" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative flex items-center justify-center"
              >
                <Send className="w-7 h-7 text-[#E8D700]" />
                <div className="absolute inset-0 bg-[#E8D700]/20 blur-xl animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Outer Notification Ripple */}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 z-50">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8D700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E8D700]"></span>
            </span>
        )}
      </motion.button>

      {/* SVG Asset Library (Used in components above) */}
      <svg className="hidden">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
      </svg>
    </div>
  );
};

export default FloatingContactButtonAlt;