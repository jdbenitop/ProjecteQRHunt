import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground} from 'react-native';

export default function PantallaPrincipal({ navigation }) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    navigation.navigate('MisionCumplida');
  };

  return (
    <ImageBackground
      source={require('../Images/Home_Background_Animation00.png')} // Ajusta la ruta según la estructura de directorios
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>MISSION COMPLETADA</Text>
        <Text style={styles.subtitle}>Muy bien aventurero, encontraste el tesoro escondido!</Text>
        <Animated.Image
          source={require('../Images/Extra_Image.png')} 
          style={[styles.image, { transform: [{ rotateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] }) }] }]}
        />
        <TouchableOpacity style={styles.button} onPress={() => {
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start(() => {
            handlePress();
          });
        }}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // o 'stretch' si quieres que la imagen se estire para cubrir todo el contenedor
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Color de fondo con transparencia
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
