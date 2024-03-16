import { useFrame, useLoader } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { motion } from "framer-motion-3d";

const SBg = ({ rotate }: { rotate: MotionValue<number> }) => {
  const model = useRef<any>();
  //   const mainModel = useLoader(GLTFLoader, "/daphne/scene.gltf");
  const unmainModel = useLoader(GLTFLoader, "/third3d/scene.gltf");

  //   useFrame(() => {
  //     if (rotate) {
  //       // model.current.rotation.y = rotate.get() / 5;
  //     }
  //   });

  return (
    <mesh>
      <motion.group
        rotation={[0, rotate, 0]}
        position={[0, -2.9, 0]}
        ref={model}
      >
        <primitive object={unmainModel.scene} scale={12.3} />
      </motion.group>
    </mesh>
  );
};

export default SBg;
