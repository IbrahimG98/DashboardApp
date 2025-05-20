import { Linking, TouchableOpacity, Text } from "react-native";
import {
  ButtonWrapper,
  CardDesc,
  CardTitle,
  RedTitle,
  RedTitleData,
  RowContainer,
  TextWrapper,
  Wrapper,
} from "./Card.style";
import { calculateTimeRemaining } from "../../utils/utils";

const Card = ({ item, children }) => {
  const isCard = !!item;

  const handleOpenLink = () => {
    if (item?.surveyLink) {
      Linking.openURL(item.surveyLink);
    }
  };

  return (
    <Wrapper iscard={isCard.toString()}>
      {!children && (
        <>
          <TextWrapper>
            {item?.surveyTopic && <CardTitle>{item?.surveyTopic}</CardTitle>}
            {item?.description && <CardDesc>{item?.description}</CardDesc>}

            {item?.surveyLenghtOfInterview && (
              <RowContainer>
                <RedTitle>Length:</RedTitle>
                <RedTitleData>
                  {item.surveyLenghtOfInterview} minutes
                </RedTitleData>
              </RowContainer>
            )}

            <RowContainer>
              <RedTitle>Reward:</RedTitle>
              <RedTitleData>
                {item?.surveyIncentiveCurrency === "USD" ? "$" : "€"}
                {item?.surveyIncentive}
              </RedTitleData>
            </RowContainer>

            {(item?.surveyEndDate || item?.surveyRewardedDate) && (
              <RowContainer>
                <RedTitle>Ends in:</RedTitle>
                <RedTitleData>
                  {calculateTimeRemaining(
                    item.surveyEndDate || item.surveyRewardedDate
                  )}
                </RedTitleData>
              </RowContainer>
            )}

            {item?.how && (
              <RowContainer>
                <RedTitle>How:</RedTitle>
                <RedTitleData>{item.how}</RedTitleData>
              </RowContainer>
            )}
          </TextWrapper>

          {item?.surveyLink && (
            <ButtonWrapper>
              <TouchableOpacity onPress={handleOpenLink}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    padding: 6,
                    borderRadius: 6,
                  }}
                >
                  Start Survey
                </Text>
              </TouchableOpacity>
            </ButtonWrapper>
          )}
        </>
      )}
      {children && children}
    </Wrapper>
  );
};

export default Card;
