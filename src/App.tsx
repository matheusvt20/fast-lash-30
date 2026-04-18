import { lazy } from 'react'
import HeroSection from './components/HeroSection'
import LazySection from './components/LazySection'

const ResultsCarousel = lazy(() => import('./components/ResultsCarousel'))
const SocialProofBar = lazy(() => import('./components/SocialProofBar'))
const ProblemSection = lazy(() => import('./components/ProblemSection'))
const CreatorSection = lazy(() => import('./components/CreatorSection'))
const ProductSection = lazy(() => import('./components/ProductSection'))
const BenefitsGrid = lazy(() => import('./components/BenefitsGrid'))
const TestimonialsCarousel = lazy(() => import('./components/TestimonialsCarousel'))
const ForWhoSection = lazy(() => import('./components/ForWhoSection'))
const OfferStack = lazy(() => import('./components/OfferStack'))
const BonusSection = lazy(() => import('./components/BonusSection'))
const GuaranteeSection = lazy(() => import('./components/GuaranteeSection'))
const FAQAccordion = lazy(() => import('./components/FAQAccordion'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))

export default function App() {
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
      <LazySection minHeight={1240}>
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
    </main>
  )
}
