import { MessageCircle, Mail, X, Send, Clock, ShieldCheck, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { getWhatsAppLink, getEmailLink } from '../constants/companyInfo';

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
      label: 'Direct Channel',
      subtext: 'High-Priority Response',
      icon: MessageCircle,
      color: '#C5A059', // Gold instead of neon green
      bg: 'rgba(197, 160, 89, 0.05)',
      onClick: handleWhatsApp
    },
    {
      id: 'email',
      label: 'Institutional Desk',
      subtext: 'Official Inquiries',
      icon: Mail,
      color: '#A1A1AA', // Zinc Grey
      bg: 'rgba(255, 255, 255, 0.05)',
      onClick: handleEmail
    }
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[2000] font-sans">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Architectural Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#050505]/60 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel List Container */}
            <div className="absolute bottom-28 right-0 flex flex-col gap-6 items-end">
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, x: 30, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, delay: index * 0.1 }}
                  >
                    <button
                      onClick={option.onClick}
                      className="group relative flex items-center bg-[#0F0F0F] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 w-[300px] overflow-hidden"
                      style={{ borderRadius: '2px' }} // Sharp architectural edge
                    >
                      {/* Geometric "Drafting" Grid Background */}
                      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 pointer-events-none transition-opacity">
                         <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                      </div>

                      <div className="flex-1 text-right py-6 px-6 relative z-10">
                        <span className="block text-[#C5A059] text-[9px] font-black uppercase tracking-[0.5em] mb-2 transition-all group-hover:tracking-[0.6em]">
                          {option.label}
                        </span>
                        <div className="flex items-center justify-end gap-2">
                           <span className="text-[10px] text-zinc-500 uppercase font-light tracking-widest">{option.subtext}</span>
                           <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                        </div>
                      </div>

                      {/* Icon Slab */}
                      <div 
                        className="w-20 h-full border-l border-white/5 py-8 flex items-center justify-center transition-all duration-500 bg-white/[0.02] group-hover:bg-[#C5A059]/10"
                      >
                         <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" style={{ color: option.color }} />
                      </div>

                      {/* Animated Line Marker */}
                      <motion.div 
                        className="absolute bottom-0 right-0 h-[2px] bg-[#C5A059]"
                        initial={{ width: 0 }}
                        animate={{ width: "40px" }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </AnimatePresence>

      {/* --- MASTER CONTROL HUB (GOLD/ONYX ORBIT) --- */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-20 h-20 z-[2001]"
      >
        {/* The Animated Spin Edge (Swiss Watch Precision Style) */}
        <div className="absolute inset-0 rounded-full p-[1px]">
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, #C5A059 180deg, transparent 360deg)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* The Internal Command Button */}
        <div className="absolute inset-[3px] bg-[#0A0A0A] rounded-full flex items-center justify-center border border-white/5 shadow-2xl overflow-hidden group">
            
          {/* Subtle Scanning Shadow Animation */}
          <motion.div
            className="absolute inset-0 bg-white/5"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <X className="w-6 h-6 text-zinc-200" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                   <MessageCircle className="w-6 h-6 text-white group-hover:text-[#C5A059] transition-colors" />
                   {/* Ghost Echo Pulse */}
                   <motion.div 
                     animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="absolute inset-0 bg-[#C5A059] rounded-full blur-md"
                   />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


      </motion.button>
    </div>
  );
};

export default FloatingContactButtonAlt;