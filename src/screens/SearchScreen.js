import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, searchApi, errorMessage] = useResults()
  
  const filterResultsByPrice = priceFilter => searchResults.filter(business => business.price === priceFilter)
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
        : searchResults && searchResults.length && (
          <View>
            <ResultsList title="Cost Effective" data={ filterResultsByPrice('$') }/>
            <ResultsList title="Bit Pricier" data={ filterResultsByPrice('$$') }/>
            <ResultsList title="Big Spender" data={ filterResultsByPrice('$$$') }/>
          </View>
        )
      }
    </ScrollView>
  )
}

export default SearchScreen;