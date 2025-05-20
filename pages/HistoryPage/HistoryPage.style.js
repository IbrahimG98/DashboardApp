import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";
import styled from "styled-components/native";

export const MainWrapper = styled.View`
  flex: 1;
  background-color: ${theme.white};
  padding: 0px 20px 20px 20px;
  justify-content: center;
  align-items: center;
`;

export const ContainerColumn = styled.View`
  background-color: ${theme.white};
  gap: 30px;
  border-radius: 12px;
  elevation: 3;
  width: 100%;
  padding: 20px;
`;

export const HeaderWrapper = styled.View`
  margin-top: 10px;
`;

export const WrapperContent = styled.View`
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

export const RewardsWrapper = styled.View`
  flex-direction: column;
  gap: 20px;
  width: 100%; /* Full width for Rewards */
  padding: 0 20px;
`;

export const WelcomeSection = styled.View`
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const BlueSubtitles = styled.Text`
  color: ${theme.mainTheme};
  font-weight: 700;
  font-size: 18px;
`;

export const StatusTextContainer = styled.View`
  display: ${({ show }) => (show === "true" ? "flex" : "none")};
  gap: 16px;
  flex-wrap: wrap;
`;

export const StatusTextItemTitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.black};
`;

export const StatusTextItem = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.disclaimerText};
`;

export const NoSurveysCompletedMessage = styled.View`
  align-items: center;
  margin-top: 50px;
  padding: 20px;
`;

export const NoSurveysTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 12px;
  color: ${theme.black};
  text-align: center;
  font-weight: bold;
`;

export const NoSurveysText = styled.Text`
  font-size: 18px;
  color: ${theme.black};
  text-align: center;
`;

export const PaginationWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const DisclaimerText = styled.Text`
  font-size: 15px;
  color: ${theme.disclaimerText};
  text-align: center;
`;
