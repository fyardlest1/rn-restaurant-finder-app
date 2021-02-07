import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultShowScreen = ({ route, navigation }) => {
    // const id = navigation.getParam('id') will not work
    // because in react navigation v5 "getParam" is move under "route.params"
    const { id } = route.params
    // console.log(id)

    const [result, setResult] = useState(null)
    // console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data) 
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.textContain}>
                <Text style={styles.textStyle}>Restaurant name: {result.name}</Text>
                <Text style={styles.textStyle}>Location: {result.location.city}</Text>
                <Text style={styles.textStyle}>Address: {result.location.address1}</Text>
            </View>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image source={ {uri: item} } style={styles.image} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // marginTop: 10
    },
    image: {
        width: 300,
        height: 200,
        marginVertical: 5,
        marginLeft: 12
    },
    textStyle: {
        marginLeft: 12
    },
    textContain: {
        marginVertical: 10
    }
})

export default ResultShowScreen
