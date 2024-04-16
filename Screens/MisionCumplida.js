import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

export default function PantallaPrincipal({ navigation }) {
  const animatedValue = useRef(new Animated.Value(0)).current; // Usamos useRef para crear una referencia mutable

  const handlePress = () => {
    navigation.navigate('MisionCumplida');
  };

  return (
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
          duration: 1000, // Duración de la animación en milisegundos
          useNativeDriver: true,
        }).start(() => {
          handlePress();
        });
      }}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
