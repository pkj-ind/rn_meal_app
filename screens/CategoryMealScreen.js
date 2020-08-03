import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CategoryMealScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen</Text>
            <Button title="Go to Details" onPress={()=>{
             props.navigation.navigate({routeName:"Meal Details"})
            }}/>
        </View>
    )
}

export default CategoryMealScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
})
