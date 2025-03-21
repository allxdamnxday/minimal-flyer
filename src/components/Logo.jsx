// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className="absolute top-8 left-8 font-space-grotesk text-2xl tracking-wider font-semibold cursor-pointer z-[3] logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      whileHover={{ 
        scale: 1.02,
        textShadow: "0 0 8px rgba(255, 255, 255, 0.5)"
      }}
    >
      LEINK.ART
    </motion.div>
  );
};

export default Logo;
