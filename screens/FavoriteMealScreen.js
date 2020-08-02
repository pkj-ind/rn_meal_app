import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavoriteMealScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Favorite Meal Screen</Text>
        </View>
    )
}

export default FavoriteMealScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
})
