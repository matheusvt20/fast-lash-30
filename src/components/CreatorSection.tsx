import { salesPageData } from '../data/salesPageData'

export default function CreatorSection() {
  const { creator } = salesPageData

  return (
    <section id="creator-section">
      <style>{`
        #creator-section {
          background: #F4F1EC;
          padding: 80px;
        }

        #creator-section .creator-shell {
          align-items: center;
          display: flex;
          gap: 48px;
          margin: 0 auto;
          max-width: 1120px;
        }

        #creator-section .creator-copy {
          flex: 1.1;
        }

        #creator-section .creator-badge {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #creator-section .creator-name {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 42px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
        }

        #creator-section .creator-role {
          color: #C9A96E;
          font-size: 13px;
          letter-spacing: 0.1em;
          line-height: 1.6;
          margin-top: 10px;
          text-transform: uppercase;
        }

        #creator-section .creator-bio {
          color: #444444;
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 15px;
          line-height: 1.8;
          margin-top: 24px;
        }

        #creator-section .creator-credentials {
          color: #7A7870;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 13px;
          margin-top: 24px;
        }

        #creator-section .creator-credential {
          align-items: flex-start;
          display: flex;
          gap: 8px;
        }

        #creator-section .creator-credential-dot {
          color: #C9A96E;
          line-height: 1.5;
        }

        #creator-section .creator-media {
          flex: 1;
        }

        #creator-section .creator-frame {
          background: rgba(255, 255, 255, 0.68);
          border: 1px solid #D8C8B3;
          border-radius: 22px;
          box-shadow: 0 18px 40px rgba(78, 58, 33, 0.08);
          padding: 14px;
        }

        #creator-section .creator-photo {
          border-radius: 16px;
          display: block;
          height: 480px;
          object-fit: cover;
          width: 100%;
        }

        @media (max-width: 767px) {
          #creator-section {
            padding: 56px 24px;
          }

          #creator-section .creator-shell {
            flex-direction: column;
            gap: 28px;
          }

          #creator-section .creator-name {
            font-size: 34px;
          }

          #creator-section .creator-photo {
            height: 360px;
          }
        }
      `}</style>

      <div className="creator-shell">
        <div className="creator-copy">
          <div className="creator-badge">Quem vai te ensinar</div>
          <h2 className="creator-name">{creator.name}</h2>
          <div className="creator-role">{creator.role}</div>

          <div className="creator-bio">
            {creator.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="creator-credentials">
            {creator.credentials.map((item) => (
              <div key={item} className="creator-credential">
                <span className="creator-credential-dot" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="creator-media">
          <div className="creator-frame">
            <img
              className="creator-photo"
              src={creator.photoBio}
              alt={`Retrato de ${creator.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
