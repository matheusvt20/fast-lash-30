const bullets = [
  'Aplicação mais rápida, organizada e previsível',
  'Menos tempo perdido entre uma etapa e outra',
  'Mais clientes por dia sem perder qualidade no resultado',
]

export default function SpeedMethodSection() {
  return (
    <section id="speed-method-section">
      <style>{`
        #speed-method-section {
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)),
            #FAF7F0;
          color: #1B1814;
          overflow: hidden;
          padding: 86px 88px;
          position: relative;
        }

        #speed-method-section::before {
          background: radial-gradient(circle, rgba(207, 170, 96, 0.14), transparent 70%);
          content: '';
          height: 360px;
          left: 8%;
          pointer-events: none;
          position: absolute;
          top: 16%;
          width: 360px;
        }

        #speed-method-section .speed-shell {
          align-items: center;
          display: grid;
          gap: 76px;
          grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1fr);
          margin: 0 auto;
          max-width: 1180px;
          position: relative;
          z-index: 1;
        }

        #speed-method-section .speed-badge {
          align-items: center;
          background: rgba(255, 252, 246, 0.66);
          border: 1px solid rgba(180, 139, 67, 0.24);
          border-radius: 999px;
          box-shadow: 0 10px 24px rgba(61, 43, 21, 0.04);
          color: #6F572E;
          display: inline-flex;
          font-size: 12px;
          font-weight: 700;
          gap: 8px;
          letter-spacing: 0.07em;
          padding: 8px 16px;
          text-transform: uppercase;
        }

        #speed-method-section .speed-title {
          color: #1B1814;
          font-family: var(--font-display);
          font-size: clamp(34px, 4.4vw, 50px);
          font-weight: 600;
          line-height: 1.14;
          margin-top: 24px;
          max-width: 660px;
        }

        #speed-method-section .speed-title em {
          color: #9A7435;
          font-style: italic;
          font-weight: 500;
        }

        #speed-method-section .speed-copy {
          border-left: 1px solid rgba(180, 139, 67, 0.34);
          color: #625B52;
          font-size: 15.5px;
          line-height: 1.82;
          margin-top: 24px;
          max-width: 620px;
          padding-left: 18px;
        }

        #speed-method-section .speed-list {
          display: grid;
          gap: 12px;
          margin-top: 30px;
        }

        #speed-method-section .speed-item {
          align-items: flex-start;
          background: rgba(255, 252, 246, 0.74);
          border: 1px solid rgba(180, 139, 67, 0.2);
          border-radius: 14px;
          box-shadow: 0 16px 38px rgba(44, 31, 17, 0.055);
          color: #2A251F;
          display: flex;
          font-size: 14px;
          gap: 12px;
          line-height: 1.55;
          padding: 15px 16px;
        }

        #speed-method-section .speed-check {
          align-items: center;
          background: rgba(180, 139, 67, 0.1);
          border: 1px solid rgba(180, 139, 67, 0.18);
          border-radius: 999px;
          color: #9A7435;
          display: inline-flex;
          flex: 0 0 auto;
          font-size: 10px;
          height: 20px;
          justify-content: center;
          margin-top: 1px;
          width: 20px;
        }

        #speed-method-section .speed-media {
          position: relative;
        }

        #speed-method-section .speed-media::before {
          background: radial-gradient(circle, rgba(207, 170, 96, 0.16), transparent 70%);
          content: '';
          height: 360px;
          pointer-events: none;
          position: absolute;
          right: -68px;
          top: -64px;
          width: 360px;
          z-index: -1;
        }

        #speed-method-section .speed-frame {
          background: #151311;
          border: 1px solid rgba(198, 158, 82, 0.42);
          border-radius: 30px;
          box-shadow: 0 26px 64px rgba(44, 31, 17, 0.12), 0 0 0 7px rgba(255, 250, 240, 0.38);
          overflow: hidden;
          padding: 10px;
        }

        #speed-method-section .speed-image {
          aspect-ratio: 4 / 3;
          border-radius: 24px;
          display: block;
          height: 100%;
          object-fit: cover;
          object-position: center;
          width: 100%;
        }

        #speed-method-section .speed-caption {
          align-items: center;
          background: rgba(255, 252, 246, 0.82);
          border: 1px solid rgba(180, 139, 67, 0.24);
          border-radius: 999px;
          bottom: 24px;
          box-shadow: 0 16px 34px rgba(30, 21, 11, 0.12);
          color: #2A251F;
          display: inline-flex;
          font-size: 12px;
          font-weight: 700;
          gap: 8px;
          left: 24px;
          letter-spacing: 0.04em;
          padding: 11px 16px;
          position: absolute;
          text-transform: uppercase;
        }

        #speed-method-section .speed-caption span {
          color: #9A7435;
        }

        @media (max-width: 900px) {
          #speed-method-section {
            padding: 64px 24px;
          }

          #speed-method-section .speed-shell {
            gap: 34px;
            grid-template-columns: 1fr;
          }

          #speed-method-section .speed-title {
            font-size: 34px;
          }

          #speed-method-section .speed-copy {
            font-size: 15px;
          }
        }

        @media (max-width: 520px) {
          #speed-method-section .speed-frame {
            border-radius: 24px;
            padding: 8px;
          }

          #speed-method-section .speed-image {
            border-radius: 18px;
          }

          #speed-method-section .speed-caption {
            bottom: 18px;
            font-size: 10px;
            left: 18px;
            padding: 9px 12px;
          }
        }
      `}</style>

      <div className="speed-shell">
        <div className="speed-copy-block">
          <div className="speed-badge">
            <span aria-hidden="true">✦</span>
            Método com controle de tempo
          </div>

          <h2 className="speed-title">
            O que antes levava horas, agora vira um atendimento completo em{' '}
            <em>até 1 hora.</em>
          </h2>

          <p className="speed-copy">
            O método organiza cada etapa da aplicação para cortar movimentos
            inúteis, encurtar pausas e manter o mesmo padrão de acabamento fio a
            fio, do começo ao fim. Não é correria: é sequência, técnica e
            controle de tempo para você atender mais, se cansar menos e manter a
            qualidade em cada cliente.
          </p>

          <div className="speed-list">
            {bullets.map((bullet) => (
              <div className="speed-item" key={bullet}>
                <span className="speed-check" aria-hidden="true">
                  ✓
                </span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="speed-media">
          <div className="speed-frame">
            <img
              className="speed-image"
              src="/images/monique-cliente.webp"
              alt="Cliente com cílios finalizados ao lado de cronômetro marcando 52 minutos"
              width={1448}
              height={1086}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="speed-caption">
            <span>52:48</span> resultado em tempo real
          </div>
        </div>
      </div>
    </section>
  )
}
