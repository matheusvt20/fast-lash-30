import { salesPageData } from '../data/salesPageData'

type SocialProofBarProps = {
  data?: typeof salesPageData
  labels?: {
    access?: string
    duration?: string
    retention?: string
    students?: string
  }
  variant?: 'default' | 'compactMobile'
}

export default function SocialProofBar({
  data = salesPageData,
  labels,
  variant = 'default',
}: SocialProofBarProps) {
  const { socialProof } = data

  const items = [
    {
      value: socialProof.students,
      label: labels?.students ?? 'alunas formadas',
    },
    {
      value: socialProof.duration,
      label: labels?.duration ?? 'tempo de atendimento',
    },
    {
      value: socialProof.retention,
      label: labels?.retention ?? 'dias de retenção',
    },
    {
      value: socialProof.access,
      label: labels?.access ?? 'de acesso ao conteúdo',
    },
  ]

  return (
    <section
      id="social-proof-bar"
      className={
        variant === 'compactMobile' ? 'social-proof-compact-mobile' : undefined
      }
    >
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

          #social-proof-bar.social-proof-compact-mobile {
            padding: 28px 20px;
          }

          #social-proof-bar.social-proof-compact-mobile .social-proof-shell {
            display: grid;
            gap: 24px 16px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          #social-proof-bar.social-proof-compact-mobile .social-proof-item {
            padding: 0;
          }

          #social-proof-bar.social-proof-compact-mobile .social-proof-value {
            font-size: 30px;
          }

          #social-proof-bar.social-proof-compact-mobile .social-proof-label {
            font-size: 12px;
            letter-spacing: 0.03em;
          }

          #social-proof-bar.social-proof-compact-mobile .social-proof-divider {
            display: none;
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
