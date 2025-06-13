import AsyncStorage from "@react-native-async-storage/async-storage";
import { config } from "../config";

const API = `${config.API_URL}/panel-members/dashboard`;
const companyToken = config.COMPANY_TOKEN;
const headers = async ({ login = false }) => {
  const token = await AsyncStorage.getItem("accessToken");
  return {
    Authorization: `Bearer ${!login ? token : companyToken}`,
    "Content-Type": "application/json",
  };
};

const about = async () => {
  return fetch(`${API}/about`, {
    method: "GET",
    headers: await headers({ login: false }),
  });
};

const availableSurveys = async () => {
  return fetch(`${API}/available-surveys`, {
    method: "GET",
    headers: await headers({ login: false }),
  });
};

const rewardHistory = async () => {
  return fetch(`${API}/reward-history`, {
    method: "GET",
    headers: await headers({ login: false }),
  });
};

const rewards = async () => {
  return fetch(`${API}/rewards`, {
    method: "GET",
    headers: await headers({ login: false }),
  });
};

const rewardsClaim = async (rewardId, paymentType) => {
  return fetch(`${API}/rewards/claim`, {
    method: "POST",
    headers: await headers({ login: false }),
    body: JSON.stringify({ rewardId, paymentType }),
  });
};

const login = async (panel, email, password) => {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: await headers({ login: true }),
    body: JSON.stringify({ panel, email, password }),
  });
};

const surveyHistory = async () => {
  return fetch(`${API}/survey-history`, {
    method: "GET",
    headers: await headers({ login: false }),
  });
};

const updatePushToken = async (token) => {
  return await fetch(
    `https://surveys.publicwisdomaccount.com/api/panel-members/dashboard/token`,

    {
      method: "POST",
      headers: await headers({ login: false }),
      body: JSON.stringify({ token }),
    }
  );
};

const DashboardServices = {
  about,
  availableSurveys,
  rewardHistory,
  rewards,
  rewardsClaim,
  login,
  surveyHistory,
  updatePushToken,
};

export default DashboardServices;
