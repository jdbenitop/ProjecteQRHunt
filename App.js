import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';

// Importación de componentes de pantalla
import Portada from './Screens/Portada';
import Opcions from './Screens/Opcions';
import CrearScreen from './Screens/CrearScreen';
import Partides from './Screens/Partides';


// Creación de un stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Portada">
        <Stack.Screen name="Portada" component={Portada} options={{ headerShown: false }} />
        <Stack.Screen
          name="Opcions"
          component={Opcions}
          options={{
            presentation: 'transparentModal', 
            cardStyleInterpolator: CardStyleInterpolators.forUIKit, 
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Partides"
          component={Partides}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="CrearScreen"
          component={CrearScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
