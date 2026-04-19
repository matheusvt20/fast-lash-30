const whatsappLink =
  'https://wa.me/5521990481222?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20Fast%20Lash%2030%2B.'

export default function WhatsAppSupportButton() {
  return (
    <>
      <style>{`
        .whatsapp-support-button {
          align-items: center;
          background: #25D366;
          border-radius: 999px;
          bottom: 20px;
          box-shadow: 0 14px 28px rgba(37, 211, 102, 0.26);
          color: #FFFFFF;
          display: inline-flex;
          height: 54px;
          justify-content: center;
          position: fixed;
          right: 20px;
          transition: transform 120ms ease, box-shadow 120ms ease;
          width: 54px;
          z-index: 40;
        }

        .whatsapp-support-button:hover {
          box-shadow: 0 18px 32px rgba(37, 211, 102, 0.34);
          transform: translateY(-2px);
        }

        .whatsapp-support-button:focus-visible {
          outline: 3px solid rgba(26, 26, 24, 0.2);
          outline-offset: 4px;
        }

        .whatsapp-support-button svg {
          display: block;
          height: 28px;
          width: 28px;
        }

        .sr-only {
          border: 0;
          clip: rect(0, 0, 0, 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }

        @media (max-width: 767px) {
          .whatsapp-support-button {
            bottom: 16px;
            height: 50px;
            right: 16px;
            width: 50px;
          }

          .whatsapp-support-button svg {
            height: 26px;
            width: 26px;
          }
        }
      `}</style>

      <a
        aria-label="Falar com o suporte no WhatsApp"
        className="whatsapp-support-button"
        href={whatsappLink}
        rel="noreferrer"
        target="_blank"
      >
        <span className="sr-only">Falar com o suporte no WhatsApp</span>
        <svg
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.05 4.94A9.86 9.86 0 0 0 12.03 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.47 1.33 4.99L2 22l5.23-1.37a9.93 9.93 0 0 0 4.8 1.22h.01c5.47 0 9.93-4.45 9.93-9.93 0-2.65-1.03-5.14-2.92-7Zm-7.02 15.24h-.01a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.24 8.24 0 0 1-1.27-4.4c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.42a8.22 8.22 0 0 1 2.42 5.85c0 4.56-3.72 8.25-8.29 8.25Zm4.53-6.18c-.25-.13-1.47-.73-1.7-.82-.23-.08-.39-.13-.56.13-.16.25-.65.81-.79.98-.15.16-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.52.11-.11.25-.29.38-.44.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.44-.07-.12-.56-1.35-.76-1.85-.2-.47-.41-.41-.56-.41h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.39 1.01 2.56.13.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z" />
        </svg>
      </a>
    </>
  )
}
