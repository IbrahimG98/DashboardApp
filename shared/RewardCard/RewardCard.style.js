import styled from "styled-components/native";
import { theme } from "../../constants/colors";

export const CardContainer = styled.View`
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  background-color: ${theme.white};
  shadow-color: ${theme.gray};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.3;
  shadow-radius: 3px;
  elevation: 3;
`;

export const TotalRewards = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const DateNameWrapper = styled.View`
  flex-direction: column;
`;

export const TotalAmount = styled.Text`
  font-size: 16px;
  color: #555;
`;

export const SurveyCount = styled.Text`
  font-size: 24px;
  margin-top: 10px;
`;

export const SurveyItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  column-gap: 20px;
`;

export const SurveyDate = styled.Text`
  flex: 1;
  text-align: left;
`;

export const SurveyName = styled.Text`
  flex: 1;
  text-align: left;
  font-size: 32px;
  font-weight: bold;
`;

export const SurveyAmount = styled.Text`
  flex: 1;
  text-align: right;
  color: green;
`;

export const SeeDetailsButton = styled.View`
  border-radius: 8px;
  background-color: ${theme.mainTheme};
  padding: 10px;
  width: 100px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ClaimSeeDetailsText = styled.Text`
  color: ${theme.white};
  align-items: center;
  align-self: center;
  font-size: 11px;
`;

export const ClaimButton = styled.View`
  border-radius: 8px;
  background-color: ${theme.claimColor};
  padding: 10px;
  width: 100px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
