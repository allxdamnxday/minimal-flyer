// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Flyer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  });

  // Track mouse position for parallax effect and detect mobile
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / windowSize.width - 0.5,
        y: e.clientY / windowSize.height - 0.5
      });
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });
      setIsMobile(width < 768);
    };

    // Run once to detect mobile
    handleResize();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize.width, windowSize.height]);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate loading state for 1 second before redirecting
    setTimeout(() => {
      // Redirect to the Google Form
      window.location.href = "https://forms.gle/fnmTpVd1LVM5yYXQ6";
      setIsLoading(false);
    }, 800);
  };

  return (
    <motion.div
      className="relative w-full max-w-[90%] md:max-w-lg mx-auto mb-8 flyer-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      style={{
        perspective: '1000px'
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-md shadow-flyer cursor-pointer"
        animate={{ 
          scale: isHovered ? 1.02 : isMobile ? [1.02, 1.055, 1.02] : [1.03, 1.06, 1.03],
          rotateX: isHovered ? 0 : mousePosition.y * 5,
          rotateY: isHovered ? 0 : mousePosition.x * -5,
          z: isHovered ? 20 : 0
        }}
        transition={{ 
          scale: {
            duration: isHovered ? 0.5 : isMobile ? 12 : 15,
            repeat: isHovered ? 0 : Infinity,
            ease: isHovered ? "easeOut" : "easeInOut"
          },
          rotateX: {
            duration: 0.5,
            ease: "easeOut"
          },
          rotateY: {
            duration: 0.5,
            ease: "easeOut"
          },
          z: {
            duration: 0.5,
            ease: "easeOut"
          }
        }}
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        {isLoading && (
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-70 z-20 flex items-center justify-center text-white font-space-grotesk tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ opacity: [0.5, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            >
              LOADING...
            </motion.div>
          </motion.div>
        )}
        
        <motion.div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 z-10 ${isHovered ? 'bg-opacity-10' : 'bg-opacity-30'}`}
          animate={{
            backgroundImage: isHovered 
              ? 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)' 
              : isMobile
                ? 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)'
                : 'none',
            opacity: isMobile && !isHovered ? [0.3, 0.4, 0.3] : undefined
          }}
          transition={{
            opacity: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Subtle vignette effect */}
        <motion.div 
          className="absolute inset-0 z-[9] pointer-events-none" 
          animate={{
            boxShadow: isMobile && !isHovered 
              ? [
                  'inset 0 0 90px rgba(0,0,0,0.6)', 
                  'inset 0 0 110px rgba(0,0,0,0.5)', 
                  'inset 0 0 90px rgba(0,0,0,0.6)'
                ]
              : 'inset 0 0 100px rgba(0,0,0,0.5)',
            opacity: isHovered ? 0.3 : 0.6
          }}
          transition={{
            boxShadow: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        <motion.img
          src="/Leink Art Show.png"
          alt="LEINK Solo Show - April 4, 2025"
          className="w-full h-auto"
          animate={{ 
            scale: isMobile && !isHovered ? [1.03, 1.06, 1.03] : 1.05,
            x: isHovered ? mousePosition.x * -10 : 0,
            y: isHovered ? mousePosition.y * -10 : 0
          }}
          transition={{ 
            scale: {
              duration: isMobile ? 12 : 30, 
              repeat: Infinity, 
              ease: "easeInOut"
            },
            x: {
              duration: 0.2,
              ease: "easeOut"
            },
            y: {
              duration: 0.2,
              ease: "easeOut"
            }
          }}
          loading="eager"
        />
        
        {/* Subtle pulsing glow effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-[8]"
          animate={{
            boxShadow: isHovered 
              ? ['inset 0 0 30px rgba(255,255,255,0.1)', 'inset 0 0 50px rgba(255,255,255,0.2)', 'inset 0 0 30px rgba(255,255,255,0.1)']
              : isMobile
                ? ['inset 0 0 20px rgba(255,255,255,0.02)', 'inset 0 0 30px rgba(255,255,255,0.06)', 'inset 0 0 20px rgba(255,255,255,0.02)']
                : 'none'
          }}
          transition={{
            duration: isMobile ? 12 : 2,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
        
        {/* RSVP indicator */}
        <motion.div 
          className="absolute bottom-4 right-4 text-white font-space-grotesk text-sm tracking-widest z-20 bg-black bg-opacity-50 px-3 py-1 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : isMobile ? [0, 0.6, 0] : 0,
            scale: 1
          }}
          transition={{ 
            opacity: {
              duration: isMobile && !isHovered ? 12 : 0.3,
              repeat: isMobile && !isHovered ? Infinity : 0,
              ease: "easeInOut"
            }
          }}
        >
          CLICK TO RSVP
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Flyer;
