import React from "react";

export default function Tokenomics() {
  const cards = [
    {
      icon: "🐢",
      label: "Total Supply",
      value: "1B",
      desc: "1,000,000,000 $TORTOISE",
    },
    { icon: "🔥", label: "Burn", value: "0%", desc: "No tokens burned" },
    { icon: "💼", label: "Tax", value: "0/0", desc: "Zero buy/sell tax" },
    {
      icon: "🔒",
      label: "LP",
      value: "Locked",
      desc: "Liquidity locked forever",
    },
  ];
  const pie = [
    { label: "Community", pct: 60, color: "#256325" },
    { label: "Liquidity", pct: 20, color: "#3a8a34" },
    { label: "Marketing", pct: 10, color: "#52b84a" },
    { label: "Dev", pct: 10, color: "#c8860a" },
  ];

  const makePie = () => {
    const cx = 100,
      cy = 100,
      r = 80;
    let start = -90;
    return pie.map(({ pct, color }, i) => {
      const deg = pct * 3.6;
      const rad1 = (start * Math.PI) / 180;
      const rad2 = ((start + deg) * Math.PI) / 180;
      const x1 = cx + r * Math.cos(rad1),
        y1 = cy + r * Math.sin(rad1);
      const x2 = cx + r * Math.cos(rad2),
        y2 = cy + r * Math.sin(rad2);
      const large = deg > 180 ? 1 : 0;
      const d = `M${cx} ${cy} L${x1} ${y1} A${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
      start += deg;
      return <path key={i} d={d} fill={color} />;
    });
  };

  return (
    <section
      id="tokenomics"
      style={{ background: "#081508", padding: "90px 20px" }}
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
        Tokenomics
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
        The Shell Structure 🐢
      </h2>

      <div
        className="tokenomics-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: 20,
          maxWidth: 860,
          margin: "0 auto 48px",
        }}
      >
        {cards.map(({ icon, label, value, desc }) => (
          <div
            key={label}
            style={{
              background: "#0a2008",
              borderRadius: 20,
              border: "2px solid #1e5c1a",
              padding: "28px 20px",
              textAlign: "center",
              transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "#3a8a34";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.borderColor = "#1e5c1a";
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 10 }}>{icon}</div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: "#52b84a",
                textTransform: "uppercase",
                marginBottom: 6,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: 30,
                color: "#7ed870",
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#52b84a",
                marginTop: 6,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {desc}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 380,
          margin: "0 auto",
          background: "#0a2008",
          borderRadius: 24,
          border: "2px solid #1e5c1a",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          width="200"
          style={{ display: "block", margin: "0 auto" }}
        >
          {makePie()}
          <circle cx="100" cy="100" r="42" fill="#0a2008" />
          <text
            x="100"
            y="96"
            textAnchor="middle"
            fontFamily="Fredoka One,cursive"
            fontSize="13"
            fill="#7ed870"
          >
            $TORT
          </text>
          <text
            x="100"
            y="112"
            textAnchor="middle"
            fontFamily="Nunito,sans-serif"
            fontSize="9"
            fontWeight="800"
            fill="#52b84a"
          >
            tokenomics
          </text>
        </svg>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {pie.map(({ label, pct, color }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: 13,
                fontWeight: 700,
                color: "#9ec47a",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: color,
                  flexShrink: 0,
                }}
              />
              {label} {pct}%
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
