import styled from "styled-components/native";
import { theme } from "../../constants/colors";
import { Dimensions } from "react-native";

// const screenWidth = Dimensions.get("window").width;
const isSmallScreen = true;

export const Wrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px;
  background-color: ${theme.white};
  border-width: 1px;
  border-color: ${theme.white};
  width: ${(props) => (props.iscard === false ? "auto" : "300px")};
  min-height: 180px;
  margin: 10px;
  padding: ${(props) => (props.iscard === false ? "20px" : "10px 0px 0px 0px")};
  box-shadow: 0px 0px ${(props) => (props.lowshadow ? "1px" : "3px")};
  elevation: ${(props) => (props.lowshadow ? 1 : 3)};
`;

export const StartTag = styled.Text`
  color: ${theme.white};
`;

export const TextWrapper = styled.View`
  flex-direction: column;
  padding: 10px 20px;
  flex-grow: 1;
`;

export const CardTitle = styled.Text`
  font-weight: 600;
  font-size: 24px;
`;

export const CardDesc = styled.View``;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 80px;
`;

export const RedTitle = styled.Text`
  color: ${theme.black};
  font-weight: 700;
`;

export const RedTitleData = styled.Text`
  font-weight: 400;
`;

export const ButtonWrapper = styled.View`
  background-color: ${theme.mainTheme};
  padding: 10px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: auto;
`;
