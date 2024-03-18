"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { degToRad } from "three/src/math/MathUtils.js";
import { motion } from "framer-motion-3d";
import { MotionValue } from "framer-motion";

const Statue = ({ rotation }: { rotation: MotionValue<number> }) => {
  const mainModelRef = useRef<any>();
  const unmainModel = useLoader(GLTFLoader, "/second3d/scene.gltf");
  useFrame(() => {
    const rotaion = -rotation.get() / 1;

    if (mainModelRef.current) {
      mainModelRef.current.rotation.y = rotaion;
      mainModelRef.current.rotation.y = rotaion;
    }
  });

  return (
    <motion.group
      scale={4.3}
      position={[0, -5.5, 0]}
      rotation={[degToRad(9), degToRad(25), 0]}
    >
      <primitive object={unmainModel.scene} ref={mainModelRef} />
    </motion.group>
  );
};

export default Statue;
