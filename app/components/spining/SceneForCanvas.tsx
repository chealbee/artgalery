import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import SpinningLight from "../3dElements/SpiningLight";

const SceneForCanvas = () => {
  const mainModelRef = useRef<any>();
  //   const mainModel = useLoader(
  //     GLTFLoader,
  //     "/tritonen-_und_najadenbrunnen/scene.gltf"
  //   );
  const unmainModel = useLoader(GLTFLoader, "/first3d/scene.gltf");

  useFrame(() => {
    mainModelRef.current.rotation.y += 0.0005;
  });
  return (
    <group scale={1.2}>
      <SpinningLight
        delay={0}
        position={[0, 0.5, 0]}
        speed={0.01}
        side={true}
        color={"#E84F31"}
      />

      <group rotation={[0, 0, 0]} position={[0, -1.6, 0]} ref={mainModelRef}>
        {/* <primitive object={mainModel.scene} scale={0.3} /> */}
        <primitive object={unmainModel.scene} scale={0.3} />
      </group>
    </group>
  );
};

export default SceneForCanvas;
