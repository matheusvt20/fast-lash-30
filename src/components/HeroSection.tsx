import type { MouseEvent } from 'react'

import { salesPageData } from '../data/salesPageData'

type HeroSectionProps = {
  data?: typeof salesPageData
  compact?: boolean
  copy?: {
    buttonLabel?: string
    cardCopy?: string
    cardName?: string
    cardProduct?: string
    priceText?: string
    primaryPill?: string
    secondaryPill?: string
  }
}

export default function HeroSection({
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
      ? '/images/evelyn-senna-640.webp 640w, /images/evelyn-senna-720.webp 720w, /images/evelyn-senna-1086.webp 1086w'
      : `${creator.photoHero} 1448w`,
    sizes: '(max-width: 767px) calc(100vw - 40px), 46vw',
    width: isDefaultHeroImage ? 1086 : 1448,
    height: isDefaultHeroImage ? 1448 : 1086,
  }

  function handleHeroCtaClick(event: MouseEvent<HTMLAnchorElement>) {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'ViewContent', {
        content_name: 'Cilios em 1 Hora',
        value: 47.00,
        currency: 'BRL',
      }, { eventID: crypto.randomUUID() })
    }

    event.preventDefault()

    const targetId = 'offer-coupon-area'
    const offsets = [0, 120, 360, 760, 1250]

    offsets.forEach((delay, index) => {
      window.setTimeout(() => {
        const target = document.getElementById(targetId)

        if (!target) {
          window.location.hash = targetId
          return
        }

        const top = target.getBoundingClientRect().top + window.scrollY - 12

        window.scrollTo({
          behavior: index === 0 ? 'smooth' : 'auto',
          top,
        })
      }, delay)
    })

    window.history.replaceState(null, '', `#${targetId}`)
  }

  return (
    <section
      id="hero-section"
      className={compact ? 'is-compact' : undefined}
    >

      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true">
              ✦
            </span>
            <span>TREINAMENTO ONLINE PARA LASH DESIGNERS</span>
          </div>

          <h1
            className="hero-headline"
            dangerouslySetInnerHTML={{ __html: heroHeadline }}
          />
          <p className="hero-subheadline">{product.subheadline}</p>

          <div className="hero-actions">
            <a
              className="hero-button hero-button-primary"
              href="#offer-coupon-area"
              onClick={handleHeroCtaClick}
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
                    5x de R$ 10,41 ou <strong>R$ 47,00 à vista</strong>
                  </>
                )}
            </span>
            <span className="hero-trust">Acesso imediato e 100% seguro</span>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-meta">
            <span className="hero-pill">
              {copy.primaryPill ?? '◷ ATENDIMENTO EM ATÉ 1H'}
            </span>
            <span className="hero-pill">
              {copy.secondaryPill ?? '✦ RETENÇÃO 30+ DIAS'}
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
