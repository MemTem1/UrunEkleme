import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../contrex/BlogContext'


export default function HomeScreen() {
    const { state, addBlogPost } = useContext(Context)
    return (
        <View style={styles.container}>
            <Text style={styles.header}>📝 Blog Yazıları</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={addBlogPost}>
                <Text style={styles.buttonText}>
                    yeni yazı ekle
                </Text>
            </TouchableOpacity>



            <FlatList
                data={state}
                keyExtractor={(data, index) => `${data.title}-${index}`}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>Yeni blog gönderisi</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F8FA",
        padding: 16,
    },
    header: {
        fontSize: 26,
        fontWeight: "700",
        color: "#333",
        marginBottom: 12,
        textAlign: "center",
    },
    listContent: {
        paddingBottom: 20,
    },
    button: {
        backgroundColor: "#6C63FF",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 16,
        shadowColor: "#6C63FF",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4, // Android gölgesi
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0.5,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3, // Android gölgesi
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#222",
    },
    subtitle: {
        fontSize: 14,
        color: "#888",
        marginTop: 4,
    },
});