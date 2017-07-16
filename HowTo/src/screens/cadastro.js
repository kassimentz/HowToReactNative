import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import InputText from '../components/InputText';
import { StackNavigator, NavigationActions, TabNavigator } from "react-navigation";

export default class Cadastro extends React.Component {

  state = {
    name: '',
    email: '',
    password1: '',
    password2: ''
  };

  static navigationOptions = {
    title: 'Cadastro',
  };

  goToLogin = NavigationActions.reset({
  index: 0,
  actions: [
      NavigationActions.navigate({
        routeName: 'Login',
      })
    ]
  });

  goToTutorials = NavigationActions.reset({
  index: 0,
  actions: [
      NavigationActions.navigate({
        routeName: 'Tutoriais',
      })
    ]
  });

  render() {

    const { dispatch } = this.props.navigation;

    registerUser = () => {

      let name=this.state.name;
      let email=this.state.email;
      let password1=this.state.password1;
      let password2=this.state.password2;

      if (password1 != password2) {
        Alert.alert (
          'Senha incorreta',
          'Por favor, digite a mesma senha nos dois campos'
        );
      } else if (name && email && password1) {
        console.log("sdsdsd");
        this.props.navigation.dispatch(this.goToTutorials);
      }
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
          
                <View style={styles.formWraper}>
                  
                  <InputText placeholder='Nome' onChangeText={(value) => this.setState({name: value})}/>

                  <InputText placeholder='Email' onChangeText={(value) => this.setState({email: value})}/>

                  <InputText placeholder='Senha'  onChangeText={(value) => this.setState({password1: value})}/>

                  <InputText placeholder='Repita a Senha'  onChangeText={(value) => this.setState({password2: value})}/>

                </View>

                <View style={styles.buttons}>
                    <View style={styles.btnCancela}>
                        <Text style={styles.title} onPress={() => dispatch(this.goToLogin)}>Cancelar</Text>
                    </View>

                    <View style={styles.btnCadastro}>
                        <Text style={styles.title} onPress={() => registerUser()}>Cadastrar</Text>
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
  btnCancela: {
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 7,
    width: 150,
    height: 40,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },
  btnCadastro: {
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 7,
    width: 150,
    height: 40,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  }
});