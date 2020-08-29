import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const requestWithPriceFilter = (priceFilter) => {
    return yelp.get('/search', {
      params: {
        limit: 50,
        term: searchInput,
        location: 'mississauga',
        price: priceFilter
      }
    })
  }
  const searchApi = () => {
    Promise.all([requestWithPriceFilter('1'), requestWithPriceFilter('2'), requestWithPriceFilter('3')])
      .then(([
        cheapestPrice, 
        averagePrice, 
        expensivePrice 
      ]) => {
        setSearchResults({
          cheapestPrice: cheapestPrice.data.businesses,
          averagePrice: averagePrice.data.businesses,
          expensivePrice: expensivePrice.data.businesses
        })
        setErrorMessage('');
      })
      .catch( ()=> setErrorMessage('Something went wrong'))
  }
  return (
    <View>
      <SearchBar 
        onChangeHandler={ setSearchInput }
        onTermSubmit={ searchApi }
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