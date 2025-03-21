// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const InstagramLink = () => {
  return (
    <motion.a
      href="https://www.instagram.com/jaymorris.la/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-8 right-8 z-[3] cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ delay: 1, duration: 0.8 }}
      whileHover={{ 
        scale: 1.1,
        opacity: 1,
        filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))"
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
        className="text-white"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </motion.a>
  );
};

export default InstagramLink; 