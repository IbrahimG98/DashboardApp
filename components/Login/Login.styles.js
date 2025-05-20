import styled from "styled-components/native";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

export const LoginContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

export const LoginForm = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 350px;
`;

export const LoginTitle = styled.Text`
  margin-bottom: 20px;
  color: #4a4a4a;
`;
export const ImageLogo = styled.View`
  justify-content: center;
  margin-bottom: 20px;
`;

export const InputField = styled.TextInput.attrs(() => ({
  placeholderTextColor: "#999999", // Set placeholder color to black
}))`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #4a4a4a;
`;

export const RememberMe = styled.Text`
  align-self: flex-start;
  margin-bottom: 10px;
`;

export const ForgotPassword = styled.Text`
  align-self: flex-end;
  margin-bottom: 20px;
  color: ${theme.mainTheme};
  cursor: pointer;
`;

export const LoginButton = styled.View`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.mainTheme};
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: ${theme.subTheme};
  }
`;
