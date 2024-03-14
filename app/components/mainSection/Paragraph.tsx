"use client";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

const Paragraph = () => {
  const element = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: element,
    //  offset: ["start start", `${isMobile ? "center 0.1" : "end center"}`],
    offset: ["start 0.9", "end 0.45"],
  });

  useEffect(() => {
    if (window.innerWidth < 668) {
      setIsMobile(true);
    }
  }, []);

  const text = `Однак, ви не лише станете спостерігачем цього мистецтва – ви також матимете можливість самі створити щось унікальне. Наші майстри скульптури будуть присутні, щоб провести майстер-класи та допомогти вам втілити ваші ідеї в реальність.`;
  const words = text.split(" ");

  return (
    <p ref={element} className="text">
      {/* adable content of a page <span className="focusedOn">when looking</span>{" "}
      at its layout. */}
      {/* Однак, ви не лише станете <span className="focusedOn">спостерігачем</span>{" "}
      цього мистецтва */}
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
    <span className="spanchik">
      <motion.span style={{ opacity }}>{text}</motion.span>
    </span>
  );
};
