import React, { FC, ReactNode } from "react";
import "./bigHeading.scss";

interface MyComponentProps {
  children: ReactNode;
  cl?: string;
}

const BigHeading: FC<MyComponentProps> = ({ children, cl }) => {
  return <h2 className={"bigHeading" + " " + cl}>{children}</h2>;
};

export default BigHeading;
