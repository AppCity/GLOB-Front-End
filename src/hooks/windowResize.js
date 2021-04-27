import { useState, useEffect } from 'react';


const useWindowSize = () =>
{

    const [windowSize, setWindowSize] = useState({width: undefined, height: undefined});

  
    const handleResize = () => 
    {   // Only runs on client side
        if (typeof window !== "undefined") 
        {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        }
    };
  

    useEffect(() => 
    {
        handleResize();

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
        
    }, []);


    return windowSize;
}

export default useWindowSize;