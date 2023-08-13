import React from "react";

import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";

import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({ title, icons }) => {
  const { back } = useRouter();

  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          back();
        }}
      />
      <Appbar.Content title={title} />
      {icons &&
        icons.map((icon) => (
          <Appbar.Action
            icon={icon.name}
            onPress={() => icon.onPress()}
            key={icon.name}
          />
        ))}
    </Appbar.Header>
  );
};
