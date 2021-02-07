import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ search, onSearchChange, onSearchSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} color="black" />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder='Search'
                value={search}
                onChangeText={onSearchChange}
                onEndEditing={onSearchSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#2ec4b6',
        height: 45,
        borderRadius: 5,
        marginHorizontal: 12,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export default SearchBar
