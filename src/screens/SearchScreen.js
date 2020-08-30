import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = props => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, searchApi, errorMessage] = useResults();
  
  const filterResultsByPrice = priceFilter => searchResults.filter(business => business.price === priceFilter);

  return (
    <>
      <SearchBar 
        onChangeHandler={ setSearchInput }
        onTermSubmit={ ()=> searchApi(searchInput) }
        value={ searchInput }
        placeholder="Search"
      />
      { errorMessage
        ? <Text>{ errorMessage }</Text>
        : searchResults && searchResults.length && (
          <ScrollView>
            <ResultsList title="Cost Effective" data={ filterResultsByPrice('$') }/>
            <ResultsList title="Bit Pricier" data={ filterResultsByPrice('$$') }/>
            <ResultsList title="Big Spender" data={ filterResultsByPrice('$$$') }/>
          </ScrollView>
        )
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20
  }
})

export default SearchScreen;