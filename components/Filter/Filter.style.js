import styled from "styled-components/native";
import { theme } from "../../constants/colors";
import { Picker } from "@react-native-picker/picker";

export const SearchContainer = styled.View`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`;

export const SearchWrapper = styled.View`
  display: flex;
  flex: 1;
  border: 1px solid ${theme.white};
  border-radius: 25px;
  background-color: ${theme.white};
`;

export const SearchInput = styled.TextInput`
  flex: 2;
  padding: 10px;
  border: 1px solid ${theme.white};
  border-radius: 25px;
  margin-right: 10px;
  outline: none;
  border-radius: 8px;
`;

export const SearchButton = styled.Pressable`
  background-color: ${theme.mainTheme};
  color: ${theme.white};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 8px;

  &:before {
    margin-right: 5px;
  }
`;

export const SearchDropdown = styled.View`
  flex: 0.5;
  margin-left: 10px;
  padding: 10px;
  outline: none;
  border: 1px solid ${theme.white};
  border-radius: 25px;
  background-color: ${theme.white};
`;
export const StyledPicker = styled(Picker)`
  height: 40px;
  color: #000;
`;
