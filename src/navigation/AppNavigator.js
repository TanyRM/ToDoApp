import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import ListaDetalhesScreen from '../screens/ListaDetalhes';
import NovaListaScreen from '../screens/NovaLista';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetalhesLista" component={ListaDetalhesScreen} />
      <Stack.Screen name="NovaLista" component={NovaListaScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
