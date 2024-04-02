import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, handlegoBack} from 'react-native';

export default function PantallaPrincipal({ navigation }) {
    const pistaincorrecta = () => {
    const handlegoBack = () => {
        navigation.goBack('VOLVER A PROBAR');
  };
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>La resposta és...</Text>
      <Text style={styles.answer}>INCORRECTA!</Text>
      <TouchableOpacity onPress={handlegoBack}style={styles.button}>
        <Text style={styles.buttonText}>VOLVER A PROBAR</Text>
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
    color: 'red',
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
