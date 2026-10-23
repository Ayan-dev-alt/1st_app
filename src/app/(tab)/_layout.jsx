import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: "blue",
          headerTitleAlign: "center",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="add-products"
          options={{
            title: "Add Products",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="face-man-profile"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
