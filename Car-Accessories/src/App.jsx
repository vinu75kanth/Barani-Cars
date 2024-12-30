import React, { useEffect, useState } from 'react';
import AppRouter from './Components/AppRouter/AppRouter';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {screenWidth > 450 ? 
        <h1>Hi you are using Desktop, we will be coming there soon. Use Mobile for smooth Experience</h1> 
        : 
        <AppRouter/>
      }
    </div>
  );
}

export default App;
