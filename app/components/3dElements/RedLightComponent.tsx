"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { PointLight } from "three";

const RedLigntComponent = ({
  cursorPosition,
}: {
  cursorPosition: [number, number, number];
}) => {
  const redRedf = useRef<PointLight>(null);
  const [intensity, setIntensity] = useState(1);

  useFrame((state) => {
    const bouncesing = (Math.sin(state.clock.elapsedTime) + 1) / 2;
    const newIntensity = bouncesing / 2;

    setIntensity(newIntensity);
    if (redRedf.current) {
      redRedf.current.intensity = newIntensity;
    }
  });

  return (
    <>
      <pointLight
        position={cursorPosition}
        ref={redRedf}
        intensity={intensity}
        color="blue"
        distance={2.7}
      />
    </>
  );
};
export default RedLigntComponent;
