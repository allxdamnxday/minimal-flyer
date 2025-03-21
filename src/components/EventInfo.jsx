// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const EventInfo = () => {
  return (
    <motion.div
      className="absolute bottom-8 sm:bottom-10 left-0 right-0 text-center font-space-grotesk text-xs sm:text-sm tracking-wider font-light z-10 footer px-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 0.5,
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
        opacity: 0.8,
        textShadow: "0 0 5px rgba(255, 255, 255, 0.4)",
        y: 0
      }}
    >
      APRIL 4, 2025 | AGORA DTLA | 7PM-12AM
    </motion.div>
  );
};

export default EventInfo;
