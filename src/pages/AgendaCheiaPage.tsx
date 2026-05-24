import { lazy, useEffect } from 'react'

import AgendaCheiaHero from '../components/AgendaCheiaHero'
import BeforeAfterSection from '../components/BeforeAfterSection'
import BenefitsGrid from '../components/BenefitsGrid'
import CreatorSection from '../components/CreatorSection'
import ForWhoSection from '../components/ForWhoSection'
import LazySection from '../components/LazySection'
import MethodSection from '../components/MethodSection'
import OfferStack from '../components/OfferStack'
import ResultsCarousel from '../components/ResultsCarousel'
import SectionDivider from '../components/SectionDivider'
import SocialProofBar from '../components/SocialProofBar'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import { agendaCheiaPageData } from '../data/agendaCheiaPageData'
import { trackMetaEvent } from '../lib/metaEvents'

const BonusSection = lazy(() => import('../components/BonusSection'))
const GuaranteeSection = lazy(() => import('../components/GuaranteeSection'))
const FAQAccordion = lazy(() => import('../components/FAQAccordion'))
const FinalCTA = lazy(() => import('../components/FinalCTA'))

const agendaCheiaProofPhotos = [
  { src: '/images/prova-1.webp', width: 1080, height: 1920 },
  { src: '/images/prova-2.webp', width: 1080, height: 1920 },
  { src: '/images/prova-3.webp', width: 1080, height: 1920 },
  { src: '/images/prova-4.webp', width: 1080, height: 1920 },
  { src: '/images/prova-5.webp', width: 1080, height: 1920 },
  { src: '/images/prova-6.webp', width: 1080, height: 1920 },
  { src: '/images/prova-7.webp', width: 1080, height: 1920 },
]

export default function AgendaCheiaPage() {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      customData: {
        content_name: agendaCheiaPageData.product.name,
        currency: 'BRL',
        value: agendaCheiaPageData.product.price,
      },
    })
  }, [])

  return (
    <main>
      <AgendaCheiaHero />
      <SectionDivider />
      <BeforeAfterSection />
      <SectionDivider />
      <MethodSection />
      <LazySection minHeight={120}>
        <SocialProofBar
          data={agendaCheiaPageData}
          variant="compactMobile"
          labels={{
            access: 'só de indicação',
            duration: 'acesso imediato',
            retention: 'assista no seu ritmo',
            students: 'para atrair clientes',
          }}
        />
      </LazySection>
      <SectionDivider />
      <LazySection minHeight={680}>
        <ResultsCarousel
          photos={agendaCheiaProofPhotos}
          variant="dark"
          copy={{
            badge: '• Resultados reais',
            title:
              'Esses são agendamentos reais. O próximo pode ser o seu.',
            titleAccent: 'O próximo pode ser o seu.',
            subtitle:
              'Lash designers que pararam de esperar indicação e construíram uma máquina de clientes no WhatsApp e Instagram.',
          }}
        />
      </LazySection>
      <LazySection minHeight={760}>
        <CreatorSection
          data={agendaCheiaPageData}
          copy={{ badge: 'Quem vai te guiar' }}
        />
      </LazySection>
      <SectionDivider />
      <LazySection minHeight={1240} rootMargin="1600px 0px">
        <TestimonialsCarousel
          variant="painPoints"
          copy={{
            badge: '• Por que isso acontece',
            title:
              'Por que muitas lash designers não conseguem encher a agenda?',
          }}
          proofCards={[
            {
              icon: '📱',
              title: 'Dependem só do orgânico',
              description:
                'Postam todo dia esperando o algoritmo trabalhar por elas — sem nenhum controle sobre quantos clientes chegam.',
            },
            {
              icon: '💸',
              title: 'Não investem em tráfego pago',
              description:
                'Ficam reféns da indicação enquanto poderiam ter anúncios trazendo clientes toda semana com R$10 por dia.',
            },
            {
              icon: '💬',
              title: 'Não conduzem o WhatsApp',
              description:
                'Respondem interessadas de forma solta, sem roteiro, e perdem o agendamento na conversa.',
            },
            {
              icon: '🎯',
              title: 'Não têm sistema de captação',
              description:
                'Não têm posicionamento, oferta clara nem rotina de atrair clientes — dependem da sorte.',
            },
          ]}
        />
      </LazySection>
      <LazySection minHeight={780}>
        <BenefitsGrid
          data={agendaCheiaPageData}
          copy={{
            badge: 'Transformação',
            title:
              'O que muda quando você aprende a vender seus horários',
          }}
        />
      </LazySection>
      <LazySection minHeight={680}>
        <ForWhoSection
          data={agendaCheiaPageData}
          copy={{
            noTitle: 'Não é para você',
            title: 'Esse treinamento foi feito para você se...',
            yesTitle: 'Para você',
          }}
        />
      </LazySection>
      <LazySection minHeight={720}>
        <OfferStack
          data={agendaCheiaPageData}
          copy={{
            badge: 'Oferta especial',
            cta: 'Quero acessar agora',
            items: agendaCheiaPageData.offerItems,
            note: 'Acesso completo por apenas R$30',
          }}
        />
      </LazySection>
      <LazySection minHeight={760}>
        <BonusSection
          data={agendaCheiaPageData}
          copy={{
            title: 'Você ainda recebe',
            valueLabel: 'Bônus incluso',
          }}
        />
      </LazySection>
      <LazySection minHeight={440}>
        <GuaranteeSection data={agendaCheiaPageData} />
      </LazySection>
      <LazySection minHeight={620}>
        <FAQAccordion data={agendaCheiaPageData} />
      </LazySection>
      <LazySection minHeight={540}>
        <FinalCTA
          data={agendaCheiaPageData}
          copy={{
            bullets: [
              'Treinamento completo online',
              'Estratégia para Instagram e WhatsApp',
              'Garantia incondicional de 7 dias',
            ],
            cta: 'Quero acessar agora',
            title:
              'Você não precisa ser a lash mais barata. Precisa saber vender seus horários.',
          }}
        />
      </LazySection>
    </main>
  )
}
