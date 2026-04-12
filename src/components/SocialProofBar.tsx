import { salesPageData } from '../data/salesPageData'

export default function SocialProofBar() {
  const { socialProof } = salesPageData

  const items = [
    {
      value: socialProof.students,
      label: 'alunas formadas',
    },
    {
      value: socialProof.duration,
      label: 'tempo de atendimento',
    },
    {
      value: socialProof.retention,
      label: 'dias de retenção',
    },
    {
      value: socialProof.access,
      label: 'de acesso ao conteúdo',
    },
  ]

  return (
    <section id="social-proof-bar">
      <style>{`
        #social-proof-bar {
          background: #1A1A18;
          padding: 28px 80px;
        }

        #social-proof-bar .social-proof-shell {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          justify-content: center;
          margin: 0 auto;
        }

        #social-proof-bar .social-proof-item {
          align-items: center;
          display: flex;
          flex-direction: column;
          padding: 0 48px;
          text-align: center;
        }

        #social-proof-bar .social-proof-value {
          color: #C9A96E;
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 700;
          line-height: 1.1;
        }

        #social-proof-bar .social-proof-label {
          color: #A0998E;
          font-size: 12px;
          letter-spacing: 0.05em;
          line-height: 1.5;
          margin-top: 4px;
        }

        #social-proof-bar .social-proof-divider {
          align-self: center;
          border-left: 1px solid #333333;
          height: 40px;
        }

        @media (max-width: 767px) {
          #social-proof-bar {
            padding: 24px;
          }

          #social-proof-bar .social-proof-shell {
            flex-direction: row;
          }

          #social-proof-bar .social-proof-item {
            flex: 1 1 0;
            min-width: 0;
            padding: 0 14px;
          }

          #social-proof-bar .social-proof-value {
            font-size: 24px;
          }

          #social-proof-bar .social-proof-label {
            font-size: 11px;
          }

          #social-proof-bar .social-proof-divider {
            height: 32px;
          }
        }
      `}</style>

      <div className="social-proof-shell">
        {items.map((item, index) => (
          <div key={item.label} style={{ display: 'contents' }}>
            <div className="social-proof-item">
              <div className="social-proof-value">{item.value}</div>
              <div className="social-proof-label">{item.label}</div>
            </div>
            {index < items.length - 1 ? (
              <div
                className="social-proof-divider"
                aria-hidden="true"
              ></div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
