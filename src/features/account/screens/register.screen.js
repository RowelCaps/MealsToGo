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

export function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading } = useContext(AuthenticationContext);

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
        <AuthInput
          label="Repeat password"
          secureTextEntry={true}
          value={repeatedPassword}
          onChangeText={(text) => setRepeatedPassword(text)}
        />
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
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
