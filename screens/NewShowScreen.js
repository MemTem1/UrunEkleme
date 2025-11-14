import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { validatePathConfig } from '@react-navigation/native'

import { Context } from '../contrex/BlogContext'

export default function NewShowScreen({ route }) {
    const { state } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id)
    return (
        <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{blogPost.title}</Text>
            <Text style={styles.postContent}>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#E3F2FD',
        margin: 20,
        padding: 20,
        borderRadius: 25,
        shadowColor: '#0D47A1',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
        borderWidth: 1,
        borderColor: '#BBDEFB',
        backgroundGradient: 'linear-gradient(180deg, #E3F2FD 0%, #BBDEFB 100%)', // sadece webde çalışır ama native benzeri efekti aşağıda var
    },
    postTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#0D47A1',
        textAlign: 'center',
        marginBottom: 15,
        textShadowColor: 'rgba(13, 71, 161, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 3,
    },
    postContent: {
        fontSize: 17,
        color: '#1E88E5',
        lineHeight: 24,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#BBDEFB',
        textAlign: 'justify',
        shadowColor: '#90CAF9',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
})