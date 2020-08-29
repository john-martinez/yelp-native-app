import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const SearchBar = () => {
  return (
    <View style={ styles.searchBarContainer }>
      <MaterialIcons 
        name="search" 
        size={ 30 } 
        color="black" 
      />
      <TextInput
        style={ styles.textInput }
        autoCapitalize="none"
        autoCorrect={ false }
        placeholder="Search"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  textInput: {
    marginLeft: 5,
    flex: 1
  }
})

export default SearchBar;