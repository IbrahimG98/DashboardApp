import styled from "styled-components/native";
import { theme } from "../../constants/colors";

export const MainWrapper = styled.View`
  flex: 1;
  position: relative;
  flex-direction: column;
  background-color: ${theme.white};
  width: 100%;
`;

export const Container = styled.View`
  flex: 2;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
`;

export const ContainerColumn = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 90%;
  background-color: ${theme.white};
`;

export const WrapperContent = styled.View`
  margin-top: 10px;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const TotalHonorariaWrapper = styled.View`
  flex-direction: row;
  gap: 15px;
  padding: 10px;
  align-items: center;
`;

export const HonorariaText = styled.Text`
  font-weight: 400;
  font-size: 17px;
`;

export const HonorariaAmount = styled.Text`
  font-weight: 700;
  font-size: 20px;
`;

export const RewardsWrapper = styled.View`
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const SearchHonariaSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

export const ShowMore = styled.Pressable`
  align-self: center;
  padding: 20px;
`;

export const ShowMoreText = styled.Text`
  color: ${theme.black};
  text-decoration: underline;
`;

export const NoSurveysCompletedMessage = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const NoSurveysTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${theme.black};
`;

export const NoSurveysText = styled.Text`
  font-size: 18px;
  color: ${theme.black};
`;

export const BlueSubtitles = styled.Text`
  color: ${theme.mainTheme};
  font-weight: 700;
  font-size: 16px;
`;

export const CollapsableSection = styled.View`
  flex-direction: column;
  gap: 20px;
  display: ${(props) => (props.show === "true" ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const StatusTextItem = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.disclaimerText};
`;
