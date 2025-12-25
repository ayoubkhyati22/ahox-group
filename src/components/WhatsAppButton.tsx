import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    const message = encodeURIComponent(t('whatsapp.message'));
    const phoneNumber = '1234567890';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-gold to-orange text-white flex items-center justify-center z-[1000] hover:shadow-2xl transition-shadow"
      style={{
        boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)',
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.div>
    </motion.button>
  );
};

export default WhatsAppButton;
