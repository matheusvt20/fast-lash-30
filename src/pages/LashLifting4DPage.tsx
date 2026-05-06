import { useEffect, useState } from 'react'

import { trackMetaEvent } from '../lib/metaEvents'

const KIWIFY_URL =
  import.meta.env.VITE_KIWIFY_LASH_LIFTING_4D_URL ||
  'https://pay.kiwify.com.br/MAZ2OZr'

const PROMO_SECONDS = 15 * 60
const OFFER_PRICE = 69
const RESULT_VIDEO_URL =
  'https://player-vz-db0cd809-911.tv.pandavideo.com.br/embed/?v=c4d11f20-25e4-4a27-a1d9-9bf86b929f3e'

const screenFlow = [
  'intro',
  'q4',
  'q5',
  'q6',
  'loading',
  'result',
] as const

type ScreenId = (typeof screenFlow)[number]
type QuestionId = Extract<ScreenId, 'q4' | 'q5' | 'q6'>
type AnswerKey = 'A' | 'B' | 'C' | 'D'
type Answers = Partial<Record<QuestionId, AnswerKey>>

type Question = {
  id: QuestionId
  progress: number
  title: string
  options: Array<{
    key: AnswerKey
    text: string
  }>
}

const questions: Record<QuestionId, Question> = {
  q4: {
    id: 'q4',
    progress: 33,
    title: 'O que mais te impede de oferecer Lash Lifting hoje?',
    options: [
      { key: 'A', text: 'Medo de errar na aplicação' },
      { key: 'B', text: 'Não sei escolher os moldes certos' },
      { key: 'C', text: 'Não sei quais materiais usar' },
      { key: 'D', text: 'Não sei quanto cobrar nem como vender' },
    ],
  },
  q5: {
    id: 'q5',
    progress: 66,
    title: 'Qual parte você sente que mais precisaria aprender com clareza?',
    options: [
      { key: 'A', text: 'Como identificar o tipo de fio' },
      { key: 'B', text: 'Como escolher e aplicar os moldes' },
      { key: 'C', text: 'Como aplicar o produto com segurança' },
      { key: 'D', text: 'Como cobrar e conseguir as primeiras clientes' },
    ],
  },
  q6: {
    id: 'q6',
    progress: 98,
    title: 'Você se sentiria mais segura com práticas em diferentes tipos de cílios?',
    options: [
      { key: 'A', text: 'Sim, principalmente cílios curtos e espessos' },
      { key: 'B', text: 'Sim, principalmente cílios longos' },
      { key: 'C', text: 'Sim, principalmente cílios claros' },
      { key: 'D', text: 'Sim, preciso praticar nos três tipos' },
    ],
  },
}

const offerBenefits = [
  'Como identificar o tipo de cílio e nunca mais errar no molde',
  'Prática real em cílios curtos, longos e claros',
  'Aplicação segura com durabilidade de 4 a 8 semanas',
  'Como cobrar, apresentar e conseguir as primeiras clientes',
  'Como divulgar e montar oferta no WhatsApp e Instagram',
]

const resultCopy: Record<AnswerKey, string> = {
  A: 'Seu principal bloqueio é o medo de errar. O Método 4D foi estruturado exatamente para isso: cada etapa é ensinada com clareza e práticas reais, para que você nunca fique em dúvida na mesa de atendimento.',
  B: 'Sua maior dúvida é sobre os moldes — e essa é a decisão mais crítica do lifting. O Método 4D tem módulo dedicado ao diagnóstico do fio e escolha de molde para cílios curtos, longos e claros.',
  C: 'Você ainda não tem clareza sobre os materiais. O Método 4D ensina o kit completo, o que cada produto faz e como usar corretamente para um resultado seguro e duradouro.',
  D: 'Você quer aprender a técnica e também conseguir clientes. O Método 4D inclui módulo de precificação, como apresentar o serviço e como atrair clientes no Instagram e WhatsApp.',
}

const loadingCopy = [
  'Identificando seu maior potencial...',
  'Analisando suas respostas...',
  'Preparando seu diagnóstico...',
  'Seu resultado está pronto',
]

const loadingIndex = screenFlow.indexOf('loading')
const resultIndex = screenFlow.indexOf('result')

export default function LashLifting4DPage() {
  const [screenIndex, setScreenIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [loadingCopyIndex, setLoadingCopyIndex] = useState(0)
  const [promoSecondsLeft, setPromoSecondsLeft] = useState(PROMO_SECONDS)
  const [pendingSelection, setPendingSelection] = useState<{
    answerKey: AnswerKey
    questionId: QuestionId
  } | null>(null)

  const screen = screenFlow[screenIndex]
  const progress = screen in questions ? questions[screen as QuestionId].progress : 0
  const resultParagraph = resultCopy[answers.q4 || 'A']
  const shouldShowBackButton = screenIndex > 0
  const isResultScreen = screen === 'result'
  const isPromoExpired = promoSecondsLeft <= 0
  const promoMinutes = Math.floor(promoSecondsLeft / 60)
  const promoSeconds = promoSecondsLeft % 60

  useEffect(() => {
    document.body.classList.add('lash-lifting-4d-active')
    const previousTitle = document.title
    document.title = 'Diagnóstico Lash Lifting 4D'

    trackMetaEvent('ViewContent', {
      customData: {
        content_name: 'Método Lash Lifting 4D',
        currency: 'BRL',
        value: OFFER_PRICE,
      },
    })

    return () => {
      document.body.classList.remove('lash-lifting-4d-active')
      document.title = previousTitle
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [screenIndex])

  useEffect(() => {
    if (screen !== 'loading') {
      return
    }

    let resultTimeoutId: number | undefined

    const intervalId = window.setInterval(() => {
      setLoadingCopyIndex((currentIndex) => {
        if (currentIndex >= loadingCopy.length - 1) {
          return currentIndex
        }

        const nextIndex = currentIndex + 1

        if (nextIndex === loadingCopy.length - 1) {
          window.clearInterval(intervalId)
          resultTimeoutId = window.setTimeout(() => {
            setScreenIndex((currentScreenIndex) =>
              currentScreenIndex === loadingIndex ? resultIndex : currentScreenIndex,
            )
          }, 400)
        }

        return nextIndex
      })
    }, 700)

    return () => {
      window.clearInterval(intervalId)

      if (resultTimeoutId) {
        window.clearTimeout(resultTimeoutId)
      }
    }
  }, [screen])

  useEffect(() => {
    if (screen !== 'result' || promoSecondsLeft <= 0) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setPromoSecondsLeft((currentSeconds) => Math.max(currentSeconds - 1, 0))
    }, 1000)

    return () => window.clearTimeout(timeoutId)
  }, [promoSecondsLeft, screen])

  function goNext() {
    setPendingSelection(null)
    setScreenIndex((currentIndex) =>
      Math.min(currentIndex + 1, screenFlow.length - 1),
    )
  }

  function goBack() {
    setPendingSelection(null)
    setScreenIndex((currentIndex) => {
      if (screenFlow[currentIndex] === 'loading' || screenFlow[currentIndex] === 'result') {
        return screenFlow.indexOf('q6')
      }

      return Math.max(currentIndex - 1, 0)
    })
  }

  function selectAnswer(questionId: QuestionId, answerKey: AnswerKey) {
    setPendingSelection({ answerKey, questionId })
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: answerKey,
    }))

    window.setTimeout(goNext, 500)
  }

  function handleCheckoutClick() {
    trackMetaEvent('InitiateCheckout', {
      customData: {
        content_name: 'Método Lash Lifting 4D',
        currency: 'BRL',
        value: OFFER_PRICE,
      },
    })
  }

  return (
    <main id="lash-lifting-4d-page" className="ll4d-page">
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

body.lash-lifting-4d-active {
  background: #00053D;
  overflow: hidden;
}

body.lash-lifting-4d-active #social-proof-toast {
  display: none !important;
}

#lash-lifting-4d-page {
  --ll4d-bg: #00053D;
  --ll4d-surface: #00083A;
  --ll4d-surface-strong: #020B4A;
  --ll4d-accent: #FF6B9D;
  --ll4d-accent-2: #FFD166;
  --ll4d-text: #F0F4FF;
  --ll4d-muted: #8B9FD4;
  --ll4d-border: rgba(255, 255, 255, 0.08);
  background: var(--ll4d-bg);
  color: var(--ll4d-text);
  font-family: 'DM Sans', sans-serif;
  height: 100svh;
  letter-spacing: 0;
  overflow: hidden;
}

#lash-lifting-4d-page button,
#lash-lifting-4d-page a {
  font-family: inherit;
}

#lash-lifting-4d-page .ll4d-stage {
  height: 100%;
  min-height: 0;
  overflow: hidden;
  position: relative;
}

#lash-lifting-4d-page .ll4d-back {
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--ll4d-border);
  border-radius: 999px;
  color: var(--ll4d-text);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 800;
  gap: 8px;
  left: clamp(16px, 4vw, 36px);
  line-height: 1;
  min-height: 42px;
  padding: 0 16px;
  position: absolute;
  top: clamp(16px, 4vw, 34px);
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
  z-index: 5;
}

#lash-lifting-4d-page .ll4d-back:hover {
  background: rgba(255, 107, 157, 0.12);
  border-color: rgba(255, 107, 157, 0.4);
  transform: translateY(-1px);
}

#lash-lifting-4d-page .ll4d-back-arrow {
  color: var(--ll4d-accent-2);
  font-size: 18px;
  line-height: 1;
}

#lash-lifting-4d-page .ll4d-screen {
  align-items: center;
  animation: ll4d-enter 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 28px 18px;
  -webkit-overflow-scrolling: touch;
}

#lash-lifting-4d-page .ll4d-shell {
  margin: 0 auto;
  max-width: 720px;
  width: min(100%, 720px);
}

#lash-lifting-4d-page .ll4d-shell-wide {
  max-width: 920px;
  width: min(100%, 920px);
}

#lash-lifting-4d-page .ll4d-intro {
  text-align: left;
}

#lash-lifting-4d-page .ll4d-intro .ll4d-actions {
  justify-content: flex-start;
}

#lash-lifting-4d-page .ll4d-intro .ll4d-copy {
  max-width: 620px;
}

#lash-lifting-4d-page .ll4d-card {
  background: linear-gradient(180deg, rgba(2, 11, 74, 0.96), rgba(0, 8, 58, 0.98));
  border: 1px solid var(--ll4d-border);
  border-radius: 10px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
  padding: clamp(24px, 5vw, 44px);
}

#lash-lifting-4d-page .ll4d-kicker {
  align-items: center;
  background: rgba(255, 107, 157, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.24);
  border-radius: 999px;
  color: var(--ll4d-accent-2);
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
  padding: 8px 12px;
}

#lash-lifting-4d-page .ll4d-title {
  color: var(--ll4d-text);
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 7.2vw, 62px);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1;
  margin: 18px 0 0;
}

#lash-lifting-4d-page .ll4d-title-compact {
  font-size: clamp(29px, 5.3vw, 46px);
  font-weight: 600;
  line-height: 1.04;
}

#lash-lifting-4d-page .ll4d-title-highlight {
  background: linear-gradient(90deg, var(--ll4d-accent), var(--ll4d-accent-2));
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#lash-lifting-4d-page .ll4d-copy {
  color: var(--ll4d-muted);
  font-size: clamp(16px, 2.8vw, 18px);
  line-height: 1.62;
  margin: 18px 0 0;
}

#lash-lifting-4d-page .ll4d-actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

#lash-lifting-4d-page .ll4d-actions-mobile-hidden {
  display: flex;
}

#lash-lifting-4d-page .ll4d-button {
  align-items: center;
  background: linear-gradient(135deg, var(--ll4d-accent), var(--ll4d-accent-2));
  border: 0;
  border-radius: 10px;
  color: #12051A;
  cursor: pointer;
  display: inline-flex;
  font-size: 15px;
  font-weight: 800;
  justify-content: center;
  line-height: 1.2;
  min-height: 52px;
  min-width: min(100%, 250px);
  padding: 15px 22px;
  text-align: center;
  text-decoration: none;
  transition: opacity 160ms ease, transform 160ms ease, filter 160ms ease;
}

#lash-lifting-4d-page .ll4d-button:hover {
  filter: brightness(1.04);
  transform: translateY(-1px);
}

#lash-lifting-4d-page .ll4d-button:disabled {
  cursor: wait;
  filter: grayscale(0.2);
  opacity: 0.48;
  transform: none;
}

#lash-lifting-4d-page .ll4d-hint {
  color: var(--ll4d-muted);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  margin-top: 12px;
}

#lash-lifting-4d-page .ll4d-progress {
  margin-bottom: 22px;
}

#lash-lifting-4d-page .ll4d-progress-label {
  color: var(--ll4d-muted);
  display: flex;
  font-size: 12px;
  font-weight: 700;
  justify-content: space-between;
  line-height: 1;
  margin-bottom: 9px;
}

#lash-lifting-4d-page .ll4d-progress-track {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  height: 8px;
  overflow: hidden;
}

#lash-lifting-4d-page .ll4d-progress-fill {
  background: linear-gradient(90deg, var(--ll4d-accent), var(--ll4d-accent-2));
  border-radius: inherit;
  height: 100%;
  transition: width 260ms ease;
}

#lash-lifting-4d-page .ll4d-question {
  color: var(--ll4d-text);
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(26px, 3.8vw, 36px);
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.16;
  margin: 0;
}

#lash-lifting-4d-page .ll4d-options {
  display: grid;
  gap: 12px;
  margin-top: 26px;
}

#lash-lifting-4d-page .ll4d-option {
  align-items: center;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid var(--ll4d-border);
  border-radius: 10px;
  color: var(--ll4d-text);
  cursor: pointer;
  display: grid;
  font-size: 15px;
  font-weight: 700;
  gap: 12px;
  grid-template-columns: 38px minmax(0, 1fr);
  line-height: 1.34;
  min-height: 66px;
  padding: 13px 14px;
  text-align: left;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
  width: 100%;
}

#lash-lifting-4d-page .ll4d-option:hover,
#lash-lifting-4d-page .ll4d-option-selected {
  background: rgba(255, 107, 157, 0.13);
  border-color: rgba(255, 107, 157, 0.5);
  transform: translateY(-1px);
}

#lash-lifting-4d-page .ll4d-option-key {
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--ll4d-border);
  border-radius: 999px;
  color: var(--ll4d-accent-2);
  display: inline-flex;
  font-size: 13px;
  font-weight: 900;
  height: 38px;
  justify-content: center;
  width: 38px;
}

#lash-lifting-4d-page .ll4d-result-video {
  background: #00083A;
  border: 1px solid var(--ll4d-border);
  border-radius: 10px;
  display: block;
  overflow: hidden;
  width: 100%;
}

#lash-lifting-4d-page .ll4d-result-video {
  aspect-ratio: 9 / 16;
  border: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 360px;
}

#lash-lifting-4d-page .ll4d-loading {
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
}

#lash-lifting-4d-page .ll4d-spinner {
  animation: ll4d-spin 900ms linear infinite;
  border: 4px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  border-top-color: var(--ll4d-accent);
  height: 68px;
  margin-bottom: 24px;
  width: 68px;
}

#lash-lifting-4d-page .ll4d-result-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);
  margin-top: 24px;
}

#lash-lifting-4d-page .ll4d-offer-card,
#lash-lifting-4d-page .ll4d-guarantee {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--ll4d-border);
  border-radius: 10px;
  padding: 20px;
}

#lash-lifting-4d-page .ll4d-offer-name {
  color: var(--ll4d-text);
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1;
}

#lash-lifting-4d-page .ll4d-benefits {
  display: grid;
  gap: 10px;
  list-style: none;
  margin-top: 18px;
}

#lash-lifting-4d-page .ll4d-benefit {
  color: var(--ll4d-text);
  display: grid;
  font-size: 14px;
  gap: 10px;
  grid-template-columns: 22px minmax(0, 1fr);
  line-height: 1.45;
}

#lash-lifting-4d-page .ll4d-check {
  align-items: center;
  background: rgba(255, 209, 102, 0.14);
  border-radius: 999px;
  color: var(--ll4d-accent-2);
  display: inline-flex;
  font-size: 13px;
  font-weight: 900;
  height: 22px;
  justify-content: center;
  width: 22px;
}

#lash-lifting-4d-page .ll4d-price {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

#lash-lifting-4d-page .ll4d-price-old {
  color: var(--ll4d-muted);
  font-size: 15px;
  text-decoration: line-through;
}

#lash-lifting-4d-page .ll4d-price-new {
  color: var(--ll4d-accent-2);
  font-size: 26px;
  font-weight: 900;
  line-height: 1;
}

#lash-lifting-4d-page .ll4d-countdown {
  align-items: center;
  background: rgba(255, 107, 157, 0.1);
  border: 1px solid rgba(255, 107, 157, 0.24);
  border-radius: 10px;
  color: var(--ll4d-text);
  display: flex;
  font-size: 13px;
  font-weight: 800;
  gap: 10px;
  justify-content: space-between;
  line-height: 1.3;
  margin-top: 18px;
  padding: 12px 14px;
}

#lash-lifting-4d-page .ll4d-countdown-time {
  color: var(--ll4d-accent-2);
  font-size: 20px;
  font-variant-numeric: tabular-nums;
  font-weight: 900;
  line-height: 1;
}

#lash-lifting-4d-page .ll4d-guarantee {
  color: var(--ll4d-text);
  font-size: 14px;
  font-weight: 800;
  line-height: 1.45;
  margin-top: 12px;
}

#lash-lifting-4d-page .ll4d-cta-stack {
  align-items: stretch;
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

@keyframes ll4d-enter {
  from {
    opacity: 0;
    transform: translate3d(0, 18px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ll4d-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 760px) {
  #lash-lifting-4d-page .ll4d-screen {
    align-items: stretch;
    padding: 16px;
  }

  #lash-lifting-4d-page .ll4d-screen-with-back {
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: 96px;
    padding-top: 82px;
  }

  #lash-lifting-4d-page .ll4d-screen-result {
    padding-bottom: 170px;
  }

  #lash-lifting-4d-page .ll4d-shell,
  #lash-lifting-4d-page .ll4d-shell-wide {
    align-self: center;
  }

  #lash-lifting-4d-page .ll4d-screen-with-back .ll4d-shell,
  #lash-lifting-4d-page .ll4d-screen-with-back .ll4d-shell-wide {
    align-self: auto;
  }

  #lash-lifting-4d-page .ll4d-back {
    font-size: 13px;
    min-height: 38px;
    padding: 0 14px;
  }

  #lash-lifting-4d-page .ll4d-card {
    padding: 22px;
  }

  #lash-lifting-4d-page .ll4d-screen-result .ll4d-card {
    margin-bottom: 36px;
  }

  #lash-lifting-4d-page .ll4d-actions,
  #lash-lifting-4d-page .ll4d-button {
    width: 100%;
  }

  #lash-lifting-4d-page .ll4d-actions-mobile-hidden {
    display: none;
  }

  #lash-lifting-4d-page .ll4d-options {
    gap: 10px;
  }

  #lash-lifting-4d-page .ll4d-option {
    grid-template-columns: 34px minmax(0, 1fr);
    min-height: 58px;
    padding: 11px 12px;
  }

  #lash-lifting-4d-page .ll4d-option-key {
    height: 34px;
    width: 34px;
  }

  #lash-lifting-4d-page .ll4d-result-grid {
    grid-template-columns: 1fr;
  }

  #lash-lifting-4d-page .ll4d-result-video {
    max-width: min(100%, 360px);
  }
}
      `}</style>
      <div className="ll4d-stage">
        {shouldShowBackButton && (
          <button className="ll4d-back" type="button" onClick={goBack}>
            <span className="ll4d-back-arrow" aria-hidden="true">
              ←
            </span>
            Voltar
          </button>
        )}
        <section
          key={screen}
          className={`ll4d-screen ${
            shouldShowBackButton ? 'll4d-screen-with-back' : ''
          } ${isResultScreen ? 'll4d-screen-result' : ''}`}
        >
          {screen === 'intro' && (
            <div className="ll4d-shell ll4d-intro">
              <span className="ll4d-kicker">Método de 4 Passos · Lash Lifting</span>
              <h1 className="ll4d-title">
                Aprenda o Método de 4 Passos para dominar o{' '}
                <span className="ll4d-title-highlight">Lash Lifting</span> e lotar
                sua agenda
              </h1>
              <p className="ll4d-copy">
                Aprenda a diagnosticar, curvar, direcionar e garantir a durabilidade
                — um protocolo completo para resultados que a cliente posta e indica.
              </p>
              <div className="ll4d-actions">
                <button className="ll4d-button" type="button" onClick={goNext}>
                  Começar diagnóstico
                </button>
              </div>
              <p className="ll4d-hint">Leva menos de 40 segundos</p>
            </div>
          )}

          {screen in questions && (
            <div className="ll4d-shell">
              <div className="ll4d-card">
                <div className="ll4d-progress" aria-label={`Progresso ${progress}%`}>
                  <div className="ll4d-progress-label">
                    <span>Diagnóstico</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="ll4d-progress-track">
                    <div
                      className="ll4d-progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <h2 className="ll4d-question">{questions[screen as QuestionId].title}</h2>
                <div className="ll4d-options">
                  {questions[screen as QuestionId].options.map((option) => (
                    <button
                      className={`ll4d-option ${
                        pendingSelection?.questionId === screen &&
                        pendingSelection.answerKey === option.key
                          ? 'll4d-option-selected'
                          : ''
                      }`}
                      key={option.key}
                      type="button"
                      onClick={() => selectAnswer(screen as QuestionId, option.key)}
                    >
                      <span className="ll4d-option-key">{option.key}</span>
                      <span>{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {screen === 'loading' && (
            <div className="ll4d-shell">
              <div className="ll4d-card ll4d-loading">
                <div className="ll4d-spinner" aria-hidden="true" />
                <h2 className="ll4d-title ll4d-title-compact">
                  Analisando seu perfil...
                </h2>
                <p className="ll4d-copy">{loadingCopy[loadingCopyIndex]}</p>
              </div>
            </div>
          )}

          {screen === 'result' && (
            <div className="ll4d-shell-wide">
              <div className="ll4d-card">
                <span className="ll4d-kicker">Diagnóstico concluído</span>
                <h2 className="ll4d-title ll4d-title-compact">
                  O Lash Lifting 4D é o próximo serviço estratégico para a sua agenda
                </h2>
                <p className="ll4d-copy">{resultParagraph}</p>
                <div className="ll4d-result-grid">
                  <div>
                    <iframe
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="ll4d-result-video"
                      src={RESULT_VIDEO_URL}
                      title="Vídeo de resultado do Lash Lifting 4D"
                    />
                    <div className="ll4d-guarantee">
                      Garantia de 7 dias — 100% devolvido sem perguntas
                    </div>
                  </div>
                  <div className="ll4d-offer-card">
                    <h3 className="ll4d-offer-name">Método Lash Lifting 4D</h3>
                    <ul className="ll4d-benefits">
                      {offerBenefits.map((benefit) => (
                        <li className="ll4d-benefit" key={benefit}>
                          <span className="ll4d-check">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="ll4d-price">
                      <span className="ll4d-price-old">De R$ 297</span>
                      <span className="ll4d-price-new">R$ 69,00 à vista</span>
                    </div>
                    <div className="ll4d-countdown">
                      <span>
                        {isPromoExpired
                          ? 'Essa condição especial encerrou'
                          : 'Condição especial termina em'}
                      </span>
                      <span className="ll4d-countdown-time">
                        {String(promoMinutes).padStart(2, '0')}:
                        {String(promoSeconds).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="ll4d-cta-stack">
                      {isPromoExpired ? (
                        <button className="ll4d-button" disabled type="button">
                          Oferta encerrada
                        </button>
                      ) : (
                        <a
                          className="ll4d-button"
                          href={KIWIFY_URL}
                          onClick={handleCheckoutClick}
                        >
                          Quero garantir por R$ 69,00
                        </a>
                      )}
                    </div>
                    <p className="ll4d-hint">Acesso imediato após a confirmação</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
