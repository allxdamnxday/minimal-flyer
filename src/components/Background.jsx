import { useEffect, useState, useCallback } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Background = () => {
  const [particles, setParticles] = useState([]);
  const [sprayElements, setSprayElements] = useState([]);

  const generateParticles = useCallback(() => {
    // Create particles based on screen size
    const particleCount = Math.min(window.innerWidth, window.innerHeight) / 18;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 20 + 10,
      xOffset: Math.random() * 100 - 50,
      yOffset: Math.random() * 100 - 50,
      delay: Math.random() * 2,
    }));
    
    setParticles(newParticles);
    
    // Create spray paint elements - increased count and opacity
    const sprayCount = 15;
    const newSprayElements = Array.from({ length: sprayCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 80,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.15 + 0.05, // Increased opacity
      color: i % 4 === 0 ? 'rgba(255, 255, 255, 0.09)' : 
             i % 4 === 1 ? 'rgba(200, 200, 255, 0.08)' : 
             i % 4 === 2 ? 'rgba(255, 200, 200, 0.07)' :
             'rgba(200, 255, 200, 0.08)',
      blur: Math.random() * 30 + 15, // Slightly reduced blur for more definition
    }));
    
    setSprayElements(newSprayElements);
  }, []);

  useEffect(() => {
    generateParticles();
    
    // Regenerate particles on window resize
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateParticles]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black to-gray-900 overflow-hidden pointer-events-none z-0">
      {/* Spray paint elements */}
      {sprayElements.map((spray) => (
        <motion.div
          key={`spray-${spray.id}`}
          className="absolute rounded-full"
          style={{
            width: `${spray.size}px`,
            height: `${spray.size}px`,
            top: `${spray.y}%`,
            left: `${spray.x}%`,
            opacity: spray.opacity,
            background: spray.color,
            filter: `blur(${spray.blur}px)`,
            transform: `rotate(${spray.rotation}deg)`,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: [0, spray.opacity * 1.8, spray.opacity]
          }}
          transition={{
            duration: 8,
            delay: spray.id * 0.3,
            ease: "easeOut",
            times: [0, 0.3, 1]
          }}
        />
      ))}
      
      {/* Drip elements - increased count and opacity */}
      <div className="absolute top-0 left-0 w-full h-full opacity-25">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`drip-${i}`}
            className="absolute bg-gradient-to-b from-transparent to-white"
            style={{
              width: i % 4 === 0 ? '3px' : i % 4 === 1 ? '2px' : '1px', // More variation in thickness
              height: `${Math.random() * 25 + 10}vh`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              opacity: Math.random() * 0.6 + 0.2,
              filter: i % 5 === 0 ? 'blur(0.5px)' : 'none', // Some slight blur for realism
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{
              duration: Math.random() * 6 + 8,
              delay: i * 1.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 15 + 8,
            }}
          />
        ))}
      </div>
      
      {/* Spray mist clusters - replacing individual dots */}
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`mist-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              background: i % 5 === 0 ? 'radial-gradient(circle, rgba(255,200,200,0.7) 0%, rgba(255,200,200,0) 70%)' : 
                         i % 5 === 1 ? 'radial-gradient(circle, rgba(200,200,255,0.7) 0%, rgba(200,200,255,0) 70%)' : 
                         'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)',
              filter: `blur(${Math.random() * 2 + 1}px)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Spray splatter groups - more natural looking than individual dots */}
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 8 }).map((_, groupIndex) => (
          <motion.div
            key={`splatter-group-${groupIndex}`}
            className="absolute"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              delay: groupIndex * 0.4,
            }}
          >
            {/* Create a cluster of 3-7 tiny dots for each splatter group */}
            {Array.from({ length: Math.floor(Math.random() * 5) + 3 }).map((_, i) => (
              <div
                key={`splatter-dot-${groupIndex}-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 2 + 0.5}px`,
                  height: `${Math.random() * 2 + 0.5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  backgroundColor: groupIndex % 3 === 0 ? 'rgba(255, 200, 200, 0.8)' : 
                                  groupIndex % 3 === 1 ? 'rgba(200, 200, 255, 0.8)' : 
                                  'rgba(255, 255, 255, 0.8)',
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>
      
      {/* Original particles */}
      <div className="particles absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              opacity: particle.opacity,
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [`${particle.y}%`, `${particle.y + particle.yOffset}%`],
              x: [`${particle.x}%`, `${particle.x + particle.xOffset}%`],
              opacity: [0, particle.opacity, particle.opacity, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
