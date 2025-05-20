import styled from "styled-components/native";
import { theme } from "../../constants/colors";
import { Dimensions } from "react-native";

// const screenWidth = Dimensions.get("window").width;
const isSmallScreen = true;

export const MainMenuWrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${theme.white};
`;

export const ImageLogo = styled.View`
  align-items: center;
  align-self: center;
  justify-content: center;
`;

export const LogoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-color: #eaeaea;
`;

export const LinksWrapper = styled.View`
  margin-top: 20px;
  align-items: center;
  display: ${({ isShown }) =>
    isSmallScreen && isShown === false ? "none" : "flex"};
`;

export const LanguageSelector = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const LogoutCont = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
`;

export const BurgerMenuImage = styled.Image`
  height: 24px;
  width: 24px;
  display: ${isSmallScreen ? "flex" : "none"};
`;

export const LinkItems = styled.Text`
  color: ${theme.mainTheme};
  font-weight: 600;
  font-size: 16px;
  padding-vertical: 6px;
  padding-horizontal: 12px;
`;

export const LinkGroups = styled.View`
  background-color: #ffffff;
  margin-bottom: 16px;
  padding: 18px;
  border-radius: 12px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 3;
  width: ${isSmallScreen ? "90%" : "80%"};
  align-self: center;
`;

export const LogOutText = styled.Text`
  color: ${theme.mainTheme};
`;
