"use client";

import "./spining.scss";
import { Canvas } from "@react-three/fiber";
import SceneForCanvas from "./SceneForCanvas";
import BigHeading from "../text/BigHeading";
import arow from "@/public/icons/aow.png";
import Image from "next/image";

const SpiningAround3d = () => {
  return (
    <div className="spiningSection">
      <Canvas className="spiningSection__canvas">
        <SceneForCanvas />
      </Canvas>
      <div className="spiningSection__HeadingContainer">
        <BigHeading cl="spiningSection__Heading">
          Виставка мистецтва у вінниці
        </BigHeading>
        <span>22/02/2024</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="down-arrow"
        width={30}
        height={30}
      >
        <g data-name="Layer 2">
          <g data-name="arrowhead-down">
            <path d="M17.37 12.39 12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"></path>
            <path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SpiningAround3d;
