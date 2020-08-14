import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { ScrollView } from "react-native-gesture-handler";
import DefaultText from "../components/DefaultText";

const ListItem = (props) => {
  return (
    // <View style={styles.listItem}
    //   <DefaultText>{props.children}</DefaultText>)
    // </View>
    <View style={styles.list}>
    <DefaultText>{props.children}</DefaultText>
  </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.mealImage} />
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <View style={styles.receipe}>
        <Text style={styles.title}>Ingredients:</Text>
        {selectedMeal.ingredients.map((list) => (
          <Text key={list} style={styles.list}>
            {list}
          </Text>
        ))}

        <Text style={styles.title}>Steps:</Text>
        {selectedMeal.steps.map((list) => (
          <ListItem key={list}>{list}</ListItem>
        ))}
        {/* {selectedMeal.steps.map((step) => (
          <ListItem key={step}>{step}</ListItem>
        ))} */}
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigateData) => {
  const mealId = navigateData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="favorite"
          onPress={() => {
            console.log("Mark as Favourite !!!");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default MealDetailScreen;

const styles = StyleSheet.create({
  mealImage: {
    height: 250,
    width: "100%",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealDetail: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
  },
  receipe: {
    marginHorizontal: 15,
    padding: 10,
  },
  list: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    fontFamily: "open-sans",
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth:2,
    padding:10
  },
});
