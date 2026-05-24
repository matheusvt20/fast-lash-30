import { useEffect, useState } from 'react'
import { salesPageData } from '../data/salesPageData'
import { trackMetaEvent } from '../lib/metaEvents'

const defaultOfferBonuses = [
  'App de Agendamento',
  'Site de Agendamento Automático',
  'App de Controle Financeiro',
  'Curso de Tráfego Pago para Lash',
]

type OfferStackProps = {
  data?: typeof salesPageData
  copy?: {
    badge?: string
    cta?: string
    items?: string[]
    note?: string
    title?: string
    totalLabel?: string
  }
}

export default function OfferStack({
  data = salesPageData,
  copy = {},
}: OfferStackProps) {
  const { product, bonuses } = data
  const totalValue = product.originalPrice
  const isDefaultOffer = product.name === salesPageData.product.name
  const finalPrice = product.price
  const installmentText = isDefaultOffer ? '5x de R$ 10,41 / ano' : '5x no cartão'
  const [secondsLeft, setSecondsLeft] = useState(9 * 60 + 39)
  const bonusItems =
    copy.items ?? (isDefaultOffer ? defaultOfferBonuses : bonuses.map((bonus) => bonus.name))

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0))
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const countdown = `${String(Math.floor(secondsLeft / 60)).padStart(
    2,
    '0',
  )}:${String(secondsLeft % 60).padStart(2, '0')}`

  function handleCheckoutClick() {
    trackMetaEvent('InitiateCheckout', {
      customData: {
        content_name: product.name,
        currency: 'BRL',
        value: finalPrice,
      },
    })
  }

  return (
    <section id="offer-stack">
      <style>{`
        #offer-stack {
          background:
            radial-gradient(circle at 82% 10%, rgba(213, 181, 113, 0.13), transparent 28%),
            linear-gradient(180deg, #1B1814, #11100E);
          padding: 82px 80px;
        }

        #offer-stack .offer-shell {
          margin: 0 auto;
          max-width: 1120px;
        }

        #offer-stack .offer-badge {
          align-items: center;
          background: rgba(255, 252, 246, 0.08);
          border: 1px solid rgba(228, 202, 136, 0.18);
          border-radius: 100px;
          color: #D4B873;
          display: inline-flex;
          font-size: 13px;
          padding: 8px 18px;
        }

        #offer-stack .offer-title {
          color: #FFF8EC;
          font-family: var(--font-display);
          font-size: 46px;
          font-weight: 600;
          line-height: 1.12;
          margin: 24px 0 0;
          max-width: 760px;
        }

        #offer-stack .offer-card {
          background:
            linear-gradient(180deg, rgba(255, 252, 246, 0.06), rgba(255, 252, 246, 0.025)),
            #25231F;
          border: 1px solid rgba(228, 202, 136, 0.56);
          border-radius: 18px;
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.24);
          margin: 42px auto 0;
          max-width: 720px;
          padding: 48px;
        }

        #offer-stack .offer-product-title {
          color: #EFE4D2;
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 600;
          line-height: 1.15;
        }

        #offer-stack .offer-coupon {
          background: linear-gradient(135deg, #C3A05C, #E4CA88);
          border-radius: 10px;
          color: #181510;
          margin-top: 28px;
          padding: 24px 28px;
        }

        #offer-stack .offer-coupon-kicker,
        #offer-stack .offer-box-kicker,
        #offer-stack .offer-bonus-title {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        #offer-stack .offer-coupon-title {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 600;
          line-height: 1.08;
          margin-top: 8px;
        }

        #offer-stack .offer-coupon-copy {
          color: rgba(24, 21, 16, 0.74);
          font-size: 14px;
          font-weight: 700;
          line-height: 1.5;
          margin-top: 10px;
        }

        #offer-stack .offer-summary {
          border: 1px solid rgba(228, 202, 136, 0.28);
          border-radius: 12px;
          margin-top: 28px;
          padding: 24px 28px 10px;
        }

        #offer-stack .offer-box-kicker,
        #offer-stack .offer-bonus-title {
          color: #D4B873;
        }

        #offer-stack .offer-summary-copy {
          color: #EFE4D2;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.5;
          margin-top: 12px;
        }

        #offer-stack .offer-bonus-title {
          border-top: 1px solid rgba(228, 202, 136, 0.16);
          margin-top: 22px;
          padding-top: 22px;
        }

        #offer-stack .offer-line {
          align-items: center;
          border-bottom: 0.5px solid rgba(228, 202, 136, 0.16);
          color: #E4D9C8;
          display: flex;
          gap: 16px;
          justify-content: space-between;
          font-size: 15px;
          line-height: 1.5;
          padding: 14px 0;
        }

        #offer-stack .offer-line-name {
          align-items: center;
          display: inline-flex;
          gap: 12px;
        }

        #offer-stack .offer-line-icon {
          align-items: center;
          border: 1px solid rgba(228, 202, 136, 0.4);
          border-radius: 999px;
          color: #D4B873;
          display: inline-flex;
          flex: 0 0 auto;
          font-size: 13px;
          height: 24px;
          justify-content: center;
          width: 24px;
        }

        #offer-stack .offer-line-value {
          color: rgba(255, 248, 236, 0.34);
          text-decoration: line-through;
          white-space: nowrap;
        }

        #offer-stack .offer-free {
          border: 1px solid rgba(228, 202, 136, 0.44);
          border-radius: 999px;
          color: #D4B873;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 6px 12px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        #offer-stack .offer-total {
          margin-top: 30px;
        }

        #offer-stack .offer-total-row {
          color: rgba(255, 248, 236, 0.72);
          display: flex;
          gap: 16px;
          font-size: 14px;
          justify-content: space-between;
          line-height: 1.5;
        }

        #offer-stack .offer-final-price {
          color: #D4B873;
          font-family: var(--font-display);
          font-size: 62px;
          font-weight: 700;
          line-height: 1.05;
          margin-top: 14px;
        }

        #offer-stack .offer-price-period {
          color: rgba(255, 248, 236, 0.56);
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          margin-left: 8px;
        }

        #offer-stack .offer-note {
          color: rgba(255, 248, 236, 0.38);
          font-size: 12px;
          line-height: 1.5;
          margin-top: 4px;
        }

        #offer-stack .offer-cta {
          align-items: center;
          background:
            linear-gradient(180deg, rgba(255, 250, 235, 0.42), rgba(255, 250, 235, 0) 52%),
            linear-gradient(135deg, #C3A05C 0%, #E4CA88 48%, #B88D45 100%);
          border: 1px solid rgba(228, 202, 136, 0.28);
          border-radius: 12px;
          box-shadow:
            0 14px 26px rgba(123, 87, 34, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.58),
            inset 0 -1px 0 rgba(85, 54, 14, 0.14);
          color: #211A11;
          display: inline-flex;
          font-size: 14px;
          font-weight: 800;
          justify-content: center;
          letter-spacing: 0.06em;
          margin-top: 30px;
          min-height: 54px;
          padding: 15px 24px;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 120ms ease;
          width: 100%;
        }

        #offer-stack .offer-cta:hover {
          transform: translateY(-1px);
        }

        #offer-stack .offer-countdown {
          align-items: center;
          border: 1px solid rgba(228, 202, 136, 0.24);
          border-radius: 10px;
          color: rgba(255, 248, 236, 0.72);
          display: flex;
          justify-content: space-between;
          margin-top: 18px;
          padding: 16px 18px;
        }

        #offer-stack .offer-countdown-label {
          font-size: 13px;
          font-weight: 700;
        }

        #offer-stack .offer-countdown-time {
          color: #D4B873;
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
        }

        @media (max-width: 767px) {
          #offer-stack {
            padding: 56px 24px;
          }

          #offer-stack .offer-title {
            font-size: 32px;
          }

          #offer-stack .offer-card {
            padding: 28px 20px;
          }

          #offer-stack .offer-product-title {
            font-size: 28px;
          }

          #offer-stack .offer-coupon {
            padding: 20px;
          }

          #offer-stack .offer-coupon-title {
            font-size: 26px;
          }

          #offer-stack .offer-summary {
            padding: 22px 18px 8px;
          }

          #offer-stack .offer-line {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          #offer-stack .offer-final-price {
            font-size: 42px;
          }

          #offer-stack .offer-countdown-time {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="offer-shell">
        <div className="offer-badge">{copy.badge ?? 'O que está incluído'}</div>
        <h2 className="offer-title">
          {copy.title ?? 'Tudo que você recebe hoje'}
        </h2>

        <div className="offer-card">
          <div className="offer-product-title">{product.name}</div>

          <div className="offer-coupon">
            <div className="offer-coupon-kicker">Cupom liberado</div>
            <div className="offer-coupon-title">
              Você ganhou um cupom de desconto
            </div>
            <div className="offer-coupon-copy">
              Sua condição especial já está aplicada: {installmentText} ou R${' '}
              {finalPrice},00 / ano.
            </div>
          </div>

          <div className="offer-summary">
            <div className="offer-box-kicker">Resumo</div>
            <div className="offer-summary-copy">
              Curso online Cílios em 1 hora com aulas práticas.
            </div>

            <div className="offer-bonus-title">Bônus liberados no acesso</div>
            {bonusItems.map((item) => (
              <div key={item} className="offer-line">
                <span className="offer-line-name">
                  <span className="offer-line-icon" aria-hidden="true">
                    +
                  </span>
                  <span>{item}</span>
                </span>
                <span className="offer-free">Gratuito</span>
              </div>
            ))}
          </div>

          <div className="offer-total">
            <div className="offer-total-row">
              <span>{copy.totalLabel ?? 'Valor total:'}</span>
              <span className="offer-line-value">R$ {totalValue}</span>
            </div>

            <div className="offer-final-price">
              R$ {finalPrice},00
              <span className="offer-price-period">/ ano</span>
            </div>
            <div className="offer-note">
              {copy.note ?? 'Pagamento anual · 1 ano de acesso'}
            </div>

            <a
              className="offer-cta"
              href={product.checkoutUrl}
              onClick={handleCheckoutClick}
            >
              {copy.cta ?? `Garantir meu acesso por R$${finalPrice},00 / ano`}
            </a>

            <div className="offer-countdown" aria-live="polite">
              <span className="offer-countdown-label">
                Essa condição termina em
              </span>
              <span className="offer-countdown-time">{countdown}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
