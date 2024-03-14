import styles from "./styles.module.scss";
import Picture1 from "@/public/content/1.jpg";
import Picture2 from "@/public/content/2.webp";
import Picture4 from "@/public/content/4.jpg";
import Picture5 from "@/public/content/5.jpg";
import Picture7 from "@/public/content/7.jpg";
import Picture8 from "@/public/content/8.png";
import Picture9 from "@/public/content/1.webp";
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
      src: Picture8,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture9,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture7,
      scale: scale6,
    },
    {
      src: Picture5,
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
