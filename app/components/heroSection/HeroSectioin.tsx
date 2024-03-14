"use client";
import { Canvas } from "@react-three/fiber";
import Paragraph from "../mainSection/Paragraph";
import LigntComponent from "../3dElements/LightComponent";
import Statue from "../3dElements/Statue";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const HeroSectioin = () => {
  const [cursorPositionY, setCursorPositionY] = useState(0);
  const [cursorPositionX, setCursorPositionX] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"],
  });

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
    //  window.addEventListener("scroll", (e) => {
    //    setCursorPosition({ ...cursorPosition, y: scrollYProgress.get() }); //  const maxX = Math.min(x, 0.05);
    //    console.log(scrollYProgress.get());
    //  });
  }, []);

  return (
    <div>
      <section className="heroSection">
        <Paragraph />
        <div ref={mainRef} className="mainFulpage">
          <Canvas>
            {/* <OrbitControls enableZoom={false} /> */}
            {/* <ambientLight intensity={5} /> */}

            {/* <pointLight
          position={[-0.8, 2.2, 3]}
          intensity={2}
          color="#AEA28C"
          distance={2.7}
        /> */}
            {/* <RedLigntComponent cursorPosition={[0.8, 2.2, 2]} /> */}
            {/* <RedLigntComponent cursorPosition={[-0.2, 1, 1.6]} /> */}
            <LigntComponent
              cursorPosition={{ x: cursorPositionX, y: cursorPositionY }}
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
