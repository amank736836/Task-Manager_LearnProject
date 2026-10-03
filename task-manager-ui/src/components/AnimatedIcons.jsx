import React from "react";

/**
 * 1. Animated Brand Logo (SVGator #8 Self-Drawing & #10 Animated Logos)
 */
export const AnimatedLogo = ({ size = 42 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: "visible" }}
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="50%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <filter id="logoGlow" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Outer Isometric Hexagon Frame (Self-Drawing) */}
    <path
      d="M24 4L41.32 14V34L24 44L6.68 34V14L24 4Z"
      stroke="url(#logoGrad)"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(99, 102, 241, 0.12)"
      className="svg-self-draw"
    />

    {/* Inner Animated Checkmark & Pulse Path */}
    <path
      d="M16 24.5L21.5 30L32.5 18.5"
      stroke="#10b981"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#logoGlow)"
      className="svg-self-draw"
    />

    {/* Orbiting Accent Node */}
    <circle cx="24" cy="4" r="3" fill="#06b6d4">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 24 24"
        to="360 24 24"
        dur="9s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

/**
 * 2. Morphing Sun / Moon Theme Switcher Icon (SVGator #9 Morphing & #11 Animated Icons)
 */
export const ThemeMorphIcon = ({ theme = "dark" }) => {
  const isDark = theme === "dark";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        transition: "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: isDark ? "rotate(0deg)" : "rotate(180deg)",
      }}
    >
      {isDark ? (
        <>
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            stroke="#a5b4fc"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(165, 180, 252, 0.2)"
          />
          <circle cx="19" cy="5" r="1.2" fill="#38bdf8">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="15" cy="3" r="0.9" fill="#c084fc">
            <animate
              attributeName="opacity"
              values="1;0.2;1"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </circle>
        </>
      ) : (
        <>
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke="#f59e0b"
            strokeWidth="2.2"
            fill="rgba(245, 158, 11, 0.25)"
          />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
};

/**
 * 3. Animated Task Status Icons (SVGator #8 Self-Drawing & #11 Animated Icons)
 */
export const StatusAnimatedIcon = ({ status, size = 18 }) => {
  if (status === "completed") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="rgba(16, 185, 129, 0.16)"
          stroke="#10b981"
          strokeWidth="1.8"
        />
        <path
          d="M8 12.3L10.8 15.2L16.2 9.5"
          stroke="#10b981"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="svg-check-draw"
        />
      </svg>
    );
  }

  if (status === "in-progress") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="rgba(59, 130, 246, 0.25)"
          strokeWidth="2"
        />
        <path
          d="M12 3a9 9 0 0 1 9 9"
          stroke="#3b82f6"
          strokeWidth="2.3"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </path>
        <circle cx="12" cy="12" r="3" fill="#3b82f6">
          <animate
            attributeName="r"
            values="2.3;3.5;2.3"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    );
  }

  // Default: pending
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="rgba(245, 158, 11, 0.14)"
        stroke="#f59e0b"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.5V12L15 14"
        stroke="#f59e0b"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * 4. Isometric 3D Hero Illustration (SVGator #14 Faux 3D, #19 Isometric, #23 Hero Section)
 */
export const HeroIsometricIllustration = () => (
  <svg
    viewBox="0 0 420 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", maxWidth: "420px", height: "auto" }}
  >
    <defs>
      <linearGradient id="isoCard1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.35)" />
        <stop offset="100%" stopColor="rgba(168, 85, 247, 0.15)" />
      </linearGradient>
      <linearGradient id="isoCard2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.35)" />
        <stop offset="100%" stopColor="rgba(16, 185, 129, 0.15)" />
      </linearGradient>
      <linearGradient id="splineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>

    {/* Background Ambient Orbit Ring */}
    <ellipse
      cx="210"
      cy="155"
      rx="170"
      ry="78"
      stroke="url(#splineStroke)"
      strokeWidth="1.2"
      strokeDasharray="6 6"
      opacity="0.45"
    />

    {/* Floating Base Isometric Board */}
    <g className="floating-3d">
      <rect
        x="55"
        y="48"
        width="235"
        height="150"
        rx="18"
        fill="url(#isoCard1)"
        stroke="rgba(129, 140, 248, 0.45)"
        strokeWidth="1.5"
      />
      {/* Header Dots */}
      <circle cx="80" cy="72" r="4.5" fill="#f43f5e" />
      <circle cx="96" cy="72" r="4.5" fill="#f59e0b" />
      <circle cx="112" cy="72" r="4.5" fill="#10b981" />

      {/* Self-Drawing Analytics Wave Inside Hero Card */}
      <path
        d="M78 158 C 110 150, 125 110, 158 124 C 190 138, 210 92, 242 98 C 258 100, 265 82, 272 78"
        stroke="url(#splineStroke)"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="svg-self-draw"
      />

      {/* Simulated Task Rows */}
      <rect
        x="78"
        y="94"
        width="92"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.55)"
      />
      <rect
        x="78"
        y="110"
        width="64"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.28)"
      />
    </g>

    {/* Foreground Floating Kanban Mini Card */}
    <g className="floating-3d-delayed">
      <rect
        x="195"
        y="118"
        width="175"
        height="122"
        rx="16"
        fill="url(#isoCard2)"
        stroke="rgba(6, 182, 212, 0.55)"
        strokeWidth="1.5"
      />
      <circle
        cx="225"
        cy="152"
        r="13"
        fill="rgba(16, 185, 129, 0.25)"
        stroke="#10b981"
        strokeWidth="2"
      />
      <path
        d="M219 152L223.5 156.5L232 147.5"
        stroke="#10b981"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg-self-draw"
      />
      <rect
        x="248"
        y="144"
        width="96"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.75)"
      />
      <rect
        x="248"
        y="158"
        width="68"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.4)"
      />

      {/* Animated Progress Bar inside Floating Card */}
      <rect
        x="215"
        y="194"
        width="135"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.16)"
      />
      <rect x="215" y="194" width="104" height="8" rx="4" fill="#10b981">
        <animate
          attributeName="width"
          values="35;112;96;112"
          dur="5s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        x="215"
        y="222"
        fill="rgba(255,255,255,0.8)"
        fontSize="10"
        fontWeight="600"
        fontFamily="JetBrains Mono, monospace"
      >
        VELOCITY +94%
      </text>
    </g>

    {/* Floating Sparkle Nodes */}
    <circle cx="335" cy="70" r="6" fill="#a855f7">
      <animate
        attributeName="r"
        values="4;7;4"
        dur="2.8s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="42" cy="185" r="5" fill="#06b6d4">
      <animate
        attributeName="r"
        values="3.5;6.5;3.5"
        dur="3.2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

/**
 * 5. Self-Drawing Empty State Doodle (SVGator #8 Self-Drawing & #21 Doodle Web Animations)
 */
export const EmptyStateDoodle = () => (
  <svg
    width="150"
    height="120"
    viewBox="0 0 160 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="floating-3d"
  >
    <rect
      x="32"
      y="20"
      width="96"
      height="90"
      rx="16"
      stroke="rgba(99, 102, 241, 0.5)"
      strokeWidth="2.2"
      strokeDasharray="6 6"
      fill="rgba(99, 102, 241, 0.06)"
    />
    <path
      d="M54 52H106M54 70H90M54 88H76"
      stroke="#6366f1"
      strokeWidth="3"
      strokeLinecap="round"
      className="svg-self-draw"
    />
    <circle
      cx="116"
      cy="88"
      r="18"
      fill="rgba(16, 185, 129, 0.16)"
      stroke="#10b981"
      strokeWidth="2.2"
    />
    <path
      d="M116 80V96M108 88H124"
      stroke="#10b981"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * 6. Celebratory Confetti SVG Burst (SVGator #12 Microinteractions)
 */
export const ConfettiBurst = ({ active }) => {
  if (!active) return null;
  const particles = [
    { cx: 15, cy: 15, color: "#6366f1", tx: -45, ty: -55 },
    { cx: 50, cy: 10, color: "#10b981", tx: 0, ty: -65 },
    { cx: 85, cy: 15, color: "#ec4899", tx: 45, ty: -50 },
    { cx: 90, cy: 50, color: "#f59e0b", tx: 60, ty: 5 },
    { cx: 80, cy: 85, color: "#06b6d4", tx: 40, ty: 50 },
    { cx: 20, cy: 85, color: "#a855f7", tx: -40, ty: 45 },
    { cx: 10, cy: 50, color: "#3b82f6", tx: -55, ty: -5 },
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "260px",
        height: "260px",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "visible",
      }}
    >
      {particles.map((p, idx) => (
        <circle key={idx} cx="50" cy="50" r="4.5" fill={p.color}>
          <animate
            attributeName="cx"
            from="50"
            to={50 + p.tx}
            dur="0.65s"
            fill="freeze"
          />
          <animate
            attributeName="cy"
            from="50"
            to={50 + p.ty}
            dur="0.65s"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="0.65s"
            fill="freeze"
          />
          <animate
            attributeName="r"
            values="2;6;0"
            dur="0.65s"
            fill="freeze"
          />
        </circle>
      ))}
    </svg>
  );
};
