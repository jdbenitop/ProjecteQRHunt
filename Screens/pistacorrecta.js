import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, navigation } from 'react-native';

export default function PantallaPrincipal({ navigation }) {
  const handlePress  = () => {
    navigation.navigate('SIGUIENTE PISTA');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>La resposta és...</Text>
      <Text style={styles.answer}>CORRECTA!</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>SIGUIENTE PISTA</Text>
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
    fontSize: 30  ,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'green',
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
});
