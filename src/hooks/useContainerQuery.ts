import { useState, useEffect, RefObject } from 'react';
import { ScreenCategory } from './useWindowSize';

interface ContainerMetrics {
  width: number;
  height: number;
  category: ScreenCategory;
}

export function useContainerQuery<T extends HTMLElement>(
    elementRef: RefObject<T | null>
): ContainerMetrics {
  const [metrics, setMetrics] = useState<ContainerMetrics>({
    width: 0,
    height: 0,
    category: 'full',
  });

  useEffect(() => {
    const targetNode = elementRef.current;  
    if (!targetNode) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        let category: ScreenCategory = 'full';
        if (width < 600) category = 'compact';
        else if (width < 1024) category = 'split-screen';
        setMetrics({ width, height, category });
      }
    });
    observer.observe(targetNode);
    return () => observer.disconnect();
  }, [elementRef]);

  return metrics;
}