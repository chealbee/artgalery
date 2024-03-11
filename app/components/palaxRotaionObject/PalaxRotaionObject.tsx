import React, { useRef } from "react";
import "./palaxRotaionObject.scss";
import Picture1 from "@/public/1.jpeg";
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 10.1]);
  const scaleForP = useTransform(newScrolForP, [0, 1], [1, 2.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 90]);
  const pictures = [
    {
      src: Picture1,
    },
    {
      src: Picture1,
    },
    {
      src: Picture1,
    },
    {
      src: Picture1,
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
