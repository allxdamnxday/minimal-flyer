import { useState, useEffect, useRef } from 'react';
import Background from './Background';
import Logo from './Logo';
import InstagramLink from './InstagramLink';
import EventInfo from './EventInfo';

const Layout = ({ children }) => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const layoutRef = useRef(null);
  
  useEffect(() => {
    // More comprehensive approach to handle mobile viewport issues
    const handleResize = () => {
      // Use window.innerHeight for initial setting
      setViewportHeight(window.innerHeight);
      
      // For mobile browsers, we need to handle the visual viewport changes
      if ('visualViewport' in window) {
        const handleVisualViewportChange = () => {
          // Only update if the layout component is still mounted
          if (layoutRef.current) {
            setViewportHeight(window.visualViewport.height);
          }
        };
        
        window.visualViewport.addEventListener('resize', handleVisualViewportChange);
        window.visualViewport.addEventListener('scroll', handleVisualViewportChange);
        
        return () => {
          window.visualViewport.removeEventListener('resize', handleVisualViewportChange);
          window.visualViewport.removeEventListener('scroll', handleVisualViewportChange);
        };
      }
    };
    
    // Initial call
    handleResize();
    
    // Standard resize listener
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={layoutRef}
      className="relative overflow-hidden flex flex-col" 
      style={{ 
        height: `${viewportHeight}px`,
        // Add a min-height as a fallback
        minHeight: '-webkit-fill-available'
      }}
    >
      {/* Background elements */}
      <Background />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
      
      {/* Header section */}
      <div className="absolute top-0 left-0 right-0 px-4 py-6 z-[15] flex justify-between items-center">
        <Logo />
        <InstagramLink />
      </div>
      
      {/* Main content area - using flex grow to push footer to bottom */}
      <div className="relative z-[10] flex-grow flex flex-col justify-center items-center px-4">
        {children}
      </div>
      
      {/* Footer - not fixed, but at the bottom of flex container */}
      <div className="relative z-[15] mt-auto">
        <EventInfo />
      </div>
    </div>
  );
};

export default Layout; 