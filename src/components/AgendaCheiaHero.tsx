import { agendaCheiaPageData } from '../data/agendaCheiaPageData'
import { trackMetaEvent } from '../lib/metaEvents'

export default function AgendaCheiaHero() {
  const { product } = agendaCheiaPageData

  function handleCheckoutClick() {
    trackMetaEvent('InitiateCheckout', {
      customData: {
        content_name: product.name,
        currency: 'BRL',
        value: product.price,
      },
    })
  }

  return (
    <section id="agenda-cheia-hero">
      <style>{`
        #agenda-cheia-hero {
          background: #0D0D0D;
          color: #FFFFFF;
          overflow: hidden;
        }

        #agenda-cheia-hero .agenda-hero-layout {
          align-items: center;
          box-sizing: border-box;
          display: grid;
          gap: 64px;
          grid-template-columns: minmax(0, 55fr) minmax(0, 45fr);
          min-height: 82vh;
          padding: 72px 120px 36px;
        }

        #agenda-cheia-hero .agenda-hero-copy {
          max-width: 760px;
        }

        #agenda-cheia-hero .agenda-hero-badge {
          align-items: center;
          border: 1px solid #C9944A;
          border-radius: 999px;
          color: #C9944A;
          display: inline-flex;
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          padding: 9px 16px;
        }

        #agenda-cheia-hero .agenda-hero-title {
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 52px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 1.08;
          margin: 24px 0 0;
        }

        #agenda-cheia-hero .agenda-hero-title-accent {
          color: #C9944A;
        }

        #agenda-cheia-hero .agenda-hero-subtitle {
          color: #AAAAAA;
          font-family: Inter, var(--font-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.65;
          margin: 24px 0 0;
          max-width: 620px;
        }

        #agenda-cheia-hero .agenda-hero-actions {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 36px;
        }

        #agenda-cheia-hero .agenda-hero-cta {
          background: #C9944A;
          border-radius: 6px;
          color: #0D0D0D;
          display: inline-flex;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.2;
          padding: 18px 36px;
          text-decoration: none;
          transition: transform 120ms ease, box-shadow 120ms ease;
        }

        #agenda-cheia-hero .agenda-hero-cta:hover {
          box-shadow: 0 14px 26px rgba(201, 148, 74, 0.22);
          transform: translateY(-1px);
        }

        #agenda-cheia-hero .agenda-hero-proof {
          color: #888888;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.5;
        }

        #agenda-cheia-hero .agenda-hero-visual {
          justify-self: end;
          width: min(100%, 460px);
        }

        #agenda-cheia-hero .agenda-hero-image {
          aspect-ratio: 4 / 5;
          background: #070707;
          border: 1px solid rgba(201, 148, 74, 0.24);
          border-radius: 16px;
          box-shadow: 0 0 40px rgba(201, 148, 74, 0.2);
          min-height: 0;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        #agenda-cheia-hero .agenda-hero-image::before {
          background: url('/images/resultado-3.webp') center / cover;
          content: '';
          inset: 0;
          position: absolute;
          transform: rotate(180deg);
          transform-origin: center;
        }

        #agenda-cheia-hero .agenda-hero-image::after {
          background: linear-gradient(
            to top,
            rgba(13, 13, 13, 0.72),
            rgba(13, 13, 13, 0.08) 58%
          );
          content: '';
          inset: 0;
          position: absolute;
        }

        #agenda-cheia-hero .agenda-hero-visual-label {
          bottom: 28px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 13px;
          left: 28px;
          letter-spacing: 0.08em;
          position: absolute;
          text-transform: uppercase;
        }

        @media (max-width: 767px) {
          #agenda-cheia-hero .agenda-hero-layout {
            display: flex;
            flex-direction: column;
            gap: 28px;
            min-height: auto;
            padding: 40px 20px 28px;
          }

          #agenda-cheia-hero .agenda-hero-visual {
            order: 1;
            width: 100%;
          }

          #agenda-cheia-hero .agenda-hero-copy {
            order: 2;
            width: 100%;
          }

          #agenda-cheia-hero .agenda-hero-image {
            aspect-ratio: 16 / 10;
          }

          #agenda-cheia-hero .agenda-hero-title {
            font-size: 34px;
          }

          #agenda-cheia-hero .agenda-hero-subtitle {
            font-size: 16px;
          }

          #agenda-cheia-hero .agenda-hero-cta {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      <div className="agenda-hero-layout">
        <div className="agenda-hero-copy">
          <div className="agenda-hero-badge">
            • Exclusivo para Lash Designers
          </div>
          <h1 className="agenda-hero-title">
            Pare de esperar cliente. Construa uma{' '}
            <span className="agenda-hero-title-accent">
              máquina que os atrai
            </span>{' '}
            toda semana.
          </h1>
          <p className="agenda-hero-subtitle">
            O método passo a passo para transformar sua agenda vazia em uma
            lista de espera — sem depender de indicação.
          </p>

          <div className="agenda-hero-actions">
            <a
              className="agenda-hero-cta"
              href={product.checkoutUrl}
              onClick={handleCheckoutClick}
            >
              Quero minha Máquina de Agendamentos →
            </a>
            <div className="agenda-hero-proof">
              🔒 Acesso imediato por R$30 · ⭐ Mais de 200 lash designers já
              transformaram a agenda
            </div>
          </div>
        </div>

        <div className="agenda-hero-visual" aria-hidden="true">
          <div className="agenda-hero-image">
            <div className="agenda-hero-visual-label">
              Lash Growth System
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
