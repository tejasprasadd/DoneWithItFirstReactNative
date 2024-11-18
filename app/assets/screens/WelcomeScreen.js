import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../background.jpg")} // Correct relative path
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../icon.png")} />
        <Text>Sell your Brain you Don't need it</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.signUpButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "yellowgreen",
  },
  signUpButton: {
    width: "100%",
    height: 70,
    backgroundColor: "dodgerblue",
  },
  logo: {
    width: 180,
    height: 180,
  },
  logoContainer: {
    position: "absolute",
    top: 180,
    alignItems: "center",
  },
});

export default WelcomeScreen;
