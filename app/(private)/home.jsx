import { ScrollView, Text, View } from "react-native";
import HomePage from "../../pages/HomePage/HomePage";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <ScrollView>
      <Menu />
      <HomePage />
    </ScrollView>
  );
};

export default Home;
