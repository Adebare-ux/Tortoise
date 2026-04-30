import React from "react";

export default function TortoiseHero({ size = 320 }) {
  return (
    <svg
      viewBox="0 0 340 280"
      width={size}
      style={{ maxWidth: "100%", height: "auto", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="170" cy="268" rx="100" ry="10" fill="rgba(45,106,45,0.13)" />
      <ellipse cx="170" cy="168" rx="112" ry="82" fill="#3a8a34" />
      <ellipse cx="170" cy="152" rx="96" ry="72" fill="#256325" />
      <g fill="none" stroke="#4aab3f" strokeWidth="2" opacity="0.65">
        <polygon points="170,92 193,104 193,130 170,142 147,130 147,104" />
        <polygon points="210,112 233,124 233,150 210,162 187,150 187,124" />
        <polygon points="130,112 153,124 153,150 130,162 107,150 107,124" />
        <polygon points="170,142 193,154 193,180 170,192 147,180 147,154" />
        <polygon points="218,138 241,150 241,176 218,188 195,176 195,150" />
        <polygon points="122,138 145,150 145,176 122,188 99,176 99,150" />
      </g>
      <ellipse cx="170" cy="138" rx="28" ry="20" fill="rgba(123,198,90,0.22)" />
      <ellipse
        cx="170"
        cy="168"
        rx="112"
        ry="82"
        fill="none"
        stroke="#164d16"
        strokeWidth="3.5"
      />
      <ellipse cx="170" cy="100" rx="24" ry="14" fill="#52b84a" />
      <ellipse cx="170" cy="76" rx="38" ry="33" fill="#52b84a" />
      <ellipse cx="158" cy="65" rx="15" ry="10" fill="rgba(130,210,100,0.35)" />
      <circle cx="157" cy="67" r="10" fill="#fff" />
      <circle cx="183" cy="67" r="10" fill="#fff" />
      <circle cx="159" cy="68" r="5.5" fill="#0d1f0d" />
      <circle cx="185" cy="68" r="5.5" fill="#0d1f0d" />
      <circle cx="160" cy="66" r="2" fill="#fff" />
      <circle cx="186" cy="66" r="2" fill="#fff" />
      <path
        d="M154 82 Q170 96 186 82"
        stroke="#164d16"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="166" cy="76" r="3" fill="#164d16" />
      <circle cx="174" cy="76" r="3" fill="#164d16" />
      <rect x="146" y="30" width="48" height="8" rx="4" fill="#7a5320" />
      <rect x="154" y="9" width="32" height="24" rx="7" fill="#4f3412" />
      <rect
        x="157"
        y="12"
        width="10"
        height="7"
        rx="2"
        fill="rgba(255,255,255,0.18)"
      />
      <ellipse
        cx="75"
        cy="215"
        rx="28"
        ry="17"
        fill="#52b84a"
        transform="rotate(-22 75 215)"
      />
      <ellipse
        cx="265"
        cy="215"
        rx="28"
        ry="17"
        fill="#52b84a"
        transform="rotate(22 265 215)"
      />
      <circle cx="53" cy="224" r="7.5" fill="#3a8a34" />
      <circle cx="67" cy="232" r="7.5" fill="#3a8a34" />
      <circle cx="82" cy="234" r="7.5" fill="#3a8a34" />
      <circle cx="287" cy="224" r="7.5" fill="#3a8a34" />
      <circle cx="273" cy="232" r="7.5" fill="#3a8a34" />
      <circle cx="258" cy="234" r="7.5" fill="#3a8a34" />
      <ellipse
        cx="105"
        cy="228"
        rx="23"
        ry="13"
        fill="#3a8a34"
        transform="rotate(18 105 228)"
      />
      <ellipse
        cx="235"
        cy="228"
        rx="23"
        ry="13"
        fill="#3a8a34"
        transform="rotate(-18 235 228)"
      />
      <ellipse cx="170" cy="248" rx="13" ry="7" fill="#52b84a" />
    </svg>
  );
}
