import * as React from "react";
import { Text, StyleSheet } from "react-native";

const Oswald = () => {
  return <Text style={styles.oswaldText}>Oswald</Text>;
};

const styles = StyleSheet.create({
  oswaldText: {
    position: "absolute",
    top: 220,
    left: 130,
    fontSize: 49,
    fontFamily: "Oswald",
    color: "#fff",
    textAlign: "center",
  },
});

export default Oswald;
