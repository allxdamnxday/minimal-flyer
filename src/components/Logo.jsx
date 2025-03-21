// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Logo = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start the random blink effect after initial appearance
    const startNeonEffect = async () => {
      // Wait for initial fade-in to complete
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Continuous random neon flicker effect
      while (true) {
        // Random delay between flickers (between 3 and 8 seconds)
        const normalDelay = 3000 + Math.random() * 5000;
        await new Promise(resolve => setTimeout(resolve, normalDelay));
        
        // Random chance for different flicker patterns
        const flickerType = Math.random();
        
        if (flickerType < 0.6) {
          // Subtle single pulse (most common)
          await controls.start({
            textShadow: [
              "0 0 5px rgba(255, 255, 255, 0.2)",
              "0 0 8px rgba(255, 255, 255, 0.8)",
              "0 0 5px rgba(255, 255, 255, 0.2)"
            ],
            opacity: [0.9, 1, 0.9],
            transition: { duration: 0.3, ease: "easeInOut" }
          });
        } else if (flickerType < 0.9) {
          // Double quick flicker (occasional)
          await controls.start({
            textShadow: [
              "0 0 5px rgba(255, 255, 255, 0.2)",
              "0 0 12px rgba(255, 255, 255, 0.9)",
              "0 0 5px rgba(255, 255, 255, 0.2)",
              "0 0 10px rgba(255, 255, 255, 0.8)",
              "0 0 5px rgba(255, 255, 255, 0.2)"
            ],
            opacity: [0.9, 1, 0.9, 1, 0.9],
            transition: { duration: 0.5, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 1] }
          });
        } else {
          // Severe flicker (rare)
          await controls.start({
            textShadow: [
              "0 0 5px rgba(255, 255, 255, 0.2)",
              "0 0 15px rgba(255, 255, 255, 1)",
              "0 0 4px rgba(255, 255, 255, 0.1)",
              "0 0 10px rgba(255, 255, 255, 0.8)",
              "0 0 5px rgba(255, 255, 255, 0.2)"
            ],
            opacity: [0.9, 1, 0.7, 1, 0.9],
            transition: { duration: 0.8, ease: "easeInOut", times: [0, 0.1, 0.3, 0.4, 1] }
          });
        }
      }
    };

    startNeonEffect();
  }, [controls]);

  return (
    <motion.div
      className="absolute top-8 left-8 font-space-grotesk text-2xl tracking-wider font-semibold cursor-pointer z-[3] logo"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        textShadow: "0 0 5px rgba(255, 255, 255, 0.2)"
      }}
      transition={{ delay: 0.8, duration: 0.8 }}
      whileHover={{ 
        scale: 1.02,
        textShadow: "0 0 15px rgba(255, 255, 255, 0.8)"
      }}
    >
      <motion.span animate={controls}>LEiNK.ART</motion.span>
    </motion.div>
  );
};

export default Logo;
