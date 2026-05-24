import { salesPageData } from '../data/salesPageData'

type ProblemSectionProps = {
  copy?: {
    badge?: string
    pains?: string[]
    title?: string
  }
}

export default function ProblemSection({ copy = {} }: ProblemSectionProps) {
  const pains = copy.pains ?? salesPageData.forWho.yes.slice(0, 5)
  const portraitImage = '/images/evelyn-senna-lash.webp'

  return (
    <section id="problem-section">
      <style>{`
        #problem-section {
          background: #FAF8F5;
          padding: 80px;
        }

        #problem-section .problem-shell {
          margin: 0 auto;
          max-width: 1100px;
        }

        #problem-section .problem-layout {
          align-items: start;
          display: grid;
          gap: 40px;
          grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.9fr);
        }

        #problem-section .problem-badge {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #problem-section .problem-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
          max-width: 760px;
        }

        #problem-section .problem-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 32px;
        }

        #problem-section .problem-item {
          background: #FFFFFF;
          border-left: 3px solid #C9A96E;
          border-radius: 0 6px 6px 0;
          color: #1A1A18;
          font-size: 14px;
          line-height: 1.6;
          padding: 16px 20px;
        }

        #problem-section .problem-media {
          position: relative;
        }

        #problem-section .problem-frame {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid #D8C8B3;
          border-radius: 22px;
          box-shadow: 0 18px 40px rgba(78, 58, 33, 0.08);
          overflow: hidden;
          padding: 14px;
        }

        #problem-section .problem-image {
          border-radius: 16px;
          display: block;
          height: 100%;
          min-height: 640px;
          object-fit: cover;
          object-position: center 18%;
          transform: scale(1.06);
          width: 100%;
        }

        @media (max-width: 767px) {
          #problem-section {
            padding: 56px 24px;
          }

          #problem-section .problem-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          #problem-section .problem-title {
            font-size: 32px;
          }

          #problem-section .problem-image {
            min-height: 420px;
            object-position: center 12%;
            transform: scale(1.03);
          }
        }
      `}</style>

      <div className="problem-shell">
        <div className="problem-layout">
          <div>
            <div className="problem-badge">
              {copy.badge ?? 'Você se identifica?'}
            </div>
            <h2 className="problem-title">
              {copy.title ??
                'Sua agenda está cheia — mas seus atendimentos ainda demoram demais.'}
            </h2>

            <div className="problem-list">
              {pains.map((pain) => (
                <div key={pain} className="problem-item">
                  {pain}
                </div>
              ))}
            </div>
          </div>

          <div className="problem-media">
            <div className="problem-frame">
              <img
                className="problem-image"
                src={portraitImage}
                alt="Retrato profissional de Evelyn Senna"
                width={1086}
                height={1448}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
