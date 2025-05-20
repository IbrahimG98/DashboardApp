import { Text, View } from "react-native";
import LoginPage from "../pages/LoginPage/LoginPage";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginPage />
    </View>
  );
}
