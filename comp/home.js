import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import estilos from '../estilo/estilos';

const HomeScreen = ({ navigation }) => {
  const [temperature, setTemperature] = useState(null);
  const [chanceOfRain, setChanceOfRain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Guarulhos,br&appid=b95b1d664a44908a9009a6016279dfec&units=metric');
      setTemperature(response.data.main.temp);
      setChanceOfRain(response.data.clouds.all);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <View style={estilos.container}>
      {isLoading ? (
        <Text style={estilos.textocarregamento}>Carregando informações...</Text>
      ) : (
        <View>
          <Text>
            A temperatura atual é de {temperature}°C
          </Text>
          <Text>
            As chances de chover é de: {chanceOfRain}%
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;