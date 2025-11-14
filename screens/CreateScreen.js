import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../component/BlogPostForm'
import { Context } from '../contrex/BlogContext'


export default function CreateScreen({ navigation }) {
    const { addBlogPost } = useContext(Context)

    return (
        <BlogPostForm onsubmit={(title, content) => { addBlogPost(title, content, () => { navigation.navigate("Home") }) }} />
    )
}

const styles = StyleSheet.create({})