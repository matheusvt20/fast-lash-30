import { salesPageData } from '../data/salesPageData'
import { trackMetaEvent } from '../lib/metaEvents'

export default function HeroSection() {
  const { product, creator } = salesPageData
  const heroImage = {
    src: creator.photoHero,
    srcSet: '/images/tati-hero-mobile.webp 720w, /images/tati-hero.webp 960w',
    sizes: '(max-width: 767px) 100vw, 46vw',
    width: 960,
    height: 1280,
  }

  function handleCheckoutClick() {
    trackMetaEvent('InitiateCheckout', {
      customData: {
        content_name: product.name,
        currency: 'BRL',
        value: product.price,
      },
    })
  }

  return (
    <section id="hero-section">
      <style>{`
        #hero-section {
          background: #FAF8F5;
        }

        #hero-section .hero-layout {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          gap: 60px;
          min-height: 100vh;
          padding: 60px 80px 0;
        }

        #hero-section .hero-copy {
          flex: 1.1;
        }

        #hero-section .hero-badge {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 13px;
          gap: 6px;
          padding: 6px 16px;
        }

        #hero-section .hero-badge-dot {
          font-size: 16px;
          line-height: 1;
        }

        #hero-section .hero-headline {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 54px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
        }

        #hero-section .hero-subheadline {
          color: #7A7870;
          font-size: 16px;
          line-height: 1.7;
          margin: 16px 0 0;
          max-width: 500px;
        }

        #hero-section .hero-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          margin-top: 36px;
        }

        #hero-section .hero-button {
          align-items: center;
          border-radius: 6px;
          display: inline-flex;
          font-size: 14px;
          font-weight: 500;
          justify-content: center;
          padding: 14px 28px;
          text-align: center;
          text-decoration: none;
          transition: transform 120ms ease, box-shadow 120ms ease;
        }

        #hero-section .hero-button:hover {
          transform: translateY(-1px);
        }

        #hero-section .hero-button-primary {
          background: #C9A96E;
          border: none;
          color: #1A1A18;
          min-width: 260px;
          padding: 14px 28px;
        }

        #hero-section .hero-button-label {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.01em;
          line-height: 1.2;
        }

        #hero-section .hero-price {
          color: #7A6440;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
          padding-left: 4px;
        }

        #hero-section .hero-media {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        #hero-section .hero-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        #hero-section .hero-pill {
          background: white;
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 500;
          color: #1A1A18;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          white-space: nowrap;
        }

        #hero-section .hero-image-frame {
          background: rgba(255, 255, 255, 0.68);
          border: 1px solid #D8C8B3;
          border-radius: 24px;
          box-shadow: 0 18px 40px rgba(78, 58, 33, 0.08);
          overflow: hidden;
          padding: 14px;
          position: relative;
        }

        #hero-section .hero-image {
          border-radius: 20px;
          display: block;
          height: 540px;
          object-fit: cover;
          width: 100%;
        }

        #hero-section .hero-card {
          background: linear-gradient(
            to top,
            rgba(20, 18, 15, 0.95) 0%,
            rgba(20, 18, 15, 0.6) 60%,
            transparent 100%
          );
          border-radius: 0 0 20px 20px;
          bottom: 0;
          left: 0;
          padding: 32px 24px 28px;
          position: absolute;
          right: 0;
        }

        #hero-section .hero-card-badge {
          background: #C9A96E;
          border-radius: 100px;
          color: #1A1A18;
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          padding: 4px 12px;
        }

        #hero-section .hero-card-name {
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          margin: 8px 0 0;
        }

        #hero-section .hero-card-product {
          color: #C9A96E;
          font-size: 13px;
          margin-top: 2px;
        }

        #hero-section .hero-card-copy {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          margin-top: 6px;
        }

        @media (max-width: 767px) {
          #hero-section .hero-layout {
            align-items: stretch;
            display: grid;
            gap: 28px;
            min-height: auto;
            padding: 32px 24px 0;
          }

          #hero-section .hero-copy,
          #hero-section .hero-media {
            width: 100%;
          }

          #hero-section .hero-copy {
            display: contents;
          }

          #hero-section .hero-badge,
          #hero-section .hero-headline,
          #hero-section .hero-subheadline {
            order: 1;
          }

          #hero-section .hero-media {
            order: 2;
          }

          #hero-section .hero-actions {
            order: 3;
          }

          #hero-section .hero-headline {
            font-size: 40px;
          }

          #hero-section .hero-actions {
            flex-direction: column;
          }

          #hero-section .hero-button {
            width: 100%;
          }

          #hero-section .hero-image {
            height: 380px;
          }

          #hero-section .hero-card {
            padding: 24px 20px 22px;
          }
        }
      `}</style>

      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true">
              •
            </span>
            <span>Para lash designers</span>
          </div>

          <h1 className="hero-headline">{product.headline}</h1>
          <p className="hero-subheadline">{product.subheadline}</p>

          <div className="hero-actions">
            <a
              className="hero-button hero-button-primary"
              href={product.checkoutUrl}
              onClick={handleCheckoutClick}
            >
              <span className="hero-button-label">Inscreva-se agora</span>
            </a>
            <span className="hero-price">12x de R$ 6,08 ou R$ 59,00 à vista</span>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-meta">
            <span className="hero-pill">
              ⏱ Atendimento em 1h
            </span>
            <span className="hero-pill">
              ✦ Retenção 30+ dias
            </span>
          </div>

          <div className="hero-image-frame">
            <img
              className="hero-image"
              src={heroImage.src}
              srcSet={heroImage.srcSet}
              sizes={heroImage.sizes}
              alt={`Retrato de ${creator.name}`}
              width={heroImage.width}
              height={heroImage.height}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
            <div className="hero-card">
              <div className="hero-card-badge">Criadora do Método</div>
              <h2 className="hero-card-name">Tati Cabral</h2>
              <div className="hero-card-product">Fast Lash 30+</div>
              <p className="hero-card-copy">
                +5.000 alunas formadas · Especialista em extensão de cílios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
