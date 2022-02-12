import { useEffect } from "react"

export const useVh = (): void => {
    useEffect(() => {
        // @ts-ignore
        document.querySelector(':root').style
            .setProperty('--vh', window.innerHeight/100 + 'px');
    
        window.addEventListener('resize', () => {
        // @ts-ignore
          document.querySelector(':root').style
            .setProperty('--vh', window.innerHeight/100 + 'px');
        })
      }, [])
}