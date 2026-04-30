import React from "react";
import Nav from "./components/Nav";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import AutumnVibe from "./components/AutumnVibe";
import History from "./components/History";
import Tokenomics from "./components/Tokenomics";
import HowToBuy from "./components/HowToBuy";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #061206; }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero-section {
          width: 100%;
        }
        .content-section {
          width: 100%;
        }
        .history-grid,
        .tokenomics-grid,
        .how-to-buy-grid {
          width: 100%;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .button-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-links {
          display: flex;
          gap: 28px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .top-nav .nav-links,
        .top-nav .nav-actions {
          align-items: center;
        }
        @media (max-width: 980px) {
          .top-nav {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 16px !important;
            padding: 16px 20px !important;
          }
          .top-nav .nav-links {
            justify-content: center !important;
            flex-wrap: wrap !important;
            gap: 14px !important;
          }
          .top-nav .nav-actions {
            justify-content: center !important;
            flex-wrap: wrap !important;
          }
          .top-nav .nav-copy-button {
            align-self: center !important;
          }
          .hero-section {
            padding: 100px 16px 60px !important;
          }
          .content-section {
            padding: 70px 16px !important;
          }
          .history-grid,
          .tokenomics-grid,
          .how-to-buy-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-actions a,
          .button-row a,
          .button-row button {
            width: 100% !important;
            max-width: 360px;
            display: inline-flex !important;
            justify-content: center !important;
          }
          .footer-links {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-section {
            padding: 90px 14px 50px !important;
          }
          .content-section {
            padding: 56px 14px !important;
          }
          .top-nav {
            padding: 14px 14px !important;
          }
          .top-nav .nav-links {
            gap: 12px !important;
          }
          .top-nav .nav-actions {
            gap: 8px !important;
          }
          .top-nav .nav-copy-button {
            width: 100% !important;
          }
          .hero-section h1 {
            font-size: clamp(56px, 18vw, 92px) !important;
          }
          .hero-actions a,
          .button-row a,
          .button-row button {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
      <Nav />
      <div style={{ marginTop: 60 }}>
        <Ticker />
      </div>
      <Hero />
      <AutumnVibe />
      <History />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </>
  );
}
