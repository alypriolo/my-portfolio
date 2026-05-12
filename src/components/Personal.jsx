import { useEffect, useRef, useState } from 'react'
import './Personal.css'
import { useScrollLock } from '../hooks/useScrollLock'

const BASE = import.meta.env.BASE_URL

function photoSrc(folder, file) {
  return `${BASE}${['portfolio pictures', folder, file].map(encodeURIComponent).join('/')}`
}

const albums = [
  {
    id: 'vandy',
    label: 'Vanderbilt University',
    caption: 'I attended Vanderbilt University and studied Computer Science with a minor in business. While there, I was a member of Change++ org and Delta Sigma Pi.',
    folder: 'vandy',
    heroIndex: 0,
    items: [
      { file: 'IMG_7381.JPG', type: 'image' },
      { file: 'IMG_8403.jpeg', type: 'image' },
      { file: '126202F6-2B07-4DEA-AEF1-F16DB640FF44.jpg', type: 'image' },
    ],
  },
  {
    id: 'good-film',
    label: 'Film Photography',
    caption: 'I love to explore and take photos of all the places I go! Sometimes they turn out pretty good...',
    folder: 'good film',
    heroIndex: 0,
    items: [
      { file: '000135920017.JPG', type: 'image' },
      { file: '000135920028.JPG', type: 'image' },
      { file: 'IMG_7055.JPG', type: 'image' },
      { file: 'IMG_7056.JPG', type: 'image' },
      { file: 'IMG_7057.JPG', type: 'image' },
      { file: 'IMG_7059.JPG', type: 'image' },
      { file: 'IMG_7060.JPG', type: 'image' },
      { file: 'IMG_7061.JPG', type: 'image' },
      { file: 'IMG_8399.JPG', type: 'image' },
      { file: 'IMG_8401.JPG', type: 'image' },
      { file: 'IMG_8402.JPG', type: 'image' },
      { file: 'IMG_8405.JPG', type: 'image' },
      { file: 'IMG_8406.JPG', type: 'image' },
      { file: 'IMG_8410.jpeg', type: 'image' },
      { file: 'IMG_8418.JPG', type: 'image' },
      { file: 'IMG_8424.JPG', type: 'image' },
    ],
  },
  {
    id: 'bad-film',
    label: 'Work in Progress',
    caption: '...other times, well, they dont turn out so great (its a work in progress)!!',
    folder: 'bad film',
    heroIndex: 0,
    items: [
      { file: 'IMG_7053.JPG', type: 'image' },
      { file: 'IMG_7058.JPG', type: 'image' },
      { file: 'IMG_7062.JPG', type: 'image' },
    ],
  },
  {
    id: 'skiing',
    label: 'Skiing',
    caption: 'My favorite way to spend my free time is by getting outside and skiing.',
    folder: 'skiing',
    heroIndex: 2,
    items: [
      { file: 'IMG_1074.jpg', type: 'image' },
      { file: 'IMG_6174.jpg', type: 'image' },
      { file: 'IMG_6623.jpg', type: 'image' },
      { file: 'IMG_6682.jpg', type: 'image' },
      { file: 'IMG_6918.jpg', type: 'image' },
      { file: '71BB0156-6DC6-4913-9950-AA852CD1772B.JPG', type: 'image' },
    ],
  },
  {
    id: 'cooking',
    label: 'Cooking',
    caption: "I love to craft ~extravagant~ dining experiences, whether it's torching crème brûlées inside banana peels table-side, creating an on-piste charcuterski board, or a hodge podge of seasonal dishes. Food is my creative outlet and love language!",
    folder: 'cooking',
    heroIndex: 1,
    items: [
      { file: 'IMG_5635.mov', type: 'video' },
      { file: 'Tezza-9898.JPG', type: 'image', folder: 'skiing', objectPosition: 'bottom' },
      { file: 'IMG_8476.MOV', type: 'video' },
    ],
  },
  {
    id: 'claim-to-fame',
    label: 'Claim to Fame',
    caption: "My claim to fame is my tuna tartare nacho dish. Ask me about it, I promise it's 10x better than it sounds :)",
    folder: 'claim to fame',
    heroIndex: 0,
    items: [
      { file: 'IMG_2566.jpg', type: 'image' },
      { file: 'IMG_8830.jpg', type: 'image' },
    ],
  },
]

// ── MediaItem ─────────────────────────────────────────────────────────────────
function MediaItem({ item, folder, className, lazy = false }) {
  const src = photoSrc(item.folder ?? folder, item.file)
  if (item.type === 'video') {
    return <video src={src} className={className} autoPlay muted loop playsInline />
  }
  return (
    <img
      src={src}
      alt=""
      className={className}
      loading={lazy ? 'lazy' : undefined}
      style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
    />
  )
}

// ── TypewriterCaption ──────────────────────────────────────────────────────────
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

// ── Lightbox ───────────────────────────────────────────────────────────────────
function Lightbox({ item, albumFolder, onClose }) {
  useScrollLock(onClose)

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-media-wrap" onClick={(e) => e.stopPropagation()}>
        <MediaItem item={item} folder={albumFolder} className="lightbox-media" />
        <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      </div>
    </div>
  )
}

// ── PersonalChapter ────────────────────────────────────────────────────────────
function PersonalChapter({ album, index, onExpand }) {
  const chapterRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const isReversed = index % 2 !== 0

  useEffect(() => {
    const el = chapterRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const heroIdx = album.heroIndex ?? 0
  const heroItem = album.items[heroIdx]
  const thumbItems = album.items
    .filter((_, i) => i !== heroIdx)
    .slice(0, 3)
  const extraCount = Math.max(0, album.items.length - 1 - 3)

  const chapterNum = String(index + 1).padStart(2, '0')

  return (
    <article
      ref={chapterRef}
      className={`personal-chapter${isReversed ? ' personal-chapter--reversed' : ''}${visible ? ' personal-chapter--visible' : ''}`}
    >
      <div
        className="personal-chapter__photo-side"
        onClick={() => onExpand({ item: heroItem, albumFolder: album.folder })}
      >
        <MediaItem item={heroItem} folder={album.folder} className="personal-chapter__hero-media" />
        <div className="personal-chapter__expand-hint">click to expand ↗</div>
      </div>

      {/* ── Content side ── */}
      <div className="personal-chapter__content">
        <div className="personal-chapter__text" data-num={chapterNum}>
          <div className="personal-chapter__eyebrow">
            <span className="personal-chapter__num">{chapterNum}</span>
            <span className="personal-chapter__label">{album.label}</span>
          </div>
          <TypewriterCaption text={album.caption} />
        </div>

        {thumbItems.length > 0 && (
          <div className="personal-chapter__thumbs">
            {thumbItems.map((item, i) => {
              const isLast = i === thumbItems.length - 1
              return (
                <div
                  key={item.file}
                  className="personal-chapter__thumb"
                  onClick={() => onExpand({ item, albumFolder: album.folder })}
                >
                  <MediaItem item={item} folder={album.folder} className="personal-chapter__thumb-media" lazy />
                  {isLast && extraCount > 0 && (
                    <div className="personal-chapter__thumb-count">+{extraCount}</div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </article>
  )
}

// ── Personal (root) ────────────────────────────────────────────────────────────
export default function Personal() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="personal" id="personal">
      <div className="personal__header container">
        <span className="section-label">Personal</span>
        <h2 className="section-title">Get to know me</h2>
      </div>

      <div className="personal__chapters">
        {albums.map((album, i) => (
          <PersonalChapter
            key={album.id}
            album={album}
            index={i}
            onExpand={setExpanded}
          />
        ))}
      </div>

      {expanded && (
        <Lightbox
          item={expanded.item}
          albumFolder={expanded.albumFolder}
          onClose={() => setExpanded(null)}
        />
      )}
    </section>
  )
}
