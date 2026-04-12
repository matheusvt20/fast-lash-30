import { salesPageData } from '../data/salesPageData'

export default function TestimonialsCarousel() {
  const { testimonials } = salesPageData

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
                <iframe
                  className="testimonial-frame"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
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
                <img className="testimonial-image" src={photo.image} alt={photo.caption} />
                <p className="testimonial-caption">{photo.caption}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
