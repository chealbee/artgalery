import styles from "./styles.module.scss";
import Picture1 from "@/public/1.jpeg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ParalxGalery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const rotaote = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture1,
      scale: scale5,
    },
    {
      src: Picture1,
      scale: scale6,
    },
    {
      src: Picture1,
      scale: scale5,
    },
    {
      src: Picture1,
      scale: scale6,
    },
    {
      src: Picture1,
      scale: scale8,
    },
    {
      src: Picture1,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
