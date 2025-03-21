// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const EventInfo = () => {
  return (
    <motion.div
      className="absolute bottom-16 sm:bottom-16 md:bottom-12 left-0 right-0 text-center font-space-grotesk text-xs sm:text-sm tracking-wider font-light z-20 footer px-2 py-2 bg-black bg-opacity-30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 0.8,
        y: [0, -8, 0],
      }}
      transition={{ 
        opacity: { delay: 1.5, duration: 0.8 },
        y: { 
          delay: 2,
          duration: 8, 
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }
      }}
      whileHover={{ 
        scale: 1.02,
        opacity: 1,
        textShadow: "0 0 5px rgba(255, 255, 255, 0.4)",
        y: 0
      }}
    >
      APRIL 4, 2025 | AGORA DTLA | 7PM-12AM
    </motion.div>
  );
};

export default EventInfo;
