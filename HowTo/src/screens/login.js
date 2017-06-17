import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import Profile from '../components/Profile';
import Btn from '../components/Button';
import InputText from '../components/InputText';


export default class Login extends React.Component {

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
    return (
        <View>
            <View style={styles.body}>
          
                <Image
                    source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/cat.gif'}}
                    style={styles.image}
                />

                <InputText placeholder='Nome'/>

                <InputText placeholder='Email'/>

                <InputText placeholder='Senha'/>
                
                <View style={styles.btnFacebook}>
                    <Text style={styles.title}>Login com Facebook</Text>
                </View>

                <View style={styles.btnGoogle}>
                    <Text style={styles.title}>Login com Google</Text>
                </View>

            </View>

            <View style={styles.footer}>
                
                <Button
                    title="Não sou Cadastrado"
                    onPress={this._handleButtonPress}
                />
            
                <Button
                    title="Esqueci Senha"
                    onPress={this._handleButtonPress}
                />
            
            </View> 
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    marginBottom: 30,
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
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection:'row',
   
 },
  body: {
    flex:1,
    justifyContent: 'center',
  },
 


});


