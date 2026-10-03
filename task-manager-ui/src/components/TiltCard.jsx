import React, { useRef, useState } from "react";

/**
 * Interactive 3D Perspective Tilt & Spotlight Card (SVGator #14 Faux 3D & #26 Hover Effects)
 */
export const TiltCard = ({
  children,
  className = "",
  style = {},
  enableTilt = true,
  intensity = 7,
  onClick,
  ...rest
}) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set spotlight coordinates
    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);

    if (!enableTilt) return;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (((y - centerY) / centerY) * -intensity).toFixed(2);
    const rotateY = (((x - centerX) / centerX) * intensity).toFixed(2);

    setTransformStyle(
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`surface-card tilt-card ${className}`}
      style={{
        ...style,
        transform: transformStyle || undefined,
      }}
      {...rest}
    >
      <div style={{ position: "relative", zIndex: 2, height: "100%" }}>
        {children}
      </div>
    </div>
  );
};
