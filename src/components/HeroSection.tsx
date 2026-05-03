import { salesPageData } from '../data/salesPageData'
import { trackMetaEvent } from '../lib/metaEvents'

type HeroSectionProps = {
  data?: typeof salesPageData
  compact?: boolean
  agendaStyle?: boolean
  copy?: {
    buttonLabel?: string
    cardBadge?: string
    cardCopy?: string
    cardName?: string
    cardProduct?: string
    priceText?: string
    primaryPill?: string
    secondaryPill?: string
  }
}

export default function HeroSection({
  agendaStyle = false,
  compact = false,
  data = salesPageData,
  copy = {},
}: HeroSectionProps) {
  const { product, creator } = data
  const isDefaultHeroImage = creator.photoHero === salesPageData.creator.photoHero
  const heroImage = {
    src: creator.photoHero,
    srcSet: isDefaultHeroImage
      ? '/images/tati-hero-mobile.webp 720w, /images/tati-hero.webp 960w'
      : `${creator.photoHero} 1448w`,
    sizes: '(max-width: 767px) 100vw, 46vw',
    width: isDefaultHeroImage ? 960 : 1448,
    height: isDefaultHeroImage ? 1280 : 1086,
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
    <section
      id="hero-section"
      className={`${compact ? 'is-compact' : ''} ${
        agendaStyle ? 'is-agenda-style' : ''
      }`.trim() || undefined}
    >
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

        #hero-section.is-compact .hero-layout {
          gap: 48px;
          min-height: 86vh;
          padding: 28px 80px 0;
        }

        #hero-section.is-compact .hero-headline {
          font-size: 48px;
          margin-top: 16px;
        }

        #hero-section.is-compact .hero-subheadline {
          font-size: 15px;
          line-height: 1.6;
          margin-top: 12px;
          max-width: 520px;
        }

        #hero-section.is-compact .hero-actions {
          margin-top: 26px;
        }

        #hero-section.is-compact .hero-image {
          height: 470px;
        }

        #hero-section.is-compact .hero-card {
          padding: 24px 20px 22px;
        }

        #hero-section.is-compact .hero-card-name {
          font-size: 22px;
        }

        #hero-section.is-agenda-style {
          background:
            radial-gradient(circle at 78% 44%, rgba(201, 169, 110, 0.14), transparent 34%),
            #FAF8F5;
        }

        #hero-section.is-agenda-style .hero-layout {
          gap: 68px;
          min-height: 84vh;
          padding: 34px 96px 42px;
        }

        #hero-section.is-agenda-style .hero-badge,
        #hero-section.is-agenda-style .hero-pill {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(201, 169, 110, 0.26);
          box-shadow: 0 10px 26px rgba(78, 58, 33, 0.07);
          color: #7A6440;
        }

        #hero-section.is-agenda-style .hero-badge {
          font-size: 14px;
          padding: 10px 18px;
        }

        #hero-section.is-agenda-style .hero-badge-dot {
          color: #C9A96E;
        }

        #hero-section.is-agenda-style .hero-headline {
          color: #251F19;
          font-size: 48px;
          letter-spacing: 0;
          line-height: 1.08;
          margin-top: 30px;
          max-width: 780px;
        }

        #hero-section.is-agenda-style .hero-headline em {
          color: #9F7A36;
          font-style: italic;
          position: relative;
        }

        #hero-section.is-agenda-style .hero-headline em::after {
          background: #C9A96E;
          border-radius: 999px;
          bottom: -10px;
          content: '';
          height: 3px;
          left: -18px;
          position: absolute;
          right: -18px;
          transform: rotate(-5deg);
        }

        #hero-section.is-agenda-style .hero-subheadline {
          color: #4F4A43;
          font-size: 17px;
          line-height: 1.58;
          margin-top: 38px;
          max-width: 610px;
        }

        #hero-section.is-agenda-style .hero-actions {
          gap: 18px;
          margin-top: 34px;
        }

        #hero-section.is-agenda-style .hero-button-primary {
          background: linear-gradient(135deg, #9F7A36, #DBBC7B);
          box-shadow: 0 18px 34px rgba(159, 122, 54, 0.25);
          color: #FFFFFF;
          min-width: 360px;
          padding: 20px 32px;
        }

        #hero-section.is-agenda-style .hero-button-label {
          font-size: 17px;
        }

        #hero-section.is-agenda-style .hero-price {
          align-items: center;
          color: #6E5A35;
          display: inline-flex;
          font-size: 15px;
          gap: 8px;
          padding-left: 0;
        }

        #hero-section.is-agenda-style .hero-price::before {
          content: '🔒';
          font-size: 14px;
        }

        #hero-section.is-agenda-style .hero-meta {
          gap: 16px;
          justify-content: center;
          margin-bottom: 12px;
        }

        #hero-section.is-agenda-style .hero-pill {
          font-size: 15px;
          padding: 12px 22px;
        }

        #hero-section.is-agenda-style .hero-image-frame {
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(201, 169, 110, 0.38);
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(78, 58, 33, 0.12);
          padding: 6px;
        }

        #hero-section.is-agenda-style .hero-image {
          border-radius: 19px;
          height: 500px;
          object-position: center 42%;
        }

        #hero-section.is-agenda-style .hero-card {
          border-radius: 0 0 19px 19px;
          padding: 92px 28px 28px;
        }

        #hero-section.is-agenda-style .hero-card-badge {
          background: rgba(255, 255, 255, 0.92);
          color: #9F7A36;
          font-size: 13px;
          left: 28px;
          padding: 10px 16px;
          position: absolute;
          top: -388px;
        }

        #hero-section.is-agenda-style .hero-card-name {
          font-size: 32px;
          margin-top: 0;
        }

        #hero-section.is-agenda-style .hero-card-product {
          font-size: 16px;
          margin-top: 4px;
        }

        #hero-section.is-agenda-style .hero-card-product::after {
          background: #C9A96E;
          content: '';
          display: block;
          height: 1px;
          margin-top: 12px;
          width: 34px;
        }

        #hero-section.is-agenda-style .hero-card-copy {
          color: rgba(255, 255, 255, 0.82);
          font-size: 15px;
          line-height: 1.45;
          max-width: 320px;
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

          #hero-section.is-compact .hero-layout {
            gap: 22px;
            min-height: auto;
            padding: 24px 24px 0;
          }

          #hero-section.is-compact .hero-headline {
            font-size: 36px;
          }

          #hero-section.is-compact .hero-actions {
            margin-top: 24px;
          }

          #hero-section.is-compact .hero-image {
            height: 340px;
          }

          #hero-section.is-agenda-style .hero-layout {
            gap: 24px;
            padding: 28px 24px 34px;
          }

          #hero-section.is-agenda-style .hero-headline {
            font-size: 38px;
            margin-top: 22px;
          }

          #hero-section.is-agenda-style .hero-subheadline {
            font-size: 16px;
            margin-top: 30px;
          }

          #hero-section.is-agenda-style .hero-button-primary {
            min-width: 0;
            width: 100%;
          }

          #hero-section.is-agenda-style .hero-meta {
            justify-content: flex-start;
          }

          #hero-section.is-agenda-style .hero-image {
            height: 360px;
          }

          #hero-section.is-agenda-style .hero-card-badge {
            left: 20px;
            top: -278px;
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

          <h1
            className="hero-headline"
            dangerouslySetInnerHTML={{ __html: product.headline }}
          />
          <p className="hero-subheadline">{product.subheadline}</p>

          <div className="hero-actions">
            <a
              className="hero-button hero-button-primary"
              href={product.checkoutUrl}
              onClick={handleCheckoutClick}
            >
              <span className="hero-button-label">
                {copy.buttonLabel ?? 'Inscreva-se agora'}
              </span>
            </a>
            <span className="hero-price">
              {copy.priceText ?? '12x de R$ 6,08 ou R$ 59,00 à vista'}
            </span>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-meta">
            <span className="hero-pill">
              {copy.primaryPill ?? '⏱ Atendimento em 1h'}
            </span>
            <span className="hero-pill">
              {copy.secondaryPill ?? '✦ Retenção 30+ dias'}
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
              <div className="hero-card-badge">
                {copy.cardBadge ?? 'Criadora do Método'}
              </div>
              <h2 className="hero-card-name">
                {copy.cardName ?? 'Tati Cabral'}
              </h2>
              <div className="hero-card-product">
                {copy.cardProduct ?? 'Fast Lash 30+'}
              </div>
              <p className="hero-card-copy">
                {copy.cardCopy ??
                  '+5.000 alunas formadas · Especialista em extensão de cílios'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
