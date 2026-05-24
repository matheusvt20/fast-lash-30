import { useEffect } from 'react'
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

type TestimonialsCarouselProps = {
  data?: typeof salesPageData
  proofCards?: Array<{
    description: string
    icon?: string
    title: string
  }>
  copy?: {
    badge?: string
    photoBadge?: string
    photoTitle?: string
    title?: string
  }
  variant?: 'default' | 'painPoints'
}

export default function TestimonialsCarousel({
  data = salesPageData,
  proofCards,
  copy = {},
  variant = 'default',
}: TestimonialsCarouselProps) {
  const { testimonials } = data

  useEffect(() => {
    if (!proofCards) {
      warmPandaPlayer()
    }
  }, [proofCards])

  return (
    <section
      id="testimonials-carousel"
      className={variant === 'painPoints' ? 'testimonials-pain-points' : undefined}
    >
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
          background: #F5F1EA;
          position: relative;
        }

        #testimonials-carousel .testimonial-frame {
          border: 0;
          display: block;
          height: 520px;
          width: 100%;
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

        #testimonials-carousel .testimonial-proof-card {
          padding: 24px;
        }

        #testimonials-carousel .testimonial-proof-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          line-height: 1.2;
        }

        #testimonials-carousel .testimonial-proof-copy {
          color: #7A7870;
          font-size: 14px;
          line-height: 1.7;
          margin-top: 10px;
        }

        #testimonials-carousel.testimonials-pain-points {
          background: #0D0D0D;
          padding: 80px;
        }

        #testimonials-carousel.testimonials-pain-points .testimonials-badge {
          background: transparent;
          border: 1px solid #C9944A;
          border-radius: 999px;
          color: #C9944A;
          display: inline-block;
          font-size: 12px;
          margin-bottom: 16px;
          padding: 5px 14px;
        }

        #testimonials-carousel.testimonials-pain-points .testimonials-title {
          color: #FFFFFF;
          font-family: var(--font-display), Georgia, serif;
          font-size: 36px;
          font-weight: 700;
          max-width: 680px;
        }

        #testimonials-carousel.testimonials-pain-points .testimonials-grid {
          gap: 16px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 40px;
        }

        #testimonials-carousel.testimonials-pain-points .testimonial-card {
          background: #161616;
          border: 1px solid rgba(201, 148, 74, 0.2);
          border-radius: 12px;
        }

        #testimonials-carousel.testimonials-pain-points .testimonial-proof-card {
          padding: 24px;
        }

        #testimonials-carousel .testimonial-proof-icon {
          align-items: center;
          background: rgba(201, 148, 74, 0.1);
          border: 1px solid rgba(201, 148, 74, 0.3);
          border-radius: 50%;
          color: #C9944A;
          display: none;
          font-size: 16px;
          height: 36px;
          justify-content: center;
          margin-bottom: 16px;
          width: 36px;
        }

        #testimonials-carousel.testimonials-pain-points .testimonial-proof-icon {
          display: flex;
        }

        #testimonials-carousel.testimonials-pain-points .testimonial-proof-title {
          color: #FFFFFF;
          font-family: Inter, var(--font-body);
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        #testimonials-carousel.testimonials-pain-points .testimonial-proof-copy {
          color: #888888;
          font-family: Inter, var(--font-body);
          font-size: 14px;
          line-height: 1.6;
          margin-top: 0;
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

          #testimonials-carousel.testimonials-pain-points {
            padding: 56px 24px;
          }

          #testimonials-carousel.testimonials-pain-points .testimonials-title {
            font-size: 26px;
          }

          #testimonials-carousel.testimonials-pain-points .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="testimonials-shell">
        <section className="testimonial-section">
          <div className="testimonials-badge">
            {copy.badge ?? 'Clientes atendidas'}
          </div>
          <h2 className="testimonials-title">
            {copy.title ?? 'Veja o que as clientes da Evelyn dizem'}
          </h2>
          <div className="testimonials-grid">
            {proofCards
              ? proofCards.map((card) => (
                  <article
                    key={card.title}
                    className="testimonial-card testimonial-proof-card"
                  >
                    {card.icon ? (
                      <div className="testimonial-proof-icon" aria-hidden="true">
                        {card.icon}
                      </div>
                    ) : null}
                    <div className="testimonial-proof-title">{card.title}</div>
                    <div className="testimonial-proof-copy">
                      {card.description}
                    </div>
                  </article>
                ))
              : testimonials.videos.map((video, index) => (
                  <article key={`video-${index}`} className="testimonial-card">
                    <div className="testimonial-frame-shell">
                      <iframe
                        className="testimonial-frame"
                        src={video.embedUrl}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </article>
                ))}
          </div>
        </section>

        {!proofCards ? (
          <section className="testimonial-section">
            <div className="testimonials-badge">
              {copy.photoBadge ?? 'Alunas formadas'}
            </div>
            <h2 className="testimonials-title">
              {copy.photoTitle ?? 'Profissionais que já passaram pelo método'}
            </h2>
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
        ) : null}
      </div>
    </section>
  )
}
