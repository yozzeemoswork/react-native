import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Pokedex from './src/screens/Pokedex';
import PokedexDetail from './src/screens/PokedexDetail';

export const RootStack = createNativeStackNavigator({
  screens: {
    Pokedex: Pokedex,
    PokedexDetail: {
      screen: PokedexDetail,
      options: {
        title: 'Pokedex Detail',
      },
    },
    Login: {
      screen: Login,
      options: {
        title: 'Trainocate Login',
      },
    },
    Home: {
      screen: Home,
      options: {
        title: 'Trainocate Home',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}