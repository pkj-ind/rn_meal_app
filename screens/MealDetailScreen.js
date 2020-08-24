import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { ScrollView } from "react-native-gesture-handler";
import DefaultText from "../components/DefaultText";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";
import PlayYoutubeVideo from "../components/PlayYoutubeVideo";

const ListItem = (props) => {
  return (
    <View style={styles.list}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const MEALS = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoritMeals.some((meal) => meal.id === mealId)
  );

  const dispatch = useDispatch();
  const toggleFavoritHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);
  // passing meal name to navigation option so that we can display in Header Section, but there can be slight transition seen
  //because useEffect runs after first render of componenet.

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoritHandler });
    // props.navigation.setParams({mealTitle: selectedMeal.title})
  }, [toggleFavoritHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);
  return (
    <ScrollView>
      {selectedMeal.videoUrl === "" && (
        <View>
          <Image
            source={{ uri: selectedMeal.imageUrl }}
            style={styles.mealImage}
          />
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>
              {selectedMeal.affordability.toUpperCase()}
            </DefaultText>
          </View>
          <Text style={{marginLeft:25, fontFamily:"open-sans-bold"}}>Currently video not available...</Text>
        </View>
      )}
      {selectedMeal.videoUrl.length > 0 && (
        <PlayYoutubeVideo
          videoId={selectedMeal.videoUrl.split("v=")[1]}
          imageUrl={selectedMeal.imageUrl}
        />
      )}

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
  // const mealId = navigateData.navigation.getParam("mealId");
  const mealTitle = navigateData.navigation.getParam("mealTitle");
  const toggleFavorite = navigateData.navigation.getParam("toggleFav");
  const isFavorite = navigateData.navigation.getParam("isFav");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    // headerTitle: selectedMeal.title,
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName={isFavorite ? "favorite" : "favorite-border"}
          onPress={toggleFavorite}
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
    borderColor: "#ccc",
    borderWidth: 2,
    padding: 10,
  },
});
