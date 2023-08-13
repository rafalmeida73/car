import { FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};
  `}
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: scale(20),
  },
})`` as unknown as typeof FlatList;

export const Separator = styled.View`
  height: ${scale(15)}px;
`;
