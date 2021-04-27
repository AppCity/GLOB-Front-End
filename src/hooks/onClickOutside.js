import {useEffect } from 'react';


const onClickOutside = (ref, state, action) =>
{
    useEffect(() => 
    {
      
      const handleClickOutside = (event) =>
      {
        if(state)
        {
            if (ref.current && !ref.current.contains(event.target)) 
              action()
        }
      }

      // Bind the event listener
      window.addEventListener("mousedown", handleClickOutside);

      //CleanUp
      return () => window.removeEventListener("mousedown", handleClickOutside);

    }, [ref, state]);
}

export default onClickOutside;