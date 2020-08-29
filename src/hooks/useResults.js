import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [searchResults, setSearchResults] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const requestWithPriceFilter = (priceFilter, searchInput="sushi") => {
    return yelp.get('/search', {
      params: {
        limit: 50,
        term: searchInput,
        location: 'mississauga',
        price: priceFilter
      }
    })
  }
  const searchApi = (searchInput) => {
    Promise.all([requestWithPriceFilter('1', searchInput), requestWithPriceFilter('2', searchInput), requestWithPriceFilter('3', searchInput)])
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

  useEffect(()=>{
    searchApi('pizza')
  }, [])

  return [searchResults, searchApi, errorMessage]
}