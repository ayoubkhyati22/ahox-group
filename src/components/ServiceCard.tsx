import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 border-4 border-purple hover:border-gold transition-all duration-300 group"
    >
      <div className="flex flex-col gap-6">
        <div className="w-16 h-16 bg-purple group-hover:bg-gold transition-colors duration-300 flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-purple">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
