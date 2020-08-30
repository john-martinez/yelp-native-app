import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import defaultPic from '../../assets/default.jpg';

const MAX_CHARS_NAME = 30;

const ResultCard = (props) => {
  const {
    name,
    image_url,
    review_count,
    rating,
    id,
    price
  } = props.business;

  const imageUrl = image_url ? { uri: image_url } : defaultPic;
  const navigation = useNavigation();
  
  const formatName = (name) => {
    if (name.length >= MAX_CHARS_NAME) {
      return name.slice(0,MAX_CHARS_NAME) + '...'
    } 

    return name;
  }

  return (
    <TouchableOpacity onPress={ () => navigation.navigate('ResultDetails', { id }) }>
      <View style={ styles.container } >
        <Image 
          style={ styles.image }
          source={ imageUrl }
        />
        <Text style={ styles.title }>{ formatName(name) }</Text>
        <Text style={ styles.subtitle }>{ rating } Stars, { review_count } Reviews, { price }</Text>
      </View>
    </TouchableOpacity>
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
