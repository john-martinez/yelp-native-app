import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View>
      <SearchBar 
        onChangeHandler={ setSearchInput }
        onTermSubmit={ text => console.log(text.nativeEvent.text)}
        value={ searchInput }
        placeHolder="Search"
      />
    </View>
  )
}

export default SearchScreen;