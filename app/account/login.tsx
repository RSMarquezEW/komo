import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LoginComponent } from "komo-module";
import { useState } from "react";

const logo = require("../../assets/images/Komo_white.png");
const bg = require("../../assets/images/bg.png");
export default function Index() {
  const handleLogin = (password: string) => {
    Alert.alert(`Login Info`, ` Password ${password}`);
  };
  return (
    <ImageBackground
      source={bg}
      resizeMode={"cover"}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <LoginComponent onLogin={handleLogin} logo={logo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 25,
    color: "white",
  },
});
