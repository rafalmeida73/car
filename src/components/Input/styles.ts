import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

import { InputStylesProps } from "./types";

export const Container = styled.View``;

export const InputText = styled.TextInput<InputStylesProps>`
  border-radius: ${scale(10)}px;
  height: ${scale(50)}px;

  ${({ theme }) => css`
    border: ${scale(1)}px solid ${theme.colors.text.gray};
    background-color: ${theme.colors.background.light};
  `}

  ${({ hasIcon }) =>
    !hasIcon
      ? css`
          padding-left: ${scale(15)}px;
        `
      : css`
          padding-left: ${scale(40)}px;
        `}
`;

export const IconContainer = styled.View`
  position: absolute;
  z-index: 1;
  left: ${scale(15)}px;
  top: ${scale(16)}px;
`;
