"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { degToRad } from "three/src/math/MathUtils.js";
import { motion } from "framer-motion-3d";
import { Group } from "three/examples/jsm/libs/tween.module.js";

const Statue = () => {
  const mainModelRef = useRef<Group>();
  const mainModel = useLoader(GLTFLoader, "/grabfigur/scene.gltf");
  const [rotateStatue, setRotateStatue] = useState(-5);

  useFrame((state) => {
    const bouncesing = (Math.sin(state.clock.elapsedTime) + 1) / 2;
    //  const newIntensity = bouncesing / 2;

    setRotateStatue(bouncesing * -4);
    if (mainModelRef.current) {
      // mainModelRef.current.rotation.y = bouncesing;
    }
  });

  return (
    <motion.group
      scale={3.5}
      position={[0, -3.3, 0]}
      rotation={[degToRad(9), degToRad(rotateStatue), 0]}
    >
      <primitive object={mainModel.scene} ref={mainModelRef} />
    </motion.group>
  );
};

export default Statue;
