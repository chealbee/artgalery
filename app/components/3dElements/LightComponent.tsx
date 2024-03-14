"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

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
      // lightRef.current.position.x = cursorPosition.x * 1.5;
      lightRef.current.position.y = -cursorPosition.y * 12 + 6.3;
      // lightRef.current.position.y = cursorPosition.y;
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[-0.2, 0, 3.2]}
        intensity={10}
        distance={2}
        color="#AEA28C"
        //   color={"white"}
      />
    </>
  );
};

export default LigntComponent;
