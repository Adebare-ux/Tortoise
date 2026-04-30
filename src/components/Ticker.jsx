import React from "react";

export default function Ticker() {
  const items = [
    "$TORTOISE",
    "SLOW & STEADY WINS",
    "100M MC INCOMING",
    "BOYS CLUB FAMILY",
    "MATT FURIE INSPIRED",
    "0 TAX",
    "LP LOCKED",
  ];
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        background: "#1e5c1a",
        overflow: "hidden",
        padding: "10px 0",
        borderTop: "2px solid #2d8a28",
        borderBottom: "2px solid #2d8a28",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "ticker 22s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            style={{
              padding: "0 28px",
              color: "#a8e08a",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.07em",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {t}
            <span style={{ color: "#52b84a", fontSize: 8 }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
