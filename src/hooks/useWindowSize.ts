import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';


export type ScreenCategory = 'compact' | 'split-screen' | 'full';
    

interface WindowSizeState {
  width: number;
  height: number;
  category: ScreenCategory;
}

export function useWindowSize(): WindowSizeState {
    const [windowSize, setWindowSize] = useState<WindowSizeState>(() => {
        return {
      width: window.innerWidth,
      height: window.innerHeight,
      category: 'full' // placeholder
    };
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let category: ScreenCategory = 'full';
      if ( height <250){
        category = 'compact';
    
      }else if (width < 1000  && width >= 500){
        category = 'split-screen';
      }else{
        category = 'full';
      }

      setWindowSize({
        width,
        height,
        category
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}