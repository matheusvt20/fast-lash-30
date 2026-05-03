import { agendaCheiaPageData } from '../data/agendaCheiaPageData'
import { trackMetaEvent } from '../lib/metaEvents'

const beforeItems = [
  'Segunda-feira com agenda vazia',
  'Dependendo só de indicação pra sobreviver',
  'Postando todo dia sem gerar agendamento',
  'Com medo de anunciar e perder dinheiro',
  'Sem tempo pra organizar, vender e atender',
]

const afterItems = [
  'Semana já lotada no domingo',
  'Clientes chegando pelo WhatsApp e Instagram toda semana',
  'Copy que transforma post em agendamento',
  'Tráfego pago no piloto automático',
  'Negócio organizado e previsível com IA',
]

export default function BeforeAfterSection() {
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
    <section id="before-after-section">
      <style>{`
        #before-after-section {
          background: #0D0D0D;
          color: #FFFFFF;
          padding-top: 24px;
        }

        #before-after-section .before-after-shell {
          box-sizing: border-box;
          margin: 0 auto;
          max-width: 1040px;
          padding: 0 48px 88px;
        }

        #before-after-section .before-after-title {
          color: #FFFFFF;
          font-family: var(--font-display), Georgia, serif;
          font-size: 42px;
          font-weight: 500;
          line-height: 1.16;
          text-align: center;
        }

        #before-after-section .before-after-subtitle {
          color: #888888;
          font-family: Inter, var(--font-body);
          font-size: 17px;
          font-weight: 400;
          line-height: 1.6;
          margin: 14px 0 46px;
          text-align: center;
        }

        #before-after-section .before-after-subtitle-accent {
          color: #C9944A;
          font-weight: 500;
        }

        #before-after-section .before-after-grid {
          display: grid;
          gap: 28px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        #before-after-section .before-after-card {
          border-radius: 12px;
          padding: 28px;
        }

        #before-after-section .before-after-card-before {
          background: #1C1010;
          border: 1px solid rgba(220, 60, 60, 0.4);
        }

        #before-after-section .before-after-card-after {
          background: #161208;
          border: 1px solid rgba(201, 148, 74, 0.5);
        }

        #before-after-section .before-after-badge {
          border-radius: 6px;
          display: inline-flex;
          font-size: 12px;
          font-weight: 600;
          line-height: 1;
          margin-bottom: 26px;
          padding: 6px 14px;
          text-transform: uppercase;
        }

        #before-after-section .before-after-badge-before {
          background: #3D1515;
          color: #FF7070;
        }

        #before-after-section .before-after-badge-after {
          background: #2E2008;
          color: #C9944A;
        }

        #before-after-section .before-after-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        #before-after-section .before-after-item {
          align-items: flex-start;
          display: flex;
          gap: 14px;
        }

        #before-after-section .before-after-icon {
          align-items: center;
          border-radius: 50%;
          display: inline-flex;
          flex: 0 0 22px;
          font-size: 13px;
          height: 22px;
          justify-content: center;
          line-height: 1;
          margin-top: 1px;
          width: 22px;
        }

        #before-after-section .before-after-icon-before {
          background: rgba(220, 60, 60, 0.2);
          color: #E87070;
        }

        #before-after-section .before-after-icon-after {
          background: rgba(201, 148, 74, 0.2);
          color: #C9944A;
        }

        #before-after-section .before-after-text {
          color: #888888;
          font-size: 17px;
          line-height: 1.5;
        }

        #before-after-section .before-after-card-after .before-after-text {
          color: #DDDDDD;
        }

        #before-after-section .before-after-cta {
          background: #C9944A;
          border: none;
          border-radius: 6px;
          color: #000000;
          display: block;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.2;
          margin: 46px auto 0;
          padding: 14px 40px;
          text-align: center;
          text-decoration: none;
          width: fit-content;
        }

        @media (max-width: 767px) {
          #before-after-section {
            padding-top: 16px;
          }

          #before-after-section .before-after-shell {
            padding: 0 20px 56px;
          }

          #before-after-section .before-after-title {
            font-size: 30px;
          }

          #before-after-section .before-after-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="before-after-shell">
        <h2 className="before-after-title">Você se reconhece aqui?</h2>
        <p className="before-after-subtitle">
          Se sim, a{' '}
          <span className="before-after-subtitle-accent">
            Máquina de Agendamentos
          </span>{' '}
          foi feita pra você.
        </p>

        <div className="before-after-grid">
          <article className="before-after-card before-after-card-before">
            <div className="before-after-badge before-after-badge-before">
              Antes
            </div>
            <div className="before-after-list">
              {beforeItems.map((item) => (
                <div className="before-after-item" key={item}>
                  <span className="before-after-icon before-after-icon-before">
                    ✕
                  </span>
                  <span className="before-after-text">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="before-after-card before-after-card-after">
            <div className="before-after-badge before-after-badge-after">
              Depois
            </div>
            <div className="before-after-list">
              {afterItems.map((item) => (
                <div className="before-after-item" key={item}>
                  <span className="before-after-icon before-after-icon-after">
                    →
                  </span>
                  <span className="before-after-text">{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <a
          className="before-after-cta"
          href={product.checkoutUrl}
          onClick={handleCheckoutClick}
        >
          Quero sair do antes →
        </a>
      </div>
    </section>
  )
}
