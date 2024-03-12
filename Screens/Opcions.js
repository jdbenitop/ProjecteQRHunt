import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AvatarImage from '../Images/avatar.png';
import backgroundImage from '../Images/Home_Background_Animation00.png';
import FlechaImage from '../Images/FletxaNegra.png';

const Opcions = ({ navigation }) => {
  const handleVolverPress = () => {
    navigation.navigate('Portada'); 
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.configuracionContainer}>
          <TouchableOpacity onPress={handleVolverPress}>
            <Image style={styles.flecha} source={FlechaImage} />
          </TouchableOpacity>
          <Text style={styles.configText}>Configuración</Text>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={styles.linea}></View>
        <Text style={styles.perfil}>Mi Perfil</Text>
        <Image style={styles.avatar} source={AvatarImage} />
        <View style={styles.inputContainer}>
          <Text style={[styles.label, styles.perfil]}>Usuario</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, styles.perfil]}>Correo</Text>
        </View>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 20,
    backgroundColor: 'rgba(240, 240, 240, 0.9)', 
    margin: 15,
    marginTop: 105,
    marginBottom: 80,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  configuracionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -135,
  },
  configText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: 60,
  },
  flecha: {
    width: 25,
    height: 20,
  },
  linea: {
    width: '112%',
    height: 4,
    backgroundColor: '#FFC300',
    marginBottom: 10,
  },
  perfil: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'left',
    width: '100%',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    textAlign: 'left',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttons: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC300',
  },
  button2: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008000',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFC300',
  },
});

export default Opcions;
