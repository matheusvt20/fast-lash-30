const methodSteps = [
  {
    number: '01',
    title: 'Diagnóstico da sua agenda',
    description:
      'Entenda exatamente onde estão os vazios e por que os clientes não estão chegando.',
    tag: 'Organização',
  },
  {
    number: '02',
    title: 'Posicionamento que atrai o cliente certo',
    description:
      'Defina sua identidade no mercado e pare de competir por preço.',
    tag: 'Posicionamento',
  },
  {
    number: '03',
    title: 'Copy que gera agendamento no Instagram',
    description:
      'Escreva posts, stories e bio que fazem as pessoas pedirem horário.',
    tag: 'Copy',
  },
  {
    number: '04',
    title: 'Tráfego pago para lash designer',
    description:
      'Crie anúncios simples no Meta que tragam clientes toda semana sem gastar muito.',
    tag: 'Tráfego pago',
  },
  {
    number: '05',
    title: 'WhatsApp que fecha horários',
    description:
      'Transforme conversas no WhatsApp em agendamentos confirmados sem enrolação.',
    tag: 'Vendas',
  },
  {
    number: '06',
    title: 'Precificação e percepção de valor',
    description:
      'Saiba quanto cobrar e como fazer o cliente pagar sem objeção.',
    tag: 'Vendas',
  },
  {
    number: '07',
    title: 'Inteligência artificial no seu negócio',
    description:
      'Use IA para criar conteúdo, responder clientes e organizar sua rotina em minutos.',
    tag: 'Inteligência artificial',
  },
  {
    number: '08',
    title: 'Plano de ação semana a semana',
    description:
      'Um roteiro prático pra você sair do curso e já aplicar na segunda-feira.',
    tag: 'Organização',
  },
]

export default function MethodSection() {
  return (
    <section id="method-section">
      <style>{`
        #method-section {
          background: #F5F0E8;
          box-sizing: border-box;
          color: #0D0D0D;
          padding: 80px 48px;
        }

        #method-section .method-shell {
          margin: 0 auto;
          max-width: 1080px;
        }

        #method-section .method-badge {
          border: 1px solid #C9944A;
          border-radius: 999px;
          color: #C9944A;
          display: inline-block;
          font-size: 12px;
          line-height: 1;
          margin-bottom: 16px;
          padding: 5px 14px;
        }

        #method-section .method-title {
          color: #0D0D0D;
          font-family: var(--font-display), Georgia, serif;
          font-size: 42px;
          font-weight: 500;
          line-height: 1.18;
          margin: 0;
        }

        #method-section .method-title-accent {
          color: #C9944A;
        }

        #method-section .method-subtitle {
          color: #888888;
          font-family: Inter, var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          margin: 10px 0 56px;
        }

        #method-section .method-timeline {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        #method-section .method-timeline::before {
          background: linear-gradient(
            to bottom,
            #C9944A,
            rgba(201, 148, 74, 0.2)
          );
          bottom: 28px;
          content: '';
          left: 27px;
          position: absolute;
          top: 28px;
          width: 2px;
        }

        #method-section .method-step {
          align-items: flex-start;
          display: flex;
          gap: 20px;
          margin-bottom: 28px;
        }

        #method-section .method-step:last-child {
          margin-bottom: 0;
        }

        #method-section .method-step-number {
          align-items: center;
          background: #0D0D0D;
          border: 2px solid #C9944A;
          border-radius: 50%;
          color: #C9944A;
          display: flex;
          flex-shrink: 0;
          font-size: 13px;
          font-weight: 500;
          height: 56px;
          justify-content: center;
          position: relative;
          width: 56px;
          z-index: 1;
        }

        #method-section .method-step-card {
          background: #FFFFFF;
          border: 0.5px solid rgba(201, 148, 74, 0.25);
          border-radius: 12px;
          flex: 1;
          margin-top: 6px;
          padding: 18px 22px;
        }

        #method-section .method-step-title {
          color: #0D0D0D;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.4;
          margin: 0 0 4px;
        }

        #method-section .method-step-description {
          color: #888888;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
        }

        #method-section .method-step-tag {
          background: rgba(201, 148, 74, 0.12);
          border-radius: 4px;
          color: #A0722A;
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          line-height: 1;
          margin-top: 8px;
          padding: 3px 8px;
        }

        @media (max-width: 767px) {
          #method-section {
            padding: 48px 20px;
          }

          #method-section .method-title {
            font-size: 30px;
          }

          #method-section .method-subtitle {
            margin-bottom: 40px;
          }

          #method-section .method-step {
            gap: 14px;
          }

          #method-section .method-step-card {
            padding: 16px 18px;
          }
        }
      `}</style>

      <div className="method-shell">
        <div className="method-badge">• O método</div>
        <h2 className="method-title">
          Do zero à{' '}
          <span className="method-title-accent">agenda cheia</span> — passo a
          passo
        </h2>
        <p className="method-subtitle">
          8 etapas práticas que transformam sua presença digital em uma máquina
          de agendamentos.
        </p>

        <div className="method-timeline">
          {methodSteps.map((step) => (
            <article className="method-step" key={step.number}>
              <div className="method-step-number">{step.number}</div>
              <div className="method-step-card">
                <h3 className="method-step-title">{step.title}</h3>
                <p className="method-step-description">{step.description}</p>
                <span className="method-step-tag">{step.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
