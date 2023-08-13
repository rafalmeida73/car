import MapView from "react-native-maps";
import { scale } from "react-native-size-matters";
import Video from "react-native-video";
import styled, { css } from "styled-components/native";

import { VideoStylesProps } from "./types";

export const Container = styled.ScrollView`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};
  `}
`;

export const CardImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${scale(15)}px;
`;

export const CarImage = styled.Image`
  height: ${scale(300)}px;
  width: ${scale(300)}px;
`;

export const Type = styled.View`
  position: absolute;
  padding: ${scale(5)}px;
  border-radius: ${scale(10)}px;
  left: 40%;
  top: ${scale(-10)}px;
  ${({ theme }) => css`
    background-color: ${theme.colors.background.primary};
  `}
`;

export const TypeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text.white};
  `}

  font-size: ${scale(14)}px;
  text-transform: capitalize;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text.black};
  `}

  text-align: center;
  font-size: ${scale(14)}px;
  text-transform: capitalize;
  padding: ${scale(15)}px;
`;

export const VideoContainer = styled.View`
  padding: ${scale(15)}px;
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text.black};
  `}

  font-size: ${scale(14)}px;
  text-transform: capitalize;
  margin: ${scale(15)}px 0;
  font-weight: bold;
  padding-left: ${scale(5)}px;
`;

export const VideoPlayer = styled(Video)<VideoStylesProps>`
  top: 0;
  left: 15%;
  bottom: 0;
  right: 0;
  width: ${scale(300)}px;

  ${({ hasVideo }) =>
    hasVideo &&
    css`
      height: ${scale(150)}px;
    `}
`;

export const Map = styled(MapView)`
  width: 100%;
  height: ${scale(500)}px;
`;
