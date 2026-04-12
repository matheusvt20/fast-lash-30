import { salesPageData } from '../data/salesPageData'

export default function GuaranteeSection() {
  const { guarantee } = salesPageData

  return (
    <section id="guarantee-section">
      <style>{`
        #guarantee-section {
          background: #F4F1EC;
          padding: 80px;
        }

        #guarantee-section .guarantee-shell {
          margin: 0 auto;
          max-width: 600px;
          text-align: center;
        }

        #guarantee-section .guarantee-badge {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #guarantee-section .guarantee-icon {
          font-size: 56px;
          margin: 24px 0;
        }

        #guarantee-section .guarantee-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 700;
          line-height: 1.1;
        }

        #guarantee-section .guarantee-box {
          background: #FFFFFF;
          border: 1px solid #C9A96E;
          border-radius: 12px;
          margin-top: 40px;
          padding: 48px;
        }

        #guarantee-section .guarantee-text {
          color: #7A7870;
          font-size: 15px;
          line-height: 1.8;
          margin-top: 16px;
        }

        @media (max-width: 767px) {
          #guarantee-section {
            padding: 56px 24px;
          }

          #guarantee-section .guarantee-title {
            font-size: 32px;
          }

          #guarantee-section .guarantee-box {
            padding: 32px 20px;
          }
        }
      `}</style>

      <div className="guarantee-shell">
        <div className="guarantee-badge">Sem risco</div>
        <div className="guarantee-icon" aria-hidden="true">
          🛡️
        </div>
        <h2 className="guarantee-title">
          Garantia incondicional de {guarantee.days} dias
        </h2>

        <div className="guarantee-box">
          <div className="guarantee-text">{guarantee.text}</div>
        </div>
      </div>
    </section>
  )
}
