import React, { useRef, useState } from "react";

import { FormHandles } from "@unform/core";
import { useRouter } from "expo-router";
import { Keyboard, TextInput } from "react-native";
import { Button, Chip } from "react-native-paper";
import * as Yup from "yup";

import { Checkbox } from "../components/Checkbox";
import Input from "../components/Input";
import { Logo } from "../components/Logo";
import { useCars } from "../logic/useCars";
import { schema } from "../utils/home/validations";

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
  const router = useRouter();

  const [keep, setKeep] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useCars();

  const handleSubmit = async (formData) => {
    Keyboard.dismiss();
    setLoginError(false);
    setLoading(true);

    try {
      formRef.current.setErrors({});

      await schema.validate(formData, {
        abortEarly: false,
      });

      await login({
        username: formData.login,
        password: formData.password,
        keepConnected: keep,
      });

      router.push("cars");
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        return formRef?.current?.setErrors(validationErrors);
      }

      setLoginError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Logo />
      <FormContainer ref={formRef} onSubmit={handleSubmit}>
        {loginError && <Chip icon="information">Login incorreto</Chip>}
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
          loading={loading}
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
