import styled from "styled-components/native";
import { Dimensions } from "react-native";

// const screenWidth = Dimensions.get("window").width;
const screenWidth = 500;

export const Backdrop = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: ${screenWidth > 500 ? 500 : screenWidth * 0.9}px;
  position: relative;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const RewardImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const RewardLink = styled.Text`
  color: blue;
  text-decoration: underline;
`;

export const RewardText = styled.Text`
  margin-vertical: 10px;
`;
