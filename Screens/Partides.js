import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import backgroundImage from '../Images/Home_Background_Animation00.png';
import FlechaImage from '../Images/FletxaNegra.png';

const Partides = ({ navigation }) => {
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
                </View>
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
    flecha: {
        width: 200,
        height: 160,
      },
});
export default Partides;