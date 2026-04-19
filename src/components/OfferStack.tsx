import { salesPageData } from '../data/salesPageData'

export default function OfferStack() {
  const { product, bonuses } = salesPageData
  const totalValue = product.originalPrice

  return (
    <section id="offer-stack">
      <style>{`
        #offer-stack {
          background: #1A1A18;
          padding: 80px;
        }

        #offer-stack .offer-shell {
          margin: 0 auto;
          max-width: 1120px;
        }

        #offer-stack .offer-badge {
          align-items: center;
          background: #2A2A26;
          border-radius: 100px;
          color: #C9A96E;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #offer-stack .offer-title {
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
          max-width: 760px;
        }

        #offer-stack .offer-card {
          background: #2A2A26;
          border: 1px solid #C9A96E;
          border-radius: 12px;
          margin: 40px auto 0;
          max-width: 600px;
          padding: 40px;
        }

        #offer-stack .offer-product-title {
          color: #E8D9C0;
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          line-height: 1.2;
        }

        #offer-stack .offer-line {
          align-items: baseline;
          border-bottom: 0.5px solid #333333;
          color: #CCCCCC;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          font-size: 13px;
          line-height: 1.5;
          padding: 12px 0;
        }

        #offer-stack .offer-line-value {
          color: #666666;
          text-decoration: line-through;
          white-space: nowrap;
        }

        #offer-stack .offer-total {
          border-top: 1px solid #C9A96E;
          margin-top: 20px;
          padding-top: 20px;
        }

        #offer-stack .offer-total-row {
          color: #CCCCCC;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          font-size: 13px;
          line-height: 1.5;
        }

        #offer-stack .offer-final-price {
          color: #C9A96E;
          font-family: var(--font-display);
          font-size: 52px;
          font-weight: 700;
          line-height: 1.05;
          margin-top: 8px;
        }

        #offer-stack .offer-note {
          color: #666666;
          font-size: 12px;
          line-height: 1.5;
          margin-top: 4px;
        }

        #offer-stack .offer-cta {
          align-items: center;
          background: #C9A96E;
          border-radius: 6px;
          color: #1A1A18;
          display: inline-flex;
          font-size: 14px;
          font-weight: 700;
          justify-content: center;
          letter-spacing: 0.08em;
          margin-top: 24px;
          padding: 18px;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 120ms ease;
          width: 100%;
        }

        #offer-stack .offer-cta:hover {
          transform: translateY(-1px);
        }

        @media (max-width: 767px) {
          #offer-stack {
            padding: 56px 24px;
          }

          #offer-stack .offer-title {
            font-size: 32px;
          }

          #offer-stack .offer-card {
            padding: 28px 20px;
          }

          #offer-stack .offer-final-price {
            font-size: 42px;
          }
        }
      `}</style>

      <div className="offer-shell">
        <div className="offer-badge">O que está incluído</div>
        <h2 className="offer-title">Tudo que você recebe hoje</h2>

        <div className="offer-card">
          <div className="offer-product-title">{product.name}</div>

          <div style={{ marginTop: 20 }}>
            {bonuses.map((bonus) => (
              <div key={bonus.name} className="offer-line">
                <span>{bonus.name}</span>
                <span className="offer-line-value">R$ {bonus.value}</span>
              </div>
            ))}
          </div>

          <div className="offer-total">
            <div className="offer-total-row">
              <span>Valor total:</span>
              <span className="offer-line-value">R$ {totalValue}</span>
            </div>

            <div className="offer-final-price">R$ {product.price}</div>
            <div className="offer-note">Pagamento único · 1 ano de acesso</div>

            <a className="offer-cta" href={product.checkoutUrl}>
              Garantir meu acesso por R$59
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
