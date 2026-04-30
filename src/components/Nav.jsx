import React, { useState } from "react";
import { CA, TELEGRAM, TWITTER, DEXTOOLS, DEXSCREENER } from "../constants";

export default function Nav() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <nav
      className="top-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 40px",
        background: "rgba(10,28,10,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(82,184,74,0.2)",
      }}
    >
      <div className="nav-links" style={{ display: "flex", gap: 32 }}>
        {["History", "Tokenomics", "How to buy"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/ /g, "-")}`}
            style={{
              color: "#7ed870",
              fontWeight: 800,
              fontSize: 14,
              textDecoration: "none",
              letterSpacing: "0.03em",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            {link}
          </a>
        ))}
      </div>
      <button
        className="nav-copy-button"
        onClick={copy}
        style={{
          background: "rgba(82,184,74,0.12)",
          color: "#7ed870",
          border: "1px solid rgba(82,184,74,0.3)",
          borderRadius: 20,
          padding: "6px 14px",
          fontWeight: 700,
          fontSize: 12,
          cursor: "pointer",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        {copied ? "Copied!" : `${CA.slice(0, 6)}...${CA.slice(-5)}`}
      </button>
      <div className="nav-actions" style={{ display: "flex", gap: 10 }}>
        {[
          ["T", TELEGRAM],
          ["X", TWITTER],
          ["D", DEXTOOLS],
          ["DS", DEXSCREENER],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#256325",
              color: "#a8e08a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
