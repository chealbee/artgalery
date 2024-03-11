"use client";
import { useEffect } from "react";
import HoverderInfo from "./components/HoverderInfo";
import ParalxGalery from "./components/paralax galery/ParalxGalery";
import Lenis from "@studio-freight/lenis";
import PalaxRotaionObject from "./components/palaxRotaionObject/PalaxRotaionObject";
import HeroSectioin from "./components/heroSection/HeroSectioin";

const Main = () => {
  //   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0.9 });
  //   const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // smoth scroll
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    //  if (mainRef.current) {
    //    mainRef.current.addEventListener("mousemove", (e) => {
    //      if (mainRef.current) {
    //        const x = (e.offsetX / mainRef.current.offsetWidth) * 2 - 1;
    //        const y = -(e.offsetY / mainRef.current.offsetHeight) * 2 + 1;
    //        setCursorPosition({ x: x, y: y }); //  const maxX = Math.min(x, 0.05);
    //      }
    //    });
    //  }
  }, []);
  return (
    <>
      <HeroSectioin />
      <HoverderInfo />
      <PalaxRotaionObject />
      {/* <BigHeading cl="examplesOfWorksHeading">
        Приклади робіт наших студентів
      </BigHeading> */}
      <ParalxGalery />
    </>
  );
};

export default Main;
