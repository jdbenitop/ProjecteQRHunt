import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';

const Portada = ({ navigation }) => {
  const handleJugarPress = () => {
    navigation.navigate('Partides'); 
  };

  const handleCrearPartidaPress = () => {
    navigation.navigate('CrearPartida'); 
  };

  return (
    <ImageBackground source={require('../Images/Home_Background_Animation00.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>¡Bienvenido a...</Text>
          <Image source={require('../Images/Logo.png')} style={styles.imageStyle} />
          <Text style={styles.title2}>¡A la búsqueda del tesoro!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonJugar]} onPress={handleJugarPress}>
            <Text style={[styles.buttonText, styles.buttonTextJugar]}>Jugar</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity style={[styles.button, styles.buttonCrearPartida]} onPress={handleCrearPartidaPress}>
            <Text style={[styles.buttonText, styles.buttonTextCrearPartida]}>Crear Partida</Text>
          </TouchableOpacity>
        </View>
          <Image source={require('../Images/Button_Settings.png')} style={styles.buttonImage} />
      </View>
    </ImageBackground>
  );
  
  
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  topContainer: {
    alignItems: 'center',
    marginBottom: 120, 
  },
  buttonContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  imageStyle: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonJugar: {
    backgroundColor: '#FFC300', // Amarillo oscuro
  },
  buttonCrearPartida: {
    backgroundColor: '#008000', // Verde
  },
  buttonTextJugar: {
    color: 'white', // Texto blanco
  },
  buttonTextCrearPartida: {
    color: '#FFC300', // Texto amarillo
  },
  separator: {
    height: 10,
  },
  buttonImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 90,
    height: 90,
  },  
});

export default Portada;
