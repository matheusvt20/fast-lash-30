import { useState } from 'react'

import { salesPageData } from '../data/salesPageData'

export default function FAQAccordion() {
  const { faq } = salesPageData
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq-accordion">
      <style>{`
        #faq-accordion {
          background: #FAF8F5;
          padding: 80px;
        }

        #faq-accordion .faq-shell {
          margin: 0 auto;
          max-width: 720px;
        }

        #faq-accordion .faq-badge {
          align-items: center;
          background: #F0EAE0;
          border-radius: 100px;
          color: #7A6440;
          display: inline-flex;
          font-size: 13px;
          padding: 6px 16px;
        }

        #faq-accordion .faq-title {
          color: #1A1A18;
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 700;
          line-height: 1.1;
          margin: 20px 0 0;
        }

        #faq-accordion .faq-list {
          margin-top: 40px;
        }

        #faq-accordion .faq-item {
          border-bottom: 0.5px solid #E0DDD7;
          padding: 20px 0;
        }

        #faq-accordion .faq-question {
          align-items: center;
          background: transparent;
          border: 0;
          color: #1A1A18;
          cursor: pointer;
          display: flex;
          font-size: 15px;
          font-weight: 500;
          justify-content: space-between;
          padding: 0;
          text-align: left;
          width: 100%;
        }

        #faq-accordion .faq-icon {
          color: #C9A96E;
          flex: 0 0 auto;
          font-size: 20px;
          line-height: 1;
          margin-left: 16px;
        }

        #faq-accordion .faq-answer {
          color: #7A7870;
          font-size: 14px;
          line-height: 1.7;
          margin-top: 12px;
        }

        @media (max-width: 767px) {
          #faq-accordion {
            padding: 56px 24px;
          }

          #faq-accordion .faq-title {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="faq-shell">
        <div className="faq-badge">Dúvidas frequentes</div>
        <h2 className="faq-title">Perguntas frequentes</h2>

        <div className="faq-list">
          {faq.map((item, index) => {
            const isOpen = index === openIndex

            return (
              <div key={item.question} className="faq-item">
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen ? (
                  <div className="faq-answer">{item.answer}</div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
