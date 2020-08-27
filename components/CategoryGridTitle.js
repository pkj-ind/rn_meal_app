import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";

const CategoryGridTitle = (props) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComp = TouchableNativeFeedback;
  }
//  console.log(props.ctgImgUrl)
  return (
    <View style={styles.gridItem}>
      <TouchableComp onPress={props.onSelect} style={{ flex: 1 }}>
        <View
          style={{
            ...styles.container,
            backgroundColor: props.color,
          }}
        >
          <ImageBackground source={{ uri: props.ctgImgUrl }} style={styles.bgImage}>
          <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {props.title}
          </Text>
          </View>
          </ImageBackground>
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
    // to restrict repple effect going out of child element
    borderRadius: Dimensions.get("window").width / 30,
    overflow:"hidden",
      // Platform.OS === "android" && Platform.Version >= 21
      //   ? "hidden"
      //   : "visible",
    elevation: 5,
    
  },
  container: {
    flex: 1,
    borderRadius: Dimensions.get("window").width / 30,
    padding: 0.5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "flex-end",
    justifyContent: "flex-end",
    overflow:"hidden"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
    color:"white"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 3,
    paddingHorizontal: 15,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    
  },
});
