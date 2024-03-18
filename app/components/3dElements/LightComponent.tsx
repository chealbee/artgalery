// "use client";
// import { useFrame } from "@react-three/fiber";
// import { MotionValue } from "framer-motion";
// import { useRef } from "react";

// const LigntComponent = ({
//   cursorPosition,
//   motion,
// }: {
//   cursorPosition: {
//     x: number;
//     y: number;
//   };
//   motion?: MotionValue<number>;
// }) => {
//   const lightRef = useRef<any>(null);

//   useFrame(() => {
//     if (lightRef.current) {
//       // lightRef.current.position.x = cursorPosition.x * 1.5;
//       if (motion) {
//         lightRef.current.position.y = motion.get();
//       } else {
//         lightRef.current.position.y = -cursorPosition.y * 12 + 6.3; /////////////
//       }
//       // lightRef.current.position.y = cursorPosition.y;
//     }
//   });

//   return (
//     <>
//       {/* <pointLight
//         ref={lightRef}
//         position={[-0.2, 0, 3.2]}
//         intensity={10}
//         distance={2}
//         color="#AEA28C"
//         //   color={"white"}
//       /> */}
//       <pointLight
//         ref={lightRef}
//         position={[0, 0, 2]}
//         intensity={10}
//         distance={2}
//         color="#AEA28C"
//         //   color={"white"}
//       />
//     </>
//   );
// };

"use client";
import { useFrame } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import { useRef } from "react";

const LigntComponent = ({
  position,
  motion,
  color,
  intensity,
  distance,
  motionIntensity,
  boost,
}: {
  color: string;
  boost?: number;
  distance: number;
  intensity: number;
  position: {
    x: number;
    y: number;
    z: number;
  };
  motionIntensity?: MotionValue<number>;
  motion?: MotionValue<number>;
}) => {
  const lightRef = useRef<any>(null);

  useFrame(() => {
    if (lightRef.current) {
      if (motion) {
        //   lightRef.current.position.y = motion.get() + (boost || 0);
        lightRef.current.position.y = motion.get();
      }
      if (motionIntensity) {
        lightRef.current.intensity = motionIntensity.get() * (boost || 1);
      }
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[position.x, position.y, position.z]}
        intensity={intensity}
        distance={distance}
        //   color="#AEA28C"
        color={color}
      />
      {/* <pointLight
        ref={lightRef}
        position={[-0.2, 0, 3.2]}
        intensity={intensity}
        distance={2}
        color="#AEA28C"
      /> */}
    </>
  );
};

export default LigntComponent;
