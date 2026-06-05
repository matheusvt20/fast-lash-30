type ResultPhoto = {
  src: string
  width: number
  height: number
}

const defaultPhotos: ResultPhoto[] = [
  { src: '/images/cliente-resultado-1.webp', width: 1200, height: 1600 },
  { src: '/images/cliente-resultado-2.webp', width: 1200, height: 1600 },
  { src: '/images/cliente-resultado-3.webp', width: 1200, height: 1188 },
  { src: '/images/cliente-resultado-4.webp', width: 1600, height: 900 },
  { src: '/images/cliente-resultado-5.webp', width: 1600, height: 1200 },
  { src: '/images/cliente-resultado-6.webp', width: 1600, height: 1200 },
  { src: '/images/cliente-resultado-7.webp', width: 1280, height: 960 },
]

type ResultsCarouselProps = {
  copy?: {
    badge?: string
    titleAccent?: string
    subtitle?: string
    title?: string
  }
  photos?: ResultPhoto[]
  variant?: 'default' | 'dark'
}

export default function ResultsCarousel({
  copy = {},
  photos = defaultPhotos,
  variant = 'default',
}: ResultsCarouselProps) {
  const title =
    copy.title ?? 'Veja o resultado: cílios impecáveis em até 1 hora'
  const titleAccent = copy.titleAccent
  const titleAccentIndex = titleAccent ? title.indexOf(titleAccent) : -1
  const loopedPhotos = [...photos, ...photos]

  return (
    <section
      id="results-carousel"
      className={variant === 'dark' ? 'results-carousel-dark' : undefined}
    >
      <style>{`
        #results-carousel {
          background: #F0EBE3;
          padding: 0 0 80px;
        }

        #results-carousel .results-shell {
          margin: 0 auto;
        }

        #results-carousel .results-copy {
          padding: 60px 80px 0;
        }

        #results-carousel .results-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          margin: 16px 0 12px;
          white-space: nowrap;
        }

        #results-carousel .results-subtitle {
          color: #7A7870;
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 40px;
          max-width: 720px;
        }

        #results-carousel .results-badge {
          background: #E8DDD0;
          border: 1px solid #D4C4B0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-block;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 16px;
          padding: 6px 16px;
        }

        #results-carousel .results-marquee {
          margin-top: 0;
          overflow: hidden;
        }

        #results-carousel .results-track {
          animation: slideLeft 28s linear infinite;
          display: flex;
          transform: translate3d(0, 0, 0);
          width: max-content;
          will-change: transform;
        }

        #results-carousel .results-marquee:hover .results-track {
          animation-play-state: paused;
        }

        #results-carousel .results-photo {
          border-radius: 12px;
          display: block;
          flex: 0 0 auto;
          height: 420px;
          margin-right: 20px;
          object-fit: cover;
          width: auto;
        }

        #results-carousel.results-carousel-dark {
          background: #F0EBE3;
        }

        #results-carousel.results-carousel-dark .results-badge {
          background: transparent;
          border: 1px solid #C9944A;
          border-radius: 999px;
          color: #C9944A;
          font-size: 12px;
          padding: 5px 14px;
        }

        #results-carousel.results-carousel-dark .results-title {
          color: #1A1A18;
          font-family: var(--font-display), Georgia, serif;
          font-size: 40px;
          font-weight: 500;
          white-space: normal;
        }

        #results-carousel.results-carousel-dark .results-title-accent {
          color: #C9944A;
        }

        #results-carousel.results-carousel-dark .results-subtitle {
          color: #7A7870;
          font-family: Inter, var(--font-body);
          font-size: 16px;
          max-width: 640px;
        }

        #results-carousel.results-carousel-dark .results-track {
          animation-duration: 35s;
        }

        #results-carousel.results-carousel-dark .results-photo {
          height: 420px;
          margin-right: 16px;
        }

        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #results-carousel .results-track {
            animation: none;
          }
        }

        @media (max-width: 767px) {
          #results-carousel {
            padding: 0 0 56px;
          }

          #results-carousel .results-copy {
            padding: 40px 24px 0;
          }

          #results-carousel .results-title {
            font-size: 32px;
            white-space: normal;
          }

          #results-carousel .results-subtitle {
            font-size: 15px;
          }

          #results-carousel .results-photo {
            height: 320px;
          }

          #results-carousel.results-carousel-dark .results-title {
            font-size: 28px;
          }

          #results-carousel.results-carousel-dark .results-photo {
            height: 380px;
          }

          #results-carousel.results-carousel-dark .results-track {
            animation-duration: 55s;
          }
        }
      `}</style>

      <div className="results-shell">
        <div className="results-copy">
          <span className="results-badge">
            {copy.badge ?? 'Resultados reais'}
          </span>
          <h2 className="results-title">
            {titleAccent && titleAccentIndex >= 0 ? (
              <>
                {title.slice(0, titleAccentIndex)}
                <span className="results-title-accent">{titleAccent}</span>
                {title.slice(titleAccentIndex + titleAccent.length)}
              </>
            ) : (
              title
            )}
          </h2>
        </div>

        <div className="results-marquee" aria-label="Galeria de resultados">
          <div className="results-track">
            {loopedPhotos.map((photo, index) => (
              <img
                key={`${photo.src}-${index}`}
                className="results-photo"
                src={photo.src}
                alt={`Resultado ${index % photos.length + 1}`}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
