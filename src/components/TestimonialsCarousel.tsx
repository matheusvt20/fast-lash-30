import { startTransition, useState } from 'react'
import { salesPageData } from '../data/salesPageData'

export default function TestimonialsCarousel() {
  const { testimonials } = salesPageData
  const [loadedVideos, setLoadedVideos] = useState<number[]>([])

  const handleLoadVideo = (index: number) => {
    startTransition(() => {
      setLoadedVideos((current) =>
        current.includes(index) ? current : [...current, index],
      )
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

        #testimonials-carousel .testimonial-frame {
          border: 0;
          display: block;
          height: 520px;
          width: 100%;
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
                  <iframe
                    className="testimonial-frame"
                    src={video.embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="testimonial-video-trigger"
                    onClick={() => handleLoadVideo(index)}
                    aria-label={`Carregar ${video.title}`}
                  >
                    <span className="testimonial-video-pill">Depoimento em vídeo</span>
                    <strong className="testimonial-video-title">
                      Toque para assistir
                    </strong>
                    <span className="testimonial-video-copy">
                      O player externo so carrega depois do clique, reduzindo o
                      peso inicial da pagina.
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
