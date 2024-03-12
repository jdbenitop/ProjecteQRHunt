import React, { useCallback, useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { launchImageLibraryAsync } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import SaveImage from '../Images/save.png';

import backgroundImage from '../Images/Home_Background_Animation00.png';
import FlechaImage from '../Images/FletxaNegra.png';

const CrearScreen = ({ navigation }) => {
    const handleVolverPress = () => {
        navigation.navigate('Portada');
    };

    const [image, setImage] = useState(null);
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    const pickImage = useCallback(async () => {
        try {
            const result = await launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.uri);
            }
        } catch (error) {
            console.log('Error al seleccionar la imagen:', error);
        }
    }, []);

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <View style={styles.overlay} />
                    <View style={styles.configuracionContainer}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={handleVolverPress}>
                                <Image style={styles.flecha} source={FlechaImage} />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Crear Partida</Text>
                            <TouchableOpacity onPress={() => { }}>
                                <Image style={styles.saveStyle} source={SaveImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                        </View>
                    </View>
                    <View style={[styles.contentContainer, { marginTop: 50 }]}>
                        <Text style={styles.imageTitle}>Imagen de la portada (opcional)</Text>
                        <TouchableOpacity onPress={pickImage} style={styles.inputImage} activeOpacity={image ? 1 : 0.8}>
                        <View style={styles.placeholderContainer}>
                            {image && <Image source={{ uri: image }} style={styles.selectedImage} />}
                            {!image && <Image source={require('../Images/add.png')} style={styles.placeholder} />}
                        </View>
                        </TouchableOpacity>
                        <Text style={styles.titleLabel}>Título (Obligatorio)</Text>
                        <TextInput
                            style={styles.inputText}
                            value={inputTitle}
                            onChangeText={setInputTitle}
                            placeholder="Introduce el título"
                            placeholderTextColor="lightgrey"
                            underlineColorAndroid="transparent"
                        />
                        <Text style={styles.titleLabel2}>Descripción</Text>
                        <TextInput
                            style={styles.inputText2}
                            value={inputDescription}
                            onChangeText={setInputDescription}
                            placeholder="Introduce la descripción"
                            placeholderTextColor="lightgrey"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={4}
                        />
                        <Text style={styles.titleLabel3}>Pistas</Text>
                    </View>
                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajustar opacidad al fondo
    },
    configuracionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        marginTop: 20,
        top: 20,
        left: 0,
        right: 0,
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFC300',
        textAlign: 'center',
        marginLeft: 80,
        marginRight: 80,
    },
    flecha: {
        width: 27,
        height: 20,
        marginLeft: 10,
    },
    saveStyle: {
        width: 27,
        height: 27,
        tintColor: '#FFC300',
        marginRight: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        paddingTop: 20,
    },
    imageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        marginLeft: -70,
        marginTop: -310,
    },
    inputImage: {
        width: '90%',
        height: 140,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        marginTop: 10,
    },
    placeholderContainer: {
        marginTop: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholder: {
        width: 50,
        height: 50,
        tintColor: 'lightgrey',
        resizeMode: 'contain',
    },
    titleLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        marginTop: -10,
        marginLeft: -175,
    },
    inputText: {
        width: '90%',
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#565656',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        marginTop: 10,
    },
    titleLabel2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        marginTop: -10,
        marginLeft: -230,
    },
    inputText2: {
        width: '90%',
        height: 100,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#565656',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        marginTop: 10,
    },
    titleLabel3: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        marginTop: -10,
        marginLeft: -275,
    },
});

export default CrearScreen;
