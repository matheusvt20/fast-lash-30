export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <style>{`
        .section-divider {
          align-items: center;
          background: #0D0D0D;
          box-sizing: border-box;
          display: flex;
          padding: 0 80px;
          width: 100%;
        }

        .section-divider-line {
          flex: 1;
          height: 1px;
          opacity: 0.4;
        }

        .section-divider-line-left {
          background: linear-gradient(to right, transparent, #C9944A);
        }

        .section-divider-line-right {
          background: linear-gradient(to left, transparent, #C9944A);
        }

        .section-divider-icon {
          color: #C9944A;
          flex-shrink: 0;
          font-size: 14px;
          line-height: 1;
          padding: 0 16px;
        }

        @media (max-width: 767px) {
          .section-divider {
            padding: 0 20px;
          }
        }
      `}</style>
      <span className="section-divider-line section-divider-line-left" />
      <span className="section-divider-icon">◆</span>
      <span className="section-divider-line section-divider-line-right" />
    </div>
  )
}
