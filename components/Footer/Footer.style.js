import styled from "styled-components/native";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

export const MainWrapper = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 60px;
  width: 100%;
  background-color: ${theme.white};
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;
export const WatermarkContainer = styled.View`
  display: flex;
  align-items: center;
  color: ${theme.disclaimerText};
  font-size: 1em;
  font-weight: 400;

  span {
    margin-left: 5px;
  }
  @media (max-width: ${breakpoints.sm}) {
    span {
      margin-left: unset;
    }
  }
`;
export const LinksWrapper = styled.View`
  display: flex;
  flex: 2;
  gap: 40px;
  margin-bottom: 5px;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const LinkItem = styled.Text`
  text-decoration: none;
  color: ${theme.mainTheme};
  font-size: 1em;
  font-weight: 400;

  &.active {
    border-color: ${theme.mainTheme};
    color: ${theme.mainTheme};
    border-bottom: 5px solid ${theme.mainTheme};
  }
`;
export const LogoutCont = styled.View`
  display: flex;
  gap: 10px;
  justify-content: baseline;
  align-items: center;
`;
