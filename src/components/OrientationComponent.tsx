import React, { useEffect, useState } from 'react';
import App from '../App';


const OrientationComponent: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState<boolean>(window.innerHeight > window.innerWidth);

  const handleOrientationChange = () => {
    if (window.innerHeight > window.innerWidth) {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener('resize', handleOrientationChange);

    // Initial check for orientation
    handleOrientationChange();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return (
    <div>
      {isPortrait ? (<>
        {/* <div className='h-screen'>
        <img className='h-screen' src="/Rotate_Phone_Final.jpg" alt="Example Image" />

        </div> */}
        <div className="h-screen landscape-message flex items-center justify-center text-center p-4 text-rose-800 font-semibold">Please rotate your device to landscape mode for the best experience.</div>
        </>
       
      ) : (
        <App />
      )}
    </div>
  );
};

export default OrientationComponent;
