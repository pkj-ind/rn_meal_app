import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

// <MaterialIcons name="favorite" size={24} color="black" />
// <MaterialIcons name="favorite-border" size={24} color="black" />
const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
