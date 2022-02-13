import { useEffect } from "react"

export const useVh = (): void => {
    useEffect(() => {
        // @ts-ignore
        document.querySelector(':root').style
            .setProperty('--vh', window.innerHeight/100 + 'px');

        const listener = () => {
          // @ts-ignore
            document.querySelector(':root').style
              .setProperty('--vh', window.innerHeight/100 + 'px');
          }
    
        window.addEventListener('resize', listener)

        return () => {
          document.removeEventListener('resize', listener)
        }
      }, [])
}