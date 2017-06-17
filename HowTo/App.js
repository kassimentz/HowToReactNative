import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import EsqueciSenha from './src/screens/esqueciSenha';


export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        {/*<Login/>*/}
        {/*<Cadastro/>*/}
        <EsqueciSenha/>
           
      </View>
      
    );
  }

  clicme = () => {
    Alert.alert('teste')
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    
  }
 
});
