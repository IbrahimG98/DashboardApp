import {
  ModalContainer,
  ModalContent,
  CloseButton,
  RewardLink,
  RewardText,
  Backdrop,
  RewardImageWrapper,
} from "./RewardModal.style";
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  Modal,
} from "react-native";

const RewardModal = ({ rewardType, rewardData, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLinkPress = (url) => {
    if (url) Linking.openURL(url);
  };

  return (
    <Modal visible={isOpen} transparent animationType="slide">
      <Backdrop>
        <ModalContainer>
          <ModalContent>
            <CloseButton onPress={onClose}>
              <Text style={{ fontSize: 24 }}>✕</Text>
            </CloseButton>

            {rewardType === "rybbon" && (
              <>
                <RewardImageWrapper>
                  <Image
                    source={require("../../assets/images/rybbon_img.png")}
                    style={{ width: 300, height: 100, resizeMode: "contain" }}
                  />
                </RewardImageWrapper>

                <RewardText>
                  Reward Amount:{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    ${rewardData?.amount}
                  </Text>
                </RewardText>

                <TouchableOpacity
                  onPress={() => handleLinkPress(rewardData?.rewardClaimUrl)}
                >
                  <RewardLink>{rewardData?.rewardClaimUrl}</RewardLink>
                </TouchableOpacity>

                <RewardText>
                  1. To redeem your gift card, visit the URL above
                </RewardText>
                <RewardText>
                  2. Follow the instructions on the Rybbon reward page
                </RewardText>
                <RewardText>
                  <Text style={{ fontWeight: "bold" }}>
                    Claimed rewards may be redeemed only once.
                  </Text>
                </RewardText>
              </>
            )}

            {rewardType === "amazon" && (
              <>
                <RewardImageWrapper>
                  <Image
                    source={require("../../assets/images/amazon_logo.png")}
                    style={{ width: 300, height: 100, resizeMode: "contain" }}
                  />
                </RewardImageWrapper>

                <RewardText>
                  Reward Amount:{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    ${rewardData?.amount}
                  </Text>
                </RewardText>

                <RewardText>
                  Use this code on Amazon:{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    {rewardData?.voucherCode}
                  </Text>
                </RewardText>

                <RewardText>
                  1. To redeem your gift card, visit{" "}
                  <Text
                    style={{ color: "blue", textDecorationLine: "underline" }}
                    onPress={() => handleLinkPress("https://amazon.com")}
                  >
                    Amazon.com
                  </Text>
                </RewardText>

                <RewardText>
                  2. Go to your Amazon Account and click on Gift Cards
                </RewardText>
                <RewardText>
                  3. Click the Redeem a Gift Card button and enter your gift
                  card code, then click Apply to Your Account
                </RewardText>
                <RewardText>
                  <Text style={{ fontWeight: "bold" }}>
                    Claimed gift cards may be redeemed only once on Amazon.com.
                  </Text>
                </RewardText>
              </>
            )}

            {rewardType === "tremendous" && (
              <>
                <RewardImageWrapper>
                  <Image
                    source={require("../../assets/images/tremendous_logo.png")}
                    style={{ width: 300, height: 100, resizeMode: "contain" }}
                  />
                </RewardImageWrapper>

                <RewardText>
                  Reward Amount:{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    ${rewardData?.amount}
                  </Text>
                </RewardText>

                {rewardData?.rewardClaimUrl !== "Delivered via email" ? (
                  <>
                    <RewardText>
                      Your reward link:{" "}
                      <TouchableOpacity
                        onPress={() =>
                          handleLinkPress(rewardData?.rewardClaimUrl)
                        }
                      >
                        <RewardLink>{rewardData?.rewardClaimUrl}</RewardLink>
                      </TouchableOpacity>
                    </RewardText>

                    <RewardText>
                      1. To redeem your gift card, visit the URL above
                    </RewardText>
                    <RewardText>
                      2. Follow the instructions on the Tremendous reward page
                    </RewardText>
                    <RewardText>
                      <Text style={{ fontWeight: "bold" }}>
                        Claimed rewards may be redeemed only once.
                      </Text>
                    </RewardText>
                  </>
                ) : (
                  <RewardText>
                    Your reward was directly delivered to you via email by our
                    payment partner Tremendous.
                  </RewardText>
                )}
              </>
            )}
          </ModalContent>
        </ModalContainer>
      </Backdrop>
    </Modal>
  );
};

export default RewardModal;
