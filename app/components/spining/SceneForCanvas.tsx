import { useFrame, useLoader } from "@react-three/fiber";
import React, { FC, useRef } from "react";
import { PointLight } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import SpinningLight from "../3dElements/SpiningLight";

// interface SpinningLightProps {
//   position: [number, number, number];
//   color: string;
//   speed: number;
//   delay: number;
//   side: boolean;
// }

// const SpinningLight: FC<SpinningLightProps> = ({
//   position,
//   color,
//   speed,
//   delay,
//   side,
// }) => {
//   const ref = useRef<PointLight>(null);

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       if (clock.elapsedTime > delay) {
//         ref.current.rotation.y += speed;

//         if (side) {
//           const angle = ref.current.rotation.y;
//           ref.current.position.x = position[0] + Math.cos(angle) * 3.2; // Distance from center object
//           ref.current.position.z = position[2] + Math.sin(angle) * 3.2; // Distance from center object
//         } else {
//           const angle = -ref.current.rotation.y;
//           ref.current.position.x = position[0] + Math.cos(angle) * 3.2; // Distance from center object
//           ref.current.position.z = position[2] + Math.sin(angle) * 3.2; // Distance from center object
//         }
//       }
//     }
//   });

//   return (
//     <>
//       <pointLight
//         ref={ref}
//         intensity={7}
//         color={color}
//         position={position}
//         //   distance={3}
//       />
//     </>
//   );
// };

const SceneForCanvas = () => {
  const mainModelRef = useRef<any>();
  const mainModel = useLoader(
    GLTFLoader,
    "/tritonen-_und_najadenbrunnen/scene.gltf"
  );

  //   useFrame(() => {
  //     mainModelRef.current.rotation.y += 0.0005;
  //   });
  return (
    <group scale={1.2}>
      <SpinningLight
        delay={0}
        position={[0, 0.5, 0]}
        speed={0.01}
        side={true}
        color={"#E84F31"}
      />
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh> */}
      <group rotation={[0, 0, 0]} position={[0, -1.6, 0]} ref={mainModelRef}>
        <primitive object={mainModel.scene} scale={0.3} />
      </group>
    </group>
  );
};

export default SceneForCanvas;
