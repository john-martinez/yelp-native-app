import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchApi = () => {
    yelp
      .get('/search', {
        params: {
          limit: 50,
          term: searchInput,
          location: 'toronto'
        }
      })
      .then(res=> setSearchResults(res.data.businesses))
      .catch(err=> console.log(err))
  }

  return (
    <View>
      <SearchBar 
        onChangeHandler={ setSearchInput }
        onTermSubmit={ searchApi }
        value={ searchInput }
        placeholder="Search"
      />
      <Text>We have found { searchResults.length } results</Text>
    </View>
  )
}

export default SearchScreen;