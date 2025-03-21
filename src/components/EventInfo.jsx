// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const EventInfo = () => {
  return (
    <motion.div
      className="
        fixed bottom-0 left-0 right-0 
        text-center font-space-grotesk text-xs sm:text-sm md:text-base 
        tracking-wider font-light py-3 z-[15]
        border-t border-gray-800 bg-black bg-opacity-80 backdrop-blur-sm
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      APRIL 4, 2025 | AGORA DTLA | 7PM-12AM
    </motion.div>
  );
};

export default EventInfo;
