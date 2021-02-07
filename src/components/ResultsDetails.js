import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
            <Text>Contact info: {result.phone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 12
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    }
})

export default ResultsDetails
