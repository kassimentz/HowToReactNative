import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import InputText from '../components/InputText';
import { StackNavigator, NavigationActions, TabNavigator } from "react-navigation";

export default class EsqueciSenha extends React.Component {

  state = {
    email: ''
  };

  static navigationOptions = {
    title: 'Envio de Senha',
  };

  goToLogin = NavigationActions.reset({
  index: 0,
  actions: [
      NavigationActions.navigate({
        routeName: 'Login',
      })
    ]
  });

  render() {

    sendEmail = () => {

      let email = this.state.email;

      if (email) {
        Alert.alert (
          'E-mail enviado com sucesso!',
        );
      }

      this.props.navigation.dispatch(this.goToLogin);
    }

    const { dispatch } = this.props.navigation;

    return (
        <View style={styles.container}>
            <View style={styles.body}>
          
                <View style={styles.formWraper}>
                    <Text style={styles.texto}>Informe seu email que lhe enviaremos sua senha.</Text>
                    <InputText placeholder='Email' onChangeText={(value) => this.setState({email: value})}/>
                </View>

                <View style={styles.buttons}>
                    <View style={styles.btnEnvia}>
                        <Text style={styles.title} onPress={() => sendEmail()}>Enviar</Text>
                    </View>
                </View>

            </View>
        </View>
      
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex:1,
  },
  body: {
    marginTop: 40,
    marginBottom: 40,
    flex:1,
    justifyContent: 'center',
  },
 
  formWraper: {
    margin: 40,

  },

  buttons: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },

  btnEnvia: {
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 7,
    width: 150,
    height: 40,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },


});