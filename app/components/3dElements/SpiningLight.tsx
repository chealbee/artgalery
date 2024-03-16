import { useFrame } from "@react-three/fiber";
import { MotionValue, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import { PointLight } from "three";

interface SpinningLightProps {
  position: [number, number, number];
  color: string;
  speed: number;
  delay: number;
  side: boolean;
  dependON?: MotionValue<number>;
}

const SpinningLight: FC<SpinningLightProps> = ({
  position,
  color,
  speed,
  delay,
  side,
  dependON,
}) => {
  const ref = useRef<PointLight>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      if (clock.elapsedTime > delay) {
        ref.current.rotation.y += speed;
        if (dependON) {
          const mappedValue = dependON.get();
          let result;
          if (mappedValue < 0.5) {
            result = 2 * mappedValue;
          } else {
            result = 2 * (1 - mappedValue);
          }

          ref.current.position.x =
            position[0] + Math.cos(dependON?.get() * -8) * 3.2; // Distance from center object
          ref.current.position.z =
            position[2] + Math.sin(dependON?.get() * -8) * 3.2; // Distance from center object
          ref.current.intensity = result * 7;
        } else {
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
