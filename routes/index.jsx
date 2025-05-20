import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import FinancialsPage from "../pages/FinancialsPage/FinancialsPage";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import Login from "../components/Login/Login";

const AppRoutes = () => {
  const routes = (
    <>
      <Route path="/" element={<Login />} />
      <Route path="/home/" element={<HomePage />} />
      <Route path="/rewards/" element={<FinancialsPage />} />
      <Route path="/history/" element={<HistoryPage />} />
    </>
  );

  return <Routes>{routes}</Routes>;
};
export default AppRoutes;
