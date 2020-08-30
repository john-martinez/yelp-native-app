import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import ResultCard from './ResultCard';

const ResultsList = ({ title, data }) => {
  return <View style={ styles.container }>
    <Text style={ styles.title } > { title }</Text>
    { data.length 
      ? (
        <FlatList 
          style={ styles.list }
          keyExtractor={ result => result.id }
          horizontal
          showsHorizontalScrollIndicator={ false }
          data={ data }
          renderItem={ ({ item }) => <ResultCard business={ item } />
          }
        />
      )
      : <Text style={ styles.subtitle }>No results...</Text>
    }
  </View>
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: 20,
    marginLeft: 5,
    marginTop: 5
  },

  list: {
    borderColor: '#afafaf',
    borderBottomWidth: 1,
    paddingVertical: 10
  }
})

export default ResultsList;