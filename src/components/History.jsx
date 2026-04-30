import React from "react";
import TortoiseSmall from "./TortoiseSmall";
import { UNISWAP, TELEGRAM } from "../constants";

export default function History() {
  return (
    <section
      id="history"
      className="content-section"
      style={{
        background: "#061206",
        padding: "90px 20px",
        borderTop: "4px solid #1a4a12",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#52b84a",
          marginBottom: 10,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        History
      </p>
      <h2
        style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: "clamp(36px,5vw,56px)",
          color: "#7ed870",
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        Who is $TORTOISE?
      </h2>
      <div
        className="history-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          maxWidth: 900,
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 16,
            lineHeight: 1.85,
            color: "#9ec47a",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          <p>
            <strong style={{ color: "#7ed870" }}>$TORTOISE</strong> and Boys
            Club are the children of the great{" "}
            <strong style={{ color: "#7ed870" }}>Matt Furie</strong>, a creator
            whose characters have become part of cryptohistory.
          </p>
          <br />
          <p>
            Slow, wise, and unstoppable — the tortoise is a symbol of{" "}
            <strong style={{ color: "#7ed870" }}>
              patience and determination
            </strong>
            . While others rush, $TORTOISE walks with purpose. Every step is
            intentional. Every pump is earned.
          </p>
          <br />
          <p>
            <strong style={{ color: "#7ed870" }}>$TORTOISE is proud</strong> of
            its great father and is always ready to share this vibe with you.
            The shell holds many secrets, and the road to 100M MC is paved one
            steady step at a time.
          </p>
          <br />
          <div
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}
          >
            <a
              href={UNISWAP}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#1e5c1a",
                color: "#a8e08a",
                padding: "12px 24px",
                borderRadius: 28,
                fontWeight: 800,
                fontSize: 14,
                textDecoration: "none",
                border: "2px solid #3a8a34",
              }}
            >
              🦄 Buy Now
            </a>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "transparent",
                color: "#7ed870",
                padding: "12px 24px",
                borderRadius: 28,
                fontWeight: 800,
                fontSize: 14,
                textDecoration: "none",
                border: "2px solid #3a8a34",
              }}
            >
              Join us →
            </a>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              background: "#0a2008",
              borderRadius: 24,
              border: "2px solid #1e5c1a",
              padding: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TortoiseSmall />
          </div>
        </div>
      </div>
    </section>
  );
}
