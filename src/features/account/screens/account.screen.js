import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.styles";
import styled from "styled-components";
import watermelonAnimation from "../../../../assets/watermelon.json";

const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 50px;
  padding: ${(props) => props.theme.space[2]};
`;

export function AccountScreen({ navigation }) {
  
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          loop
          autoPlay
          style={{width: "100%", height: "100%"}}
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
}
