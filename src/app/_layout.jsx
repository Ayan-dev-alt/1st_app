import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

function HeaderLogo() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("../../assets/images/nave-logo.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.logoText}>FreshFlow</Text>
    </View>
  );
}

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "left",
        headerTitle: () => <HeaderLogo />,
      }}
      name="home"
    >
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
    </Stack>
  );
};
let styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default _layout;
