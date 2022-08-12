import { useEffect, useState } from 'react'

export const useScroll = (LIMIT_NUMER) => {
    const [status, setstatus] = useState(false)
    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= LIMIT_NUMER) {
                setstatus(true)
            } else {
                setstatus(false)
            }
        }
        window.addEventListener('scroll', changeNavbarColor)
        return () => {
            document.removeEventListener('scroll', changeNavbarColor)
        }
    }, [])

    return { status }
}
