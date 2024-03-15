import React, { useRef, useState } from "react";
import "./style.scss";
import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import SBg from "./SBg";
import SpinningLight from "../3dElements/SpiningLight";

const Qustions = () => {
  const data = [
    {
      title: "Ford",
      description:
        "Working on the Next-Generation HMI Experience without no driving experience.",
      speed: 0.5,
    },
    {
      title: "UFC",
      description:
        "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
      speed: 0.5,
    },
    {
      title: "Lincoln",
      description:
        "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
      speed: 0.67,
    },
    {
      title: "Royal Caribbean",
      description:
        "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
      speed: 0.8,
    },
    {
      title: "Sleepiq",
      description:
        "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
      speed: 0.8,
    },
    {
      title: "NFL",
      description:
        "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
      speed: 0.8,
    },
  ];
  const crop = (string: string, maxLength: number) => {
    return string.substring(0, maxLength);
  };
  const [hovered, setHovered] = useState<number | null>(null);
  const list = useRef(null);

  const { scrollYProgress } = useScroll({
    target: list,
    offset: ["start end", `end 0.9`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
  return (
    <div className="qustions">
      <ul className="list" ref={list}>
        {data.map((el, i) => {
          return (
            <li
              onMouseOver={() => {
                setHovered(i);
              }}
              onMouseLeave={() => {
                setHovered(null);
              }}
            >
              <span className="list__title">
                <motion.span style={{ clipPath: clip }}>{el.title}</motion.span>
              </span>
              <span className="list__titleShadow">{el.title}</span>
              <span
                className={hovered == i ? "list__hover active" : "list__hover"}
              >
                <span>{crop(el.title, 9)}</span>
                <span>{el.description}</span>
              </span>
            </li>
          );
        })}
      </ul>
      <div className="SBG">
        <Canvas>
          {/* <ambientLight /> */}
          {/* <pointLight position={[2, 2, 2]} intensity={10} /> */}
          <SpinningLight
            delay={0}
            position={[0, 0.5, 0]}
            speed={0.01}
            side={true}
            color={"#E84F31"}
          />
          <SBg />
        </Canvas>
      </div>
    </div>
  );
};

export default Qustions;
