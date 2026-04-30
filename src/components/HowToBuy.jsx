import React, { useState } from "react";
import { CA, UNISWAP, DEXSCREENER, DEXTOOLS } from "../constants";

export default function HowToBuy() {
  const [copiedCA, setCopiedCA] = useState(false);
  const steps = [
    {
      n: "01",
      title: "Get a Wallet",
      body: "Download MetaMask or any Ethereum-compatible wallet. Create your wallet and safely store your seed phrase.",
    },
    {
      n: "02",
      title: "Get Some ETH",
      body: "Buy ETH on Coinbase, Binance, or your preferred exchange, then send it to your wallet address.",
    },
    {
      n: "03",
      title: "Go to Uniswap",
      body: "Visit app.uniswap.org and connect your wallet. Switch to the Ethereum mainnet.",
    },
    {
      n: "04",
      title: "Swap for $TORTOISE",
      body: "Paste the contract address, set slippage to 2–5%, and confirm your swap. Welcome to the shell!",
    },
  ];

  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 1500);
  };

  return (
    <section
      id="how-to-buy"
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
        How to buy
      </p>
      <h2
        style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: "clamp(36px,5vw,56px)",
          color: "#7ed870",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Get Your $TORTOISE 🚀
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#9ec47a",
          fontSize: 17,
          marginBottom: 48,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        Slow and steady gets the bag. Follow these steps to join the shell.
      </p>

      <div
        className="how-to-buy-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 24,
          maxWidth: 920,
          margin: "0 auto 48px",
        }}
      >
        {steps.map(({ n, title, body }) => (
          <div
            key={n}
            style={{
              background: "#0a2008",
              borderRadius: 20,
              padding: "28px 22px",
              border: "2px solid #1e5c1a",
              transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "#52b84a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.borderColor = "#1e5c1a";
            }}
          >
            <div
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 52,
                color: "#1e5c1a",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {n}
            </div>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: "#7ed870",
                marginBottom: 8,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "#6aaa50",
                lineHeight: 1.65,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {body}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 620,
          margin: "0 auto 36px",
          background: "#256325",
          borderRadius: 16,
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              color: "#a8e08a",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 4,
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Contract Address
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "monospace",
              wordBreak: "break-all",
            }}
          >
            {CA}
          </div>
        </div>
        <button
          onClick={copy}
          style={{
            background: "#7ed870",
            color: "#0a2008",
            border: "none",
            borderRadius: 10,
            padding: "10px 20px",
            fontWeight: 800,
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          {copiedCA ? "Copied!" : "Copy CA"}
        </button>
      </div>

      <div
        className="button-row"
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href={UNISWAP}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#256325",
            color: "#a8e08a",
            padding: "13px 28px",
            borderRadius: 28,
            fontWeight: 800,
            fontSize: 15,
            textDecoration: "none",
            border: "2px solid #3a8a34",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          🦄 Buy on Uniswap
        </a>
        <a
          href={DEXSCREENER}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "transparent",
            color: "#7ed870",
            padding: "13px 28px",
            borderRadius: 28,
            fontWeight: 800,
            fontSize: 15,
            textDecoration: "none",
            border: "2px solid #3a8a34",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          📈 DexScreener
        </a>
        <a
          href={DEXTOOLS}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "transparent",
            color: "#7ed870",
            padding: "13px 28px",
            borderRadius: 28,
            fontWeight: 800,
            fontSize: 15,
            textDecoration: "none",
            border: "2px solid #3a8a34",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          🔧 DexTools
        </a>
      </div>
    </section>
  );
}
