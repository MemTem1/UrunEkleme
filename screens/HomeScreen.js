import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../contrex/BlogContext'


export default function HomeScreen() {
    const value = useContext(BlogContext)
    return (
        <View>
            <Text>HomeScreen{value}</Text>

        </View>
    )
}

const styles = StyleSheet.create({})