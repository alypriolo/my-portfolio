import { useEffect, useRef } from 'react'

/**
 * Prevents background scroll while a modal/lightbox is open.
 * Uses overflow:hidden (no scroll-position change) to avoid the
 * position:fixed flash-to-top bug on close.
 * Calls onClose on Escape key.
 */
export function useScrollLock(onClose) {
  const onCloseRef = useRef(onClose)
  useEffect(() => { onCloseRef.current = onClose }, [onClose])

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    const prevTouchAction = document.body.style.touchAction
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none' // blocks iOS scroll-through

    const onKey = (e) => e.key === 'Escape' && onCloseRef.current()
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      document.body.style.touchAction = prevTouchAction
      window.removeEventListener('keydown', onKey)
    }
  }, [])
}
