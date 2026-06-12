import type { MouseEvent } from 'react'
import { salesPageData } from '../data/salesPageData'
import { getCheckoutUrl } from '../lib/checkoutUrl'
import { trackMetaEvent } from '../lib/metaEvents'

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
  const { product } = data
  const checkoutBaseUrl = 'https://pay.kiwify.com.br/6hqttVr'
  const heroImages = [
    {
      alt: 'Resultado de extensão de cílios com aplicação em até 1 hora',
      src: '/images/cilios-hero-1.png',
    },
    {
      alt: 'Close de cílios alongados com acabamento profissional',
      src: '/images/cilios-hero-2.png',
    },
    {
      alt: 'Cílios volumosos aplicados em atendimento rápido',
      src: '/images/cilios-hero-3.png',
    },
  ]
  const heroHeadline = product.headline.replace(
    'até 53 minutos',
    '<em>até 53 minutos</em>',
  )

  function handleHeroCtaClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const checkoutUrl = getCheckoutUrl(checkoutBaseUrl)

    trackMetaEvent('InitiateCheckout', {
      customData: {
        content_name: product.name,
        currency: 'BRL',
        value: product.price,
      },
    })

    window.setTimeout(() => {
      window.location.href = getCheckoutUrl(checkoutBaseUrl) || checkoutUrl
    }, 500)
  }

  return (
    <section
      id="hero-section"
      className={compact ? 'is-compact' : undefined}
    >

      <div className="hero-layout">
        <div className="hero-copy">
          <h1
            className="hero-headline"
            dangerouslySetInnerHTML={{ __html: heroHeadline }}
          />
          <p className="hero-subheadline">{product.subheadline}</p>

          <div className="hero-actions">
            <a
              className="hero-button hero-button-primary"
              href={getCheckoutUrl(checkoutBaseUrl)}
              onClick={handleHeroCtaClick}
            >
              <span className="hero-button-label">
                {copy.buttonLabel ?? 'Quero garantir meu acesso'}
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
          </div>

        </div>

        <div className="hero-media">
          <div className="hero-image-frame">
            <div className="hero-image-stack">
              {heroImages.map((image, index) => (
                <img
                  className="hero-image"
                  src={image.src}
                  alt={index === 0 ? image.alt : ''}
                  width={1122}
                  height={1402}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding={index === 0 ? 'sync' : 'async'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  key={`${image.src}-${index}`}
                />
              ))}
            </div>
          </div>

          <div className="hero-meta">
            <span className="hero-pill">
              {copy.primaryPill ?? '◷ ATENDIMENTO EM ATÉ 1H'}
            </span>
            <span className="hero-pill">
              {copy.secondaryPill ?? '✦ RETENÇÃO 30+ DIAS'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
