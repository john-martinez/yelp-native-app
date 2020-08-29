import React from 'react';
import { ScrollView, FlatList, Text, Image, StyleSheet } from 'react-native';
import ResultCard from './ResultCard';

const ResultsList = (props) => {
  const { 
    cheapestPrice,
    averagePrice,
    expensivePrice
  } = props.businesses
  return (
    <ScrollView style={ styles.container }>
      <Text style={ styles.title } >Cost Effective</Text>
      <FlatList 
        style={ styles.list }
        horizontal
        showsHorizontalScrollIndicator={ false }
        data={ cheapestPrice }
        renderItem={ ({ item }) => <ResultCard business={ item } />
        }
      />
      <Text style={ styles.title }>Bit Pricer</Text>
      <FlatList 
        style={ styles.list }
        horizontal
        showsHorizontalScrollIndicator={ false }
        data={ averagePrice }
        renderItem={ ({ item }) => <ResultCard business={ item } />
        }
      />
      <Text style={ styles.title }>Big Spender!</Text>
      <FlatList 
        style={ styles.list }
        horizontal
        showsHorizontalScrollIndicator={ false }
        data={ expensivePrice }
        renderItem={ ({ item }) => <ResultCard business={ item } />
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    marginBottom: 150
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