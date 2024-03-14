import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import { PointLight } from "three";

interface SpinningLightProps {
  position: [number, number, number];
  color: string;
  speed: number;
  delay: number;
  side: boolean;
}

const SpinningLight: FC<SpinningLightProps> = ({
  position,
  color,
  speed,
  delay,
  side,
}) => {
  const ref = useRef<PointLight>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      if (clock.elapsedTime > delay) {
        ref.current.rotation.y += speed;

        if (side) {
          const angle = ref.current.rotation.y;
          ref.current.position.x = position[0] + Math.cos(angle) * 3.2; // Distance from center object
          ref.current.position.z = position[2] + Math.sin(angle) * 3.2; // Distance from center object
        } else {
          const angle = -ref.current.rotation.y;
          ref.current.position.x = position[0] + Math.cos(angle) * 3.2; // Distance from center object
          ref.current.position.z = position[2] + Math.sin(angle) * 3.2; // Distance from center object
        }
      }
    }
  });

  return (
    <pointLight
      ref={ref}
      intensity={7}
      color={color}
      position={position}
      //   distance={3}
    />
  );
};

export default SpinningLight;
