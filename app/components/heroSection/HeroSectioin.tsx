"use client";
import { Canvas } from "@react-three/fiber";
import Paragraph from "../mainSection/Paragraph";
import LigntComponent from "../3dElements/LightComponent";
import Statue from "../3dElements/Statue";
import { useEffect, useRef, useState } from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";

const HeroSectioin = () => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0.9,
  });
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.addEventListener("mousemove", (e) => {
        if (mainRef.current) {
          const x = (e.offsetX / mainRef.current.offsetWidth) * 2 - 1;
          const y = -(e.offsetY / mainRef.current.offsetHeight) * 2 + 1;

          setCursorPosition({ x: x, y: y }); //  const maxX = Math.min(x, 0.05);
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
            {/* <OrbitControls enableZoom={false} /> */}
            <ambientLight intensity={0.3} />

            {/* <pointLight
          position={[-0.8, 2.2, 3]}
          intensity={2}
          color="#AEA28C"
          distance={2.7}
        /> */}
            {/* <RedLigntComponent cursorPosition={[0.8, 2.2, 2]} /> */}
            {/* <RedLigntComponent cursorPosition={[-0.2, 1, 1.6]} /> */}
            <LigntComponent cursorPosition={cursorPosition} />
            <Statue />
          </Canvas>
        </div>
      </section>
    </div>
  );
};

export default HeroSectioin;
