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
          {/* <span className="WHenedate">22/2/2024</span> */}
          <p>
            На виставці ви зустрінете<span> різноманітні твори</span> від
            талановитих митців, які відображають різні стилі та техніки. Від
            класичних мармурових скульптур до сучасних абстракцій –{" "}
            <span>кожен знайде </span>щось захоплююче для себе.
            <br />
            <br />
            Приєднуйтеся до нас на цій захоплюючій події, де мистецтво оживає, а{" "}
            <span>кожен</span> може стати його частиною. Долучайтесь до нас і
            даруйте світу ще більше краси та творчості!
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
          {/* <span className="WHenedate">22/2/2024</span> */}
          <p
            onMouseMove={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span></span>
            На виставці ви зустрінете різноманітні <span>твори</span> від
            талановитих <span>митців</span>, які відображають різні стилі та
            техніки. Від класичних мармурових скульптур до сучасних абстракцій –{" "}
            <span>кожен знайде </span>щось захоплююче для себе.
            <br />
            <br />
            Приєднуйтеся до нас на цій захоплюючій події, де мистецтво оживає, а{" "}
            <span>кожен</span> може стати його частиною.{" "}
            <span>Долучайтесь</span> до нас і даруйте світу ще більше краси та{" "}
            <span>творчості!</span>
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default HoverderInfo;
