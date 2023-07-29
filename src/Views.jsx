import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';

const Views = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    postData();
  }, []);

  const postData = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/breeds', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'bda53789-d59e-46cd-9bc4-2936630fde39',
        },
      });
      const responseJson = await response.json();
      setData(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      {data.length > 0 &&
        data.map((element) => (
          <View key={element.id} style={styles.cardContainer}>
            <Image source={{ uri: element.image}} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.breedName}>Name: {element.name}</Text>
              <Text style={styles.breedOrigin}>Country: {element.origin}</Text>
              <Text style={styles.breedTemperament}>Temperament: {element.temperament}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  breedName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  breedOrigin: {
    fontSize: 16,
    color: '#666',
  },
  breedTemperament: {
    fontSize: 16,
    color: '#888',
  },
});

export default Views;
