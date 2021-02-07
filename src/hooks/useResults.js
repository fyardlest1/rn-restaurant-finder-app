import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Port-au-Prince'
                }
            })
            setResults(response.data.businesses)            
        } catch (err) {
            setErrorMessage('Something went wrong, please try againg!')
        }
    }

    // call searchApi when component is first rendered
    useEffect(() => {
        searchApi('steak')
    }, [])

    return [searchApi, results, errorMessage]
}