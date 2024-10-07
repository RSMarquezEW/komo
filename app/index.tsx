import {Button} from 'komo-module/src/component'
import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
const splash = require("../assets/images/Asset-Splash-Intro.png");
const logo = require("../assets/images/Komo_white.png");
const bg = require("../assets/images/bg.png");
export default function Index() {
  const onLoginClick = () =>{
    router.replace('/account/login');
  }
  const onRegisterClick = () =>{
    router.replace('/account/register');
  }
  return (
    <ImageBackground
      source={bg}
      resizeMode={"cover"}
      style={{ flex: 1, width: "100%" }}
    >
      <View style={style.container}>
        <Image style={style.logo} source={logo}></Image>

        <View>
          <Image source={splash}></Image>
          <Text style={style.text}>
            A fully digital banking experience brought to you by EastWest Bank.
          </Text>
        </View>
        <View style={style.buttonContainer}>
          <Button  onPress={onRegisterClick} type="secondary" title="Create your Komo account"></Button>
          <Button onPress={onLoginClick} type="primary" title="Login"></Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    width: "100%",
  },
  logo: {
    margin: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    paddingHorizontal: 20,
  },
});
