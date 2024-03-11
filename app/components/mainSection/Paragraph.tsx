"use client";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

const Paragraph = () => {
  const element = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", `${isMobile ? "center 0.1" : "end 0.7"}`],
    //  offset: ["start start", "end 0.7"],
  });

  useEffect(() => {
    if (window.innerWidth < 668) {
      setIsMobile(true);
    }
  }, []);

  const text =
    " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,as oppose";
  const words = text.split(" ");

  return (
    <p ref={element} className="text">
      adable content of a page <span className="focusedOn">when looking</span>{" "}
      at its layout.
      {words.map((el, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        if (i !== words.length) {
          return (
            <World
              range={[start, end]}
              progress={scrollYProgress}
              text={el + " "}
              key={i}
            />
          );
        } else {
          return (
            <World
              range={[start, end]}
              progress={scrollYProgress}
              text={el}
              key={i}
            />
          );
        }
      })}
    </p>
  );
};

export default Paragraph;

const World = ({
  text,
  range,
  progress,
}: {
  text: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <motion.span style={{ opacity }}>{text}</motion.span>
    </span>
  );
};
