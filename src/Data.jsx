// Importa la librería 'react', 'axios' y otros módulos necesarios
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // URL de la API que deseas consumir
    const apiUrl = 'https://api.example.com/data';

    // Realiza la solicitud a la API utilizando 'axios'
    axios
      .get(apiUrl)
      .then((response) => {
        // Actualiza el estado de 'data' con los datos recibidos de la API
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

  return (
    <View>
      {data ? (
        <Text>{JSON.stringify(data)}</Text>
      ) : (
        <Text>Cargando datos desde la API...</Text>
      )}
    </View>
  );
};

export default App;