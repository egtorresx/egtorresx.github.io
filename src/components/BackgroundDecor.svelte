<!--
  Translucent SVG background decorations themed around
  software development, ETL pipelines, and AI/ML.
  All elements use pointer-events:none and very low opacity
  so they never interfere with page content.
-->

<div
  aria-hidden="true"
  class="fixed inset-0 overflow-hidden pointer-events-none select-none z-0"
>
  <!-- ───────────────────────────────────────────────
       TOP-LEFT  →  Neural-network / AI brain nodes
  ─────────────────────────────────────────────────── -->
  <svg
    class="absolute -top-16 -left-16 w-80 h-80 opacity-[0.055]"
    viewBox="0 0 320 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Input layer -->
    <circle cx="40" cy="80"  r="14" fill="#256EFF"/>
    <circle cx="40" cy="160" r="14" fill="#256EFF"/>
    <circle cx="40" cy="240" r="14" fill="#256EFF"/>
    <!-- Hidden layer 1 -->
    <circle cx="140" cy="60"  r="14" fill="#46237A"/>
    <circle cx="140" cy="130" r="14" fill="#46237A"/>
    <circle cx="140" cy="200" r="14" fill="#46237A"/>
    <circle cx="140" cy="270" r="14" fill="#46237A"/>
    <!-- Hidden layer 2 -->
    <circle cx="220" cy="100" r="14" fill="#256EFF"/>
    <circle cx="220" cy="180" r="14" fill="#256EFF"/>
    <circle cx="220" cy="260" r="14" fill="#256EFF"/>
    <!-- Output layer -->
    <circle cx="300" cy="130" r="14" fill="#46237A"/>
    <circle cx="300" cy="210" r="14" fill="#46237A"/>
    <!-- Connections (all from input to h1) -->
    <line x1="54" y1="80"  x2="126" y2="60"  stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="80"  x2="126" y2="130" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="80"  x2="126" y2="200" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="80"  x2="126" y2="270" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="160" x2="126" y2="60"  stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="160" x2="126" y2="130" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="160" x2="126" y2="200" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="160" x2="126" y2="270" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="240" x2="126" y2="130" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="240" x2="126" y2="200" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="54" y1="240" x2="126" y2="270" stroke="#256EFF" stroke-width="1.5"/>
    <!-- h1 to h2 -->
    <line x1="154" y1="60"  x2="206" y2="100" stroke="#46237A" stroke-width="1.5"/>
    <line x1="154" y1="60"  x2="206" y2="180" stroke="#46237A" stroke-width="1.5"/>
    <line x1="154" y1="130" x2="206" y2="100" stroke="#46237A" stroke-width="1.5"/>
    <line x1="154" y1="130" x2="206" y2="180" stroke="#46237A" stroke-width="1.5"/>
    <line x1="154" y1="130" x2="206" y2="260" stroke="#46237A" stroke-width="1.5"/>
    <line x1="154" y1="200" x2="206" y2="100" stroke="#46237A" stroke-width="1.5"/>
    <line x1="154" y1="200" x2="206" y2="180" stroke="#46237A" stroke-width="1.5"/>
    <line x1="154" y1="200" x2="206" y2="260" stroke="#46237A" stroke-width="1.5"/>
    <line x1="154" y1="270" x2="206" y2="180" stroke="#46237A" stroke-width="1.5"/>
    <line x1="154" y1="270" x2="206" y2="260" stroke="#46237A" stroke-width="1.5"/>
    <!-- h2 to output -->
    <line x1="234" y1="100" x2="286" y2="130" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="234" y1="100" x2="286" y2="210" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="234" y1="180" x2="286" y2="130" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="234" y1="180" x2="286" y2="210" stroke="#256EFF" stroke-width="1.5"/>
    <line x1="234" y1="260" x2="286" y2="210" stroke="#256EFF" stroke-width="1.5"/>
  </svg>

  <!-- ───────────────────────────────────────────────
       TOP-RIGHT  →  ETL Pipeline (Extract→Transform→Load)
  ─────────────────────────────────────────────────── -->
  <svg
    class="absolute -top-8 -right-8 w-96 h-72 opacity-[0.055]"
    viewBox="0 0 380 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Database cylinder — Extract -->
    <ellipse cx="60" cy="60" rx="40" ry="14" fill="#256EFF"/>
    <rect x="20" y="60" width="80" height="60" fill="#256EFF"/>
    <ellipse cx="60" cy="120" rx="40" ry="14" fill="#1355D4"/>
    <ellipse cx="60" cy="60" rx="40" ry="14" fill="#5590FF"/>
    <!-- Stack lines on cylinder -->
    <ellipse cx="60" cy="80" rx="40" ry="14" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.4"/>
    <ellipse cx="60" cy="100" rx="40" ry="14" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.4"/>

    <!-- Arrow Extract→Transform -->
    <line x1="104" y1="90" x2="155" y2="90" stroke="#256EFF" stroke-width="3"/>
    <polygon points="155,83 168,90 155,97" fill="#256EFF"/>

    <!-- Gear / Transform -->
    <g transform="translate(200,90)">
      <circle cx="0" cy="0" r="28" fill="#46237A"/>
      <circle cx="0" cy="0" r="14" fill="#46237A"/>
      <!-- Gear teeth -->
      <rect x="-4" y="-36" width="8" height="12" rx="2" fill="#46237A"/>
      <rect x="-4"  y="24" width="8" height="12" rx="2" fill="#46237A"/>
      <rect x="24" y="-4" width="12" height="8" rx="2" fill="#46237A"/>
      <rect x="-36" y="-4" width="12" height="8" rx="2" fill="#46237A"/>
      <rect x="17" y="-22" width="12" height="8" rx="2" fill="#46237A" transform="rotate(45 17 -22)"/>
      <rect x="-29" y="-22" width="12" height="8" rx="2" fill="#46237A" transform="rotate(-45 -29 -22)"/>
      <rect x="17" y="16" width="12" height="8" rx="2" fill="#46237A" transform="rotate(-45 17 16)"/>
      <rect x="-29" y="16" width="12" height="8" rx="2" fill="#46237A" transform="rotate(45 -29 16)"/>
    </g>

    <!-- Arrow Transform→Load -->
    <line x1="232" y1="90" x2="283" y2="90" stroke="#46237A" stroke-width="3"/>
    <polygon points="283,83 296,90 283,97" fill="#46237A"/>

    <!-- Cloud / Load destination -->
    <circle cx="340" cy="80" r="22" fill="#256EFF"/>
    <circle cx="318" cy="90" r="16" fill="#256EFF"/>
    <circle cx="362" cy="90" r="16" fill="#256EFF"/>
    <rect x="316" y="90" width="48" height="20" rx="0" fill="#256EFF"/>
    <!-- Cloud base line -->
    <rect x="310" y="104" width="60" height="6" rx="3" fill="#1355D4"/>

    <!-- Labels -->
    <text x="44" y="152" font-family="monospace" font-size="11" fill="#256EFF">Extract</text>
    <text x="183" y="135" font-family="monospace" font-size="11" fill="#46237A">Transform</text>
    <text x="322" y="130" font-family="monospace" font-size="11" fill="#256EFF">Load</text>

    <!-- Data packets flowing along pipeline -->
    <rect x="115" y="84" width="16" height="12" rx="3" fill="#5590FF" opacity="0.7"/>
    <rect x="130" y="84" width="16" height="12" rx="3" fill="#88B2FF" opacity="0.5"/>
    <rect x="245" y="84" width="16" height="12" rx="3" fill="#46237A" opacity="0.7"/>
    <rect x="260" y="84" width="16" height="12" rx="3" fill="#9a6dd0" opacity="0.5"/>
  </svg>

  <!-- ───────────────────────────────────────────────
       BOTTOM-LEFT  →  Code brackets & terminal
  ─────────────────────────────────────────────────── -->
  <svg
    class="absolute bottom-20 -left-12 w-72 h-72 opacity-[0.05]"
    viewBox="0 0 280 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Big  </>  symbol -->
    <text
      x="20" y="160"
      font-family="monospace"
      font-size="110"
      font-weight="bold"
      fill="#256EFF"
    >&lt;/&gt;</text>

    <!-- Floating code lines -->
    <rect x="20"  y="185" width="120" height="6" rx="3" fill="#46237A"/>
    <rect x="20"  y="198" width="80"  height="6" rx="3" fill="#256EFF"/>
    <rect x="20"  y="211" width="100" height="6" rx="3" fill="#46237A"/>
    <rect x="20"  y="224" width="60"  height="6" rx="3" fill="#256EFF"/>

    <!-- Terminal cursor blink box -->
    <rect x="20" y="240" width="12" height="18" rx="2" fill="#5590FF"/>
  </svg>

  <!-- ───────────────────────────────────────────────
       BOTTOM-RIGHT  →  Circuit board / AI chip
  ─────────────────────────────────────────────────── -->
  <svg
    class="absolute -bottom-16 -right-16 w-96 h-96 opacity-[0.055]"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Central AI chip -->
    <rect x="130" y="130" width="120" height="120" rx="12" fill="#256EFF"/>
    <rect x="145" y="145" width="90"  height="90"  rx="8"  fill="#0D3EA8"/>
    <!-- "AI" label inside chip -->
    <text x="163" y="207" font-family="monospace" font-size="38" font-weight="bold" fill="#88B2FF">AI</text>

    <!-- Chip pins — top -->
    <rect x="156" y="112" width="8" height="18" rx="2" fill="#5590FF"/>
    <rect x="176" y="112" width="8" height="18" rx="2" fill="#5590FF"/>
    <rect x="196" y="112" width="8" height="18" rx="2" fill="#5590FF"/>
    <rect x="216" y="112" width="8" height="18" rx="2" fill="#5590FF"/>
    <!-- Chip pins — bottom -->
    <rect x="156" y="250" width="8" height="18" rx="2" fill="#5590FF"/>
    <rect x="176" y="250" width="8" height="18" rx="2" fill="#5590FF"/>
    <rect x="196" y="250" width="8" height="18" rx="2" fill="#5590FF"/>
    <rect x="216" y="250" width="8" height="18" rx="2" fill="#5590FF"/>
    <!-- Chip pins — left -->
    <rect x="112" y="156" width="18" height="8" rx="2" fill="#46237A"/>
    <rect x="112" y="176" width="18" height="8" rx="2" fill="#46237A"/>
    <rect x="112" y="196" width="18" height="8" rx="2" fill="#46237A"/>
    <rect x="112" y="216" width="18" height="8" rx="2" fill="#46237A"/>
    <!-- Chip pins — right -->
    <rect x="250" y="156" width="18" height="8" rx="2" fill="#46237A"/>
    <rect x="250" y="176" width="18" height="8" rx="2" fill="#46237A"/>
    <rect x="250" y="196" width="18" height="8" rx="2" fill="#46237A"/>
    <rect x="250" y="216" width="18" height="8" rx="2" fill="#46237A"/>

    <!-- Circuit traces -->
    <polyline points="160,112 160,80 80,80 80,160" stroke="#256EFF" stroke-width="2" fill="none"/>
    <polyline points="220,112 220,60 60,60 60,220" stroke="#46237A" stroke-width="2" fill="none"/>
    <polyline points="160,268 160,300 80,300 80,220" stroke="#256EFF" stroke-width="2" fill="none"/>
    <polyline points="220,268 220,320 60,320 60,260" stroke="#46237A" stroke-width="2" fill="none"/>
    <polyline points="268,160 310,160 310,80 260,80" stroke="#256EFF" stroke-width="2" fill="none"/>
    <polyline points="268,220 320,220 320,300 260,300" stroke="#46237A" stroke-width="2" fill="none"/>
    <!-- Trace end dots -->
    <circle cx="80"  cy="80"  r="5" fill="#5590FF"/>
    <circle cx="60"  cy="60"  r="5" fill="#9a6dd0"/>
    <circle cx="80"  cy="300" r="5" fill="#5590FF"/>
    <circle cx="60"  cy="320" r="5" fill="#9a6dd0"/>
    <circle cx="310" cy="80"  r="5" fill="#5590FF"/>
    <circle cx="320" cy="300" r="5" fill="#9a6dd0"/>
  </svg>

  <!-- ───────────────────────────────────────────────
       CENTER-LEFT  →  Data flow / stream lines
  ─────────────────────────────────────────────────── -->
  <svg
    class="absolute top-1/3 -left-8 w-48 h-64 opacity-[0.04]"
    viewBox="0 0 180 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Wavy data stream lines -->
    <path d="M10 20 Q 60 0, 110 20 Q 160 40, 170 20" stroke="#256EFF" stroke-width="3" fill="none"/>
    <path d="M10 50 Q 60 30, 110 50 Q 160 70, 170 50" stroke="#46237A" stroke-width="3" fill="none"/>
    <path d="M10 80 Q 60 60, 110 80 Q 160 100, 170 80" stroke="#256EFF" stroke-width="3" fill="none"/>
    <path d="M10 110 Q 60 90, 110 110 Q 160 130, 170 110" stroke="#46237A" stroke-width="3" fill="none"/>
    <path d="M10 140 Q 60 120, 110 140 Q 160 160, 170 140" stroke="#256EFF" stroke-width="3" fill="none"/>
    <path d="M10 170 Q 60 150, 110 170 Q 160 190, 170 170" stroke="#46237A" stroke-width="3" fill="none"/>
    <path d="M10 200 Q 60 180, 110 200 Q 160 220, 170 200" stroke="#256EFF" stroke-width="3" fill="none"/>
    <!-- Data points on lines -->
    <circle cx="40"  cy="16"  r="4" fill="#5590FF"/>
    <circle cx="90"  cy="24"  r="4" fill="#9a6dd0"/>
    <circle cx="140" cy="14"  r="4" fill="#5590FF"/>
    <circle cx="40"  cy="76"  r="4" fill="#9a6dd0"/>
    <circle cx="90"  cy="84"  r="4" fill="#5590FF"/>
    <circle cx="40"  cy="136" r="4" fill="#5590FF"/>
    <circle cx="140" cy="144" r="4" fill="#9a6dd0"/>
  </svg>

  <!-- ───────────────────────────────────────────────
       CENTER-RIGHT  →  Floating database stacks
  ─────────────────────────────────────────────────── -->
  <svg
    class="absolute top-1/2 -right-6 w-40 h-72 opacity-[0.05]"
    viewBox="0 0 140 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Stack 1 -->
    <ellipse cx="70" cy="30"  rx="46" ry="14" fill="#46237A"/>
    <rect x="24" y="30" width="92" height="40" fill="#46237A"/>
    <ellipse cx="70" cy="70"  rx="46" ry="14" fill="#46237A"/>
    <ellipse cx="70" cy="30"  rx="46" ry="14" fill="#6a3aad"/>

    <!-- Stack 2 (slightly smaller) -->
    <ellipse cx="70" cy="120" rx="38" ry="12" fill="#256EFF"/>
    <rect x="32" y="120" width="76" height="34" fill="#256EFF"/>
    <ellipse cx="70" cy="154" rx="38" ry="12" fill="#0D3EA8"/>
    <ellipse cx="70" cy="120" rx="38" ry="12" fill="#5590FF"/>

    <!-- Stack 3 (smallest) -->
    <ellipse cx="70" cy="200" rx="28" ry="10" fill="#46237A"/>
    <rect x="42" y="200" width="56" height="26" fill="#46237A"/>
    <ellipse cx="70" cy="226" rx="28" ry="10" fill="#46237A"/>
    <ellipse cx="70" cy="200" rx="28" ry="10" fill="#9a6dd0"/>

    <!-- Connection lines between stacks -->
    <line x1="70" y1="84"  x2="70" y2="108" stroke="#256EFF" stroke-width="2" stroke-dasharray="4,3"/>
    <line x1="70" y1="166" x2="70" y2="190" stroke="#46237A" stroke-width="2" stroke-dasharray="4,3"/>
  </svg>

  <!-- ───────────────────────────────────────────────
       MIDDLE  →  Subtle floating binary/hex dots
  ─────────────────────────────────────────────────── -->
  <svg
    class="absolute top-1/4 left-1/4 w-80 h-80 opacity-[0.03]"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text x="0"   y="30"  font-family="monospace" font-size="13" fill="#256EFF">01101000 01100101</text>
    <text x="0"   y="60"  font-family="monospace" font-size="13" fill="#46237A">11001010 00110011</text>
    <text x="0"   y="90"  font-family="monospace" font-size="13" fill="#256EFF">10110101 11100001</text>
    <text x="0"   y="120" font-family="monospace" font-size="13" fill="#46237A">00101110 01010101</text>
    <text x="0"   y="150" font-family="monospace" font-size="13" fill="#256EFF">11010011 10001100</text>
    <text x="0"   y="180" font-family="monospace" font-size="13" fill="#46237A">01110110 00111010</text>
    <text x="0"   y="210" font-family="monospace" font-size="13" fill="#256EFF">10001011 11000101</text>
    <text x="0"   y="240" font-family="monospace" font-size="13" fill="#46237A">00011100 10110011</text>
    <text x="0"   y="270" font-family="monospace" font-size="13" fill="#256EFF">11100001 00101011</text>
  </svg>
</div>
