"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MotionValue } from "framer-motion";

const LigntComponent = ({
  cursorPosition,
}: {
  cursorPosition: {
    x: number;
    y: number;
  };
}) => {
  const lightRef = useRef<any>(null);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = cursorPosition.x * 1.5;
      lightRef.current.position.y = cursorPosition.y * 2;
      // lightRef.current.position.y = cursorPosition.y;
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[cursorPosition.x, cursorPosition.y, 2.4]}
        intensity={4}
        distance={2}
        color="#AEA28C"
      />
    </>
  );
};

export default LigntComponent;
