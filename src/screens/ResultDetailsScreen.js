import React, { useEffect, useState } from 'react';
import { Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import defaultPic from '../../assets/default.jpg';

const ResultDetailsScreen = ({ route }) => {
  const [details, setDetails] = useState(null);

  const retrieveDetails = async id => {
    try {
      const result = await yelp.get(`/${ id }`);
      setDetails(result.data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    retrieveDetails(route.params.id);
  },[])

  if (details) {
    return (
      <>
        <Text style={ styles.title }>{ details.name } </Text>
        <FlatList 
          data={ details.photos }
          keyExtractor={ (_,index) => index.toString() }
          style={ styles.list }
          renderItem={ ({ item }) => {
            const imgUrl = item ? { uri: item } : defaultPic;
            return <Image source={ imgUrl } style={ styles.image }/>
          }}
        />
      </>
    )
  } else {
    return <Text>Loading...</Text>
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
    justifyContent: "space-evenly",
    resizeMode: "cover",
    marginBottom: 10
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
})
export default ResultDetailsScreen;