import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Link, Redirect } from "expo-router";

const portfolio = () => {
  return (
    <View style={styles.container}>
      <Link href="/(tab)/home" style={styles.btn}>
        Go to home
      </Link>
    </View>
  );
};

export default portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    color: "white",
  },
});
