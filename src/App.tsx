import { lazy, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import LazySection from './components/LazySection'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import WhatsAppSupportButton from './components/WhatsAppSupportButton'
import { salesPageData } from './data/salesPageData'
import { trackMetaEvent } from './lib/metaEvents'
import AgendaCheiaPage from './pages/AgendaCheiaPage'
import FreeClassPage from './pages/FreeClassPage'
import LashLifting4DPage from './pages/LashLifting4DPage'

const ResultsCarousel = lazy(() => import('./components/ResultsCarousel'))
const SocialProofBar = lazy(() => import('./components/SocialProofBar'))
const ProblemSection = lazy(() => import('./components/ProblemSection'))
const CreatorSection = lazy(() => import('./components/CreatorSection'))
const ProductSection = lazy(() => import('./components/ProductSection'))
const BenefitsGrid = lazy(() => import('./components/BenefitsGrid'))
const ForWhoSection = lazy(() => import('./components/ForWhoSection'))
const OfferStack = lazy(() => import('./components/OfferStack'))
const BonusSection = lazy(() => import('./components/BonusSection'))
const GuaranteeSection = lazy(() => import('./components/GuaranteeSection'))
const FAQAccordion = lazy(() => import('./components/FAQAccordion'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))

function SalesPage() {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      customData: {
        content_name: salesPageData.product.name,
        currency: 'BRL',
        value: salesPageData.product.price,
      },
    })
  }, [])

  return (
    <main>
      <HeroSection />
      <LazySection minHeight={680}>
        <ResultsCarousel />
      </LazySection>
      <LazySection minHeight={120}>
        <SocialProofBar />
      </LazySection>
      <LazySection minHeight={760}>
        <ProblemSection />
      </LazySection>
      <LazySection minHeight={760}>
        <CreatorSection />
      </LazySection>
      <LazySection minHeight={980}>
        <ProductSection />
      </LazySection>
      <LazySection minHeight={780}>
        <BenefitsGrid />
      </LazySection>
      <LazySection minHeight={1240} rootMargin="1600px 0px">
        <TestimonialsCarousel />
      </LazySection>
      <LazySection minHeight={680}>
        <ForWhoSection />
      </LazySection>
      <LazySection minHeight={720}>
        <OfferStack />
      </LazySection>
      <LazySection minHeight={760}>
        <BonusSection />
      </LazySection>
      <LazySection minHeight={440}>
        <GuaranteeSection />
      </LazySection>
      <LazySection minHeight={620}>
        <FAQAccordion />
      </LazySection>
      <LazySection minHeight={540}>
        <FinalCTA />
      </LazySection>
      <WhatsAppSupportButton />
    </main>
  )
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '')

  useEffect(() => {
    trackMetaEvent('PageView')
  }, [pathname])

  if (pathname === '/aula-gratuita') {
    return <FreeClassPage />
  }

  if (pathname === '/agenda-cheia') {
    return <AgendaCheiaPage />
  }

  if (pathname === '/lash-lifting-4d') {
    return <LashLifting4DPage />
  }

  return <SalesPage />
}
