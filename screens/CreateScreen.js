import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext2 from '../contrex/BlogContext2'

export default function CreateScreen() {
    const Deger = useContext(BlogContext2)
    return (
        <View>
            <Text>CreateScreen {Deger}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})