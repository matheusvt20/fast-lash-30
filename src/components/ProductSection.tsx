import { useState } from 'react'
import { salesPageData } from '../data/salesPageData'

type ProductSectionProps = {
  data?: typeof salesPageData
  copy?: {
    badge?: string
    subtitle?: string
  }
}

export default function ProductSection({
  data = salesPageData,
  copy = {},
}: ProductSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { product, modules } = data

  return (
    <section id="product-section">
      <style>{`
        #product-section {
          background: #FAF8F5;
          padding: 80px;
        }

        #product-section .product-shell {
          margin: 0 auto;
          max-width: 1120px;
        }

        #product-section .product-badge {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #product-section .product-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 56px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
        }

        #product-section .product-subtitle {
          color: #7A7870;
          font-size: 18px;
          line-height: 1.7;
          margin-top: 12px;
          max-width: 720px;
        }

        #product-section .product-grid {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 40px;
        }

        #product-section .product-module {
          display: flex;
          flex-direction: column;
        }

        #product-section .product-module-header {
          align-items: center;
          background: #FFFFFF;
          border: 0.5px solid #E0DDD7;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding: 16px 20px;
          text-align: left;
          width: 100%;
        }

        #product-section .product-module-left {
          align-items: center;
          display: flex;
          gap: 16px;
          min-width: 0;
        }

        #product-section .product-module-name {
          color: #1A1A18;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
        }

        #product-section .product-module-number {
          color: #C9A96E;
          flex: 0 0 28px;
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
        }

        #product-section .product-module-toggle {
          color: #C9A96E;
          flex: 0 0 auto;
          font-size: 20px;
          line-height: 1;
          margin-left: 16px;
        }

        #product-section .product-module-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 220ms ease;
        }

        #product-section .product-module-panel.is-open {
          max-height: 220px;
        }

        #product-section .product-module-description {
          border-left: 3px solid #C9A96E;
          color: #7A7870;
          font-size: 14px;
          line-height: 1.6;
          margin: 0 20px 12px;
          padding: 0 20px 16px;
        }

        @media (max-width: 767px) {
          #product-section {
            padding: 56px 24px;
          }

          #product-section .product-title {
            font-size: 32px;
          }

          #product-section .product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="product-shell">
        <div className="product-badge">
          {copy.badge ?? 'O que você vai aprender'}
        </div>
        <h2 className="product-title">{product.name}</h2>
        <div className="product-subtitle">
          {copy.subtitle ?? product.headline}
        </div>

        <div className="product-grid">
          {modules.map((module, index) => {
            const isOpen = openIndex === index

            return (
            <article key={module.number} className="product-module">
              <button
                type="button"
                className="product-module-header"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenIndex((currentIndex) =>
                    currentIndex === index ? null : index,
                  )
                }
              >
                <span className="product-module-left">
                  <span className="product-module-number">{module.number}</span>
                  <span className="product-module-name">{module.title}</span>
                </span>
                <span className="product-module-toggle" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <div
                className={`product-module-panel${isOpen ? ' is-open' : ''}`}
              >
                <div className="product-module-description">
                  {module.description}
                </div>
              </div>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
