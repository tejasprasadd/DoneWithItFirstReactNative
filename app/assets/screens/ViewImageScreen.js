import React from "react";
import { StyleSheet, Image, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: { backgroundColor: "black", flex: 1 },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
