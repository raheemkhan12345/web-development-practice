import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({
  children,
  className = "",
  maxTilt = 12,
  glare = true,
  scale = 1.02,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const percentX = Math.max(0, Math.min(1, clientX / rect.width));
    const percentY = Math.max(0, Math.min(1, clientY / rect.height));

    x.set(percentX);
    y.set(percentY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      whileHover={{ scale }}
      transition={{ duration: 0.25 }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* 3D Depth Content Wrapper */}
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>

      {/* Dynamic Specular Glare Overlay */}
      {glare && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(circle 280px at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.2), transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
