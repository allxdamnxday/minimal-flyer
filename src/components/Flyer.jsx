// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';

const Flyer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-[90%] md:max-w-lg mx-auto mb-8 flyer-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-md shadow-flyer"
        animate={{ 
          scale: isHovered ? 1 : 1.05,
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)"
        }}
      >
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 z-10 ${isHovered ? 'bg-opacity-10' : 'bg-opacity-30'}`}></div>
        <motion.img
          src="/Leink Art Show April 2025 SQ final revised LL.png"
          alt="LEINK Solo Show - April 4, 2025"
          className="w-full h-auto"
          animate={{ 
            scale: 1.05 
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          loading="eager"
        />
      </motion.div>
    </motion.div>
  );
};

export default Flyer;
