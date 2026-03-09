import { useEffect, useRef, useState } from 'react'
import './Personal.css'

const BASE = import.meta.env.BASE_URL

function photoSrc(folder, file) {
  return `${BASE}${['portfolio pictures', folder, file].map(encodeURIComponent).join('/')}`
}

const ROTATIONS = [-4, 3, -2, 5, -3, 2, -5, 4, -1, 3, -4, 2, 1, -3, 5]

const albums = [
  {
    id: 'vandy',
    caption: 'I attended Vanderbilt University and studied Computer Science with a minor in business. While there, I was a member of Change++ org and Delta Sigma Pi.',
    folder: 'vandy',
    sticker: 'Vanderbilt-Logo-PNG-Images.png',
    stickerSize: 112,
    items: [
      { file: 'IMG_7381.JPG', type: 'image' },
      { file: 'IMG_8403.jpeg', type: 'image' },
      { file: '126202F6-2B07-4DEA-AEF1-F16DB640FF44.jpg', type: 'image' },
    ],
  },
  {
    id: 'good-film',
    caption: 'I love to explore and take photos of all the places I go! Sometimes they turn out pretty good...',
    folder: 'good film',
    sticker: 'first film picture.png',
    stickerSize: 120,
    items: [
      { file: '000135920017.JPG', type: 'image' },
      { file: '000135920028.JPG', type: 'image' },
      { file: 'IMG_7055.JPG', type: 'image' },
      { file: 'IMG_7056.JPG', type: 'image' },
      { file: 'IMG_7057.JPG', type: 'image' },
      { file: 'IMG_7059.JPG', type: 'image' },
      { file: 'IMG_7060.JPG', type: 'image' },
      { file: 'IMG_7061.JPG', type: 'image' },
    ],
  },
  {
    id: 'bad-film',
    caption: '...other times, well, they dont turn out so great (its a work in progress)!!',
    folder: 'bad film',
    sticker: 'meltyfacetransparent.png',
    stickerSize: 90,
    items: [
      { file: 'IMG_7053.JPG', type: 'image' },
      { file: 'IMG_7058.JPG', type: 'image' },
      { file: 'IMG_7062.JPG', type: 'image' },
    ],
  },
  {
    id: 'skiing',
    caption: 'My favorite way to spend my free time is by getting outside and skiing.',
    folder: 'skiing',
    sticker: 'matterhorn.png',
    stickerSize: 110,
    items: [
      { file: 'IMG_1074.jpg', type: 'image' },
      { file: 'IMG_6174.jpg', type: 'image' },
      { file: 'IMG_6623.jpg', type: 'image' },
      { file: 'IMG_6682.jpg', type: 'image' },
      { file: 'IMG_6918.jpg', type: 'image' },
    ],
  },
  {
    id: 'cooking',
    caption: "I love to craft ~extravagant~ dining experiences, whether it's torching crème brûlées inside banana peels table-side, creating an on-piste charcuterski board, or a hodge podge of seasonal dishes. Food is my creative outlet and love language!",
    folder: 'cooking',
    sticker: 'ramem.png',
    stickerSize: 90,
    items: [
      { file: 'IMG_5635.mov', type: 'video' },
      { file: 'Tezza-9898.JPG', type: 'image', folder: 'skiing', objectPosition: 'bottom' },
      { file: 'IMG_8476.MOV', type: 'video' },
    ],
  },
  {
    id: 'claim-to-fame',
    caption: "My claim to fame is my tuna tartare nacho dish. Ask me about it, I promise it's 10x better than it sounds :)",
    folder: 'claim to fame',
    sticker: 'michelin.png',
    stickerSize: 90,
    items: [
      { file: 'IMG_2566.jpg', type: 'image' },
      { file: 'IMG_8830.jpg', type: 'image' },
    ],
  },
]

function TypewriterCaption({ text }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const indexRef = useRef(0)
  const timerRef = useRef(null)
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const startDelay = setTimeout(() => {
      timerRef.current = setInterval(() => {
        indexRef.current += 1
        setDisplayed(text.slice(0, indexRef.current))
        if (indexRef.current >= text.length) {
          clearInterval(timerRef.current)
          setDone(true)
        }
      }, 28)
    }, 200)
    return () => {
      clearTimeout(startDelay)
      clearInterval(timerRef.current)
    }
  }, [started, text])

  return (
    <p className="personal-album__caption" ref={elRef}>
      <span className="personal-album__caption-quote">"</span>
      {displayed}
      {!done
        ? <span className="personal-album__cursor">|</span>
        : <span className="personal-album__caption-quote">"</span>
      }
    </p>
  )
}

function PolaroidExpanded({ item, albumFolder, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const src = photoSrc(item.folder ?? albumFolder, item.file)

  return (
    <div className="polaroid-backdrop" onClick={onClose}>
      <div className="polaroid polaroid--expanded" onClick={(e) => e.stopPropagation()}>
        <div className="polaroid__inner polaroid__inner--expanded">
          {item.type === 'video' ? (
            <video
              src={src}
              className="polaroid__media"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={src}
              alt=""
              className="polaroid__media polaroid__media--expanded"
              style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
            />
          )}
        </div>
        <button className="polaroid__close" onClick={onClose} aria-label="Close">✕</button>
      </div>
    </div>
  )
}

export default function Personal() {
  const sectionRef = useRef(null)
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    const albumEls = sectionRef.current?.querySelectorAll('.personal-album')
    if (!albumEls) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            el.classList.add('visible')
            observer.unobserve(el)
            const count = el.querySelectorAll('.polaroid').length
            setTimeout(() => el.classList.add('anim-done'), count * 80 + 600)
          }
        })
      },
      { threshold: 0.15 }
    )

    albumEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="personal" id="personal" ref={sectionRef}>
      <div className="container">
        <div className="personal__header fade-in">
          <span className="section-label">Personal</span>
          <h2 className="section-title">Get to know me</h2>
          <p className="section-subtitle">Beyond the PM hat.</p>
        </div>

        <div className="personal__albums">
          {albums.map((album) => (
            <div key={album.id} className="personal-album" data-album-id={album.id}>
              <div className="personal-album__caption-wrap">
                {album.sticker && (
                  <img
                    src={photoSrc(album.folder, album.sticker)}
                    className="personal-album__sticker"
                    alt=""
                    style={album.stickerSize ? { width: album.stickerSize, height: album.stickerSize } : undefined}
                  />
                )}
                <TypewriterCaption text={album.caption} />
              </div>
              <div className="personal-album__strip-wrap">
                <div className="personal-album__strip">
                  {album.items.map((item, i) => (
                    <div
                      key={item.file}
                      className="polaroid"
                      style={{
                        '--rotation': `${ROTATIONS[i % ROTATIONS.length]}deg`,
                        '--anim-delay': `${i * 0.08}s`,
                      }}
                      onClick={() => setExpanded({ item, albumFolder: album.folder })}
                    >
                      <div className="polaroid__inner">
                        {item.type === 'video' ? (
                          <video
                            src={photoSrc(item.folder ?? album.folder, item.file)}
                            className="polaroid__media"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <img
                            src={photoSrc(item.folder ?? album.folder, item.file)}
                            alt=""
                            className="polaroid__media"
                            loading="lazy"
                            style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {expanded && (
        <PolaroidExpanded
          item={expanded.item}
          albumFolder={expanded.albumFolder}
          onClose={() => setExpanded(null)}
        />
      )}
    </section>
  )
}
