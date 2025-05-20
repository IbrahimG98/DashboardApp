import React, { useState } from "react";
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Select,
  Button,
  Backdrop,
} from "./Modal.style";
import { useDispatch, useSelector } from "react-redux";
import { rewardsClaim, selectRewards } from "../../features/dashboardSlice";
import { Modal, Text } from "react-native";

const SelectModal = ({ isOpen, onClose, rewardId }) => {
  const dispatch = useDispatch();
  const [selectedPayment, setSelectedPayment] = useState("");
  const rewards = useSelector(selectRewards);
  const selectedReward = rewards.projects.find((e) => e?.id == rewardId);

  const handleWithdraw = () => {
    onClose();
    dispatch(
      rewardsClaim({
        rewardId: rewardId,
        paymentType: selectedPayment,
      })
    )
      .then((res) => {
        alert(res.payload.data.message);
        const url = res?.payload?.data.redirectUrl;
        if (url) {
          // Use Linking if this is an external URL, or navigation for internal routes
          // import { Linking } from "react-native";
          // Linking.openURL(url);
        } else {
          // Navigate to Rewards screen manually using navigation prop if applicable
          // navigation.navigate("Rewards");
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  return (
    <Modal visible={isOpen} transparent animationType="slide">
      <Backdrop>
        <ModalContainer>
          <ModalContent>
            <Text>Select Payment Method</Text>

            {selectedReward?.payments?.length > 0 ? (
              <>
                <Text style={{ marginBottom: 10 }}>
                  Choose a payment option:
                </Text>
                <Select
                  selectedValue={selectedPayment}
                  onValueChange={(itemValue) => setSelectedPayment(itemValue)}
                >
                  <Select.Item label="Select Payment" value="" />
                  {selectedReward.payments.map((payment) => (
                    <Select.Item
                      key={payment._id}
                      label={payment.title}
                      value={payment._id}
                    />
                  ))}
                </Select>
              </>
            ) : (
              <Text>
                We have experienced a problem processing your request, please
                try again shortly.
              </Text>
            )}

            <Button onPress={onClose}>
              <Text>Close</Text>
            </Button>
            {selectedReward?.payments?.length > 0 && (
              <Button primary onPress={handleWithdraw}>
                <Text style={{ color: "white" }}>Withdraw</Text>
              </Button>
            )}
          </ModalContent>
        </ModalContainer>
      </Backdrop>
    </Modal>
  );
};

export default SelectModal;
