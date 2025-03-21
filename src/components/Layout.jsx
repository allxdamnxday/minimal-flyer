import { useState, useEffect } from 'react';
import Background from './Background';
import Logo from './Logo';
import InstagramLink from './InstagramLink';
import EventInfo from './EventInfo';

const Layout = ({ children }) => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  
  useEffect(() => {
    // Handle viewport height adjustments, especially for mobile browsers
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ height: `${viewportHeight}px` }}>
      {/* Background elements */}
      <Background />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
      
      {/* Header section */}
      <div className="absolute top-0 left-0 right-0 px-4 py-6 z-[15] flex justify-between items-center">
        <Logo />
        <InstagramLink />
      </div>
      
      {/* Main content area - removed the bottom padding as it's handled by RSVPButton */}
      <div className="relative z-[10] h-full flex flex-col justify-center items-center px-4">
        {children}
      </div>
      
      {/* Footer - fixed at bottom */}
      <EventInfo />
    </div>
  );
};

export default Layout; 