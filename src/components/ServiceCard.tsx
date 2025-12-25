import { motion } from 'framer-motion';

interface ServiceCardProps {
  logo: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ logo, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 border-4 border-purple-light hover:border-gold transition-all duration-300 group shadow-lg"
    >
      <div className="flex flex-col gap-6">
        <div className="w-24 h-24 flex items-center justify-center">
          <img 
            src={logo} 
            alt={title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-2xl font-bold text-purple">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;