import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: ${scale(10)}px;
  background-color: ${({ theme }) => theme.colors.background.light};

  ${({ theme }) => css`
    border-color: ${theme.colors.text.gray};
  `}
  border-width: ${scale(1)}px;
`;

export const CarImage = styled.Image`
  height: ${scale(200)}px;
  width: ${scale(200)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background.primary};
  `}

  font-size: ${scale(14)}px;
  font-weight: bold;
  margin-bottom: ${scale(10)}px;
`;
