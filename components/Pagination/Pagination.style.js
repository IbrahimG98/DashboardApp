import styled from "styled-components/native";
import { theme } from "../../constants/colors";

export const PaginationWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const PaginationButton = styled.Pressable`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : theme.mainTheme};
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const PaginationButtonText = styled.Text`
  color: ${theme.white};
  text-align: center;
`;

export const PageNumberContainer = styled.Pressable`
  margin: 5px;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.active ? theme.mainTheme : theme.whiteSmoke};
`;

export const PageNumber = styled.Text`
  color: ${(props) => (props.active ? theme.white : theme.black)};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  text-align: center;
`;

export const Dots = styled.Text`
  margin: 5px;
  padding: 10px 15px;
  color: black;
  text-align: center;
`;
