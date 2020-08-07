import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const CategoryGridTitle = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.gridItem,
        backgroundColor: props.color,
        ...styles.container,
      }}
      onPress={props.onSelect}
    >
      <View>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: Dimensions.get("window").width / 25,
    height: Dimensions.get("window").width / 2.5,
  },
  container: {
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
