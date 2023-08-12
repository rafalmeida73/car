import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text.black};
  `}

  font-size: ${scale(14)}px;
`;
