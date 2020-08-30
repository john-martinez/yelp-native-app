import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [searchResults, setSearchResults] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchInput => {
    try {
      const results = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchInput,
          location: 'mississauga',
        }
      })
      setSearchResults(results.data.businesses);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Something went wrong...')
    }
  }

  useEffect(()=>{
    searchApi('pizza');
  }, [])

  return [searchResults, searchApi, errorMessage]
}