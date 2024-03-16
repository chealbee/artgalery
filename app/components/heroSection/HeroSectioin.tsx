"use client";
import { Canvas } from "@react-three/fiber";
import Paragraph from "../mainSection/Paragraph";
import LigntComponent from "../3dElements/LightComponent";
import Statue from "../3dElements/Statue";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const HeroSectioin = () => {
  const [cursorPositionY, setCursorPositionY] = useState(0);
  const [cursorPositionX, setCursorPositionX] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"],
  });
  const sa = useTransform(scrollYProgress, [0, 1], [4.5, -5]);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.addEventListener("mousemove", (e) => {
        if (mainRef.current) {
          const x = (e.offsetX / mainRef.current.offsetWidth) * 2 - 1;
          setCursorPositionX(x);
        }
      });
      window.addEventListener("scroll", (e) => {
        if (mainRef.current) {
          setCursorPositionY(scrollYProgress.get());
        }
      });
    }
  }, []);

  return (
    <div>
      <section className="heroSection">
        <Paragraph />
        <div ref={mainRef} className="mainFulpage">
          <Canvas>
            <LigntComponent
              position={{ x: -0.2, y: 0, z: 3.2 }}
              distance={2}
              intensity={13}
              motion={sa}
              //   boost={8}
              //   motionIntensity={sd}
            />
            <Statue rotation={cursorPositionY} />
            {/* <Statue rotation={cursorPositionY} /> */}
          </Canvas>
        </div>
      </section>
    </div>
  );
};

export default HeroSectioin;
