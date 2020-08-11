import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { StyleSheet, Text, View } from "react-native";

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filter Screen</Text>
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Filter Meal",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => {
              navData.navigation.toggleDrawer(); 
            }}
          />
        </HeaderButtons>
      ),
    };
  };
export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
