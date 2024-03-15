"use client";
import { useEffect } from "react";
import HoverderInfo from "./components/HoverderInfo";
import ParalxGalery from "./components/paralax galery/ParalxGalery";
import Lenis from "@studio-freight/lenis";
import HeroSectioin from "./components/heroSection/HeroSectioin";
import SpiningAround3d from "./components/spining/SpiningAround3d";
import BigHeading from "./components/text/BigHeading";
import Footer from "./components/layout/Footer";
import Qustions from "./components/qustions";

const Main = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <SpiningAround3d />
      <BigHeading cl="AboutHeading">Про подію</BigHeading>
      <HoverderInfo />
      <BigHeading cl="whatWillHeading">Минулі виставки</BigHeading>
      <ParalxGalery />
      <HeroSectioin />
      {/* <PalaxRotaionObject /> */}
      <Qustions />
      <Footer />
    </>
  );
};

export default Main;
