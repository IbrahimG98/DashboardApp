import styled from "styled-components/native";
import { theme } from "../../constants/colors";

export const Table = styled.View`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: ${theme.white};
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`;

export const Thead = styled.View`
  background-color: ${theme.tableHeader};
  color: ${theme.black};
  font-size: 1em;
`;

export const Tr = styled.Text``;

export const Td = styled.Text`
  padding: 10px;
  text-align: left;
`;
export const Th = styled.Text`
  padding: 10px;
  text-align: left;
`;

export const SupportLink = styled.View`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const PaginationContainer = styled.View`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const PaginateButton = styled.View`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: ${theme.mainTheme};
  color: ${theme.white};
`;
