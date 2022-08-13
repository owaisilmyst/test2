import * as React from "react";
import { Text, StyleSheet } from "react-native";

const RobotoSemibold = () => {
  return <Text style={styles.robotoSemiboldText}>Roboto Semibold</Text>;
};

const styles = StyleSheet.create({
  robotoSemiboldText: {
    position: "absolute",
    top: 531,
    left: 71,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
});

export default RobotoSemibold;
