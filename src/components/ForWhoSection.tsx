import { salesPageData } from '../data/salesPageData'

type ForWhoSectionProps = {
  data?: typeof salesPageData
  copy?: {
    badge?: string
    noTitle?: string
    title?: string
    yesTitle?: string
  }
}

export default function ForWhoSection({
  data = salesPageData,
  copy = {},
}: ForWhoSectionProps) {
  const { forWho } = data

  return (
    <section id="for-who-section">
      <style>{`
        #for-who-section {
          background: #F4F1EC;
          padding: 80px;
        }

        #for-who-section .for-who-shell {
          margin: 0 auto;
          max-width: 1120px;
        }

        #for-who-section .for-who-badge {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #for-who-section .for-who-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
          max-width: 760px;
        }

        #for-who-section .for-who-grid {
          align-items: flex-start;
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 40px;
        }

        #for-who-section .for-who-column-title {
          color: #1A1A18;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        #for-who-section .for-who-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        #for-who-section .for-who-item {
          align-items: flex-start;
          background: #FFFFFF;
          border-radius: 0 6px 6px 0;
          display: flex;
          gap: 8px;
          padding: 14px 18px;
        }

        #for-who-section .for-who-item-yes {
          border-left: 3px solid #C9A96E;
        }

        #for-who-section .for-who-item-no {
          border-left: 3px solid #A0998E;
        }

        #for-who-section .for-who-icon {
          font-weight: 700;
          line-height: 1.4;
        }

        #for-who-section .for-who-icon-yes {
          color: #C9A96E;
        }

        #for-who-section .for-who-icon-no {
          color: #A0998E;
        }

        #for-who-section .for-who-item-text {
          color: #1A1A18;
          font-size: 13px;
          line-height: 1.6;
        }

        @media (max-width: 767px) {
          #for-who-section {
            padding: 56px 24px;
          }

          #for-who-section .for-who-title {
            font-size: 32px;
          }

          #for-who-section .for-who-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="for-who-shell">
        <div className="for-who-badge">{copy.badge ?? 'Para quem é'}</div>
        <h2 className="for-who-title">
          {copy.title ?? 'Esse método foi feito para você se...'}
        </h2>

        <div className="for-who-grid">
          <div>
            <div className="for-who-column-title">
              {copy.yesTitle ?? 'Para você se...'}
            </div>
            <div className="for-who-list">
              {forWho.yes.map((item) => (
                <div key={item} className="for-who-item for-who-item-yes">
                  <span className="for-who-icon for-who-icon-yes">✓</span>
                  <span className="for-who-item-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="for-who-column-title">
              {copy.noTitle ?? 'Não é pra você se...'}
            </div>
            <div className="for-who-list">
              {forWho.no.map((item) => (
                <div key={item} className="for-who-item for-who-item-no">
                  <span className="for-who-icon for-who-icon-no">✗</span>
                  <span className="for-who-item-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
