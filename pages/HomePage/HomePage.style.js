import styled from "styled-components/native";
import { theme } from "../../constants/colors";
import { Dimensions } from "react-native";

const isSmallScreen = true;

export const WrapperMain = styled.View`
  flex: 1;
  background-color: ${theme.white};
  padding: 0px 20px 20px 20px;
`;

export const OverviewWrapper = styled.View`
  margin-top: 10px;
  height: 450px;
  justify-content: center;
  align-items: center;
  display: ${isSmallScreen ? "none" : "flex"};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${isSmallScreen ? "0px" : "-10px"};
`;

export const ContainerColumn = styled.View`
  padding: ${isSmallScreen ? "20px" : "60px"};
  width: ${isSmallScreen ? "95%" : "85%"};
  background-color: ${theme.white};
  border-radius: 12px;
  align-self: center;
`;

export const CardsCarouselWrapper = styled.View`
  width: ${(props) => (props.numOfItems < 3 ? "750px" : "100%")};
  align-self: center;
  margin-vertical: 20px;
`;

export const NoCarouselWrapper = styled.View`
  width: ${(props) => (props.numOfItems < 3 ? "750px" : "100%")};
  align-self: center;
  margin-vertical: 20px;
`;

export const PanelInfoContainer = styled.View`
  margin-top: 20px;
`;

export const PanelTitle = styled.Text`
  color: ${theme.mainTheme};
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const PanelDescription = styled.Text`
  color: ${theme.black};
  font-weight: 400;
  font-size: 16px;
`;

export const WelcomeSection = styled.View`
  margin-vertical: 20px;
`;

export const SectionTitle = styled.Text`
  color: ${theme.sectionTitle};
  font-weight: 700;
  font-size: 22px;
`;

export const BlueSubtitles = styled.Text`
  color: ${theme.mainTheme};
  font-weight: 700;
  font-size: 16px;
`;

export const ImageContainer = styled.View`
  display: ${(props) => (props.show === "true" ? "flex" : "none")};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ImageRow = styled.View`
  flex-direction: ${isSmallScreen ? "column" : "row"};
  justify-content: space-between;
  margin-vertical: 10px;
`;

export const DisclaimerText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${theme.disclaimerText};
  text-align: center;
  margin-top: 10px;
`;

export const LinkItemText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.mainTheme};
  text-decoration: underline;
`;

export const ImageItem = styled.Image`
  width: ${isSmallScreen ? "100%" : "48%"};
  height: auto;
  resize-mode: contain;
  margin-vertical: 10px;
`;

export const NoAvailableSurveysMessage = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const GridContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;
export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
`;

export const InfoLabel = styled.Text`
  font-size: 16px;
  color: ${theme.black};
  font-weight: 600;
`;

export const InfoValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.mainTheme};
`;

export const AvailSurveysNote = styled.Text`
  font-size: 22px;
  color: ${theme.black};
`;
