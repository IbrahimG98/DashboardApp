import { convertToMMDDYYYY, getCurrencySymbol } from "../../utils/utils";
import {
  CardContainer,
  SurveyItem,
  SurveyDate,
  SurveyAmount,
  DateNameWrapper,
  SurveyName,
  ClaimButton,
  SeeDetailsButton,
  ClaimSeeDetailsText,
} from "./RewardCard.style";
import SelectModal from "../Modal/Modal";
import { useState } from "react";
import RewardModal from "../RewardModal/RewardModal";
import { Text, TouchableOpacity } from "react-native";

const RewardCard = ({ rewardItem }) => {
  const currencyFormat = getCurrencySymbol(rewardItem?.currency);
  const dateTimeFormat = convertToMMDDYYYY(rewardItem?.date);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rewardDetailsModal, setRewardDetailsModal] = useState(false);

  const isClaimable =
    rewardItem?.status?.toLowerCase() === "ready" ||
    rewardItem?.status?.toLowerCase() === "claimable";

  const isClaimed = rewardItem?.status?.toLowerCase() === "claimed";

  return (
    <CardContainer>
      <SurveyItem>
        <DateNameWrapper>
          <SurveyName>{rewardItem?.title}</SurveyName>
          <SurveyDate>{dateTimeFormat}</SurveyDate>
        </DateNameWrapper>

        <SurveyAmount>
          {currencyFormat}
          {rewardItem?.amount}
        </SurveyAmount>
      </SurveyItem>

      {isClaimable ? (
        <TouchableOpacity onPress={() => setIsModalOpen(true)}>
          <ClaimButton>
            <ClaimSeeDetailsText>Claim</ClaimSeeDetailsText>
          </ClaimButton>
        </TouchableOpacity>
      ) : isClaimed ? (
        <TouchableOpacity onPress={() => setRewardDetailsModal(true)}>
          <SeeDetailsButton>
            <ClaimSeeDetailsText>See details</ClaimSeeDetailsText>
          </SeeDetailsButton>
        </TouchableOpacity>
      ) : null}

      <SelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rewardId={rewardItem?.id}
      />

      <RewardModal
        isOpen={rewardDetailsModal}
        onClose={() => setRewardDetailsModal(false)}
        rewardType={rewardItem?.type}
        rewardData={rewardItem}
      />
    </CardContainer>
  );
};

export default RewardCard;
