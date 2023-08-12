import React, { useState } from "react";

import { Checkbox as CheckboxPaper } from "react-native-paper";

import { CheckboxProps } from "./types";

import { Container, Title } from "./styles";

export const Checkbox: React.FC<CheckboxProps> = ({
  onPress,
  status = false,
  text,
}) => {
  const [checked, setChecked] = useState(status);

  const handleChange = () => {
    setChecked(!checked);
    if (onPress) onPress(!checked);
  };

  return (
    <Container>
      <CheckboxPaper
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          handleChange();
        }}
      />
      {text && (
        <Title testID="Checkbox-Text" onPress={() => handleChange()}>
          {text}
        </Title>
      )}
    </Container>
  );
};
