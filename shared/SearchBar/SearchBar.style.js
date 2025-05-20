import styled from "styled-components/native";
import { breakpoints } from "../../constants/breakpoints";

// Styled Components for the Search Bar Container
export const SearchBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  /* Adjust based on desired width */
  /* React Native doesn't support @media, so you can use conditional styling based on screen width instead */
  ${({ theme }) =>
    theme.isSmallScreen &&
    `
      width: 300px;
    `}
`;

// Styled Input for the Search Field
export const SearchInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: "#999999", // Set placeholder color to black
}))`
  flex: 1;
  font-size: 16px;
  padding: 10px 0;
  color: #4a4a4a;
`;
export const SearchIconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: baseline;
  align-self: center;
`;
