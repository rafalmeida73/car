import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

import { LogoProps } from "./types";

export const Container = styled.Image<LogoProps>`
  ${({ height, width }) => css`
    height: ${scale(height)}px;
    width: ${scale(width)}px;
  `}
`;
