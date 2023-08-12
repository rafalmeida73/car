import { Form } from "@unform/mobile";
import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};
  `}
`;

export const FormContainer = styled(Form)`
  margin-top: ${scale(32)}px;
  width: 100%;
  padding: 0 ${scale(32)}px;
  gap: ${scale(16)}px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${scale(30)}px;
`;

export const ForgotPassword = styled.Text`
  ${({ theme }) => css`
    border-color: ${theme.colors.background.primary};
  `}
  border-bottom-width: ${scale(1)}px;

  font-size: ${scale(10)}px;
`;

export const SignUpContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${scale(15)}px;
`;

export const SignUpText = styled.Text`
  font-size: ${scale(12)}px;
`;

export const SignUpButton = styled.TouchableOpacity``;

export const SignUpButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background.primary};
  `}

  font-size: ${scale(12)}px;
  font-weight: bold;
  margin-left: ${scale(5)}px;
`;
