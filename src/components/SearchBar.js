import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { onChange } from 'react-native-reanimated';

const SearchBar = ({
  placeholder,
  onChangeHandler,
  onTermSubmit,
  value
}) => {
  return (
    <View style={ styles.searchBarContainer }>
      <MaterialIcons 
        name="search" 
        style={ styles.icon }
      />
      <TextInput
        style={ styles.textInput }
        autoCapitalize="none"
        autoCorrect={ false }
        placeholder={ placeholder }
        value={ value }
        onChangeText={ text => onChangeHandler(text) } 
        onEndEditing={ onTermSubmit }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    margin: 10,
    borderRadius: 5,
    height: 50,
    paddingLeft: 5,
  },
  textInput: {
    marginLeft: 5,
    flex: 1
  },
  icon: {
    alignSelf: "center",
    fontSize: 35
  }
})

export default SearchBar;