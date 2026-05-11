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
    happening: 'Ninguém sabe que você existe ainda',
    blocker: 'Falta um sistema para aparecer todo dia',
  },
  {
    title: 'A Refém da Indicação',
    headline:
      'Sua agenda depende de outras pessoas — e isso é um risco que você não pode ignorar.',
    happening: 'Sua agenda depende da indicação chegar',
    blocker: 'Falta gerar clientes novas por conta própria',
  },
  {
    title: 'A que Posta mas não Converte',
    headline: 'Seu Instagram atrai curiosas. Não clientes.',
    happening: 'Seu conteúdo atrai atenção, mas não agenda',
    blocker: 'Falta tráfego para alcançar quem quer agendar',
  },
  {
    title: 'A que já Tentou de Tudo',
    headline: 'Você tentou. Mas tentou sem método.',
    happening: 'Você já tentou, mas nada ficou consistente',
    blocker: 'Falta método para anunciar sem queimar dinheiro',
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
  const [remainingSeconds, setRemainingSeconds] = useState(15 * 60)

  useEffect(() => {
    window.fbq?.('track', 'ViewContent')
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemainingSeconds((seconds) => Math.max(0, seconds - 1))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  if (sourceAnswer === undefined) {
    return <Navigate replace to="/quiz" />
  }

  const profile = profiles[sourceAnswer]
  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = remainingSeconds % 60
  const countdown = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  function handleCheckoutClick() {
    window.fbq?.('track', 'InitiateCheckout')
  }

  return (
    <main className="agenda-quiz-page agenda-quiz-result-page">
      <section className="agenda-quiz-card agenda-quiz-result">
        <span className="agenda-quiz-tag">DIAGNÓSTICO DA SUA AGENDA</span>
        <h1>{profile.title}</h1>
        <h2>{profile.headline}</h2>
        <div className="agenda-quiz-diagnosis-grid">
          <article className="agenda-quiz-diagnosis-card">
            <span aria-hidden="true">❌</span>
            <small>O que está acontecendo</small>
            <strong>{profile.happening}</strong>
          </article>
          <article className="agenda-quiz-diagnosis-card">
            <span aria-hidden="true">⚠️</span>
            <small>O que está travando</small>
            <strong>{profile.blocker}</strong>
          </article>
        </div>
        <div className="agenda-quiz-divider" />

        <div className="agenda-quiz-transition">
          <p>
            Foi pensando nisso que criamos um método de 8 passos para lash
            designers lotarem a agenda — sem depender de indicação e sem
            precisar ser famosa no Instagram.
          </p>
        </div>

        <div className="agenda-quiz-product-card">
          <span aria-hidden="true">🎯</span>
          <strong>Agenda Cheia Lash</strong>
          <small>Método completo em 8 passos</small>
          <ul>
            <li>Acesso imediato após a compra</li>
            <li>Suporte incluso</li>
            <li>Garantia de 7 dias</li>
          </ul>
        </div>

        <div className="agenda-quiz-offer">
          <strong>Agenda Cheia Lash</strong>
          <ul>
            <li>Do básico ao avançado: como criar e rodar tráfego pago do zero</li>
            <li>
              Como vender pelo Instagram — stories, posicionamento e conteúdo
              que converte
            </li>
            <li>Como criar imagens de alto impacto usando IA gratuitamente</li>
            <li>E muito mais...</li>
          </ul>
          <div className="agenda-quiz-price-stack">
            <span className="agenda-quiz-old-price">De R$30,00</span>
            <span className="agenda-quiz-price">R$14,00</span>
            <span className="agenda-quiz-price-note">Oferta por tempo limitado</span>
          </div>
          <div className="agenda-quiz-countdown-wrap">
            <span>⚠️ Esta oferta expira em:</span>
            <strong>{countdown}</strong>
          </div>
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
