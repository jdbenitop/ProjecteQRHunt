import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function EliminarPartida({ navigation }) {
  const eliminarPartida = () => {
    // Aquí pots afegir la lògica per eliminar la partida
    console.log('Partida eliminada!');
    // Després de l'eliminació, pots redirigir a una altra pantalla, si cal
    // navigation.navigate('AltraPantalla');
    // També pots tornar enrere si es requereix
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eliminar Partida</Text>
      <Text style={styles.description}>Aquesta partida serà eliminada definitivament.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={eliminarPartida} style={[styles.button, { backgroundColor: 'red' }]}>
          <Text style={styles.buttonText}>Sí, eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={eliminarPartida} style={[styles.button, { backgroundColor: 'green' }]}>
          <Text style={styles.buttonText}>No, tornar enrere</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
