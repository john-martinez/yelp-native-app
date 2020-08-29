import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, searchApi, errorMessage] = useResults()

  return (
    <ScrollView>
      <SearchBar 
        onChangeHandler={ setSearchInput }
        onTermSubmit={ ()=> searchApi(searchInput) }
        value={ searchInput }
        placeholder="Search"
      />
      { errorMessage
        ? <Text>{ errorMessage }</Text>
        : <View>
          <ResultsList title="Cost Effective" data={ searchResults.cheapestPrice }/>
          <ResultsList title="Bit Pricier" data={ searchResults.averagePrice }/>
          <ResultsList title="Big Spender" data={ searchResults.expensivePrice }/>
        </View>
      }
    </ScrollView>
  )
}

export default SearchScreen;