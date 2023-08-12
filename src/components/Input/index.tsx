import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import Icon from "@expo/vector-icons/FontAwesome";
import { useField } from "@unform/core";
import { Text } from "react-native";
import { useTheme } from "styled-components/native";

import { InputProps } from "./types";

import { Container, IconContainer, InputText } from "./styles";

interface InputRef {
  focus(): void;
}

const Input = React.forwardRef<InputRef, InputProps>(
  ({ name, onChangeText, icon, ...rest }, ref) => {
    const inputRef = useRef(null);
    const theme = useTheme();

    const [value, setValue] = useState("");

    const { fieldName, registerField, defaultValue, error } = useField(name);

    useImperativeHandle(ref, () => ({
      focus() {
        inputRef.current.focus();
      },
    }));

    useEffect(() => {
      inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
      if (inputRef.current) inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        getValue() {
          if (inputRef.current) return inputRef.current.value;
          return "";
        },
        setValue(value) {
          if (inputRef.current) {
            inputRef.current.setNativeProps({ text: value });
            inputRef.current.value = value;
          }
        },
        clearValue() {
          if (inputRef.current) {
            inputRef.current.setNativeProps({ text: "" });
            inputRef.current.value = "";
          }
        },
      });
    }, [fieldName, registerField]);

    const handleChangeText = useCallback(
      (text: string) => {
        if (inputRef.current) inputRef.current.value = text;
        if (onChangeText) onChangeText(text);
        setValue(text);
      },
      [onChangeText],
    );
    return (
      <Container>
        {icon && (
          <IconContainer>
            <Icon name={icon} size={20} color={theme.colors.text.gray} />
          </IconContainer>
        )}

        <InputText
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultValue}
          hasIcon={!!icon}
          testID="TextInput"
          value={value}
          {...rest}
        />
        {error && <Text>{error}</Text>}
      </Container>
    );
  },
);

Input.displayName = "Input";

export default Input;
