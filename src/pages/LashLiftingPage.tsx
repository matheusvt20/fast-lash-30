import { useEffect, useRef, useState } from 'react'

import { trackMetaEvent } from '../lib/metaEvents'

const KIWIFY_URL =
  import.meta.env.VITE_KIWIFY_LASH_LIFTING_URL ||
  'https://pay.kiwify.com.br/tytgMiX'

const OFFER_PRICE = 69
const DISCOUNTED_PRICE = 47.9
const PROMO_SECONDS = 15 * 60
const RESULT_VIDEO_URL =
  'https://player-vz-db0cd809-911.tv.pandavideo.com.br/embed/?v=c4d11f20-25e4-4a27-a1d9-9bf86b929f3e'

const resultImages = [
  '/images/lash-lifting-section-1-01.jpg',
  '/images/lash-lifting-section-1-02.jpg',
  '/images/lash-lifting-section-1-03.jpg',
  '/images/lash-lifting-section-1-04.jpg',
  '/images/lash-lifting-section-1-05.jpg',
  '/images/lash-lifting-section-1-06.jpg',
]

const painQuestions = [
  'Por onde eu começo para fazer Lash Lifting?',
  'Quais materiais e moldes eu preciso usar?',
  'Como aplicar sem medo de errar no passo a passo?',
  'Como entregar um resultado bonito mesmo sendo iniciante?',
]

const offerBenefits = [
  'Como identificar o tipo de cílio e nunca mais errar no molde',
  'Prática real em cílios curtos, longos e claros',
  'Aplicação segura com durabilidade de 4 a 8 semanas',
  'Como trabalhar cílios finos e sensíveis sem danificar o fio natural',
  'Direcionamento dos fios para um resultado uniforme e natural',
]

const modules = [
  'Diagnóstico completo do fio antes de aplicar produto',
  'Escolha de moldes para cílios curtos, longos, difíceis e rebeldes',
  'Controle de tempo com mais segurança durante o procedimento',
  'Correção do que trava o resultado final',
  'Técnicas intermediárias para resultados alinhados e naturais',
]

const transformations = [
  'Saber quais materiais separar antes de começar',
  'Entender como preparar os cílios para receber o produto',
  'Escolher o molde com mais clareza, mesmo sendo iniciante',
  'Seguir uma ordem simples para aplicar, pausar e finalizar',
]

const faqs = [
  {
    answer:
      'Sim. O treinamento foi pensado para mostrar o passo a passo com clareza, inclusive para quem ainda sente insegurança no atendimento.',
    question: 'Serve para iniciantes?',
  },
  {
    answer:
      'Você recebe acesso imediato após a confirmação do pagamento e pode assistir no seu ritmo.',
    question: 'Como recebo o acesso?',
  },
  {
    answer:
      'Não. A técnica usa os fios naturais da cliente e o treinamento mostra como proteger o fio durante o processo.',
    question: 'Lash Lifting danifica os cílios?',
  },
  {
    answer:
      'O foco é te dar segurança prática para analisar diferentes fios, escolher melhor o molde e executar com mais previsibilidade.',
    question: 'O que eu vou aprender na prática?',
  },
]

export default function LashLiftingPage() {
  const offerRef = useRef<HTMLElement | null>(null)
  const [promoSecondsLeft, setPromoSecondsLeft] = useState(PROMO_SECONDS)
  const [hasOfferStarted, setHasOfferStarted] = useState(false)
  const [isCouponActive, setIsCouponActive] = useState(false)
  const isPromoExpired = promoSecondsLeft <= 0
  const promoMinutes = Math.floor(promoSecondsLeft / 60)
  const promoSeconds = promoSecondsLeft % 60

  useEffect(() => {
    document.body.classList.add('lash-lifting-active')
    const previousTitle = document.title
    document.title = 'Lash Lifting na Prática'

    trackMetaEvent('ViewContent', {
      customData: {
        content_name: 'Lash Lifting na Prática',
        currency: 'BRL',
        value: OFFER_PRICE,
      },
    })

    return () => {
      document.body.classList.remove('lash-lifting-active')
      document.title = previousTitle
    }
  }, [])

  useEffect(() => {
    const offerElement = offerRef.current

    if (!offerElement || hasOfferStarted) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasOfferStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(offerElement)

    return () => observer.disconnect()
  }, [hasOfferStarted])

  useEffect(() => {
    if (!hasOfferStarted || promoSecondsLeft <= 0) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setPromoSecondsLeft((currentSeconds) => Math.max(currentSeconds - 1, 0))
    }, 1000)

    return () => window.clearTimeout(timeoutId)
  }, [hasOfferStarted, promoSecondsLeft])

  function handleCheckoutClick() {
    trackMetaEvent('InitiateCheckout', {
      customData: {
        content_name: 'Lash Lifting na Prática',
        currency: 'BRL',
        value: isCouponActive ? DISCOUNTED_PRICE : OFFER_PRICE,
      },
    })
  }

  return (
    <main id="lash-lifting-page" className="lash-page">
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

body.lash-lifting-active {
  background: #00053D;
}

body.lash-lifting-active #social-proof-toast {
  display: none !important;
}

#lash-lifting-page {
  --lash-bg: #00053D;
  --lash-cream: #FFF8EA;
  --lash-cream-2: #FFF1D5;
  --lash-dark: #070A2A;
  --lash-surface: #020B4A;
  --lash-card: #071052;
  --lash-accent: #FF6B9D;
  --lash-orange: #FF7A12;
  --lash-gold: #FFD166;
  --lash-purple: #7B3FF2;
  --lash-text: #F5F7FF;
  --lash-muted: #9AA8D6;
  --lash-ink: #151025;
  --lash-border: rgba(255, 255, 255, 0.12);
  background: var(--lash-bg);
  color: var(--lash-text);
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 0;
  min-height: 100vh;
  overflow-x: hidden;
}

#lash-lifting-page * {
  box-sizing: border-box;
}

#lash-lifting-page img,
#lash-lifting-page iframe {
  display: block;
  max-width: 100%;
}

#lash-lifting-page a {
  font-family: inherit;
}

#lash-lifting-page .lash-section {
  padding: clamp(42px, 7vw, 76px) 18px;
}

#lash-lifting-page .lash-section-light {
  background: var(--lash-cream);
  color: var(--lash-ink);
}

#lash-lifting-page .lash-section-orange {
  background: linear-gradient(180deg, #FF7A12, #F4660F);
  color: #16070A;
}

#lash-lifting-page .lash-container {
  margin: 0 auto;
  max-width: 1040px;
  width: min(100%, 1040px);
}

#lash-lifting-page .lash-narrow {
  margin: 0 auto;
  max-width: 760px;
  text-align: center;
}

#lash-lifting-page .lash-brand {
  align-items: center;
  background: var(--lash-cream);
  color: #111;
  display: flex;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(25px, 5.5vw, 40px);
  font-weight: 700;
  justify-content: center;
  line-height: 0.86;
  min-height: 74px;
  padding: 13px 16px 11px;
  position: relative;
  text-align: center;
}

#lash-lifting-page .lash-brand span {
  color: #111;
  display: block;
  font-size: 0.45em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

#lash-lifting-page .lash-alert {
  background: #000536;
  color: #FF8298;
  font-size: clamp(13px, 2.5vw, 16px);
  font-weight: 900;
  padding: 11px 16px;
  text-align: center;
}

#lash-lifting-page .lash-hero {
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 209, 102, 0.17), transparent 28%),
    linear-gradient(180deg, var(--lash-cream) 0%, var(--lash-cream-2) 100%);
  color: var(--lash-ink);
  padding: clamp(28px, 6vw, 56px) 18px clamp(46px, 7vw, 74px);
}

#lash-lifting-page .lash-eyebrow {
  color: var(--lash-purple);
  font-size: clamp(15px, 3.4vw, 21px);
  font-weight: 900;
  line-height: 1.16;
  margin: 0 auto;
  max-width: 780px;
  text-align: center;
}

#lash-lifting-page .lash-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(41px, 8.8vw, 78px);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 0.92;
  margin: 12px auto 0;
  max-width: 920px;
  text-align: center;
}

#lash-lifting-page .lash-title strong {
  color: var(--lash-orange);
  font-weight: inherit;
}

#lash-lifting-page .lash-subtitle {
  color: #3D3452;
  font-size: clamp(16px, 2.8vw, 21px);
  font-weight: 700;
  line-height: 1.36;
  margin: 16px auto 0;
  max-width: 780px;
  text-align: center;
}

#lash-lifting-page .lash-mosaic {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: clamp(24px, 5vw, 40px) auto 0;
  max-width: 680px;
}

#lash-lifting-page .lash-mosaic img {
  aspect-ratio: 1 / 1;
  border: 3px solid #fff;
  border-radius: 10px;
  box-shadow: 0 16px 35px rgba(30, 12, 55, 0.14);
  object-fit: cover;
  width: 100%;
}

#lash-lifting-page .lash-proof-row {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  justify-content: center;
  margin: 22px auto 0;
  max-width: 840px;
}

#lash-lifting-page .lash-proof-pill {
  align-items: center;
  background: #fff;
  border: 1px solid rgba(123, 63, 242, 0.13);
  border-radius: 999px;
  color: #2B2341;
  display: inline-flex;
  font-size: 13px;
  font-weight: 800;
  gap: 6px;
  padding: 8px 11px;
}

#lash-lifting-page .lash-check {
  align-items: center;
  background: rgba(255, 209, 102, 0.16);
  border-radius: 999px;
  color: #10A85B;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 14px;
  font-weight: 900;
  height: 22px;
  justify-content: center;
  width: 22px;
}

#lash-lifting-page .lash-section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(34px, 6.8vw, 58px);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 0.98;
  margin: 0;
  text-align: center;
}

#lash-lifting-page .lash-section-title span {
  color: var(--lash-orange);
}

#lash-lifting-page .lash-section-copy {
  color: inherit;
  font-size: clamp(16px, 2.5vw, 19px);
  font-weight: 700;
  line-height: 1.44;
  margin: 14px auto 0;
  max-width: 720px;
  opacity: 0.78;
  text-align: center;
}

#lash-lifting-page .lash-dark {
  background:
    radial-gradient(circle at 20% 8%, rgba(255, 107, 157, 0.18), transparent 26%),
    linear-gradient(180deg, #111322, #08091A);
  color: var(--lash-text);
}

#lash-lifting-page .lash-pain-grid {
  align-items: center;
  display: grid;
  gap: clamp(26px, 5vw, 46px);
  grid-template-columns: minmax(0, 0.95fr) minmax(280px, 1.05fr);
}

#lash-lifting-page .lash-pain-title {
  font-size: clamp(27px, 5.6vw, 50px);
  line-height: 1.05;
  margin: 0;
  text-align: left;
}

#lash-lifting-page .lash-pain-copy {
  color: rgba(245, 247, 255, 0.74);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.55;
  margin: 18px 0 0;
}

#lash-lifting-page .lash-question-box {
  background: linear-gradient(180deg, #7B3FF2, #5E2ACB);
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.34);
  padding: clamp(20px, 4vw, 30px);
}

#lash-lifting-page .lash-question-box ul,
#lash-lifting-page .lash-benefit-list,
#lash-lifting-page .lash-module-list,
#lash-lifting-page .lash-transform-list {
  display: grid;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}

#lash-lifting-page .lash-question-box li {
  align-items: flex-start;
  color: #fff;
  display: grid;
  font-size: clamp(16px, 2.8vw, 21px);
  font-weight: 900;
  gap: 9px;
  grid-template-columns: 26px minmax(0, 1fr);
  line-height: 1.25;
}

#lash-lifting-page .lash-product-grid,
#lash-lifting-page .lash-mentor-grid {
  align-items: center;
  display: grid;
  gap: clamp(24px, 5vw, 48px);
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.82fr);
}

#lash-lifting-page .lash-product-media,
#lash-lifting-page .lash-mentor-photo {
  border-radius: 14px;
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.28);
  overflow: hidden;
}

#lash-lifting-page .lash-product-media img,
#lash-lifting-page .lash-mentor-photo img {
  aspect-ratio: 4 / 5;
  object-fit: cover;
  width: 100%;
}

#lash-lifting-page .lash-product-copy h2,
#lash-lifting-page .lash-mentor-copy h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 6.6vw, 62px);
  line-height: 0.95;
  margin: 0;
}

#lash-lifting-page .lash-product-copy h2 span,
#lash-lifting-page .lash-mentor-copy h2 span {
  color: var(--lash-orange);
}

#lash-lifting-page .lash-product-copy p,
#lash-lifting-page .lash-mentor-copy p {
  color: rgba(245, 247, 255, 0.74);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.55;
  margin: 16px 0 0;
}

#lash-lifting-page .lash-benefit-list {
  margin-top: 20px;
}

#lash-lifting-page .lash-benefit-list li,
#lash-lifting-page .lash-module-list li,
#lash-lifting-page .lash-transform-list li {
  align-items: flex-start;
  display: grid;
  font-size: 16px;
  font-weight: 800;
  gap: 10px;
  grid-template-columns: 24px minmax(0, 1fr);
  line-height: 1.35;
}

#lash-lifting-page .lash-transform-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 20px 55px rgba(75, 19, 0, 0.18);
  margin: 28px auto 0;
  max-width: 720px;
  padding: clamp(22px, 4.5vw, 34px);
}

#lash-lifting-page .lash-transform-card h3 {
  font-size: clamp(20px, 4vw, 28px);
  line-height: 1.18;
  margin: 0 0 16px;
  text-align: center;
}

#lash-lifting-page .lash-offer {
  background:
    radial-gradient(circle at 80% 10%, rgba(255, 209, 102, 0.14), transparent 26%),
    linear-gradient(180deg, #00053D, #01072E);
}

#lash-lifting-page .lash-video-frame {
  background: #000;
  border: 1px solid rgba(123, 63, 242, 0.18);
  border-radius: 14px;
  box-shadow: 0 26px 70px rgba(24, 11, 42, 0.22);
  margin: 30px auto 0;
  max-width: 360px;
  overflow: hidden;
}

#lash-lifting-page .lash-offer .lash-video-frame {
  margin-top: 0;
}

#lash-lifting-page .lash-result-video {
  aspect-ratio: 9 / 16;
  border: 0;
  width: 100%;
}

#lash-lifting-page .lash-video-cta {
  display: flex;
  margin: 24px auto 0;
  max-width: 360px;
  width: min(100%, 360px);
}

#lash-lifting-page .lash-offer-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--lash-border);
  border-radius: 14px;
  margin: 0 auto;
  max-width: 620px;
  padding: clamp(22px, 4vw, 34px);
}

#lash-lifting-page .lash-offer-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(34px, 6vw, 54px);
  line-height: 0.95;
  margin: 0;
}

#lash-lifting-page .lash-price {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

#lash-lifting-page .lash-coupon-box {
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.18), rgba(255, 209, 102, 0.12));
  border: 1px solid rgba(255, 209, 102, 0.42);
  border-radius: 12px;
  margin-top: 24px;
  padding: 16px;
}

#lash-lifting-page .lash-coupon-label {
  color: var(--lash-gold);
  display: block;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

#lash-lifting-page .lash-coupon-copy {
  color: var(--lash-text);
  font-size: 18px;
  font-weight: 900;
  line-height: 1.3;
  margin: 8px 0 14px;
}

#lash-lifting-page .lash-coupon-button {
  align-items: center;
  background: #fff;
  border: 0;
  border-radius: 10px;
  color: #180711;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 900;
  justify-content: center;
  min-height: 48px;
  padding: 12px 16px;
  transition: filter 160ms ease, transform 160ms ease;
  width: 100%;
}

#lash-lifting-page .lash-coupon-button:hover {
  filter: brightness(1.03);
  transform: translateY(-1px);
}

#lash-lifting-page .lash-coupon-active {
  background: rgba(16, 168, 91, 0.16);
  border-color: rgba(16, 168, 91, 0.44);
}

#lash-lifting-page .lash-price-old {
  color: var(--lash-muted);
  font-size: 18px;
  text-decoration: line-through;
}

#lash-lifting-page .lash-price-new {
  color: var(--lash-gold);
  font-size: clamp(42px, 8vw, 68px);
  font-weight: 900;
  line-height: 0.95;
}

#lash-lifting-page .lash-price-installment {
  color: var(--lash-text);
  flex-basis: 100%;
  font-size: 20px;
  font-weight: 900;
}

#lash-lifting-page .lash-countdown {
  align-items: center;
  background: rgba(123, 63, 242, 0.24);
  border: 1px solid rgba(255, 107, 157, 0.36);
  border-radius: 12px;
  display: flex;
  font-size: 15px;
  font-weight: 900;
  gap: 12px;
  justify-content: space-between;
  line-height: 1.2;
  margin-top: 22px;
  padding: 14px 16px;
}

#lash-lifting-page .lash-countdown-time {
  color: var(--lash-gold);
  font-size: clamp(26px, 5.5vw, 42px);
  font-variant-numeric: tabular-nums;
  font-weight: 900;
  line-height: 1;
}

#lash-lifting-page .lash-button {
  align-items: center;
  background: linear-gradient(135deg, var(--lash-accent), var(--lash-gold));
  border: 0;
  border-radius: 12px;
  color: #180711;
  display: inline-flex;
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 900;
  justify-content: center;
  line-height: 1.15;
  min-height: 62px;
  padding: 18px 22px;
  text-align: center;
  text-decoration: none;
  transition: filter 160ms ease, transform 160ms ease;
  width: 100%;
}

#lash-lifting-page .lash-button:hover {
  filter: brightness(1.04);
  transform: translateY(-1px);
}

#lash-lifting-page .lash-button-disabled {
  cursor: not-allowed;
  filter: grayscale(0.25);
  opacity: 0.55;
}

#lash-lifting-page .lash-safe-note {
  color: var(--lash-muted);
  font-size: 14px;
  font-weight: 800;
  line-height: 1.4;
  margin: 14px 0 0;
  text-align: center;
}

#lash-lifting-page .lash-mentor {
  background: var(--lash-cream);
  color: var(--lash-ink);
}

#lash-lifting-page .lash-mentor-grid {
  grid-template-columns: minmax(0, 0.8fr) minmax(280px, 1fr);
}

#lash-lifting-page .lash-mentor-photo {
  order: 2;
}

#lash-lifting-page .lash-mentor-copy p {
  color: #4C425B;
}

#lash-lifting-page .lash-faq {
  background: var(--lash-cream);
  color: var(--lash-ink);
}

#lash-lifting-page .lash-faq-list {
  display: grid;
  gap: 10px;
  margin: 28px auto 0;
  max-width: 780px;
}

#lash-lifting-page .lash-faq-item {
  background: #151515;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  color: #fff;
  padding: 18px 20px;
}

#lash-lifting-page .lash-faq-item h3 {
  font-size: 16px;
  line-height: 1.25;
  margin: 0;
}

#lash-lifting-page .lash-faq-item p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
  line-height: 1.45;
  margin: 8px 0 0;
}

#lash-lifting-page .lash-footer {
  background: #07070C;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  padding: 24px 18px;
  text-align: center;
}

@media (max-width: 800px) {
  #lash-lifting-page .lash-product-grid,
  #lash-lifting-page .lash-mentor-grid,
  #lash-lifting-page .lash-pain-grid {
    grid-template-columns: 1fr;
  }

  #lash-lifting-page .lash-pain-title,
  #lash-lifting-page .lash-product-copy h2,
  #lash-lifting-page .lash-mentor-copy h2 {
    text-align: left;
  }

  #lash-lifting-page .lash-product-copy p,
  #lash-lifting-page .lash-mentor-copy p,
  #lash-lifting-page .lash-pain-copy {
    text-align: left;
  }

  #lash-lifting-page .lash-mentor-photo {
    order: initial;
  }
}

@media (max-width: 560px) {
  #lash-lifting-page .lash-eyebrow,
  #lash-lifting-page .lash-title,
  #lash-lifting-page .lash-subtitle,
  #lash-lifting-page .lash-section-title,
  #lash-lifting-page .lash-section-copy,
  #lash-lifting-page .lash-transform-card h3,
  #lash-lifting-page .lash-safe-note {
    text-align: left;
  }

  #lash-lifting-page .lash-mosaic {
    gap: 6px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  #lash-lifting-page .lash-countdown {
    align-items: flex-start;
    flex-direction: column;
  }
}
      `}</style>

      <header>
        <div className="lash-brand">
          <div>
            Lash Lifting
          </div>
        </div>
        <div className="lash-alert">Método Prático</div>
      </header>

      <section className="lash-hero">
        <div className="lash-container">
          <p className="lash-eyebrow">
            Medo de errar no molde ou danificar o fio?
          </p>
          <h1 className="lash-title">
            Faça Lash Lifting com <strong>segurança em diferentes cílios</strong>
          </h1>
          <p className="lash-subtitle">
            Aprenda a diagnosticar o fio, escolher o molde certo e entregar um
            resultado natural sem travar no atendimento.
          </p>
          <div className="lash-mosaic" aria-label="Resultados de Lash Lifting">
            {resultImages.map((image) => (
              <img alt="Resultado de Lash Lifting" key={image} src={image} />
            ))}
          </div>
          <div className="lash-proof-row">
            <span className="lash-proof-pill">
              <span className="lash-check">✓</span>
              Diagnóstico do fio
            </span>
            <span className="lash-proof-pill">
              <span className="lash-check">✓</span>
              Escolha de molde
            </span>
            <span className="lash-proof-pill">
              <span className="lash-check">✓</span>
              Aplicação segura
            </span>
            <span className="lash-proof-pill">
              <span className="lash-check">✓</span>
              Cílios curtos, longos e sensíveis
            </span>
          </div>
        </div>
      </section>

      <section className="lash-section lash-section-light">
        <div className="lash-container">
          <h2 className="lash-section-title">
            Veja na prática o <span>resultado do Lash Lifting</span>
          </h2>
          <p className="lash-section-copy">
            Um resultado natural, alinhado e com direcionamento correto começa nas
            decisões feitas durante o atendimento.
          </p>
          <div className="lash-video-frame">
            <iframe
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="lash-result-video"
              src={RESULT_VIDEO_URL}
              title="Vídeo de resultado do Lash Lifting"
            />
          </div>
          <a className="lash-button lash-video-cta" href="#oferta-lash-lifting">
            Quero me inscrever agora
          </a>
        </div>
      </section>

      <section className="lash-section lash-dark">
        <div className="lash-container lash-pain-grid">
          <div>
            <h2 className="lash-section-title lash-pain-title">
              Você quer aprender Lash Lifting, mas ainda não sabe por onde começar?
            </h2>
            <p className="lash-pain-copy">
              Para quem está começando, o mais difícil não é só entender a técnica. É
              saber quais materiais usar, como preparar os cílios, qual molde escolher
              e como seguir cada etapa sem se sentir perdida no atendimento.
            </p>
          </div>
          <div className="lash-question-box">
            <ul>
              {painQuestions.map((question) => (
                <li key={question}>
                  <span>😰</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="lash-section lash-dark">
        <div className="lash-container lash-product-grid">
          <div className="lash-product-copy">
            <h2>
              Um treinamento para transformar análise do fio em <span>decisão segura</span>
            </h2>
            <p>
              Você aprende a observar o cílio antes de aplicar produto, escolher o
              molde com intenção e conduzir cada etapa com mais clareza. O objetivo é
              sair do “eu acho” e atender com critério.
            </p>
            <ul className="lash-benefit-list">
              {offerBenefits.map((benefit) => (
                <li key={benefit}>
                  <span className="lash-check">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lash-product-media">
            <img
              alt="Profissional aplicando Lash Lifting com exemplos de resultados"
              src="/images/lash-lifting-product-practice.jpg"
            />
          </div>
        </div>
      </section>

      <section className="lash-section lash-section-orange">
        <div className="lash-container">
          <div className="lash-narrow">
            <h2 className="lash-section-title">
              Do zero ao primeiro atendimento: um caminho simples para começar no Lash
              Lifting
            </h2>
            <p className="lash-section-copy">Você aprende a organizar cada etapa:</p>
          </div>
          <div className="lash-transform-card">
            <ul className="lash-transform-list">
              {transformations.map((item) => (
                <li key={item}>
                  <span className="lash-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="lash-section lash-section-light">
        <div className="lash-container">
          <h2 className="lash-section-title">
            Veja tudo o que você vai receber no <span>Lash Lifting na Prática</span>
          </h2>
          <div className="lash-transform-card">
            <ul className="lash-module-list">
              {modules.map((module) => (
                <li key={module}>
                  <span className="lash-check">✓</span>
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="lash-section lash-offer"
        id="oferta-lash-lifting"
        ref={offerRef}
      >
        <div className="lash-container">
          <div className="lash-offer-card">
            <h2 className="lash-offer-name">Lash Lifting na Prática</h2>
            <ul className="lash-benefit-list">
              {offerBenefits.map((benefit) => (
                <li key={benefit}>
                  <span className="lash-check">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div
              className={`lash-coupon-box${isCouponActive ? ' lash-coupon-active' : ''}`}
            >
              <span className="lash-coupon-label">
                {isCouponActive ? 'Cupom ativado' : 'Você ganhou um cupom de desconto'}
              </span>
              {isCouponActive && (
                <p className="lash-coupon-copy">Seu desconto foi aplicado.</p>
              )}
              {!isCouponActive && (
                <button
                  className="lash-coupon-button"
                  onClick={() => setIsCouponActive(true)}
                  type="button"
                >
                  Ativar meu cupom agora
                </button>
              )}
            </div>
            <div className="lash-price">
              <span className="lash-price-old">
                {isCouponActive ? 'De R$ 69,00' : 'De R$ 297'}
              </span>
              <span className="lash-price-new">
                {isCouponActive ? 'R$ 47,90' : 'R$ 69,00'}
              </span>
              {isCouponActive && (
                <span className="lash-price-installment">ou 11x de R$ 5,32</span>
              )}
            </div>
            <div className="lash-countdown">
              <span>
                {isPromoExpired
                  ? 'Essa condição especial encerrou'
                  : hasOfferStarted
                    ? 'Condição especial termina em'
                    : 'A contagem começa ao visualizar a oferta'}
              </span>
              <span className="lash-countdown-time">
                {String(promoMinutes).padStart(2, '0')}:
                {String(promoSeconds).padStart(2, '0')}
              </span>
            </div>
            {isPromoExpired ? (
              <button className="lash-button lash-button-disabled" disabled type="button">
                Oferta encerrada
              </button>
            ) : (
              <a className="lash-button" href={KIWIFY_URL} onClick={handleCheckoutClick}>
                Quero me inscrever agora
              </a>
            )}
            <p className="lash-safe-note">Acesso imediato após a confirmação</p>
          </div>
        </div>
      </section>

      <section className="lash-section lash-mentor">
        <div className="lash-container lash-mentor-grid">
          <div className="lash-mentor-copy">
            <h2>
              Conheça sua mentora <span>Tati Cabral</span>
            </h2>
            <p>
              Especialista em Lash Lifting, Tati ensina o atendimento por trás de
              resultados naturais, alinhados e seguros. A proposta é mostrar o que
              acontece na prática, para você parar de depender de fórmulas prontas e
              começar a decidir com mais segurança.
            </p>
          </div>
          <div className="lash-mentor-photo">
            <img alt="Tati Cabral" src="/images/tati-bio.webp" />
          </div>
        </div>
      </section>

      <section className="lash-section lash-faq">
        <div className="lash-container">
          <h2 className="lash-section-title">Perguntas que eu sei que você tá pensando...</h2>
          <div className="lash-faq-list">
            {faqs.map((faq) => (
              <article className="lash-faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="lash-narrow" style={{ marginTop: 28 }}>
            {isPromoExpired ? (
              <button className="lash-button lash-button-disabled" disabled type="button">
                Oferta encerrada
              </button>
            ) : (
              <a className="lash-button" href={KIWIFY_URL} onClick={handleCheckoutClick}>
                Quero me inscrever agora
              </a>
            )}
          </div>
        </div>
      </section>

      <footer className="lash-footer">
        Copyright © Tati Cabral. Todos os direitos reservados.
      </footer>
    </main>
  )
}
