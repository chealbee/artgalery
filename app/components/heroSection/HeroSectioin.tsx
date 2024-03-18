"use client";
import { Canvas } from "@react-three/fiber";
import Paragraph from "../mainSection/Paragraph";
import LigntComponent from "../3dElements/LightComponent";
import Statue from "../3dElements/Statue";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const HeroSectioin = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"],
  });
  const sa = useTransform(scrollYProgress, [0, 1], [4.5, -5]);

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
              color="#AEA28C"
            />
            <Statue rotation={scrollYProgress} />
          </Canvas>
        </div>
      </section>
    </div>
  );
};

export default HeroSectioin;
