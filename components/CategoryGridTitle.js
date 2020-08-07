import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTitle = (props) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View
      style={styles.gridItem} >
      <TouchableComp onPress={props.onSelect} >
        <View style={{ backgroundColor: props.color, ...styles.container }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: Dimensions.get("window").width / 25,
    height: Dimensions.get("window").width / 2.5,
    borderRadius: Dimensions.get("window").width / 30,
    overflow:"hidden"
  },
  container: {
    flex:1,
    borderRadius: Dimensions.get("window").width / 30,
    padding: Dimensions.get("window").width / 30,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});
