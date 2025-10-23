import { useSyncExternalStore } from 'react';

export function useIsMobile(breakpoint: number = 768) {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const subscribe = (callback: (event: MediaQueryListEvent) => void) => {
        mql.addEventListener('change', callback);
        return () => mql.removeEventListener('change', callback);
    };

    const getSnapshot = () => mql.matches;

    return useSyncExternalStore(subscribe, getSnapshot);
}
