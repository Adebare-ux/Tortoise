import React from "react";

export default function TortoiseSmall() {
  return (
    <svg
      viewBox="0 0 200 180"
      width="180"
      style={{ maxWidth: "100%", height: "auto", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="100" cy="125" rx="70" ry="48" fill="#3a8a34" />
      <ellipse cx="100" cy="114" rx="60" ry="42" fill="#256325" />
      <g fill="none" stroke="#4aab3f" strokeWidth="1.5" opacity="0.7">
        <polygon points="100,82 114,90 114,106 100,114 86,106 86,90" />
        <polygon points="122,92 136,100 136,116 122,124 108,116 108,100" />
        <polygon points="78,92 92,100 92,116 78,124 64,116 64,100" />
      </g>
      <ellipse
        cx="100"
        cy="125"
        rx="70"
        ry="48"
        fill="none"
        stroke="#164d16"
        strokeWidth="2.5"
      />
      <ellipse cx="100" cy="68" rx="28" ry="25" fill="#52b84a" />
      <circle cx="90" cy="62" r="7" fill="#fff" />
      <circle cx="110" cy="62" r="7" fill="#fff" />
      <circle cx="91" cy="63" r="3.5" fill="#0d1f0d" />
      <circle cx="111" cy="63" r="3.5" fill="#0d1f0d" />
      <path
        d="M87 73 Q100 82 113 73"
        stroke="#164d16"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse
        cx="42"
        cy="148"
        rx="20"
        ry="12"
        fill="#52b84a"
        transform="rotate(-18 42 148)"
      />
      <ellipse
        cx="158"
        cy="148"
        rx="20"
        ry="12"
        fill="#52b84a"
        transform="rotate(18 158 148)"
      />
      <circle cx="28" cy="154" r="5" fill="#3a8a34" />
      <circle cx="38" cy="160" r="5" fill="#3a8a34" />
      <circle cx="162" cy="160" r="5" fill="#3a8a34" />
      <circle cx="172" cy="154" r="5" fill="#3a8a34" />
    </svg>
  );
}
