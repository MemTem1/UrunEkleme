import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function BlogPostForm({ onsubmit }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#BBDEFB' }} >
            <View style={styles.card}>
                <Text style={styles.header}>BlogPostForm :</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Title'
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
                <Text style={styles.label}>İçeriği giriniz:</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder='Enter Content'
                    value={content}
                    multiline
                    numberOfLines={4}
                    onChangeText={(icerik) => setContent(icerik)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onsubmit(title, content)}
                >
                    <Text style={styles.buttonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#E3F2FD',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
        margin: 15,
        marginBottom: 200
    },
    header: {
        fontSize: 22,
        fontWeight: '700',
        color: '#0D47A1',
        marginBottom: 15,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        color: '#1565C0',
        marginTop: 10,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderColor: '#90CAF9',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        color: '#0D47A1',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#1976D2',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },
})