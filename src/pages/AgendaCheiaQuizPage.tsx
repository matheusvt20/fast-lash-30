import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'

import './AgendaCheiaQuizPage.css'

const CHECKOUT_URL = 'https://pay.kiwify.com.br/u4b1hcT'

const questions = [
  {
    id: 'experience',
    title: 'Há quanto tempo você trabalha como lash designer?',
    options: [
      'Menos de 6 meses',
      '6 meses a 1 ano',
      '1 a 3 anos',
      'Mais de 3 anos',
    ],
  },
  {
    id: 'source',
    title: 'De onde vem a maioria dos seus clientes hoje?',
    options: [
      'Quase tudo por indicação',
      'Pelo Instagram mas é inconsistente',
      'Já tentei tráfego pago mas não funcionou',
      'Fico sem clientes com frequência',
    ],
  },
  {
    id: 'challenge',
    title: 'Qual é sua maior dificuldade com a agenda?',
    options: [
      'Não sei como divulgar meu trabalho',
      'Fico dependendo que clientes me indiquem',
      'Tenho seguidores mas ninguém agenda',
      'Já tentei de tudo e a agenda continua vazia',
    ],
  },
] as const

const profiles = [
  {
    title: 'A Iniciante Invisível',
    headline: 'Sua agenda está vazia porque ninguém ainda sabe que você existe.',
    happening:
      'No início é assim para quase todas. Você aprendeu a técnica, investiu no curso, comprou o material — mas ninguém te ensinou a conseguir clientes. Indicação demora. Instagram orgânico demora mais ainda. E enquanto você espera, a agenda fica vazia e a dúvida aumenta: será que é para mim?',
    blocker:
      'Não é falta de habilidade. É falta de um sistema para aparecer para as pessoas certas todos os dias — mesmo sem ter seguidores, mesmo sem ter indicação, mesmo sendo nova no mercado.',
  },
  {
    title: 'A Refém da Indicação',
    headline:
      'Sua agenda depende de outras pessoas — e isso é um risco que você não pode ignorar.',
    happening:
      'Indicação é ótima quando chega. O problema é que você não controla quando chega. Um mês a agenda lota, no outro esvazia. Você fica refém do humor, da memória e da generosidade dos outros.',
    blocker:
      'Você provou que é boa — as clientes que têm voltam e indicam. Mas você nunca aprendeu a gerar demanda por conta própria. Nunca teve um sistema que trouxesse clientes novos todo dia, independente de indicação.',
  },
  {
    title: 'A que Posta mas não Converte',
    headline: 'Seu Instagram atrai curiosas. Não clientes.',
    happening:
      'Você posta, recebe curtidas, às vezes elogio nos comentários — mas agendamento quase nunca. Seguidores não pagam boleto. O problema não é o seu trabalho. É que o Instagram orgânico foi feito para engajamento, não para venda.',
    blocker:
      'Conteúdo orgânico constrói autoridade no longo prazo. Mas se você precisa de clientes agora, precisa de tráfego pago — que coloca seu serviço na frente de quem já quer agendar.',
  },
  {
    title: 'A que já Tentou de Tudo',
    headline: 'Você tentou. Mas tentou sem método.',
    happening:
      'Você não é acomodada — já tentou impulsionar post, já tentou anúncio, já tentou stories todo dia. Mas nada funcionou de forma consistente. E isso é frustrante porque você colocou dinheiro e tempo.',
    blocker:
      'Impulsionar post não é tráfego pago de verdade. Anúncio sem estrutura queima dinheiro sem aprender. O que faltou não foi esforço — foi um método testado, com passo a passo claro.',
  },
] as const

type QuestionId = (typeof questions)[number]['id']
type Answers = Partial<Record<QuestionId, number>>

type QuizContextValue = {
  answers: Answers
  setAnswer: (questionId: QuestionId, optionIndex: number) => void
}

const QuizContext = createContext<QuizContextValue | null>(null)

function useQuiz() {
  const value = useContext(QuizContext)

  if (!value) {
    throw new Error('useQuiz must be used inside QuizProvider')
  }

  return value
}

function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Answers>({})

  const value = useMemo(
    () => ({
      answers,
      setAnswer(questionId: QuestionId, optionIndex: number) {
        setAnswers((currentAnswers) => ({
          ...currentAnswers,
          [questionId]: optionIndex,
        }))
      },
    }),
    [answers],
  )

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

function LandingPage() {
  return (
    <main className="agenda-quiz-page agenda-quiz-page--center">
      <section className="agenda-quiz-card agenda-quiz-landing">
        <div className="agenda-quiz-brand" aria-hidden="true" />
        <h1>Descubra o que está travando sua agenda como lash designer</h1>
        <p>
          Responda 3 perguntas e descubra o que está impedindo sua agenda de
          lotar — e o que fazer a partir de hoje.
        </p>
        <Link className="agenda-quiz-primary" to="/quiz">
          Iniciar Diagnóstico →
        </Link>
        <span className="agenda-quiz-microcopy">Leva menos de 1 minuto</span>
      </section>
    </main>
  )
}

function QuizPage() {
  const navigate = useNavigate()
  const { answers, setAnswer } = useQuiz()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const question = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  function handleSelect(optionIndex: number) {
    setSelectedIndex(optionIndex)
    setAnswer(question.id, optionIndex)

    window.setTimeout(() => {
      if (currentIndex === questions.length - 1) {
        navigate('/resultado')
        return
      }

      setCurrentIndex((index) => index + 1)
      setSelectedIndex(null)
    }, 240)
  }

  return (
    <main className="agenda-quiz-page">
      <section className="agenda-quiz-card agenda-quiz-flow">
        <div className="agenda-quiz-progress" aria-label={`${currentIndex + 1}/3`}>
          <span>{currentIndex + 1}/3</span>
          <div>
            <i style={{ width: `${progress}%` }} />
          </div>
        </div>

        <article className="agenda-quiz-question" key={question.id}>
          <h1>{question.title}</h1>
          <div className="agenda-quiz-options">
            {question.options.map((option, optionIndex) => {
              const isSelected =
                selectedIndex === optionIndex ||
                answers[question.id] === optionIndex

              return (
                <button
                  className={isSelected ? 'is-selected' : ''}
                  key={option}
                  onClick={() => handleSelect(optionIndex)}
                  type="button"
                >
                  {option}
                </button>
              )
            })}
          </div>
        </article>
      </section>
    </main>
  )
}

function ResultPage() {
  const { answers } = useQuiz()
  const sourceAnswer = answers.source

  useEffect(() => {
    window.fbq?.('track', 'ViewContent')
  }, [])

  if (sourceAnswer === undefined) {
    return <Navigate replace to="/quiz" />
  }

  const profile = profiles[sourceAnswer]

  function handleCheckoutClick() {
    window.fbq?.('track', 'InitiateCheckout')
  }

  return (
    <main className="agenda-quiz-page agenda-quiz-result-page">
      <section className="agenda-quiz-card agenda-quiz-result">
        <span className="agenda-quiz-tag">DIAGNÓSTICO DA SUA AGENDA</span>
        <h1>{profile.title}</h1>
        <h2>{profile.headline}</h2>
        <p>{profile.happening}</p>
        <p>{profile.blocker}</p>
        <div className="agenda-quiz-divider" />

        <div className="agenda-quiz-transition">
          <p>
            Você acabou de entender o que está travando sua agenda. Agora existe
            um caminho.
          </p>
          <p>
            Foi pensando nisso que criamos um método de 8 passos para lash
            designers lotarem a agenda usando tráfego pago a partir de R$10 por
            dia — sem depender de indicação e sem precisar de milhares de
            seguidores.
          </p>
        </div>

        <div className="agenda-quiz-offer">
          <strong>Agenda Cheia Lash</strong>
          <ul>
            <li>8 passos do zero para lotar sua agenda com tráfego pago</li>
            <li>Como atrair clientes que já querem agendar agora</li>
            <li>Funciona gastando a partir de R$10 por dia</li>
          </ul>
          <span className="agenda-quiz-price">R$30,00</span>
          <a
            className="agenda-quiz-primary"
            href={CHECKOUT_URL}
            onClick={handleCheckoutClick}
          >
            Quero o Método Agora →
          </a>
          <span className="agenda-quiz-secure">
            Acesso imediato • Pagamento seguro
          </span>
        </div>
      </section>
    </main>
  )
}

export default function AgendaCheiaQuizPage() {
  return (
    <QuizProvider>
      <BrowserRouter basename="/agenda-cheia-quiz">
        <Routes>
          <Route element={<LandingPage />} index />
          <Route element={<QuizPage />} path="quiz" />
          <Route element={<ResultPage />} path="resultado" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  )
}
