import React from "react";

export default function AutumnVibe() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0a2008 0%, #1a4a12 50%, #0a2008 100%)",
        padding: "90px 20px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.08,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMid slice"
        >
          {[100, 300, 550, 800, 1050, 200, 700, 950].map((x, i) => (
            <ellipse
              key={i}
              cx={x}
              cy={[50, 120, 40, 80, 60, 200, 180, 220][i]}
              rx={[18, 14, 20, 12, 16, 15, 18, 13][i]}
              ry={[28, 22, 30, 20, 25, 24, 28, 21][i]}
              fill="#7bc67a"
              transform={`rotate(${[25, -15, 40, -30, 10, -20, 35, -5][i]} ${x} ${[50, 120, 40, 80, 60, 200, 180, 220][i]})`}
            />
          ))}
        </svg>
      </div>
      <p
        style={{
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#52b84a",
          marginBottom: 10,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        Autumn Vibe
      </p>
      <h2
        style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: "clamp(38px,5vw,58px)",
          color: "#a8e08a",
          marginBottom: 24,
        }}
      >
        Cozy & Steady 🍂
      </h2>
      <p
        style={{
          maxWidth: 700,
          margin: "0 auto",
          fontSize: 17,
          lineHeight: 1.8,
          color: "rgba(200,230,180,0.88)",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        For years now, dear Boys Club buddy,{" "}
        <strong style={{ color: "#7ed870" }}>$TORTOISE</strong>, has been
        gathering everyone at his log to get cozy and warm, spending every fall
        and winter building{" "}
        <strong style={{ color: "#7ed870" }}>BIG PLANS</strong>. No one embodies
        the patience of the seasons like a tortoise, and no one knows how to
        make crazy pumps except Boys Club. Oh, they're not just friends —
        they're a family spawned by their great dad{" "}
        <strong style={{ color: "#7ed870" }}>Matt Furie</strong>.
        <br />
        <br />
        <strong style={{ color: "#7ed870" }}>$TORTOISE</strong> is happy to
        welcome everyone to its cozy shell. Where right before your eyes, a
        legendary tortoise story is being born — who, with the support of Father
        Matt Furie and BoysClub, will make his{" "}
        <strong style={{ color: "#7ed870" }}>100m MC</strong>! Let's spend the
        fall and winter together with $TORTOISE 🧡
      </p>
    </section>
  );
}
