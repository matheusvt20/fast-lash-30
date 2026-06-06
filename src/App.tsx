import { lazy, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import LazySection from './components/LazySection'
import { salesPageData } from './data/salesPageData'
import { trackMetaEvent } from './lib/metaEvents'

const BonusSection = lazy(() => import('./components/BonusSection'))
const BenefitsGrid = lazy(() => import('./components/BenefitsGrid'))
const CreatorSection = lazy(() => import('./components/CreatorSection'))
const FAQAccordion = lazy(() => import('./components/FAQAccordion'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))
const ForWhoSection = lazy(() => import('./components/ForWhoSection'))
const GuaranteeSection = lazy(() => import('./components/GuaranteeSection'))
const OfferStack = lazy(() => import('./components/OfferStack'))
const ProblemSection = lazy(() => import('./components/ProblemSection'))
const ProductSection = lazy(() => import('./components/ProductSection'))
const ResultsCarousel = lazy(() => import('./components/ResultsCarousel'))
const SocialProofBar = lazy(() => import('./components/SocialProofBar'))
const SpeedMethodSection = lazy(() => import('./components/SpeedMethodSection'))
const StudentReturnsMarquee = lazy(() => import('./components/StudentReturnsMarquee'))

function SalesPageThemeOverrides() {
  return (
    <style>{`
      main {
        --premium-bg: #FAF7F0;
        --premium-bg-alt: #F3EEE5;
        --premium-ink: #1B1814;
        --premium-soft-ink: #625B52;
        --premium-muted: #82786B;
        --premium-line: rgba(180, 139, 67, 0.24);
        --premium-gold: #B88D45;
        --premium-gold-soft: #E4CA88;
        --premium-card: rgba(255, 252, 246, 0.74);
        --premium-dark: #151311;
        --premium-dark-card: #201D19;
      }

      #results-carousel,
      #problem-section,
      #creator-section,
      #product-section,
      #benefits-grid,
      #for-who-section,
      #bonus-section,
      #guarantee-section,
      #faq-accordion {
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.46), rgba(255, 255, 255, 0)),
          var(--premium-bg) !important;
        color: var(--premium-ink) !important;
      }

      #social-proof-bar {
        background: #F7F1E8 !important;
        border-bottom: 1px solid var(--premium-line) !important;
        border-top: 1px solid var(--premium-line) !important;
      }

      #testimonials-carousel {
        background: var(--premium-bg-alt) !important;
      }

      #offer-stack,
      #final-cta {
        background:
          radial-gradient(circle at 78% 12%, rgba(213, 181, 113, 0.13), transparent 28%),
          linear-gradient(180deg, #1B1814, #11100E) !important;
      }

      #results-carousel .results-title,
      #problem-section .problem-title,
      #creator-section .creator-name,
      #product-section .product-title,
      #benefits-grid .benefits-title,
      #for-who-section .for-who-title,
      #bonus-section .bonus-title,
      #guarantee-section .guarantee-title,
      #faq-accordion .faq-title,
      #testimonials-carousel .testimonials-title,
      #offer-stack .offer-title,
      #offer-stack .offer-product-title,
      #offer-stack .offer-final-price,
      #final-cta .final-title,
      #final-cta .final-price {
        font-family: var(--font-display) !important;
        font-weight: 600 !important;
        letter-spacing: 0 !important;
        line-height: 1.14 !important;
      }

      #results-carousel .results-title,
      #problem-section .problem-title,
      #product-section .product-title,
      #benefits-grid .benefits-title,
      #for-who-section .for-who-title,
      #bonus-section .bonus-title,
      #guarantee-section .guarantee-title,
      #faq-accordion .faq-title,
      #testimonials-carousel .testimonials-title {
        color: var(--premium-ink) !important;
      }

      #results-carousel .results-title,
      #product-section .product-title {
        font-size: clamp(34px, 4.6vw, 50px) !important;
      }

      #problem-section .problem-title,
      #creator-section .creator-name,
      #benefits-grid .benefits-title,
      #for-who-section .for-who-title,
      #bonus-section .bonus-title,
      #guarantee-section .guarantee-title,
      #faq-accordion .faq-title,
      #testimonials-carousel .testimonials-title {
        font-size: clamp(31px, 4vw, 43px) !important;
      }

      #results-carousel .results-subtitle,
      #problem-section .problem-item,
      #creator-section .creator-role,
      #creator-section .creator-bio,
      #product-section .product-subtitle,
      #product-section .product-module-description,
      #benefits-grid .benefit-description,
      #for-who-section .for-who-item,
      #bonus-section .bonus-description,
      #guarantee-section .guarantee-text,
      #faq-accordion .faq-answer,
      #testimonials-carousel .testimonial-copy,
      #final-cta .final-security,
      #offer-stack .offer-note {
        color: var(--premium-soft-ink) !important;
        font-weight: 400 !important;
        line-height: 1.72 !important;
      }

      #results-carousel .results-badge,
      #problem-section .problem-badge,
      #creator-section .creator-badge,
      #product-section .product-badge,
      #benefits-grid .benefits-badge,
      #for-who-section .for-who-badge,
      #bonus-section .bonus-badge,
      #guarantee-section .guarantee-badge,
      #faq-accordion .faq-badge,
      #testimonials-carousel .testimonials-badge,
      #offer-stack .offer-badge {
        background: rgba(255, 252, 246, 0.66) !important;
        border: 1px solid var(--premium-line) !important;
        border-radius: 999px !important;
        box-shadow: 0 10px 24px rgba(61, 43, 21, 0.04) !important;
        color: #6F572E !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        letter-spacing: 0.07em !important;
        padding: 8px 16px !important;
        text-transform: uppercase !important;
      }

      #problem-section .problem-item,
      #product-section .product-module-header,
      #benefits-grid .benefit-card,
      #for-who-section .for-who-card,
      #bonus-section .bonus-card,
      #guarantee-section .guarantee-box,
      #faq-accordion .faq-item,
      #testimonials-carousel .testimonial-card {
        background: var(--premium-card) !important;
        border-color: var(--premium-line) !important;
        box-shadow: 0 16px 38px rgba(44, 31, 17, 0.055) !important;
      }

      #problem-section .problem-frame,
      #creator-section .creator-frame,
      #results-carousel .results-photo,
      #testimonials-carousel .testimonial-image,
      #bonus-section .bonus-frame {
        border-color: rgba(198, 158, 82, 0.32) !important;
        box-shadow: 0 24px 58px rgba(44, 31, 17, 0.1) !important;
      }

      #product-section .product-module-number,
      #product-section .product-module-toggle,
      #faq-accordion .faq-icon,
      #final-cta .final-bullet-icon,
      #benefits-grid .benefit-icon,
      #bonus-section .bonus-value,
      #offer-stack .offer-final-price,
      #final-cta .final-price {
        color: var(--premium-gold) !important;
      }

      #benefits-grid .benefit-title {
        color: #6F572E !important;
        font-size: 15px !important;
        font-weight: 800 !important;
        letter-spacing: 0.01em !important;
      }

      #offer-stack .offer-badge {
        background: rgba(228, 202, 136, 0.08) !important;
        color: var(--premium-gold-soft) !important;
      }

      #offer-stack .offer-title,
      #offer-stack .offer-product-title,
      #final-cta .final-title {
        color: #FFF8EC !important;
      }

      #offer-stack .offer-card,
      #final-cta .final-bullets {
        background: rgba(255, 252, 246, 0.055) !important;
        border: 1px solid rgba(228, 202, 136, 0.24) !important;
        border-radius: 18px !important;
        box-shadow: 0 30px 70px rgba(0, 0, 0, 0.18) !important;
      }

      #offer-stack .offer-line,
      #offer-stack .offer-total-row,
      #final-cta .final-bullet {
        color: rgba(255, 248, 236, 0.74) !important;
      }

      #offer-stack .offer-line,
      #offer-stack .offer-total {
        border-color: rgba(228, 202, 136, 0.18) !important;
      }

      #offer-stack .offer-cta,
      #final-cta .final-cta {
        background:
          linear-gradient(180deg, rgba(255, 250, 235, 0.42), rgba(255, 250, 235, 0) 52%),
          linear-gradient(135deg, #C3A05C 0%, #E4CA88 48%, #B88D45 100%) !important;
        border: 1px solid rgba(228, 202, 136, 0.28) !important;
        border-radius: 12px !important;
        box-shadow:
          0 14px 26px rgba(123, 87, 34, 0.16),
          inset 0 1px 0 rgba(255, 255, 255, 0.58),
          inset 0 -1px 0 rgba(85, 54, 14, 0.14) !important;
        color: #211A11 !important;
        font-size: 13px !important;
        font-weight: 700 !important;
        letter-spacing: 0.05em !important;
        min-height: 50px !important;
        padding: 14px 24px !important;
      }

      #final-cta .final-security {
        color: rgba(255, 248, 236, 0.58) !important;
      }

      @media (max-width: 767px) {
        #results-carousel .results-title,
        #problem-section .problem-title,
        #creator-section .creator-name,
        #product-section .product-title,
        #benefits-grid .benefits-title,
        #for-who-section .for-who-title,
        #bonus-section .bonus-title,
        #guarantee-section .guarantee-title,
        #faq-accordion .faq-title,
        #testimonials-carousel .testimonials-title,
        #offer-stack .offer-title,
        #final-cta .final-title {
          font-size: 31px !important;
          line-height: 1.16 !important;
        }
      }
    `}</style>
  )
}

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
      <LazySection minHeight={760}>
        <SpeedMethodSection />
      </LazySection>
      <LazySection minHeight={700}>
        <ResultsCarousel />
      </LazySection>
      <LazySection minHeight={140}>
        <SocialProofBar />
      </LazySection>
      <LazySection minHeight={720}>
        <ProblemSection />
      </LazySection>
      <LazySection minHeight={760}>
        <StudentReturnsMarquee />
      </LazySection>
      <LazySection minHeight={780}>
        <ProductSection />
      </LazySection>
      <LazySection minHeight={640}>
        <BenefitsGrid />
      </LazySection>
      <LazySection minHeight={720}>
        <ForWhoSection />
      </LazySection>
      <div id="offer-coupon-area" style={{ scrollMarginTop: 24 }}>
        <LazySection minHeight={820}>
          <OfferStack />
        </LazySection>
      </div>
      <LazySection minHeight={760}>
        <CreatorSection />
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
      <SalesPageThemeOverrides />
    </main>
  )
}

export default function App() {
  useEffect(() => {
    trackMetaEvent('PageView')
  }, [])

  return <SalesPage />
}
