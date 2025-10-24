import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../contrex/BlogContext'
import CreateScreen from './CreateScreen'


export default function HomeScreen() {
    const value = useContext(BlogContext)
    return (
        <View>
            <Text>HomeScreen{value}</Text>
            <CreateScreen />
        </View>
    )
}

const styles = StyleSheet.create({})