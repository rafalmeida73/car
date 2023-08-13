import React from "react";

import { useRouter } from "expo-router";
import { scale } from "react-native-size-matters";

import { HeaderProps } from "./types";

import {
  BackButton,
  Container,
  IconsButtons,
  InfosContainer,
  Title,
} from "./styles";

export const Header: React.FC<HeaderProps> = ({ title, icons }) => {
  const { back, canGoBack } = useRouter();

  return (
    <Container>
      <InfosContainer>
        {canGoBack() && (
          <BackButton
            icon="arrow-left"
            size={scale(25)}
            onPress={() => back()}
            testID="Header-BackButton"
          />
        )}
        <Title>{title}</Title>
      </InfosContainer>

      {icons &&
        icons?.map((icon) => (
          <IconsButtons
            key={icon?.name}
            icon={icon?.name}
            onPress={() => icon?.onPress()}
            testID="Header-IconsButtons"
          />
        ))}
    </Container>
  );
};
