import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../theme";

export const MenuNavigator = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.background}
      >
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/*  <Image
            resizeMode="contain"
            source={require("../../assets/logo_IMX_Crew.png")}
            style={{
              height: 80,
              width: 120,
            }}
          /> */}
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginBottom: 20,
            }}
          >
            Ameni Chaker
          </Text>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#ccc",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
        </View>

        <View style={[{ flex: 1 }, styles.background]}>
          <DrawerItemList {...props} />
          <TouchableOpacity
            style={{
              height: 56,
              width: 247,
              borderRadius: 6,
              left: 15,
              backgroundColor: "#333",
              alignItems: "center",
              top: -50,
              justifyContent: "center",
              marginTop: 200,
            }}
            //onPress={handleLogout}
          >
            <Text
              style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}
            >
              {false ? "Log out" : "Login"}
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
