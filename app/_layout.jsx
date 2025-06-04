import { router, Stack } from "expo-router";
import { Provider, useDispatch } from "react-redux";
import store from "../store";
import { setRefreshToken, setToken } from "../features/dashboardSlice";
import { getData, isTokenValid } from "../utils/utils";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

const AuthLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTokenFromStorage = async () => {
      try {
        const loadedToken = await getData("accessToken");
        const loadedRefreshToken = await getData("refreshToken");

        if (loadedToken && isTokenValid(loadedToken)) {
          dispatch(setToken(loadedToken));
          dispatch(setRefreshToken(loadedRefreshToken));
          router.navigate("home");
        } else {
          router.navigate("/"); // route to index
        }
      } catch (error) {
        console.error("Failed to fetch token from storage", error);
      }
    };

    fetchTokenFromStorage();
  }, []);

  return null; // maybe loading icon
};

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AuthLoader />
      <Stack
        screenOptions={{
          headerBackTitle: "",
          contentStyle: {
            position: "relative",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(private)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
