import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { MenuNavigator } from "./menuNavigator";

import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import PersonScreen from "../screens/PersonScreen";
import SearchScreen from "../screens/SearchScreen";

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (
          <MenuNavigator
            {...props}
            onClose={() => console.warn("close drawer")}
          />
        )}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#333",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          // options={{
          //   drawerIcon: ({ color }) => (
          //    /
          //   ),
          // }}
        />
        <Drawer.Screen
          name="Movies"
          component={HomeScreen}
          // options={{
          //   drawerIcon: ({ color }) => (
          //     <Image
          //       resizeMode="contain"
          //       source={require("../../assets/phone.png")}
          //       style={{
          //         height: 20,
          //         width: 20,
          //         right: -10,
          //       }}
          //     />
          //   ),
          // }}
        />
        <Drawer.Screen
          name="Search for movie"
          component={SearchScreen}
          // options={{
          //   drawerIcon: ({ color }) => (
          //     // <Image
          //     //   resizeMode="contain"
          //     //   source={require("../../assets/phone.png")}
          //     //   style={{
          //     //     height: 20,
          //     //     width: 20,
          //     //     right: -10,
          //     //   }}
          //     // />
          //   ),
          // }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
