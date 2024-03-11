"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
function HoverderInfo() {
  const [isHovered, setIsHovered] = useState(false);
  const sadjkl = useRef(null);

  const maskSize = isHovered ? 220 : 0;
  const maskRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { x, y } = mousePosition;

  const handleMouseMove = (event: any) => {
    if (maskRef.current) {
      const mouseX =
        event.clientX - maskRef.current.getBoundingClientRect().left;
      const mouseY =
        event.clientY - maskRef.current.getBoundingClientRect().top;

      setMousePosition({ x: mouseX, y: mouseY });
    }
  };

  return (
    <>
      <div className="hoverderInfo" ref={sadjkl} onMouseMove={handleMouseMove}>
        <div className="main">
          <span className="WHenedate">22/2/2024</span>
          <p>
            adable content of a page when <span>looking</span> at its layout.
            The point of using Lorem Ipsum is that it has a
          </p>
        </div>
        <motion.div
          ref={maskRef}
          className="mask"
          animate={{
            WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
            WebkitMaskSize: `${maskSize}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <span className="WHenedate">22/2/2024</span>
          <p
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            adable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default HoverderInfo;
