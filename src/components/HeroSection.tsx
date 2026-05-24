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
  const heroHeadline = product.headline.replace(
    'até 53 minutos',
    '<em>até 53 minutos</em>',
  )
  const isDefaultHeroImage = creator.photoHero === salesPageData.creator.photoHero
  const heroImage = {
    src: creator.photoHero,
    srcSet: isDefaultHeroImage
      ? '/images/evelyn-senna.png 1086w'
      : `${creator.photoHero} 1448w`,
    sizes: '(max-width: 767px) 100vw, 46vw',
    width: isDefaultHeroImage ? 1086 : 1448,
    height: isDefaultHeroImage ? 1448 : 1086,
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
          background:
            linear-gradient(115deg, rgba(255, 255, 255, 0.72) 0%, rgba(247, 241, 230, 0.44) 52%, rgba(235, 221, 196, 0.26) 100%),
            #FAF7F0;
          color: #171513;
          overflow: hidden;
          position: relative;
        }

        #hero-section::before {
          background: linear-gradient(180deg, rgba(190, 151, 76, 0.38), rgba(190, 151, 76, 0));
          content: '';
          height: 180px;
          opacity: 0.24;
          position: absolute;
          right: 9%;
          top: 0;
          width: 1px;
        }

        #hero-section::after {
          background: rgba(186, 145, 70, 0.16);
          border-radius: 999px;
          box-shadow: 0 0 92px rgba(186, 145, 70, 0.18);
          content: '';
          height: 230px;
          opacity: 0.28;
          position: absolute;
          right: 13%;
          top: 19%;
          width: 230px;
        }

        #hero-section .hero-layout {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          gap: 88px;
          min-height: 100vh;
          padding: 64px 108px 54px 88px;
          position: relative;
          z-index: 1;
        }

        #hero-section .hero-copy {
          flex: 1.16;
          max-width: 880px;
        }

        #hero-section .hero-badge {
          align-items: center;
          background: rgba(255, 252, 246, 0.66);
          border: 1px solid rgba(180, 139, 67, 0.34);
          border-radius: 100px;
          box-shadow: 0 12px 28px rgba(61, 43, 21, 0.05);
          color: #6F572E;
          display: inline-flex;
          font-size: 12px;
          font-weight: 700;
          gap: 8px;
          letter-spacing: 0.08em;
          padding: 9px 18px;
          text-transform: uppercase;
        }

        #hero-section .hero-badge-dot {
          color: #B48B43;
          font-size: 13px;
          line-height: 1;
        }

        #hero-section .hero-headline {
          color: #1B1814;
          font-family: var(--font-display);
          font-size: 51px;
          font-weight: 600;
          line-height: 1.15;
          margin: 30px 0 0;
          max-width: 940px;
        }

        #hero-section .hero-headline em {
          color: #9A7435;
          display: inline-block;
          font-style: italic;
          font-weight: 500;
          position: relative;
          text-shadow: 0 10px 24px rgba(167, 122, 46, 0.1);
        }

        #hero-section .hero-headline em::before {
          background: #D8B66D;
          border-radius: 999px;
          box-shadow: 0 0 14px rgba(216, 182, 109, 0.34);
          content: '';
          height: 5px;
          position: absolute;
          right: -15px;
          top: 12px;
          width: 4px;
        }

        #hero-section .hero-headline em::after {
          background: linear-gradient(90deg, transparent, rgba(184, 142, 67, 0.48), transparent);
          bottom: 3px;
          content: '';
          height: 1px;
          left: 4px;
          position: absolute;
          right: 2px;
        }

        #hero-section .hero-subheadline {
          border-left: 1px solid rgba(180, 139, 67, 0.38);
          color: #635D54;
          font-size: 15.5px;
          line-height: 1.82;
          margin: 24px 0 0;
          max-width: 540px;
          padding-left: 16px;
        }

        #hero-section .hero-actions {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 34px;
        }

        #hero-section .hero-button {
          align-items: center;
          border-radius: 12px;
          display: inline-flex;
          font-size: 14px;
          font-weight: 500;
          gap: 10px;
          justify-content: center;
          min-height: 50px;
          padding: 14px 30px;
          text-align: center;
          text-decoration: none;
          transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
        }

        #hero-section .hero-button:hover {
          filter: saturate(1.04);
          transform: translateY(-1px);
        }

        #hero-section .hero-button-primary {
          background:
            linear-gradient(180deg, rgba(255, 250, 235, 0.42), rgba(255, 250, 235, 0) 52%),
            linear-gradient(135deg, #C3A05C 0%, #E4CA88 48%, #B88D45 100%);
          border: 1px solid rgba(143, 105, 47, 0.28);
          box-shadow:
            0 14px 26px rgba(123, 87, 34, 0.13),
            inset 0 1px 0 rgba(255, 255, 255, 0.58),
            inset 0 -1px 0 rgba(85, 54, 14, 0.14);
          color: #211A11;
          min-width: 292px;
        }

        #hero-section .hero-button-label {
          font-size: 14.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          line-height: 1.2;
        }

        #hero-section .hero-button-arrow {
          font-size: 16px;
          line-height: 1;
        }

        #hero-section .hero-price {
          align-items: center;
          color: #6A5633;
          display: inline-flex;
          font-size: 13px;
          font-weight: 600;
          gap: 8px;
          line-height: 1.4;
          padding-left: 4px;
        }

        #hero-section .hero-price::before {
          align-items: center;
          background: rgba(180, 139, 67, 0.1);
          border: 1px solid rgba(180, 139, 67, 0.18);
          border-radius: 999px;
          color: #9B7433;
          content: '✓';
          display: inline-flex;
          font-size: 9px;
          height: 17px;
          justify-content: center;
          width: 17px;
        }

        #hero-section .hero-price strong {
          color: #241B10;
          font-weight: 800;
        }

        #hero-section .hero-trust {
          color: #7F7669;
          font-size: 11.5px;
          font-weight: 500;
          line-height: 1.4;
          padding-left: 30px;
        }

        #hero-section .hero-media {
          display: flex;
          flex-direction: column;
          flex: 0.94;
          gap: 16px;
          max-width: 500px;
          position: relative;
        }

        #hero-section .hero-media::before {
          background: radial-gradient(circle, rgba(207, 170, 96, 0.16), transparent 70%);
          content: '';
          height: 360px;
          left: 50%;
          pointer-events: none;
          position: absolute;
          top: 50%;
          transform: translate(-48%, -48%);
          width: 360px;
          z-index: -1;
        }

        #hero-section .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        #hero-section .hero-pill {
          background: rgba(255, 252, 246, 0.76);
          border: 1px solid rgba(180, 139, 67, 0.24);
          border-radius: 100px;
          box-shadow: 0 10px 24px rgba(45, 34, 20, 0.06);
          color: #28221A;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 10px 18px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        #hero-section .hero-image-frame {
          background: #151413;
          border: 1px solid rgba(198, 158, 82, 0.48);
          border-radius: 30px;
          box-shadow: 0 26px 64px rgba(44, 31, 17, 0.12), 0 0 0 7px rgba(255, 250, 240, 0.38);
          overflow: hidden;
          padding: 10px;
          position: relative;
        }

        #hero-section .hero-image-frame::before {
          pointer-events: none;
          position: absolute;
          z-index: 2;
        }

        #hero-section .hero-image-frame::before {
          background: radial-gradient(circle, rgba(225, 190, 117, 0.2), transparent 66%);
          content: '';
          height: 200px;
          right: -80px;
          top: -72px;
          width: 200px;
        }

        #hero-section .hero-image {
          border-radius: 26px;
          display: block;
          height: 522px;
          object-fit: cover;
          object-position: center 62%;
          transform: scale(1.16);
          width: 100%;
        }

        #hero-section .hero-card {
          background: linear-gradient(
            to top,
            rgba(12, 11, 10, 0.78) 0%,
            rgba(12, 11, 10, 0.44) 46%,
            transparent 100%
          );
          border-radius: 0 0 26px 26px;
          bottom: 0;
          left: 0;
          padding: 76px 32px 28px;
          position: absolute;
          right: 0;
          z-index: 3;
        }

        #hero-section .hero-card::before {
          background: linear-gradient(90deg, #C29A51, rgba(194, 154, 81, 0));
          content: '';
          display: block;
          height: 1px;
          margin-bottom: 16px;
          width: 62px;
        }

        #hero-section .hero-card-badge {
          background: linear-gradient(135deg, #C09A51, #E4C785);
          border-radius: 100px;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
          color: #15110B;
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          padding: 7px 14px;
        }

        #hero-section .hero-card-name {
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 600;
          line-height: 1;
          margin: 14px 0 0;
        }

        #hero-section .hero-card-product {
          color: #D4AE62;
          font-size: 15px;
          font-weight: 600;
          margin-top: 8px;
        }

        #hero-section .hero-card-copy {
          color: rgba(255,255,255,0.7);
          font-size: 12.5px;
          line-height: 1.45;
          margin: 10px 0 0;
          max-width: 360px;
        }

        #hero-section.is-compact .hero-layout {
          gap: 48px;
          min-height: 86vh;
          padding: 28px 80px 0;
        }

        #hero-section.is-compact .hero-headline {
          font-size: 44px;
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
          height: 440px;
        }

        #hero-section.is-compact .hero-card {
          padding: 70px 22px 24px;
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
            gap: 18px;
            min-height: auto;
            padding: 34px 20px 38px;
          }

          #hero-section .hero-copy,
          #hero-section .hero-media {
            width: 100%;
          }

          #hero-section .hero-copy {
            display: contents;
          }

          #hero-section .hero-badge {
            order: 1;
            width: fit-content;
          }

          #hero-section .hero-headline {
            order: 2;
          }

          #hero-section .hero-subheadline {
            order: 3;
          }

          #hero-section .hero-media {
            order: 4;
          }

          #hero-section .hero-actions {
            order: 5;
          }

          #hero-section .hero-headline {
            font-size: 34px;
            line-height: 1.13;
            margin-top: 8px;
          }

          #hero-section .hero-subheadline {
            font-size: 15px;
            line-height: 1.72;
            margin-top: 4px;
          }

          #hero-section .hero-actions {
            flex-direction: column;
            margin-top: 6px;
          }

          #hero-section .hero-button {
            width: 100%;
          }

          #hero-section .hero-button-primary {
            min-width: 0;
          }

          #hero-section .hero-meta {
            flex-wrap: nowrap;
            justify-content: flex-start;
            margin-bottom: 4px;
          }

          #hero-section .hero-pill {
            flex: 1 1 0;
            font-size: 10.5px;
            justify-content: center;
            padding: 9px 8px;
            text-align: center;
          }

          #hero-section .hero-price {
            align-items: flex-start;
            flex-wrap: wrap;
            font-size: 13px;
          }

          #hero-section .hero-trust {
            padding-left: 30px;
          }

          #hero-section .hero-image {
            height: 370px;
          }

          #hero-section .hero-card {
            padding: 64px 22px 22px;
          }

          #hero-section .hero-card-name {
            font-size: 28px;
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
              ✦
            </span>
            <span>Para lash designers</span>
          </div>

          <h1
            className="hero-headline"
            dangerouslySetInnerHTML={{ __html: heroHeadline }}
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
              <span className="hero-button-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <span className="hero-price">
              {copy.priceText ?? (
                <>
                  12x de R$ 6,08 ou <strong>R$ 59,00 à vista</strong>
                </>
              )}
            </span>
            <span className="hero-trust">Acesso imediato e 100% seguro</span>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-meta">
            <span className="hero-pill">
              {copy.primaryPill ?? '◷ Atendimento em 1h'}
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
                {copy.cardName ?? creator.name}
              </h2>
              <div className="hero-card-product">
                {copy.cardProduct ?? 'Cílios em 1 Hora'}
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
