// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const InstagramLink = () => {
  const controls = useAnimation();

  useEffect(() => {
    const randomFlicker = async () => {
      while (true) {
        // Random time between flickers (between 2 and 10 seconds)
        const delay = 2000 + Math.random() * 8000;
        await new Promise(resolve => setTimeout(resolve, delay));
        
        // Quick opacity change for flicker effect
        await controls.start({
          opacity: [0.3, 0.1, 0.3],
          transition: { duration: 0.2 }
        });
      }
    };

    randomFlicker();
  }, [controls]);

  return (
    <motion.a
      href="https://www.instagram.com/jaymorris.la/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-8 right-8 z-[3] cursor-pointer"
      initial={{ opacity: 0 }}
      animate={controls}
      style={{ filter: 'brightness(0.7)' }}
      transition={{ delay: 1, duration: 0.8 }}
      whileHover={{ 
        scale: 1.1,
        opacity: 0.8,
        filter: "brightness(1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-white opacity-70"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </motion.a>
  );
};

export default InstagramLink; 