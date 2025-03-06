import React, { useState, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthInput,
  AuthButton,
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <AuthInput
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            LOGIN
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color="#64B5F6" />
        )}
      </AccountContainer>
    </AccountBackground>
  );
}
