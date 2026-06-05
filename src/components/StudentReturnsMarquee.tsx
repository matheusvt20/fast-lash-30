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
          overflow: hidden;
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
        }

        #student-returns-section .student-return-image {
          border-radius: 10px;
          display: block;
          height: 560px;
          object-fit: cover;
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

          #student-returns-section .student-returns-track {
            animation-duration: 58s;
            gap: 12px;
          }

          #student-returns-section .student-return-card {
            border-radius: 12px;
            padding: 6px;
          }

          #student-returns-section .student-return-image {
            height: 430px;
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
        <p className="student-returns-subtitle">
          Alunas que colocaram a sequência em prática e sentiram diferença no
          ritmo, no cansaço e na segurança durante cada atendimento.
        </p>
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
    </section>
  )
}
