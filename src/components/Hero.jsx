import React from "react";
import TortoiseHero from "./TortoiseHero";
import { UNISWAP, DEXSCREENER } from "../constants";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px 80px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 50% 0%, #0e3d0a 0%, #061206 65%)",
      }}
    >
      {[
        { top: "10%", left: "4%", rot: 25, color: "#1e5c1a", size: 55 },
        { top: "18%", right: "6%", rot: -18, color: "#2d8a28", size: 44 },
        { bottom: "22%", left: "8%", rot: 30, color: "#c8860a", size: 48 },
        { bottom: "28%", right: "10%", rot: -12, color: "#1e5c1a", size: 38 },
        { top: "50%", left: "2%", rot: 15, color: "#3a8a34", size: 30 },
        { top: "40%", right: "3%", rot: -28, color: "#3a8a34", size: 34 },
      ].map((l, i) => (
        <svg
          key={i}
          style={{
            position: "absolute",
            ...Object.fromEntries(
              Object.entries(l).filter(([k]) =>
                ["top", "bottom", "left", "right"].includes(k),
              ),
            ),
            opacity: 0.2,
            pointerEvents: "none",
          }}
          viewBox="0 0 60 80"
          width={l.size}
        >
          <ellipse
            cx="30"
            cy="40"
            rx="22"
            ry="34"
            fill={l.color}
            transform={`rotate(${l.rot} 30 40)`}
          />
          <line
            x1="30"
            y1="10"
            x2="30"
            y2="70"
            stroke={l.color}
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      ))}

      <div
        style={{
          background: "rgba(82,184,74,0.12)",
          color: "#7ed870",
          border: "1px solid rgba(82,184,74,0.3)",
          borderRadius: 24,
          padding: "6px 20px",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 24,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        the patient one of boys club
      </div>

      <div
        style={{
          animation: "float 3.8s ease-in-out infinite",
          marginBottom: 20,
          width: "100%",
          maxWidth: 360,
        }}
      >
        <TortoiseHero size={300} />
      </div>

      <h1
        style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: "clamp(72px,13vw,128px)",
          color: "#7ed870",
          lineHeight: 1,
          textAlign: "center",
          margin: "0 0 12px",
          textShadow: "0 4px 40px rgba(82,184,74,0.35)",
        }}
      >
        $TORTOISE
      </h1>

      <p
        style={{
          fontSize: 18,
          color: "#9ec47a",
          fontWeight: 600,
          marginBottom: 40,
          textAlign: "center",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        The most patient member of Boys Club 🐢
      </p>

      <div
        className="hero-actions"
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href={UNISWAP}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#256325",
            color: "#a8e08a",
            padding: "14px 32px",
            borderRadius: 32,
            fontWeight: 800,
            fontSize: 16,
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
            padding: "14px 32px",
            borderRadius: 32,
            fontWeight: 800,
            fontSize: 16,
            textDecoration: "none",
            border: "2px solid #3a8a34",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          📊 View Chart
        </a>
      </div>
    </section>
  );
}
