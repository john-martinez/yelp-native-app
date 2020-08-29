import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const MAX_CHARS_NAME = 30;

const ResultCard = (props) => {
  const {
    name,
    image_url,
    review_count,
    rating,
    price
  } = props.business;

  const formatName = (name) => {
    if (name.length >= MAX_CHARS_NAME) {
      return name.slice(0,MAX_CHARS_NAME) + '...'
    } 

    return name;
  }

  return (
    <View style={ styles.container }>
      <Image 
        style={ styles.image }
        source={{ uri: image_url }}
      />
      <Text style={ styles.title }>{ formatName(name) }</Text>
      <Text style={ styles.subtitle }>{ rating } Stars, { review_count } Reviews, { price }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 25,
    flex: 1
  },

  image: {
    width: 250,
    height: 150,
    resizeMode: 'cover'
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 3
  },
  
  subtitle: {
    color: "#afafaf"
  }
})

export default ResultCard;
