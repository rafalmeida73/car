import React, { useRef, useState } from "react";

import { FormHandles } from "@unform/core";
import { Keyboard, TextInput } from "react-native";
import { Button } from "react-native-paper";

import { Checkbox } from "../components/Checkbox";
import Input from "../components/Input";
import { Logo } from "../components/Logo";

import {
  Container,
  FormContainer,
  OptionsContainer,
  ForgotPassword,
  SignUpButton,
  SignUpButtonText,
  SignUpContainer,
  SignUpText,
} from "./styles";

export default function Page() {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [keep, setKeep] = useState(false);

  const handleSubmit = async (formData) => {
    Keyboard.dismiss();
    console.log(formData);
  };

  return (
    <Container>
      <Logo />
      <FormContainer ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="login"
          placeholder="Login"
          onSubmitEditing={() => passwordInputRef?.current?.focus()}
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          icon="user-circle-o"
        />
        <Input
          ref={passwordInputRef}
          name="password"
          placeholder="Senha"
          onSubmitEditing={() => {
            formRef.current.submitForm();
          }}
          returnKeyType="send"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
        />

        <OptionsContainer>
          <Checkbox onPress={setKeep} status={keep} text="Manter Logado" />
          <ForgotPassword>Esqueceu a senha?</ForgotPassword>
        </OptionsContainer>

        <Button
          mode="contained"
          onPress={() => formRef.current.submitForm()}
          testID="Login-Form-Button"
        >
          Entrar
        </Button>
      </FormContainer>

      <SignUpContainer>
        <SignUpText>Não tem uma conta?</SignUpText>
        <SignUpButton
          onPress={() => {
            console.log(":)");
          }}
        >
          <SignUpButtonText>Cadastre-se</SignUpButtonText>
        </SignUpButton>
      </SignUpContainer>
    </Container>
  );
}
