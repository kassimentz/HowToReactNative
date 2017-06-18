import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { EvilIcons } from '@expo/vector-icons';
import Login from './screens/login';
import NovoPasso from './screens/novoPasso';
import PassoDetalhe from './screens/passoDetalhe';
import Cadastro from './screens/cadastro';
import ListaTutoriais from './screens/listaTutoriais';
import TutorialDetalhe from './screens/tutorialDetalhe';
import EsqueciSenha from './screens/esqueciSenha';

const Tabs = TabNavigator({
  Tutoriais: {
    screen: ListaTutoriais,
    navigationOptions: {
      tabBarLabel: 'Lista de Tutoriais',
      tabBarIcon: ({ tintColor }) => <EvilIcons name="search" size={32} color={tintColor} />,
    },
  },
  NovoPasso: {
    screen: NovoPasso,
    navigationOptions: {
      tabBarLabel: 'Novo Passo',
      tabBarIcon: ({ tintColor }) => <EvilIcons name="search" size={32} color={tintColor} />,
    },
  },
  PassoDetalhe: {
    screen: PassoDetalhe,
    navigationOptions: {
      tabBarLabel: 'Detalhe do Passo',
      tabBarIcon: ({ tintColor }) => <EvilIcons name="search" size={32} color={tintColor} />
    },
  },
});

export default StackNavigator({
  Login: { screen: Login },
  Tutoriais: { screen: Tabs },
  Cadastro: { screen: Cadastro },
  Tutorial: { screen: TutorialDetalhe },
  NovaSenha: { screen: EsqueciSenha },

});