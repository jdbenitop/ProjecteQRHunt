import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PartidesScreen = () => {
  const navigation = useNavigation();

  const handleInvisibleButtonPress = () => {
    navigation.navigate('Portada');
  };

  return (
    <View style={styles.container}>
      {/* Título de la pantalla con línea subrayada de color naranja y botón al lado */}
      <View style={styles.titleContainer}>
        {/* Agregar la imagen pulsable */}
        <TouchableOpacity onPress={handleInvisibleButtonPress}>
          <View style={styles.buttonImageContainer}>
            <Image source={require('../Images/FletxaNegra.png')} style={styles.buttonImage} />
          </View>
        </TouchableOpacity>
        <Text style={styles.titleText}>My games</Text>
      </View>
      <View style={styles.underline} />
      <Image source={require('../Images/no_games.png')} style={styles.image} />
      <Image source={require('../Images/jungle_bottom_1.png')} style={styles.jungleImage} />
      <Text style={styles.boldText}>Oh, you haven't created any games yet.</Text>
      <Text style={styles.boldText}>Press the button to start!</Text>

      {/* Botón 1 */}
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={[styles.buttonText, { color: 'white' }]}>CREATE GAME</Text>
      </TouchableOpacity>

      {/* Botón 2 */}
      <TouchableOpacity style={styles.buttonContainer2}>
        <Text style={styles.buttonTextGreen}>INSERT CODE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
  buttonContainer: {
    marginTop: 40,
    alignItems: 'center',
    alignSelf:'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'orange',
    borderRadius: 25,
    width: '50%',
    height: '6%',
    alignSelf: 'center',
  },

  titleContainer: {
    flexDirection: 'row', // Para alinear la imagen y el texto en fila
    alignItems: 'center', // Para centrar verticalmente la imagen y el texto
    justifyContent: 'center', // Para centrar horizontalmente la imagen y el texto
    marginTop: 40,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
 
  buttonImage: {
    width: 54,
    height: 24,
  },
  buttonImageContainer: {
    marginRight: 10, // Ajusta el margen derecho de la imagen
  },
  underline: {
    width: '100%',
    height: 5,
    backgroundColor: 'orange',
    marginTop: 10,
  },
  image: {
    resizeMode: 'cover',
    marginTop: 40,
    marginLeft: 10,
    width: '90%',
    height: 450,
  },
  jungleImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '20%', // Ajusta la altura según sea necesario
  },
  additionalText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  
  buttonContainer2: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 50,
    alignSelf: 'center',
    width: '80%',
    height: '10%',
    marginBottom: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center', // Centra el texto horizontalmente dentro del botón
},

  buttonTextGreen: {
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
  },
  boldText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default PartidesScreen;
