import React from "react";
import { TELEGRAM, TWITTER, DEXTOOLS, DEXSCREENER } from "../constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#040e04",
        color: "#6aaa50",
        padding: "56px 20px 36px",
        textAlign: "center",
        borderTop: "4px solid #1e5c1a",
      }}
    >
      <div
        style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 54,
          color: "#7ed870",
          marginBottom: 6,
        }}
      >
        $TORTOISE
      </div>
      <p
        style={{
          fontSize: 14,
          color: "#52b84a",
          marginBottom: 28,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        Slow & Steady to 100M MC 🐢
      </p>
      <div
        className="footer-links"
        style={{
          display: "flex",
          gap: 28,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 28,
        }}
      >
        {[
          ["History", "#history"],
          ["Tokenomics", "#tokenomics"],
          ["How to buy", "#how-to-buy"],
        ].map(([t, h]) => (
          <a
            key={t}
            href={h}
            style={{
              color: "#a8e08a",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            {t}
          </a>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        {[
          ["T", TELEGRAM],
          ["X", TWITTER],
          ["DT", DEXTOOLS],
          ["DS", DEXSCREENER],
        ].map(([l, h]) => (
          <a
            key={l}
            href={h}
            target="_blank"
            rel="noreferrer"
            style={{
              width: 40,
              height: 40,
              background: "rgba(82,184,74,0.12)",
              borderRadius: "50%",
              color: "#a8e08a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 13,
              textDecoration: "none",
              border: "1px solid rgba(82,184,74,0.25)",
            }}
          >
            {l}
          </a>
        ))}
      </div>
      <p
        style={{
          maxWidth: 600,
          margin: "0 auto 20px",
          fontSize: 12,
          color: "#3a6e34",
          lineHeight: 1.75,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        Everything you see is created with love for the fall vibe and
        cryptoculture. The $TORTOISE project is not financial advice and the
        token should not be taken as an investment tool. Always do your own
        research and make informed decisions.
      </p>
      <p
        style={{
          fontSize: 12,
          color: "rgba(82,184,74,0.3)",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        Rights reserved © 2026. All rights reserved. The project is based on the
        inspiration of Matt Furie's work.
      </p>
    </footer>
  );
}
