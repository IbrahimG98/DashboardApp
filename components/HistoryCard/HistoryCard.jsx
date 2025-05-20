import { calculateTimeRemaining, getCurrencySymbol } from "../../utils/utils";
import {
  ButtonWrapper,
  CardDesc,
  CardTitle,
  RedTitle,
  RedTitleData,
  RowContainer,
  StartTag,
  TextWrapper,
  Wrapper,
} from "./HistoryCard.style";

const HistoryCard = ({ item }) => {
  const isCard = item != null ? true : false;

  return (
    <Wrapper iscard={isCard.toString()}>
      <>
        <TextWrapper>
          {item?.surveyTopic && <CardTitle>{item?.surveyTopic}</CardTitle>}
          {item?.surveyRewardedDate && (
            <RowContainer>
              <RedTitle>Date rewarded:</RedTitle>
              <CardDesc>{item?.surveyEndDate}</CardDesc>
            </RowContainer>
          )}

          <RowContainer>
            <RedTitle>Amount (USD):</RedTitle>
            <RedTitleData>
              {getCurrencySymbol(item?.surveyIncentiveCurrency)}
              {item?.surveyIncentive}{" "}
            </RedTitleData>
          </RowContainer>
          <RowContainer>
            <RedTitle>Status:</RedTitle>
            <RedTitleData>
              {item?.surveyStatus && item?.surveyStatus}
            </RedTitleData>
          </RowContainer>
        </TextWrapper>
      </>
    </Wrapper>
  );
};
export default HistoryCard;
