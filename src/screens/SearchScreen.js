import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, searchApi, errorMessage] = useResults()

  return (
    <View>
      <SearchBar 
        onChangeHandler={ setSearchInput }
        onTermSubmit={ ()=> searchApi(searchInput) }
        value={ searchInput }
        placeholder="Search"
      />
      { errorMessage
        ? <Text>{ errorMessage }</Text>
        : <View>
          <ResultsList businesses={ searchResults }/>
        </View>
      }
    </View>
  )
}

export default SearchScreen;