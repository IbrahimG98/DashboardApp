import {
  CardContainer,
  TotalRewards,
  TotalAmount,
  SurveyCount,
} from "./RewardCard.style";

const RewardSummary = ({ rewardsAmount, numOfSurveys }) => {
  return (
    <CardContainer>
      <TotalRewards>${rewardsAmount}</TotalRewards>
      <TotalAmount>Total rewards</TotalAmount>
      <SurveyCount>{numOfSurveys} surveys completed</SurveyCount>
    </CardContainer>
  );
};

export default RewardSummary;
