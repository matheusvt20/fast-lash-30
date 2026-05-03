import { salesPageData } from '../data/salesPageData'

type BonusSectionProps = {
  data?: typeof salesPageData
  copy?: {
    badge?: string
    title?: string
    valueLabel?: string
  }
}

export default function BonusSection({
  data = salesPageData,
  copy = {},
}: BonusSectionProps) {
  const { bonuses } = data

  return (
    <section id="bonus-section">
      <style>{`
        #bonus-section {
          background: #FAF8F5;
          padding: 80px;
        }

        #bonus-section .bonus-shell {
          margin: 0 auto;
          max-width: 1120px;
        }

        #bonus-section .bonus-badge {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #bonus-section .bonus-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
          max-width: 760px;
        }

        #bonus-section .bonus-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 40px;
        }

        #bonus-section .bonus-card {
          background: #FFFFFF;
          border: 0.5px solid #E8D9C0;
          border-radius: 8px;
          padding: 24px;
        }

        #bonus-section .bonus-pill {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 11px;
          padding: 3px 10px;
        }

        #bonus-section .bonus-name {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.2;
          margin-top: 10px;
        }

        #bonus-section .bonus-description {
          color: #7A7870;
          font-size: 13px;
          line-height: 1.6;
          margin-top: 8px;
        }

        #bonus-section .bonus-value {
          color: #C9A96E;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.4;
          margin-top: 12px;
        }

        @media (max-width: 767px) {
          #bonus-section {
            padding: 56px 24px;
          }

          #bonus-section .bonus-title {
            font-size: 32px;
          }

          #bonus-section .bonus-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="bonus-shell">
        <div className="bonus-badge">
          {copy.badge ?? 'Bônus exclusivos'}
        </div>
        <h2 className="bonus-title">{copy.title ?? 'Você ainda recebe'}</h2>

        <div className="bonus-grid">
          {bonuses.map((bonus) => (
            <article key={bonus.name} className="bonus-card">
              <div className="bonus-pill">Bônus</div>
              <div className="bonus-name">{bonus.name}</div>
              <div className="bonus-description">{bonus.description}</div>
              <div className="bonus-value">
                {copy.valueLabel ?? `Valor: R$ ${bonus.value}`}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
