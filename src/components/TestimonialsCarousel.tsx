import { startTransition, useEffect, useState } from 'react'
import { salesPageData } from '../data/salesPageData'

const PANDA_PLAYER_ORIGIN = 'https://player-vz-db0cd809-911.tv.pandavideo.com.br'

function warmPandaPlayer() {
  if (typeof document === 'undefined') {
    return
  }

  const hints = [
    { rel: 'dns-prefetch', href: PANDA_PLAYER_ORIGIN },
    { rel: 'preconnect', href: PANDA_PLAYER_ORIGIN, crossOrigin: 'anonymous' },
  ]

  hints.forEach(({ rel, href, crossOrigin }) => {
    const selector = `link[rel="${rel}"][href="${href}"]`

    if (document.head.querySelector(selector)) {
      return
    }

    const link = document.createElement('link')
    link.rel = rel
    link.href = href

    if (crossOrigin) {
      link.crossOrigin = crossOrigin
    }

    document.head.appendChild(link)
  })
}

export default function TestimonialsCarousel() {
  const { testimonials } = salesPageData
  const [loadedVideos, setLoadedVideos] = useState<number[]>([])
  const [loadingVideos, setLoadingVideos] = useState<number[]>([])

  useEffect(() => {
    warmPandaPlayer()
  }, [])

  const handleLoadVideo = (index: number) => {
    warmPandaPlayer()

    startTransition(() => {
      setLoadingVideos((current) =>
        current.includes(index) ? current : [...current, index],
      )
      setLoadedVideos((current) =>
        current.includes(index) ? current : [...current, index],
      )
    })
  }

  const handleVideoReady = (index: number) => {
    startTransition(() => {
      setLoadingVideos((current) => current.filter((item) => item !== index))
    })
  }

  return (
    <section id="testimonials-carousel">
      <style>{`
        #testimonials-carousel {
          background: #FAF8F5;
          padding: 80px;
        }

        #testimonials-carousel .testimonials-shell {
          margin: 0 auto;
          max-width: 1120px;
        }

        #testimonials-carousel .testimonials-badge {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #testimonials-carousel .testimonials-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
          max-width: 820px;
        }

        #testimonials-carousel .testimonials-grid {
          display: grid;
          gap: 20px;
          margin-top: 40px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        #testimonials-carousel .testimonial-section + .testimonial-section {
          margin-top: 60px;
        }

        #testimonials-carousel .testimonial-card {
          background: #FFFFFF;
          border: 0.5px solid #E0DDD7;
          border-radius: 12px;
          overflow: hidden;
        }

        #testimonials-carousel .testimonial-frame-shell {
          background:
            linear-gradient(180deg, rgba(201, 169, 110, 0.18), rgba(26, 26, 24, 0.94)),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.28), transparent 42%);
          min-height: 520px;
          position: relative;
        }

        #testimonials-carousel .testimonial-frame {
          border: 0;
          display: block;
          height: 520px;
          opacity: 1;
          transition: opacity 180ms ease;
          width: 100%;
        }

        #testimonials-carousel .testimonial-frame.is-loading {
          opacity: 0.01;
        }

        #testimonials-carousel .testimonial-frame-loading {
          align-items: center;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 12px;
          inset: 0;
          justify-content: center;
          padding: 24px;
          position: absolute;
          text-align: center;
        }

        #testimonials-carousel .testimonial-frame-spinner {
          animation: testimonial-spin 0.9s linear infinite;
          border: 2px solid rgba(255, 255, 255, 0.22);
          border-top-color: #C9A96E;
          border-radius: 999px;
          height: 28px;
          width: 28px;
        }

        #testimonials-carousel .testimonial-frame-loading-copy {
          color: rgba(255, 255, 255, 0.8);
          font-size: 13px;
          line-height: 1.5;
          max-width: 240px;
        }

        #testimonials-carousel .testimonial-video-trigger {
          align-items: flex-start;
          background:
            linear-gradient(180deg, rgba(201, 169, 110, 0.18), rgba(26, 26, 24, 0.94)),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.28), transparent 42%);
          border: 0;
          color: #FFFFFF;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 14px;
          height: 520px;
          justify-content: flex-end;
          padding: 24px;
          text-align: left;
          width: 100%;
        }

        #testimonials-carousel .testimonial-video-play {
          align-items: center;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          display: inline-flex;
          font-size: 13px;
          gap: 10px;
          padding: 8px 14px;
        }

        #testimonials-carousel .testimonial-video-play-icon {
          align-items: center;
          background: #C9A96E;
          border-radius: 999px;
          color: #1A1A18;
          display: inline-flex;
          font-size: 12px;
          height: 22px;
          justify-content: center;
          width: 22px;
        }

        #testimonials-carousel .testimonial-video-trigger:hover {
          filter: brightness(1.03);
        }

        #testimonials-carousel .testimonial-video-trigger:focus-visible {
          outline: 2px solid #C9A96E;
          outline-offset: -2px;
        }

        #testimonials-carousel .testimonial-video-pill {
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 12px;
        }

        #testimonials-carousel .testimonial-video-title {
          font-family: var(--font-display);
          font-size: 28px;
          line-height: 1.05;
        }

        #testimonials-carousel .testimonial-video-copy {
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
          line-height: 1.6;
        }

        #testimonials-carousel .testimonial-image {
          display: block;
          height: auto;
          object-fit: contain;
          width: 100%;
        }

        #testimonials-carousel .testimonial-caption {
          background: #FFFFFF;
          border-radius: 0 0 12px 12px;
          color: #7A7870;
          font-size: 13px;
          font-style: italic;
          line-height: 1.7;
          padding: 12px 16px;
        }

        @keyframes testimonial-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 767px) {
          #testimonials-carousel {
            padding: 56px 24px;
          }

          #testimonials-carousel .testimonials-title {
            font-size: 32px;
          }

          #testimonials-carousel .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="testimonials-shell">
        <section className="testimonial-section">
          <div className="testimonials-badge">Clientes atendidas</div>
          <h2 className="testimonials-title">Veja o que as clientes da Tati dizem</h2>
          <div className="testimonials-grid">
            {testimonials.videos.map((video, index) => (
              <article key={`video-${index}`} className="testimonial-card">
                {loadedVideos.includes(index) ? (
                  <div className="testimonial-frame-shell">
                    <iframe
                      className={`testimonial-frame ${
                        loadingVideos.includes(index) ? 'is-loading' : ''
                      }`}
                      src={video.embedUrl}
                      title={video.title}
                      loading="eager"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      onLoad={() => handleVideoReady(index)}
                    />
                    {loadingVideos.includes(index) ? (
                      <div className="testimonial-frame-loading" aria-hidden="true">
                        <div className="testimonial-frame-spinner" />
                        <div className="testimonial-frame-loading-copy">
                          Carregando o video da cliente...
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <button
                    type="button"
                    className="testimonial-video-trigger"
                    onClick={() => handleLoadVideo(index)}
                    onPointerEnter={warmPandaPlayer}
                    onFocus={warmPandaPlayer}
                    onTouchStart={warmPandaPlayer}
                    aria-label={`Carregar ${video.title}`}
                  >
                    <span className="testimonial-video-play">
                      <span
                        className="testimonial-video-play-icon"
                        aria-hidden="true"
                      >
                        ▶
                      </span>
                      Assistir agora
                    </span>
                    <span className="testimonial-video-pill">Depoimento em vídeo</span>
                    <strong className="testimonial-video-title">
                      Toque para assistir
                    </strong>
                    <span className="testimonial-video-copy">
                      O player externo so abre depois do clique para manter a
                      pagina leve, mas a conexao ja fica preparada para agilizar
                      a abertura.
                    </span>
                  </button>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonials-badge">Alunas formadas</div>
          <h2 className="testimonials-title">Profissionais que já passaram pelo método</h2>
          <div className="testimonials-grid">
            {testimonials.photos.map((photo, index) => (
              <article key={`photo-${index}`} className="testimonial-card">
                <img
                  className="testimonial-image"
                  src={photo.image}
                  alt={photo.caption}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                />
                <p className="testimonial-caption">{photo.caption}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
