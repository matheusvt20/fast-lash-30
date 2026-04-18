const photos = [
  { src: '/images/resultado-1.webp', width: 472, height: 840 },
  { src: '/images/resultado-2.webp', width: 630, height: 840 },
  { src: '/images/resultado-3.webp', width: 629, height: 840 },
  { src: '/images/resultado-4.webp', width: 472, height: 840 },
  { src: '/images/resultado-5.webp', width: 472, height: 840 },
  { src: '/images/resultado-6.webp', width: 628, height: 840 },
  { src: '/images/resultado-7.webp', width: 630, height: 840 },
]

const loopedPhotos = [...photos, ...photos]

export default function ResultsCarousel() {
  return (
    <section id="results-carousel">
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
        }
      `}</style>

      <div className="results-shell">
        <div className="results-copy">
          <span
            style={{
              display: 'inline-block',
              background: '#E8DDD0',
              color: '#7A6440',
              border: '1px solid #D4C4B0',
              fontSize: '13px',
              fontWeight: 500,
              borderRadius: '100px',
              padding: '6px 16px',
              marginBottom: '16px',
            }}
          >
            Resultados reais
          </span>
          <h2 className="results-title">
            Veja o resultado: cílios impecáveis em até 1 hora
          </h2>
          <p className="results-subtitle">
            Cada par de cílios aplicado com o método Fast Lash 30+
          </p>
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
