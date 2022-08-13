import * as React from "react";
import { Text, StyleSheet } from "react-native";

const Oswald1 = () => {
  return <Text style={styles.oswaldText}>Oswald</Text>;
};

const styles = StyleSheet.create({
  oswaldText: {
    position: "absolute",
    top: 349,
    left: 108,
    fontSize: 49,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
});

export default Oswald1;
