// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';

const RSVPButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate loading state for 1 second before redirecting
    setTimeout(() => {
      // Redirect to the Google Form
      window.location.href = "https://forms.gle/fnmTpVd1LVM5yYXQ6";
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="mt-4 flex justify-center">
      <motion.button
        className={`btn-shine relative px-12 py-3 border-2 border-white rounded-full font-space-grotesk tracking-widest text-lg uppercase bg-transparent ${
          isLoading ? 'opacity-70' : 'opacity-100'
        } rsvp-button animate-button-appear`}
        onClick={handleClick}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
          backgroundColor: "rgba(255, 255, 255, 0.1)"
        }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
      >
        {isLoading ? (
          <motion.div
            className="flex items-center justify-center"
            animate={{ opacity: [0.5, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            LOADING...
          </motion.div>
        ) : (
          "RSVP"
        )}
      </motion.button>
    </div>
  );
};

export default RSVPButton;
