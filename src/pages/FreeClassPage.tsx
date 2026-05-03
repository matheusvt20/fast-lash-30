import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'

import { trackMetaEvent } from '../lib/metaEvents'

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/IVUfy9P4ndLBXGq6kq8x4C'

const learningPoints = [
  'Como posicionar seu serviço para atrair clientes que valorizam seu trabalho',
  'Como parar de depender de mensagens aleatórias e começar a conduzir melhor suas vendas',
  'Como criar uma oferta mais clara para transformar interesse em agendamento',
  'Como usar anúncios, conteúdo e WhatsApp para atrair clientes mais qualificadas',
]

const audiencePoints = [
  'Você é Lash Designer e quer vender mais sem depender só de indicação',
  'Você recebe mensagens de interessadas, mas muitas somem antes de agendar',
  'Você sente que posta, divulga e mesmo assim a agenda continua instável',
  'Você quer atrair clientes que valorizam seu serviço e não perguntam só preço',
  'Você quer entender como transformar divulgação em agendamentos reais',
]

export default function FreeClassPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    if (!isFormOpen) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsFormOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isFormOpen])

  function openLeadForm() {
    setIsFormOpen(true)
  }

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    trackMetaEvent('LeadAulaGratuita', {
      customData: {
        content_name: 'Aula Gratuita Lash Designer',
        destination: 'Grupo WhatsApp',
        form_name: 'Captacao Aula Gratuita',
      },
      pixelMethod: 'trackCustom',
    })

    window.location.href = WHATSAPP_GROUP_URL
  }

  return (
    <main id="free-class-page">
      <style>{`
        #free-class-page {
          background: #FAF8F5;
          color: #1A1A18;
          min-height: 100vh;
        }

        #free-class-page .free-class-shell {
          box-sizing: border-box;
          padding: 60px 80px 72px;
        }

        #free-class-page .free-class-hero {
          align-items: center;
          display: flex;
          flex-direction: row;
          gap: 60px;
          min-height: calc(100vh - 60px);
        }

        #free-class-page .free-class-copy {
          flex: 1.1;
        }

        #free-class-page .free-class-badge,
        #free-class-page .free-class-pill,
        #free-class-page .free-class-card-kicker {
          align-items: center;
          border-radius: 999px;
          display: inline-flex;
          line-height: 1;
          white-space: nowrap;
        }

        #free-class-page .free-class-badge {
          background: #F0EAE0;
          color: #7A6440;
          font-size: 13px;
          gap: 6px;
          padding: 6px 16px;
        }

        #free-class-page .free-class-badge-dot {
          font-size: 16px;
          line-height: 1;
        }

        #free-class-page .free-class-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 54px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 1.1;
          margin: 20px 0 0;
          max-width: 640px;
        }

        #free-class-page .free-class-subtitle {
          color: #7A7870;
          font-size: 16px;
          line-height: 1.7;
          margin: 16px 0 0;
          max-width: 500px;
        }

        #free-class-page .free-class-subtitle-highlight {
          background: linear-gradient(180deg, transparent 58%, rgba(201, 169, 110, 0.26) 58%);
          color: #7A6440;
          font-weight: 600;
        }

        #free-class-page .free-class-actions {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 36px;
        }

        #free-class-page .free-class-button {
          background: linear-gradient(135deg, #C9A96E, #DBBC7B);
          border: none;
          border-radius: 6px;
          color: #151411;
          cursor: pointer;
          display: inline-flex;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          justify-content: center;
          line-height: 1.2;
          min-width: 260px;
          padding: 14px 28px;
          text-align: center;
          transition: transform 120ms ease, box-shadow 120ms ease;
        }

        #free-class-page .free-class-button:hover {
          transform: translateY(-1px);
        }

        #free-class-page .free-class-microcopy {
          color: #7A6440;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
          padding-left: 4px;
        }

        #free-class-page .free-class-support-line {
          align-items: center;
          border-bottom: 1px solid #E5D8C4;
          border-top: 1px solid #E5D8C4;
          color: #77736B;
          display: grid;
          font-size: 14px;
          gap: 14px;
          grid-template-columns: 40px minmax(0, 1fr);
          line-height: 1.5;
          margin-top: 28px;
          max-width: 500px;
          padding: 16px 0;
        }

        #free-class-page .free-class-support-icon {
          align-items: center;
          border: 1px solid #D3B87E;
          border-radius: 999px;
          color: #C9A96E;
          display: inline-flex;
          height: 32px;
          justify-content: center;
          width: 32px;
        }

        #free-class-page .free-class-media {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 12px;
          min-width: 0;
        }

        #free-class-page .free-class-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-start;
          margin-bottom: 0;
        }

        #free-class-page .free-class-pill {
          background: white;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          color: #1A1A18;
          font-size: 13px;
          font-weight: 500;
          gap: 8px;
          padding: 8px 16px;
        }

        #free-class-page .free-class-pill-icon {
          align-items: center;
          border: 1px solid #1A1A18;
          border-radius: 999px;
          display: inline-flex;
          height: 17px;
          justify-content: center;
          width: 17px;
        }

        #free-class-page .free-class-image-frame {
          background: rgba(255, 255, 255, 0.68);
          border: 1px solid #D8C8B3;
          border-radius: 24px;
          box-shadow: 0 18px 40px rgba(78, 58, 33, 0.08);
          overflow: hidden;
          padding: 14px;
          position: relative;
        }

        #free-class-page .free-class-image-wrap {
          background: #11100E;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }

        #free-class-page .free-class-image {
          display: block;
          height: 540px;
          object-fit: contain;
          width: 100%;
        }

        #free-class-page .free-class-image-overlay {
          background: linear-gradient(to top, rgba(16, 14, 12, 0.96), rgba(16, 14, 12, 0.68) 56%, transparent);
          bottom: 0;
          left: 0;
          padding: 86px 24px 28px;
          position: absolute;
          right: 0;
        }

        #free-class-page .free-class-card-kicker {
          background: #D9B76F;
          color: #1A1A18;
          font-size: 11px;
          font-weight: 500;
          padding: 4px 12px;
        }

        #free-class-page .free-class-card-name {
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          line-height: 1;
          margin: 8px 0 0;
        }

        #free-class-page .free-class-card-copy {
          color: #D8B66C;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.45;
          margin-top: 6px;
        }

        #free-class-page .free-class-sections {
          display: grid;
          gap: 34px;
          margin-top: 86px;
        }

        #free-class-page .free-class-section {
          border-top: 1px solid #E5D8C4;
          padding-top: 34px;
        }

        #free-class-page .free-class-section-grid {
          display: grid;
          gap: 28px;
          grid-template-columns: minmax(240px, 0.42fr) minmax(0, 1fr);
        }

        #free-class-page .free-class-section-title {
          font-family: var(--font-display);
          font-size: 36px;
          line-height: 1.16;
        }

        #free-class-page .free-class-list {
          display: grid;
          gap: 14px;
          list-style: none;
        }

        #free-class-page .free-class-list-item {
          align-items: flex-start;
          background: rgba(255, 255, 255, 0.52);
          border: 1px solid rgba(216, 200, 179, 0.74);
          border-radius: 8px;
          color: #4C4942;
          display: grid;
          font-size: 16px;
          gap: 14px;
          grid-template-columns: 32px minmax(0, 1fr);
          line-height: 1.5;
          padding: 18px;
        }

        #free-class-page .free-class-list-number,
        #free-class-page .free-class-check {
          align-items: center;
          background: #EFE7DB;
          border-radius: 999px;
          color: #7A6440;
          display: inline-flex;
          flex: 0 0 auto;
          font-size: 13px;
          font-weight: 700;
          height: 32px;
          justify-content: center;
          width: 32px;
        }

        #free-class-page .free-class-final {
          align-items: center;
          background: #1A1A18;
          border-radius: 8px;
          color: #FFFFFF;
          display: grid;
          gap: 28px;
          grid-template-columns: minmax(0, 1fr) auto;
          margin-top: 52px;
          padding: 34px;
        }

        #free-class-page .free-class-final h2 {
          font-family: var(--font-display);
          font-size: 34px;
          line-height: 1.15;
        }

        #free-class-page .free-class-final p {
          color: rgba(255, 255, 255, 0.68);
          font-size: 16px;
          line-height: 1.6;
          margin-top: 10px;
          max-width: 680px;
        }

        #free-class-page .free-class-modal-backdrop {
          align-items: center;
          background: rgba(26, 26, 24, 0.52);
          display: flex;
          inset: 0;
          justify-content: center;
          padding: 24px;
          position: fixed;
          z-index: 60;
        }

        #free-class-page .free-class-modal {
          background: #FAF8F5;
          border: 1px solid #D8C8B3;
          border-radius: 10px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
          max-width: 480px;
          padding: 30px;
          position: relative;
          width: 100%;
        }

        #free-class-page .free-class-modal-close {
          align-items: center;
          background: #EFE7DB;
          border: 0;
          border-radius: 999px;
          color: #1A1A18;
          cursor: pointer;
          display: inline-flex;
          font-size: 22px;
          height: 36px;
          justify-content: center;
          line-height: 1;
          position: absolute;
          right: 18px;
          top: 18px;
          width: 36px;
        }

        #free-class-page .free-class-modal-title {
          font-family: var(--font-display);
          font-size: 32px;
          line-height: 1.12;
          padding-right: 38px;
        }

        #free-class-page .free-class-modal-copy {
          color: #77736B;
          font-size: 15px;
          line-height: 1.55;
          margin-top: 12px;
        }

        #free-class-page .free-class-form {
          display: grid;
          gap: 14px;
          margin-top: 24px;
        }

        #free-class-page .free-class-field {
          display: grid;
          gap: 8px;
        }

        #free-class-page .free-class-field label {
          color: #4C4942;
          font-size: 14px;
          font-weight: 700;
        }

        #free-class-page .free-class-field input {
          background: #FFFFFF;
          border: 1px solid #D8C8B3;
          border-radius: 7px;
          color: #1A1A18;
          font: inherit;
          font-size: 16px;
          min-height: 52px;
          padding: 0 14px;
          width: 100%;
        }

        #free-class-page .free-class-field input:focus {
          border-color: #C9A96E;
          outline: 2px solid rgba(201, 169, 110, 0.24);
        }

        #free-class-page .free-class-form .free-class-button {
          margin-top: 8px;
          min-width: 0;
          width: 100%;
        }

        @media (max-width: 1024px) {
          #free-class-page .free-class-shell {
            padding: 56px 28px 56px;
          }

          #free-class-page .free-class-hero {
            align-items: stretch;
            flex-direction: column;
            gap: 42px;
            min-height: auto;
          }

          #free-class-page .free-class-title {
            font-size: 48px;
          }

          #free-class-page .free-class-media {
            max-width: 680px;
          }

          #free-class-page .free-class-image {
            height: auto;
          }
        }

        @media (max-width: 767px) {
          #free-class-page .free-class-shell {
            padding: 32px 24px 44px;
          }

          #free-class-page .free-class-hero {
            display: grid;
            gap: 0;
          }

          #free-class-page .free-class-copy {
            display: contents;
          }

          #free-class-page .free-class-badge,
          #free-class-page .free-class-title,
          #free-class-page .free-class-subtitle {
            order: 1;
          }

          #free-class-page .free-class-actions {
            order: 2;
          }

          #free-class-page .free-class-support-line {
            order: 4;
          }

          #free-class-page .free-class-media {
            margin-top: 28px;
            order: 3;
          }

          #free-class-page .free-class-badge {
            justify-self: start;
            max-width: 100%;
          }

          #free-class-page .free-class-title {
            font-size: 27px;
            line-height: 1.12;
            margin-top: 22px;
            max-width: 620px;
          }

          #free-class-page .free-class-subtitle {
            font-size: 15px;
            line-height: 1.58;
            margin-top: 18px;
          }

          #free-class-page .free-class-actions {
            margin-top: 24px;
          }

          #free-class-page .free-class-button {
            min-width: 0;
            width: 100%;
          }

          #free-class-page .free-class-support-line {
            font-size: 15px;
            margin-top: 18px;
            padding: 14px 0;
          }

          #free-class-page .free-class-pills {
            gap: 10px;
            justify-content: flex-start;
          }

          #free-class-page .free-class-pill {
            font-size: 13px;
            padding: 8px 14px;
          }

          #free-class-page .free-class-image-frame {
            border-radius: 22px;
            padding: 8px;
          }

          #free-class-page .free-class-image-wrap {
            border-radius: 17px;
          }

          #free-class-page .free-class-image-overlay {
            padding: 68px 20px 22px;
          }

          #free-class-page .free-class-card-name {
            font-size: 26px;
          }

          #free-class-page .free-class-card-copy {
            font-size: 13px;
          }

          #free-class-page .free-class-sections {
            margin-top: 56px;
          }

          #free-class-page .free-class-section-grid,
          #free-class-page .free-class-final {
            grid-template-columns: 1fr;
          }

          #free-class-page .free-class-section-title,
          #free-class-page .free-class-final h2 {
            font-size: 30px;
          }

          #free-class-page .free-class-final {
            padding: 24px;
          }

          #free-class-page .free-class-modal {
            padding: 26px 20px 22px;
          }
        }
      `}</style>

      <div className="free-class-shell">
        <section className="free-class-hero" aria-labelledby="free-class-title">
          <div className="free-class-copy">
            <div className="free-class-badge">
              <span className="free-class-badge-dot" aria-hidden="true">
                •
              </span>
              <span>Para lash designers</span>
            </div>

            <h1 className="free-class-title" id="free-class-title">
              Aprenda como vender mais como Lash Designer e atrair clientes
              prontas para agendar.
            </h1>
            <p className="free-class-subtitle">
              Entre no grupo de espera da{' '}
              <span className="free-class-subtitle-highlight">
                aula ao vivo gratuita
              </span>{' '}
              e descubra como sair das conversas que não viram atendimento,
              posicionar melhor seu serviço e transformar interesse em clientes
              reais.
            </p>

            <div className="free-class-actions">
              <button
                className="free-class-button"
                type="button"
                onClick={openLeadForm}
              >
                Entrar no grupo gratuito
              </button>
              <span className="free-class-microcopy">
                Aula 100% online e gratuita
              </span>
            </div>

            <div className="free-class-support-line">
              <span className="free-class-support-icon" aria-hidden="true">
                ✦
              </span>
              <span>
                Aula prática para quem quer vender com mais clareza, atrair
                clientes qualificadas e preencher melhor a agenda.
              </span>
            </div>
          </div>

          <div className="free-class-media">
            <div className="free-class-pills" aria-label="Informações da aula">
              <span className="free-class-pill">
                <span className="free-class-pill-icon" aria-hidden="true">
                  ›
                </span>
                Aula gratuita
              </span>
              <span className="free-class-pill">
                <span className="free-class-pill-icon" aria-hidden="true">
                  ◌
                </span>
                Clientes qualificadas
              </span>
            </div>

            <div className="free-class-image-frame">
              <div className="free-class-image-wrap">
                <img
                  className="free-class-image"
                  src="/images/vitor-aula-gratuita-optimized.jpg"
                  alt="Vitor sentado em uma escada com quadros de premiação"
                  width="960"
                  height="960"
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                />
                <div className="free-class-image-overlay">
                  <span className="free-class-card-kicker">
                    Apresentado por
                  </span>
                  <h2 className="free-class-card-name">Vitor</h2>
                  <p className="free-class-card-copy">
                    Estratégia, vendas e posicionamento para Lash Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="free-class-sections">
          <section className="free-class-section">
            <div className="free-class-section-grid">
              <h2 className="free-class-section-title">
                O que você vai aprender na aula
              </h2>
              <ul className="free-class-list">
                {learningPoints.map((point, index) => (
                  <li className="free-class-list-item" key={point}>
                    <span className="free-class-list-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="free-class-section">
            <div className="free-class-section-grid">
              <h2 className="free-class-section-title">
                Essa aula é para você se...
              </h2>
              <ul className="free-class-list">
                {audiencePoints.map((point) => (
                  <li className="free-class-list-item" key={point}>
                    <span className="free-class-check" aria-hidden="true">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <section className="free-class-final">
          <div>
            <h2>Entre no grupo gratuito e receba a aula</h2>
            <p>
              Vou te mostrar como vender melhor seu serviço como Lash Designer,
              atrair clientes mais qualificadas e transformar interesse em
              atendimentos reais.
            </p>
          </div>
          <button className="free-class-button" type="button" onClick={openLeadForm}>
            Entrar no grupo gratuito
          </button>
        </section>

        {isFormOpen ? (
          <div
            className="free-class-modal-backdrop"
            role="presentation"
            onMouseDown={() => setIsFormOpen(false)}
          >
            <div
              aria-labelledby="free-class-form-title"
              aria-modal="true"
              className="free-class-modal"
              role="dialog"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                aria-label="Fechar formulário"
                className="free-class-modal-close"
                type="button"
                onClick={() => setIsFormOpen(false)}
              >
                ×
              </button>
              <h2 className="free-class-modal-title" id="free-class-form-title">
                Entre no grupo gratuito
              </h2>
              <p className="free-class-modal-copy">
                Preencha seus dados para receber os avisos da aula pelo
                WhatsApp.
              </p>

              <form className="free-class-form" onSubmit={handleLeadSubmit}>
                <div className="free-class-field">
                  <label htmlFor="lead-name">Nome</label>
                  <input
                    autoComplete="name"
                    id="lead-name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    type="text"
                  />
                </div>

                <div className="free-class-field">
                  <label htmlFor="lead-whatsapp">Telefone WhatsApp</label>
                  <input
                    autoComplete="tel"
                    id="lead-whatsapp"
                    inputMode="tel"
                    name="whatsapp"
                    pattern="^\\+?[0-9\\s()\\-]{10,}$"
                    placeholder="(00) 00000-0000"
                    required
                    type="tel"
                  />
                </div>

                <button className="free-class-button" type="submit">
                  Receber acesso gratuito
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  )
}
