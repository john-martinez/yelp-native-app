import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import ResultCard from './ResultCard';

const ResultsList = ({ title, data }) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title } > { title }</Text>
      <FlatList 
        style={ styles.list }
        keyExtractor={ result => result.id }
        horizontal
        showsHorizontalScrollIndicator={ false }
        data={ data }
        renderItem={ ({ item }) => <ResultCard business={ item } />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold"
  },

  list: {
    borderColor: '#afafaf',
    borderBottomWidth: 1,
    paddingVertical: 10
  }
})

export default ResultsList;