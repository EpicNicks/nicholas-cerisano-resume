// usePreventBodyScroll.ts
import { useEffect, useState } from 'react';

let modalCount = 0;

export function usePreventBodyScroll(isActive: boolean) {
  const [zIndex, setZIndex] = useState(1000);

  useEffect(() => {
    if (isActive) {
      modalCount++;
      const currentZIndex = 1000 + modalCount * 10;
      setZIndex(currentZIndex);
      
      if (modalCount === 1) {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        
        // Track touch start position for touch events
        let touchStartY = 0;
        
        const handleTouchStart = (e: TouchEvent) => {
          touchStartY = e.touches[0].clientY;
        };
        
        const preventScroll = (e: WheelEvent | TouchEvent) => {
          const target = e.target as Element;
          
          // Find the scrollable container
          let scrollableParent = target;
          while (scrollableParent && scrollableParent !== document.body) {
            const hasScrollableContent = scrollableParent.scrollHeight > scrollableParent.clientHeight;
            const hasOverflow = window.getComputedStyle(scrollableParent).overflowY !== 'visible';
            
            if (hasScrollableContent && hasOverflow) {
              // Found a scrollable container, check boundaries
              const { scrollTop, scrollHeight, clientHeight } = scrollableParent;
              
              if (e instanceof WheelEvent) {
                const isScrollingDown = e.deltaY > 0;
                const isScrollingUp = e.deltaY < 0;
                
                const atTop = scrollTop <= 0;
                const atBottom = scrollTop + clientHeight >= scrollHeight;
                
                // If trying to scroll beyond boundaries, prevent it
                if ((atTop && isScrollingUp) || (atBottom && isScrollingDown)) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
                
                // Allow scrolling within bounds
                return;
              } else if (e instanceof TouchEvent) {
                // Handle touch events
                const touchY = e.touches[0]?.clientY ?? touchStartY;
                const touchDelta = touchStartY - touchY;
                const isScrollingDown = touchDelta > 0;
                const isScrollingUp = touchDelta < 0;
                
                const atTop = scrollTop <= 0;
                const atBottom = scrollTop + clientHeight >= scrollHeight;
                
                // If trying to scroll beyond boundaries, prevent it
                if ((atTop && isScrollingUp) || (atBottom && isScrollingDown)) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
                
                // Allow scrolling within bounds
                return;
              }
            }
            
            scrollableParent = scrollableParent.parentElement!;
          }
          
          // No scrollable container found, prevent scroll
          e.preventDefault();
          e.stopPropagation();
        };
        
        const preventKeyScroll = (e: KeyboardEvent) => {
          const keys = ['Space', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'];
          const target = e.target as Element;
          
          if (keys.includes(e.code) && !target.closest('.expanded-content')) {
            e.preventDefault();
          }
        };
        
        document.addEventListener('touchstart', handleTouchStart, { passive: false });
        document.addEventListener('wheel', preventScroll, { passive: false });
        document.addEventListener('touchmove', preventScroll, { passive: false });
        document.addEventListener('keydown', preventKeyScroll);
        
        return () => {
          modalCount--;
          
          if (modalCount === 0) {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('wheel', preventScroll);
            document.removeEventListener('touchmove', preventScroll);
            document.removeEventListener('keydown', preventKeyScroll);
          }
        };
      }
      
      return () => {
        modalCount--;
      };
    }
  }, [isActive]);

  return zIndex;
}