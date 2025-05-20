import { ScrollView } from "react-native";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import FinancialsPage from "../../pages/FinancialsPage/FinancialsPage";

const Rewards = () => {
  return (
    <ScrollView>
      <Menu />
      <FinancialsPage />
    </ScrollView>
  );
};

export default Rewards;
