import { useEffect, useRef } from 'react'

/**
 * Locks body scroll (iOS-safe: position:fixed trick) while mounted.
 * Restores scroll position and calls onClose on Escape key.
 */
export function useScrollLock(onClose) {
  const scrollYRef = useRef(0)

  useEffect(() => {
    scrollYRef.current = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${scrollYRef.current}px`
    document.body.style.overflow = 'hidden'

    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollYRef.current)
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])
}
