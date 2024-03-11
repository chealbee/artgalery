// "use client";

import { RefObject, useEffect, useState } from "react";

export default function useMousePosition({
  maskRef,
}: {
  maskRef: RefObject<HTMLElement>;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { x, y } = mousePosition;

  const handleMouseMove = (event: any) => {
    if (maskRef.current) {
      const mouseX =
        event.clientX - maskRef.current.getBoundingClientRect().left;
      const mouseY =
        event.clientY - maskRef.current.getBoundingClientRect().top;

      setMousePosition({ x: mouseX, y: mouseY });
    }
  };

  return { mousePosition, handleMouseMove };
}
