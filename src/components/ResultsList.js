import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import ResultsDetails from './ResultsDetails'

const ResultsList = ({title, results, navigation }) => {  
    if (!results.length) {
        return null
    }  
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowResults', { id: item.id })}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    ) 
                }}                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 12,
        marginBottom: 5
    }
})

export default ResultsList
