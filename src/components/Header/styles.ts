import Constants from "expo-constants";
import { IconButton } from "react-native-paper";
import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  min-height: ${scale(50)}px;
  margin-top: ${Constants.statusBarHeight}px;
  padding: ${scale(20)}px;
  border-bottom-width: ${scale(1)}px;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => css`
    border-bottom-color: ${theme.colors.text.black};
  `}
`;

export const InfosContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text.black};
  `}

  font-size: ${scale(20)}px;
`;

export const BackButton = styled(IconButton)``;

export const IconsButtons = styled(IconButton)``;
