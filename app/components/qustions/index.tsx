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
import LigntComponent from "../3dElements/LightComponent";

const Qustions = () => {
  const data = [
    {
      title: "скульптури",
      description:
        "Ви побачите вражаючі скульптурні композиції від талановитих скульпторів з усього світу. Від класичних до сучасних рішень, кожна скульптура розкаже вам свою унікальну історію.",
      speed: 0.5,
    },
    {
      title: "Картини",
      description:
        "У нас буде широкий вибір картин, які охоплюють різні стилі та теми. Від реалістичних пейзажів до абстрактних композицій, картина на виставці дозволить вам зануритися у світ кольорів та форм.",
      speed: 0.5,
    },
    {
      title: "Мистецтво",
      description:
        "Наша виставка також представить різноманітні форми мистецтва, включаючи фотографію, графіку, інсталяції та багато іншого. Відбуваючись на перетині різних мистецьких жанрів, мистецтво на виставці буде вразливим, провокаційним та надихаючим.",
      speed: 0.67,
    },
    {
      title: "Спогади",
      description:
        "Відвідування мистецької виставки може стати незабутнім досвідом, який буде супроводжувати вас надовго, залишаючи незабутні враження та спогади.",
      speed: 0.8,
    },
    {
      title: "Нові зв'язки",
      description:
        "Мистецька виставка є чудовим місцем для встановлення нових зв'язків та знайомств з цікавими людьми з різних сфер життя. Хто знає, можливо, ви знайдете нових друзів або партнерів для майбутніх мистецьких проєктів.",
      speed: 0.8,
    },
    //  {
    //    title: "Спробуйте самі",
    //    description:
    //      "Наша виставка пропонує вам унікальну можливість не лише спостерігати за мистецтвом, а й власноруч спробувати створити щось власне. Ми організовуємо майстер-класи з скульптури, де ви зможете випробувати свої сили та виразити свою творчість під керівництвом досвідчених майстрів.",
    //    speed: 0.8,
    //  },
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
  const { scrollYProgress: lightPosition } = useScroll({
    target: list,
    offset: ["start end", `center 0.5`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const sad = useTransform(lightPosition, [0, 1], [5.2, 0.2]);
  const sd = useTransform(scrollYProgress, [0, 1], [0.1, 0.5]);
  const rotateModel = useTransform(scrollYProgress, [0, 1], [-0.2, 0.2]);

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
          <LigntComponent
            position={{ x: 0, y: 0.2, z: 2 }}
            motion={sad}
            distance={2.6}
            intensity={10}
            boost={10}
            // color="#e84f31"
            // color="white"
            color="#bdaa87"
            motionIntensity={sd}
          />

          <SBg rotate={rotateModel} />
        </Canvas>
      </div>
    </div>
  );
};

export default Qustions;
