import React, { useRef } from "react";
import "./palaxRotaionObject.scss";
import Picture1 from "@/public/content/1.jpg";
import Picture2 from "@/public/content/2.webp";
import Picture4 from "@/public/content/4.jpg";
import Picture5 from "@/public/content/5.jpg";
import Picture7 from "@/public/content/7.jpg";
import Picture8 from "@/public/content/8.png";
import Picture9 from "@/public/content/1.webp";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

const PalaxRotaionObject = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: newScrolForOpacity } = useScroll({
    target: container,
    offset: ["start start", "start -0.2"],
  });
  const { scrollYProgress: newScrolForP } = useScroll({
    target: container,
    offset: ["start start", "start -0.4"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 13.1]);
  const scaleForP = useTransform(newScrolForP, [0, 1], [1, 2.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 90]);
  const pictures = [
    {
      src: Picture1,
    },
    {
      src: Picture2,
    },
    {
      src: Picture5,
    },
    {
      src: Picture4,
    },
  ];

  return (
    <div ref={container} className="PalaxRotaion__container">
      <div className="PalaxRotaion__images">
        <div className="stykyText">
          <motion.p style={{ opacity: newScrolForP, scale: scaleForP }}>
            поринте в скульрути
          </motion.p>
        </div>
        <motion.div
          style={{ scale: scale, rotate: rotate, opacity: newScrolForOpacity }}
          className="PalaxRotaion__imagesWraper"
        >
          {pictures.map(({ src }, index) => {
            return (
              <div key={index} className="PalaxRotaion__image">
                <Image
                  src={src}
                  // fill
                  className="PalaxRotaion__img"
                  alt="image"
                  placeholder="blur"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default PalaxRotaionObject;
