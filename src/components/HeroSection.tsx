import { salesPageData } from '../data/salesPageData'

export default function HeroSection() {
  const { product, creator } = salesPageData
  const heroImage = {
    src: creator.photoHero,
    srcSet: '/images/tati-hero-mobile.webp 720w, /images/tati-hero.webp 960w',
    sizes: '(max-width: 767px) 100vw, 46vw',
    width: 960,
    height: 1280,
  }

  return (
    <section id="hero-section">
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
            >
              Quero o Fast Lash 30+ →
            </a>
            <a className="hero-button hero-button-secondary" href="#product-section">
              Ver como funciona
            </a>
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
