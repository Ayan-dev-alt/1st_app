import React from "react";
import { Link, Redirect } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Link href="/portfolio" style={styles.btn}>
          Go to portfolio
        </Link>
      </View>
    </SafeAreaView>
  );
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: "white",
  },
});
