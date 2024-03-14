import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const SBg = () => {
  const model = useRef<any>();
  const mainModel = useLoader(GLTFLoader, "/daphne/scene.gltf");

  useFrame(() => {
    //  model.current.rotation.y += 0.0005;
  });

  return (
    <mesh>
      <group rotation={[0, 0, 0]} position={[0, -5, 0]} ref={model}>
        <primitive object={mainModel.scene} scale={16.3} />
      </group>
    </mesh>
  );
};

export default SBg;
