import type { MouseEvent } from 'react'

type StudentReturn = {
  src: string
  width: number
  height: number
  alt: string
}

const returns: StudentReturn[] = [
  {
    src: '/images/retorno-aluna-1.webp',
    width: 520,
    height: 1127,
    alt: 'Conversa com aluna contando que reduziu o atendimento para 1h30',
  },
  {
    src: '/images/retorno-aluna-2.webp',
    width: 520,
    height: 1129,
    alt: 'Conversa com aluna contando que reduziu o atendimento para 1h20',
  },
  {
    src: '/images/retorno-aluna-3.webp',
    width: 560,
    height: 995,
    alt: 'Conversa com studio contando evolução para 1h18',
  },
  {
    src: '/images/retorno-aluna-4.webp',
    width: 560,
    height: 995,
    alt: 'Conversa com aluna contando atendimento em 1h28',
  },
  {
    src: '/images/retorno-aluna-5.webp',
    width: 560,
    height: 995,
    alt: 'Conversa com studio contando atendimento em 1h24',
  },
]

export default function StudentReturnsMarquee() {
  const loopedReturns = [...returns, ...returns]

  function handleStudentReturnsCtaClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()

    const targetId = 'offer-checkout-card'
    const fallbackId = 'offer-coupon-area'
    const startedAt = Date.now()
    const maxDuration = 3600

    function scrollToOfferCard(attempt = 0) {
      const target =
        document.getElementById(targetId) ??
        document.getElementById(fallbackId)

      if (!target) {
        window.location.hash = targetId
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - 16

        window.scrollTo({
          behavior: attempt === 0 ? 'smooth' : 'auto',
          top,
        })
      }

      const isStillSettling = Date.now() - startedAt < maxDuration

      if (isStillSettling) {
        window.setTimeout(() => scrollToOfferCard(attempt + 1), 220)
      }
    }

    scrollToOfferCard()

    window.history.replaceState(null, '', `#${targetId}`)
  }

  return (
    <section id="student-returns-section">
      <style>{`
        #student-returns-section {
          background:
            linear-gradient(180deg, #17130F 0%, #211B15 52%, #F4F1EC 100%);
          color: #FFF8EC;
          overflow: hidden;
          padding: 78px 0 88px;
        }

        #student-returns-section .student-returns-copy {
          margin: 0 auto;
          max-width: 1120px;
          padding: 0 80px 42px;
        }

        #student-returns-section .student-returns-kicker {
          border: 1px solid rgba(228, 202, 136, 0.34);
          border-radius: 999px;
          color: #E4CA88;
          display: inline-flex;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.07em;
          padding: 8px 16px;
          text-transform: uppercase;
        }

        #student-returns-section .student-returns-title {
          color: #FFF8EC;
          font-family: var(--font-display);
          font-size: 44px;
          font-weight: 600;
          line-height: 1.14;
          margin: 18px 0 0;
          max-width: 780px;
        }

        #student-returns-section .student-returns-subtitle {
          color: rgba(255, 248, 236, 0.72);
          font-size: 16px;
          line-height: 1.72;
          margin: 18px 0 0;
          max-width: 660px;
        }

        #student-returns-section .student-returns-marquee {
          -webkit-overflow-scrolling: touch;
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
          touch-action: pan-x;
        }

        #student-returns-section .student-returns-marquee::-webkit-scrollbar {
          display: none;
        }

        #student-returns-section .student-returns-actions {
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 34px auto 0;
          max-width: 584px;
          padding: 0 24px;
        }

        #student-returns-section .student-returns-cta {
          align-items: center;
          background:
            linear-gradient(180deg, rgba(255, 252, 242, 0.34), rgba(255, 252, 242, 0) 52%),
            linear-gradient(135deg, #A88445 0%, #D5BD78 48%, #9C7435 100%);
          border: 1px solid rgba(213, 189, 120, 0.32);
          border-radius: 12px;
          box-shadow:
            0 18px 34px rgba(0, 0, 0, 0.26),
            0 0 24px rgba(213, 189, 120, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.58),
            inset 0 -1px 0 rgba(85, 54, 14, 0.14);
          color: #211A11;
          display: inline-flex;
          font-size: 14px;
          font-weight: 500;
          gap: 10px;
          justify-content: center;
          min-height: 50px;
          min-width: 292px;
          padding: 14px 30px;
          text-align: center;
          text-decoration: none;
          transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
        }

        #student-returns-section .student-returns-cta:hover {
          filter: saturate(1.04);
          transform: translateY(-1px);
        }

        #student-returns-section .student-returns-cta-label {
          font-size: 14.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          line-height: 1.2;
        }

        #student-returns-section .student-returns-cta-arrow {
          font-size: 16px;
          line-height: 1;
        }

        #student-returns-section .student-returns-price {
          align-items: center;
          color: #4F4941;
          display: inline-flex;
          font-size: 13px;
          font-weight: 700;
          gap: 8px;
          line-height: 1.4;
          padding-left: 4px;
        }

        #student-returns-section .student-returns-price::before {
          align-items: center;
          background: rgba(184, 141, 69, 0.12);
          border: 1px solid rgba(184, 141, 69, 0.34);
          border-radius: 999px;
          color: #9C7435;
          content: '✓';
          display: inline-flex;
          font-size: 9px;
          height: 17px;
          justify-content: center;
          width: 17px;
        }

        #student-returns-section .student-returns-price strong {
          color: #1F1A14;
          font-weight: 800;
        }

        #student-returns-section .student-returns-trust {
          color: #6F675E;
          font-size: 11.5px;
          font-weight: 600;
          line-height: 1.4;
          padding-left: 30px;
        }

        #student-returns-section .student-returns-track {
          animation: studentReturnsSlideLeft 42s linear infinite;
          display: flex;
          gap: 18px;
          transform: translate3d(0, 0, 0);
          width: max-content;
          will-change: transform;
        }

        #student-returns-section .student-returns-marquee:hover .student-returns-track {
          animation-play-state: paused;
        }

        #student-returns-section .student-return-card {
          background: rgba(255, 252, 246, 0.07);
          border: 1px solid rgba(228, 202, 136, 0.2);
          border-radius: 14px;
          box-shadow: 0 26px 58px rgba(0, 0, 0, 0.22);
          flex: 0 0 auto;
          margin: 0;
          overflow: hidden;
          padding: 8px;
          scroll-snap-align: start;
        }

        #student-returns-section .student-return-image {
          border-radius: 10px;
          display: block;
          height: 560px;
          object-fit: cover;
          user-select: none;
          width: auto;
        }

        @keyframes studentReturnsSlideLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #student-returns-section .student-returns-track {
            animation: none;
          }
        }

        @media (max-width: 767px) {
          #student-returns-section {
            padding: 58px 0 66px;
          }

          #student-returns-section .student-returns-copy {
            padding: 0 24px 32px;
          }

          #student-returns-section .student-returns-title {
            font-size: 31px;
          }

          #student-returns-section .student-returns-subtitle {
            font-size: 15px;
          }

          #student-returns-section .student-returns-marquee {
            scroll-padding-left: 24px;
            scroll-snap-type: x proximity;
          }

          #student-returns-section .student-returns-track {
            animation: none;
            gap: 12px;
            padding: 0 24px 2px;
          }

          #student-returns-section .student-return-card {
            border-radius: 12px;
            padding: 6px;
          }

          #student-returns-section .student-return-image {
            height: 430px;
          }

          #student-returns-section .student-returns-actions {
            align-items: stretch;
            margin-top: 28px;
          }

          #student-returns-section .student-returns-cta {
            min-width: 0;
            width: 100%;
          }

          #student-returns-section .student-returns-price {
            align-items: flex-start;
            flex-wrap: wrap;
            font-size: 13px;
          }
        }
      `}</style>

      <div className="student-returns-copy">
        <span className="student-returns-kicker">
          Elas aplicaram no atendimento
        </span>
        <h2 className="student-returns-title">
          Antes levava quase 3 horas. Agora elas voltam contando outro tempo.
        </h2>
      </div>

      <div className="student-returns-marquee" aria-label="Conversas de alunas">
        <div className="student-returns-track">
          {loopedReturns.map((item, index) => (
            <figure className="student-return-card" key={`${item.src}-${index}`}>
              <img
                className="student-return-image"
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="student-returns-actions">
        <a
          className="student-returns-cta"
          href="#offer-checkout-card"
          onClick={handleStudentReturnsCtaClick}
        >
          <span className="student-returns-cta-label">Inscreva-se agora</span>
          <span className="student-returns-cta-arrow" aria-hidden="true">
            →
          </span>
        </a>
        <span className="student-returns-price">
          5x de R$ 10,41 ou <strong>R$ 47,00 à vista</strong>
        </span>
        <span className="student-returns-trust">
          Acesso imediato e 100% seguro
        </span>
      </div>
    </section>
  )
}
