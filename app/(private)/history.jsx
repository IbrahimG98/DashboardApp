import { ScrollView } from "react-native";
import Menu from "../../components/Menu/Menu";
import HistoryPage from "../../pages/HistoryPage/HistoryPage";

const History = () => {
  return (
    <ScrollView>
      <Menu />
      <HistoryPage />
    </ScrollView>
  );
};

export default History;
