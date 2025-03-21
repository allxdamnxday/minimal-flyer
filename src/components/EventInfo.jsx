// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const EventInfo = () => {
  return (
    <motion.div
      className="
        w-full text-center font-space-grotesk 
        text-xs sm:text-sm md:text-base tracking-wider font-light 
        z-20 px-2 py-3 bg-black bg-opacity-50 backdrop-blur-sm
        border-t border-gray-800
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      whileHover={{ 
        opacity: 1,
        textShadow: "0 0 5px rgba(255, 255, 255, 0.4)"
      }}
    >
      APRIL 4, 2025 | AGORA DTLA | 7PM-12AM
    </motion.div>
  );
};

export default EventInfo;
