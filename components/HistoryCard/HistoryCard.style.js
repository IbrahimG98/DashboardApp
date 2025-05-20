import styled from "styled-components/native";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

// Developer comments:
// If the iscard prop is false, we will let children components dictate the width and height of a Card.

export const Wrapper = styled.View`
  flex-direction: column;
  border-radius: 12px;
  background-color: ${theme.white};
  border-width: 1px;
  border-color: ${theme.white};
  width: ${(props) => (props.iscard === "false" ? "auto" : "100%")};
  /* Note: React Native doesn't support box-shadow the same way as CSS */
  /* We need to use shadow properties individually */
  shadow-color: ${theme.lightGray};
  shadow-offset: 0px 2px;
  shadow-opacity: ${(props) => (props.lowshadow ? 0.3 : 0.8)};
  shadow-radius: ${(props) => (props.lowshadow ? 2 : 5)};
  /* For Android shadow */
  elevation: ${(props) => (props.lowshadow ? 2 : 5)};
  padding: ${(props) => (props.iscard === "false" ? "20px" : "12px 0 0 0")};
  min-height: 180px;
`;

export const StartTag = styled.Text`
  color: ${theme.white};
  font-size: 16px;
  font-weight: 500;
`;

export const TextWrapper = styled.View`
  flex-direction: column;
  gap: 12px;
  padding: 12px 20px;
`;

export const CardTitle = styled.Text`
  font-weight: 700;
  font-size: 26px;
  color: ${theme.black};
`;

export const CardDesc = styled.Text`
  font-size: 16px;
  color: ${theme.gray};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  padding: 12px 0px;
  justify-content: space-between;
`;

export const RedTitle = styled.Text`
  color: ${theme.black};
  font-weight: 700;
`;

export const RedTitleData = styled.Text`
  font-weight: 400;
  color: ${theme.black};
`;

export const ButtonWrapper = styled.View`
  background-color: ${theme.mainTheme};
  margin: 0;
  padding: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.white};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;
