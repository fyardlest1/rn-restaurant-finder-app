import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import useResults from '../hooks/useResults';
import SearchBar from './../components/SearchBar';
import ResultsList from './../components/ResultsList';


const SearchScreen = ({navigation}) => {
    const [search, setSearch] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
                search={search} 
                onSearchChange={setSearch}
                onSearchSubmit={() => searchApi(search)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title='Cost Effective' 
                    navigation={navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title='Bit Pricer' 
                    navigation={navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title='Big Spender'
                    navigation={navigation}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    //
})

export default SearchScreen
