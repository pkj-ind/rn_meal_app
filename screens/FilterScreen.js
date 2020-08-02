import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FilterScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Filter Screen</Text>
        </View>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
})
