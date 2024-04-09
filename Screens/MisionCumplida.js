import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function PantallaPrincipal({ navigation }) {
  const handlePress = () => {
    navigation.navigate('SiguientePantalla');
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MISSION COMPLETADA</Text>
     
      <Text style={styles.subtitle}>Muy bien aventurero, encontraste el tesoro escondido!</Text>
      <Image
        source={{ uri: '.\Images\Extra_Image' }} 
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
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
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
