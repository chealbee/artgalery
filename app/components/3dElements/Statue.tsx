"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { degToRad } from "three/src/math/MathUtils.js";
import { motion } from "framer-motion-3d";

const Statue = ({ rotation }: { rotation: number }) => {
  const mainModelRef = useRef<any>();
  const mainModel = useLoader(GLTFLoader, "/grabfigur/scene.gltf");
  //   const [rotateStatue, setRotateStatue] = useState(-5);

  //   //   useFrame((state) => {
  //   // const bouncesing = (Math.sin(state.clock.elapsedTime) + 1) / 2;
  //   // //  const newIntensity = bouncesing / 2;
  //   // const rotaion = Math.min(0.9);

  //   //     setRotateStatue(bouncesing * -4);
  //   //     if (mainModelRef.current) {
  //   //       // mainModelRef.current.rotation.y = bouncesing;
  //   //     }
  //   //   });
  useFrame(() => {
    const rotaion = -rotation / 1;

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
      <primitive object={mainModel.scene} ref={mainModelRef} />
    </motion.group>
  );
};

export default Statue;
