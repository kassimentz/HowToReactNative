import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import { StackNavigator, NavigationActions } from 'react-navigation';
import InputText from '../components/InputText';
import { TabNavigator } from "react-navigation";

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Tutoriais',
    })
  ]
});

export default class Login extends React.Component {

  static navigationOptions = {
    title: 'Login',
  };

    handleLogin = () => {
    Alert.alert (
      'Login feito!',
      'Uhu!'
    );
  }

  _handleButtonPress = () => {
   Alert.alert(
     'Button pressed!',
     'You did it!',
   );
  }


  render() {
    const { dispatch } = this.props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.body}>
          
                <Image source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/cat.gif'}} style={styles.image}/>

                <View style={styles.formWraper}>

                  <InputText placeholder='Email'/>

                  <InputText placeholder='Senha'/>
                </View>

                <Text style={styles.btnText}  onPress={() => dispatch(resetAction)}>Login</Text>

                <View style={styles.btnFacebook}>
                    <Text style={styles.title}>Login com Facebook</Text>
                </View>

                <View style={styles.btnGoogle}>
                    <Text style={styles.title}>Login com Google</Text>
                </View>

            </View>

            <View style={styles.footer}>
                
                <Button title="Não sou Cadastrado" onPress={this._handleButtonPress} />
                <Button title="Esqueci Senha" onPress={this._handleButtonPress} />
            
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
  },
 
  image: {
    height: 200,
    width: 200,
    marginBottom: 30,
    alignSelf: 'center',
    
  },

  formWraper: {
    margin: 20,

  },

  btnText: {
    color: 'blue',
    fontSize: 16,
    alignItems: 'center',
    padding: 10,
    alignSelf: 'center',

  },

  btnFacebook: {
    alignItems: 'center',
    backgroundColor: '#2A49A5',
    marginBottom: 7,
    width: 300,
    height: 50,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },

  btnGoogle: {
    alignItems: 'center',
    backgroundColor: '#EA4335',
    marginBottom: 7,
    width: 300,
    height: 50,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',

  },

  footer: {
   alignItems: 'baseline',
   justifyContent: 'space-between',
   flexDirection:'row',
 },

});


