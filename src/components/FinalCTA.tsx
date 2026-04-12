import { salesPageData } from '../data/salesPageData'

export default function FinalCTA() {
  const { product } = salesPageData

  return (
    <section id="final-cta">
      <style>{`
        #final-cta {
          background: #1A1A18;
          padding: 80px;
        }

        #final-cta .final-shell {
          margin: 0 auto;
          max-width: 600px;
          text-align: center;
        }

        #final-cta .final-title {
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 42px;
          font-weight: 700;
          line-height: 1.1;
        }

        #final-cta .final-bullets {
          background: #2A2A26;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 32px 0;
          padding: 24px 32px;
          text-align: left;
        }

        #final-cta .final-bullet {
          color: #FFFFFF;
          display: flex;
          gap: 10px;
          font-size: 14px;
          line-height: 1.6;
        }

        #final-cta .final-bullet-icon {
          color: #C9A96E;
          flex: 0 0 auto;
          font-weight: 700;
        }

        #final-cta .final-pricing {
          align-items: baseline;
          display: flex;
          gap: 14px;
          justify-content: center;
          margin-top: 4px;
        }

        #final-cta .final-original-price {
          color: #666666;
          font-size: 14px;
          text-decoration: line-through;
        }

        #final-cta .final-price {
          color: #C9A96E;
          font-family: var(--font-display);
          font-size: 52px;
          font-weight: 700;
          line-height: 1;
        }

        #final-cta .final-cta {
          align-items: center;
          background: #C9A96E;
          border-radius: 6px;
          color: #1A1A18;
          display: inline-flex;
          font-size: 15px;
          font-weight: 700;
          justify-content: center;
          letter-spacing: 0.1em;
          margin-top: 8px;
          padding: 20px;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 120ms ease;
          width: 100%;
        }

        #final-cta .final-cta:hover {
          transform: translateY(-1px);
        }

        #final-cta .final-security {
          color: #666666;
          font-size: 12px;
          line-height: 1.5;
          margin-top: 12px;
        }

        @media (max-width: 767px) {
          #final-cta {
            padding: 56px 24px;
          }

          #final-cta .final-title {
            font-size: 32px;
          }

          #final-cta .final-bullets {
            padding: 20px 18px;
          }

          #final-cta .final-price {
            font-size: 42px;
          }
        }
      `}</style>

      <div className="final-shell">
        <h2 className="final-title">
          Pronta para atender mais rápido e cobrar melhor?
        </h2>

        <div className="final-bullets">
          <div className="final-bullet">
            <span className="final-bullet-icon">✓</span>
            <span>12 módulos + 7 bônus exclusivos</span>
          </div>
          <div className="final-bullet">
            <span className="final-bullet-icon">✓</span>
            <span>Garantia incondicional de 7 dias</span>
          </div>
          <div className="final-bullet">
            <span className="final-bullet-icon">✓</span>
            <span>Acesso vitalício por pagamento único</span>
          </div>
        </div>

        <div className="final-pricing">
          <span className="final-original-price">R${product.originalPrice}</span>
          <span className="final-price">R${product.price}</span>
        </div>

        <a className="final-cta" href={product.checkoutUrl}>
          Quero o Fast Lash 30+ agora
        </a>

        <div className="final-security">🔒 Compra 100% segura via Kiwify</div>
      </div>
    </section>
  )
}
