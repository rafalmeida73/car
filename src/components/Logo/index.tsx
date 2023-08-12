import React from "react";

import LogoImage from "../../assets/images/logo.png";
import { LogoProps } from "./types";

import { Container } from "./styles";

export const Logo: React.FC<LogoProps> = ({ height = 76, width = 76 }) => {
  return (
    <Container
      source={LogoImage}
      resizeMode="contain"
      height={height}
      width={width}
    />
  );
};
