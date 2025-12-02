import { useDispatch } from "react-redux";
import {
  LoginContainer,
  LoginForm,
  InputField,
  LoginButton,
  ForgotPassword,
  ImageLogo,
} from "./Login.styles";
import { loginDashboard } from "../../features/dashboardSlice";

import { config } from "../../config";
import { useEffect, useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { theme } from "../../constants/colors";
import { router } from "expo-router";
import { storeData } from "../../utils/utils";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(
      loginDashboard({
        //pull panel id from env variables
        panel: config?.PANEL_ID,
        email: email?.toLowerCase(),
        password: password,
        // panel: "64956fc679742e4b8d92f547",
        // email: "roman.schoensee+1@gmail.com",
        // password: "thisiscorrect",
      })
    ).then((res) => {
      console.log(res);
      if (res.payload?.requestSuccessfull) {
        storeData("accessToken", res?.payload?.data?.token);
        storeData("refreshToken", res?.payload?.data?.refreshToken || "");
        router.replace("/(private)/home");
      } else {
        alert(res.payload?.data?.message);
      }
    });
    console.log("loginnn", email, password);
  };
  return (
    <LoginContainer>
      <LoginForm>
        <ImageLogo>
          <Image
            source={require("../../assets/images/pwLogo.jpg")}
            contentFit="contain"
            style={{ height: 80, width: 300, borderRadius: 10 }}
          />
        </ImageLogo>

        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <ForgotPassword
          onPress={() => {
            router.navigate(
              `${config.COMPANY_URL}/panel-manager/pages/passwordReset/?panelId=${config.PANEL_ID}`
            );
          }}
        >
          Forgot password?
        </ForgotPassword>
        <Pressable onPress={handleLogin}>
          <LoginButton>
            <Text style={{ color: theme.white }}>Login</Text>
          </LoginButton>
        </Pressable>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
