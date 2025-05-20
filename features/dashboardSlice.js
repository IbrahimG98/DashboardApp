import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import DashboardServices from "../services/dashboard.service";

export const retrieveDashboard = createAsyncThunk(
  "dashboard/retrieveMember",
  async () => {
    try {
      const res = await DashboardServices.about();
      const dataJson = await res.json();
      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const retrieveAvailableSurveys = createAsyncThunk(
  "dashboard/availableSurveys",
  async () => {
    try {
      const res = await DashboardServices.availableSurveys();
      const dataJson = await res.json();
      // if (res.status === 401) {
      //   localStorage.removeItem("userToken");
      //   window.location.reload();

      //   return { data: {}, requestSuccessfull: false };
      // }

      // const res = {
      //   ok: true,
      // };
      // const dataJson = {
      //   surveys: [
      //     {
      //       surveyTopic: "S1",
      //       surveyLenghtOfInterview: 15,
      //       surveyIncentive: "10",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-17",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=6595dc8bd916206a3d6c7133&memberId=Cm8dJMDdN7IU",
      //     },
      //     {
      //       surveyTopic: "ADI USE ME FOR TESTING",
      //       surveyLenghtOfInterview: 100,
      //       surveyIncentive: "150",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-06",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=659813676b2b95a59aac642c&memberId=Lua2pD5kR8bO",
      //     },
      //     {
      //       surveyTopic: "hellou",
      //       surveyLenghtOfInterview: 30,
      //       surveyIncentive: "10",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-28",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=6596be8ddf8050a8cf8e11f5&memberId=JnLiAZ6zTX8i",
      //     },
      //     {
      //       surveyTopic: "Medina Test",
      //       surveyLenghtOfInterview: 5,
      //       surveyIncentive: "1",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-24",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65a7dab20544eb13cbb64d5b&memberId=ZujaZc3kOrob",
      //     },
      //     {
      //       surveyTopic: "Q One platform demo ",
      //       surveyLenghtOfInterview: 15,
      //       surveyIncentive: "1",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-31",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65a7e06e0544eb13cbb70f2c&memberId=fublHo9xXt2x",
      //     },
      //     {
      //       surveyTopic: "Training Test",
      //       surveyLenghtOfInterview: 6,
      //       surveyIncentive: "20",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-02-09",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65afe3d57d6563d45b9d4012&memberId=wDJAE58oUDMj",
      //     },
      //     {
      //       surveyTopic: "roman test",
      //       surveyLenghtOfInterview: 15,
      //       surveyIncentive: "15",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-25",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65afe0fe7d6563d45b9d06ad&memberId=gi7JmrFcZDOI",
      //     },
      //     {
      //       surveyTopic: "Stefan test",
      //       surveyLenghtOfInterview: 10,
      //       surveyIncentive: "15",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-02-08",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65b2908b4246d7b3dd30a527&memberId=KXV9EkbpL22f",
      //     },
      //     {
      //       surveyTopic: "123456789",
      //       surveyLenghtOfInterview: 10,
      //       surveyIncentive: "12",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2000-09-20",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65b391420732bac551923e43&memberId=xxWjQTT8o8Ds",
      //     },
      //     {
      //       surveyTopic: "Medina Test Save Selection Project",
      //       surveyLenghtOfInterview: 10,
      //       surveyIncentive: "20",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2001-09-21",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65b7d4795ac2c524dbac4ca9&memberId=pPHoDLbjzE9D",
      //     },
      //     {
      //       surveyTopic: "Test 1: Single Link",
      //       surveyLenghtOfInterview: 20,
      //       surveyIncentive: "3",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2000-02-02",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=65c63989f46362888cd58bb7&memberId=lbKBY9Cyl0CW",
      //     },
      //     {
      //       surveyTopic: "TEST FOR PAYMENTS",
      //       surveyLenghtOfInterview: 10,
      //       surveyIncentive: "20",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "0224-09-21",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=661fac6425c339a8844b2f04&memberId=qE3PD9N86kd6",
      //     },
      //     {
      //       surveyTopic: "Test",
      //       surveyLenghtOfInterview: 1,
      //       surveyIncentive: "1",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-05-08",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=662a550a43afe6b91614fa97&memberId=AWGk6RyqNKhX",
      //     },
      //     {
      //       surveyTopic: "TEST11",
      //       surveyLenghtOfInterview: 12,
      //       surveyIncentive: "12",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-08-22",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=663b7d3a2efa98bedecee7e3&memberId=JO4HzDaqc4hn",
      //     },
      //     {
      //       surveyTopic: "testtest",
      //       surveyLenghtOfInterview: 15,
      //       surveyIncentive: "0",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=66433d77d229193d2679561f&memberId=Dq19IplQQqjz",
      //     },
      //     {
      //       surveyTopic: "TESTING LANDING PAGES",
      //       surveyLenghtOfInterview: 40,
      //       surveyIncentive: "10",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-07-01",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=664ca004514137f17d9f7b1c&memberId=4EByLVnv8IWR",
      //     },
      //     {
      //       surveyTopic: "LANDING PAGE REDIRECT TESTS",
      //       surveyLenghtOfInterview: 100,
      //       surveyIncentive: "10",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-05-30",
      //       surveyLink:
      //         "undefined/panel-manager/projects/pages/invite?projectId=6655df371e633b5c23544122&memberId=H5XZtXhGGzCU",
      //     },
      //   ],
      // };

      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const retrieveRewardHistory = createAsyncThunk(
  "dashboard/rewardHistory",
  async () => {
    try {
      const res = await DashboardServices.rewardHistory();
      const dataJson = await res.json();
      if (res.status === 401) {
        // localStorage.removeItem("userToken");
        //  window.location.reload();

        return { data: {}, requestSuccessfull: false };
      }
      // const res = {
      //   ok: true,
      // };
      // const dataJson = {
      //   surveys: [
      //     {
      //       surveyTopic: "Test",
      //       surveyRewardedIncentive: "10",
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-10-2024",
      //       surveyStatus: "STATUS_TEST",
      //     },
      //     {
      //       surveyTopic: "Test",
      //       surveyRewardedIncentive: "123",
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "01-10-2024",
      //     },
      //     {
      //       surveyTopic: "Test",
      //       surveyRewardedIncentive: "50",
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "02-06-2024",
      //     },
      //     {
      //       surveyTopic: "Benjamin test",
      //       surveyRewardedIncentive: "11",
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "02-01-2024",
      //     },
      //     {
      //       surveyTopic: "roman test",
      //       surveyRewardedIncentive: 0,
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-03-2024",
      //     },
      //     {
      //       surveyTopic: "roman testing Exclusion save Embed",
      //       surveyRewardedIncentive: 0,
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-06-2024",
      //     },
      //     {
      //       surveyTopic: "Q1 Test on WebMD Server",
      //       surveyRewardedIncentive: "25",
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-06-2024",
      //     },
      //     {
      //       surveyTopic: "roman test",
      //       surveyRewardedIncentive: 0,
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-03-2024",
      //     },
      //     {
      //       surveyTopic: "roman testing Exclusion save Embed",
      //       surveyRewardedIncentive: 0,
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-06-2024",
      //     },
      //     {
      //       surveyTopic: "Q1 Test on WebMD Server",
      //       surveyRewardedIncentive: "25",
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-06-2024",
      //     },
      //     {
      //       surveyTopic: "roman test",
      //       surveyRewardedIncentive: 0,
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-03-2024",
      //     },
      //     {
      //       surveyTopic: "roman testing Exclusion save Embed",
      //       surveyRewardedIncentive: 0,
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-06-2024",
      //     },
      //     {
      //       surveyTopic: "Q1 Test on WebMD Server",
      //       surveyRewardedIncentive: "25",
      //       surveyRewardedIncentiveCurrency: "USD",
      //       surveyRewardedDate: "05-06-2024",
      //     },
      //   ],
      // };
      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const retrieveRewards = createAsyncThunk(
  "dashboard/rewards",
  async () => {
    try {
      const res = await DashboardServices.rewards();
      const dataJson = await res.json();
      if (res.status === 401) {
        // localStorage.removeItem("userToken");
        // window.location.reload();

        return { data: {}, requestSuccessfull: false };
      }
      // const res = {
      //   ok: true,
      // };
      // const dataJson = {
      //   firstName: "Tracy",
      //   lastName: "Beasley",
      //   email: "roman.schoensee+1@gmail.com",
      //   lastTaxYearSubmission: "2022", // not sure if we should ignore this, it's hardcoded for a specific field in the joiner questionnaire
      //   rewards: [
      //     {
      //       id: "6666f653d7f8c75f84f1da8c",
      //       title: "Test1",
      //       amount: 100,
      //       currency: "USD",
      //       status: "claimed",
      //       date: "2024-06-10T12:49:23.359Z",
      //       claimable: false,
      //       voucherCode: "38303233-343835313834",
      //       rewardClaimUrl:
      //         "https://demo.rybbon.net/claim?claimcode=c1e5df3b-6afa-4536-acfe-e03619efd62e",
      //       type: "rybbon",
      //       expirationDate: "2024-06-10T12:49:23.359Z",
      //     },
      //     {
      //       id: "7777f653d7f8c75f84f1da8d",
      //       title: "Test2",
      //       amount: 150,
      //       currency: "USD",
      //       status: "claimable",
      //       date: "2024-06-15T14:20:30.359Z",
      //       claimable: true,
      //       voucherCode: "48403334-454836313835",
      //       rewardClaimUrl:
      //         "https://demo.rybbon.net/claim?claimcode=d2f6ef4c-7bfa-4637-bcfe-f04728efg73f",
      //       type: "rybbon",
      //     },
      //     {
      //       id: "8888f653d7f8c75f84f1da8e",
      //       title: "Test3",
      //       amount: 200,
      //       currency: "USD",
      //       status: "expired",
      //       date: "2024-06-20T16:40:45.359Z",
      //       claimable: true,
      //       voucherCode: "58503435-565937313836",
      //       rewardClaimUrl:
      //         "https://demo.rybbon.net/claim?claimcode=e3g7hf5d-8cga-4738-cdfe-g05839hgf84g",
      //       type: "amazon",
      //     },
      //   ],
      //   payments: [
      //     {
      //       _id: "664db3f3404c8329266e6596",
      //       title: "Rybbon United States",
      //     },
      //     {
      //       _id: "6655dcdfbc850f4694a75423",
      //       title: "Rybbon United Kingdom",
      //     },
      //     {
      //       _id: "666708f28d7b02d267a72cc8",
      //       title: "Amazon",
      //     },
      //   ],
      // };
      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const rewardsClaim = createAsyncThunk(
  "dashboard/rewards/claim",
  async ({ rewardId, paymentType }) => {
    try {
      const res = await DashboardServices.rewardsClaim(rewardId, paymentType);
      const dataJson = await res.json();
      if (res.status === 401) {
        // localStorage.removeItem("userToken");
        // window.location.reload();

        return { data: {}, requestSuccessfull: false };
      }
      // const res = {
      //   ok: true,
      // };
      // const dataJson = {
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   message:
      //     "The reward has been successfully claimed, details will be delivered to your email inbox shortly",
      // };
      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const loginDashboard = createAsyncThunk(
  "dashboard/loginMember",
  async ({ panel, email, password }) => {
    try {
      const res = await DashboardServices.login(panel, email, password);
      const dataJson = await res.json();
      // const res = {
      //   ok: true,
      // };
      // const dataJson = {
      //   message: "Succesful login.",
      //   email: "roman.schoensee+1@gmail.com",
      //   token:
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJyb21hbi5zY2hvZW5zZWUrMUBnbWFpbC5jb20iLCJzdWIiOiI2NTgxYmQ2NmNhNGMxYTk5NmNkMTYzOGYiLCJpYXQiOjE3MTc0MTczMTMxMDAsImV4cCI6MTcxNzUwMzcxMzEwMH0.U0ERrbBB_gXOV2c1fyZB1OKaOVFc5JRNzpODDZ-Ufl0",
      // };
      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const retrieveSurveyHistory = createAsyncThunk(
  "dashboard/surveyHistory",
  async () => {
    try {
      const res = await DashboardServices.surveyHistory();
      const dataJson = await res.json();
      // if (res.status === 401) {
      //   localStorage.removeItem("userToken");
      //   window.location.reload();

      //   return { data: {}, requestSuccessfull: false };
      // }
      // const res = {
      //   ok: true,
      // };
      // const dataJson = {
      //   surveys: [
      //     {
      //       surveyTopic: "A test survey 150",
      //       surveyLenghtOfInterview: 100,
      //       surveyIncentive: "150",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-06",
      //       surveyLink:
      //         "https://q-one.tech/panel-manager/projects/pages/invite?projectId=659813676b2b95a59aac642c&memberId=BENAr6oD0NdV",
      //       surveyStatus: "Terminated",
      //     },
      //     {
      //       surveyTopic: "A test survey 1",
      //       surveyLenghtOfInterview: 5,
      //       surveyIncentive: "1",
      //       surveyIncentiveCurrency: "USD",
      //       surveyEndDate: "2024-01-24",
      //       surveyLink:
      //         "https://q-one.tech/panel-manager/projects/pages/invite?projectId=65a7dab20544eb13cbb64d5b&memberId=WLvOdHxxXbee",
      //       surveyStatus: "Invited - Not Started",
      //     },
      //   ],
      // };

      return { data: dataJson, requestSuccessfull: res.ok };
    } catch (error) {
      console.log("error", error);
    }
  }
);

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    token: "",
    refreshToken: "",
  },
  rewards: {
    availableRewards: 0,
    totalRewards: [],
    projects: [],
  },
  payments: [],
  availableSurveys: [],
  rewardHistory: [],
  surveyHistory: [],
  status: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.user.token = action.payload;
      state.status = "succeeded";
    },
    setRefreshToken: (state, action) => {
      state.user.refreshToken = action.payload;
      state.status = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginDashboard.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          user: {
            ...state.user,
            email: action.payload.data.email,
            token: action.payload.data.token,
            refreshToken: action.payload.data.refreshToken || "",
          },
        };
      }
    });
    builder.addCase(retrieveDashboard.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          user: {
            ...state.user,
            firstName: action.payload.data.firstName,
            lastName: action.payload.data.lastName,
          },
          rewards: {
            ...state.rewards,
            availableRewards: action.payload.data.availableRewards,
            totalRewards: action.payload.data.totalRewards,
          },
        };
      }
    });
    builder.addCase(retrieveAvailableSurveys.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          availableSurveys: action.payload.data.surveys,
        };
      }
    });
    builder.addCase(retrieveRewardHistory.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          rewardHistory: action.payload.data.surveys,
        };
      }
    });
    builder.addCase(retrieveRewards.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          rewards: {
            ...state.rewards,
            projects: action.payload.data.rewards,
          },
          payments: action.payload.data.rewards?.payments,
        };
      }
    });
    builder.addCase(retrieveSurveyHistory.fulfilled, (state, action) => {
      if (action?.payload?.requestSuccessfull) {
        return {
          ...state,
          surveyHistory: action?.payload?.data.surveys,
        };
      }
    });
  },
});
export default dashboardSlice.reducer;

export const { setToken, setRefreshToken } = dashboardSlice.actions;

export const selectUser = (state) => state.dashboard.user;
export const selectRewards = (state) => state.dashboard.rewards;
export const selectAvailableSurveys = (state) =>
  state.dashboard.availableSurveys;
export const selectRewardHistory = (state) => state.dashboard.rewardHistory;
export const selectPayments = (state) => state.dashboard.payments;
export const selectSurveyHistory = (state) => state.dashboard.surveyHistory;
export const selectUserToken = (state) => state.dashboard.token;
export const selectUserRefreshToken = (state) => state.dashboard.refreshToken;
