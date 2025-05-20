import styled from "styled-components/native";
import { theme } from "../../constants/colors";
import { Picker } from "@react-native-picker/picker";
import { Dimensions } from "react-native";
// const screenWidth = Dimensions.get("window").width;
const screenWidth = 500;

// Backdrop covering the entire screen
export const Backdrop = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

// Modal container now fills the screen
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

// Modal header with content
export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
  background-color: ${theme.white};
`;

export const ModalContent = styled.View`
  background-color: ${theme.white};
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: ${screenWidth > 500 ? 500 : screenWidth * 0.9}px;
  position: relative;
  gap: 20px;
`;

// Modal footer section
export const ModalFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
  background-color: ${theme.white};
`;

// Select (Picker) component for the modal
export const Select = styled(Picker)`
  width: 100%;
  font-size: 16px;
  color: #333;
`;

// Button for modal footer
export const Button = styled.TouchableOpacity`
  background-color: ${(props) => (props.primary ? theme.mainTheme : "#ccc")};
  padding: 10px 20px;
  border-radius: 4px;
  margin-left: 10px;
`;
