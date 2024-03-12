import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importación de componentes de pantalla
import Portada from './Screens/Portada';


// Creación de un stack navigator
const Stack = createStackNavigator();

// Componente principal de la aplicación
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Portada">
        <Stack.Screen name="Portada" component={Portada} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
