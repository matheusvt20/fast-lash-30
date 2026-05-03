import { salesPageData } from '../data/salesPageData'

type BenefitsGridProps = {
  data?: typeof salesPageData
  copy?: {
    badge?: string
    title?: string
  }
}

export default function BenefitsGrid({
  data = salesPageData,
  copy = {},
}: BenefitsGridProps) {
  const { benefits } = data

  return (
    <section id="benefits-grid">
      <style>{`
        #benefits-grid {
          background: #1A1A18;
          padding: 80px;
        }

        #benefits-grid .benefits-shell {
          margin: 0 auto;
          max-width: 1120px;
        }

        #benefits-grid .benefits-badge {
          align-items: center;
          background: #2A2A26;
          border-radius: 100px;
          color: #C9A96E;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #benefits-grid .benefits-title {
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
          max-width: 780px;
        }

        #benefits-grid .benefits-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 40px;
        }

        #benefits-grid .benefit-card {
          background: #2A2A26;
          border: 0.5px solid #333333;
          border-radius: 8px;
          padding: 24px;
        }

        #benefits-grid .benefit-title {
          color: #E8D9C0;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.5;
        }

        #benefits-grid .benefit-description {
          color: #A0998E;
          font-size: 13px;
          line-height: 1.6;
          margin-top: 8px;
        }

        @media (max-width: 767px) {
          #benefits-grid {
            padding: 56px 24px;
          }

          #benefits-grid .benefits-title {
            font-size: 32px;
          }

          #benefits-grid .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="benefits-shell">
        <div className="benefits-badge">
          {copy.badge ?? 'O que muda pra você'}
        </div>
        <h2 className="benefits-title">
          {copy.title ?? 'O que você ganha quando domina o método'}
        </h2>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="benefit-card">
              <div className="benefit-title">{benefit.title}</div>
              <div className="benefit-description">{benefit.description}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
