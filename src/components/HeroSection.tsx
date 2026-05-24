import { salesPageData } from '../data/salesPageData'

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
      ? '/images/evelyn-senna-720.webp 720w, /images/evelyn-senna-1086.webp 1086w'
      : `${creator.photoHero} 1448w`,
    sizes: '(max-width: 767px) 100vw, 46vw',
    width: isDefaultHeroImage ? 1086 : 1448,
    height: isDefaultHeroImage ? 1448 : 1086,
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
            radial-gradient(ellipse at 74% 33%, rgba(177, 157, 118, 0.08), transparent 36%),
            radial-gradient(ellipse at 18% 24%, rgba(255, 255, 255, 0.035), transparent 34%),
            linear-gradient(118deg, #141414 0%, #080808 48%, #151311 100%);
          color: #FFF8EC;
          overflow: hidden;
          position: relative;
        }

        #hero-section::before {
          background: linear-gradient(180deg, rgba(197, 176, 132, 0.24), rgba(197, 176, 132, 0));
          content: '';
          height: 220px;
          opacity: 0.2;
          position: absolute;
          right: 9%;
          top: 0;
          width: 1px;
        }

        #hero-section::after {
          background: radial-gradient(circle, rgba(185, 165, 124, 0.07), transparent 68%);
          border-radius: 999px;
          box-shadow: 0 0 120px rgba(185, 165, 124, 0.08);
          content: '';
          height: 340px;
          opacity: 0.22;
          position: absolute;
          right: 12%;
          top: 18%;
          width: 340px;
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
          background: rgba(255, 248, 236, 0.055);
          border: 1px solid rgba(205, 183, 137, 0.24);
          border-radius: 100px;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
          color: #C8B27C;
          display: inline-flex;
          font-size: 12px;
          font-weight: 700;
          gap: 8px;
          letter-spacing: 0.08em;
          padding: 9px 18px;
          text-transform: uppercase;
        }

        #hero-section .hero-badge-dot {
          color: #C8B27C;
          font-size: 13px;
          line-height: 1;
        }

        #hero-section .hero-headline {
          color: #FFF8EC;
          font-family: var(--font-display);
          font-size: 51px;
          font-weight: 600;
          line-height: 1.15;
          margin: 30px 0 0;
          max-width: 940px;
          text-shadow: 0 14px 34px rgba(0, 0, 0, 0.32);
        }

        #hero-section .hero-headline em {
          color: #C8A967;
          display: inline-block;
          font-style: italic;
          font-weight: 500;
          position: relative;
          text-shadow: 0 10px 28px rgba(200, 169, 103, 0.1);
        }

        #hero-section .hero-headline em::before {
          background: #C8A967;
          border-radius: 999px;
          box-shadow: 0 0 14px rgba(200, 169, 103, 0.22);
          content: '';
          height: 5px;
          position: absolute;
          right: -15px;
          top: 12px;
          width: 4px;
        }

        #hero-section .hero-headline em::after {
          background: linear-gradient(90deg, transparent, rgba(200, 169, 103, 0.34), transparent);
          bottom: 3px;
          content: '';
          height: 1px;
          left: 4px;
          position: absolute;
          right: 2px;
        }

        #hero-section .hero-subheadline {
          border-left: 1px solid rgba(200, 169, 103, 0.34);
          color: rgba(255, 248, 236, 0.72);
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
            linear-gradient(180deg, rgba(255, 252, 242, 0.34), rgba(255, 252, 242, 0) 52%),
            linear-gradient(135deg, #A88445 0%, #D5BD78 48%, #9C7435 100%);
          border: 1px solid rgba(213, 189, 120, 0.32);
          box-shadow:
            0 18px 34px rgba(0, 0, 0, 0.26),
            0 0 24px rgba(213, 189, 120, 0.06),
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
          color: rgba(255, 248, 236, 0.72);
          display: inline-flex;
          font-size: 13px;
          font-weight: 600;
          gap: 8px;
          line-height: 1.4;
          padding-left: 4px;
        }

        #hero-section .hero-price::before {
          align-items: center;
          background: rgba(200, 169, 103, 0.08);
          border: 1px solid rgba(200, 169, 103, 0.2);
          border-radius: 999px;
          color: #C8A967;
          content: '✓';
          display: inline-flex;
          font-size: 9px;
          height: 17px;
          justify-content: center;
          width: 17px;
        }

        #hero-section .hero-price strong {
          color: #FFF8EC;
          font-weight: 800;
        }

        #hero-section .hero-trust {
          color: rgba(255, 248, 236, 0.54);
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
          background: radial-gradient(circle, rgba(185, 165, 124, 0.08), transparent 70%);
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
          background: rgba(255, 248, 236, 0.07);
          border: 1px solid rgba(205, 183, 137, 0.22);
          border-radius: 100px;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18);
          color: #FFF8EC;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 10px 18px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        #hero-section .hero-image-frame {
          background: #151413;
          border: 1px solid rgba(205, 183, 137, 0.32);
          border-radius: 30px;
          box-shadow:
            0 30px 74px rgba(0, 0, 0, 0.38),
            0 0 0 1px rgba(205, 183, 137, 0.07),
            0 0 58px rgba(185, 165, 124, 0.05);
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
          background: radial-gradient(circle, rgba(205, 183, 137, 0.1), transparent 66%);
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
              href="#offer-stack"
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
                    5x de R$ 10,41 ou <strong>R$ 47,00 / ano</strong>
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
