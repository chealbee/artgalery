import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const SBg = () => {
  const model = useRef<any>();
  //   const mainModel = useLoader(GLTFLoader, "/daphne/scene.gltf");
  const unmainModel = useLoader(GLTFLoader, "/third3d/scene.gltf");

  useFrame(() => {
    //  model.current.rotation.y += 0.0005;
  });

  return (
    <mesh>
      <group rotation={[0, 0, 0]} position={[0, -2.9, 0]} ref={model}>
        <primitive object={unmainModel.scene} scale={12.3} />
      </group>
    </mesh>
  );
};

export default SBg;
