import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, Dimensions } from 'react-native';
import { Constants, Facebook } from 'expo';
import InputText from '../components/InputText';
import { StackNavigator, NavigationActions, TabNavigator } from "react-navigation";

const deviceWidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Tutoriais',
    })
  ]
});

const password = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'NovaSenha',
    })
  ]
});

const cadastro = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'Cadastro',
    })
  ]
});

export default class Login extends React.Component {

  static navigationOptions = {
    title: 'Login',
  };

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
                
                <Text style={styles.btnTextBottom}  onPress={() => dispatch(cadastro)}>Não sou Cadastrado</Text>
                <Text style={styles.btnTextBottom}  onPress={() => dispatch(password)}>Esqueci Senha</Text>

            
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
    // marginTop: 0.1*deviceheight,
    marginBottom: 0.1*deviceheight,
    flex:1,
  },
 
  image: {
    height: 200,
    width: 200,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center', 
    
    
  },

  formWraper: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,

  },

  btnText: {
    color: 'blue',
    fontSize: 14,
    alignItems: 'center',
    padding: 5,
    alignSelf: 'center',

  },

  btnTextBottom:{
    color: 'blue',
    fontSize: 14,
    padding: 5,
    marginTop: 5,
  },

  btnFacebook: {
    alignItems: 'center',
    backgroundColor: '#2A49A5',
    marginBottom: 7,
    width: 300,
    height: 40,
    borderRadius: 5,
    padding: 8,
    alignSelf: 'center',
  },

  btnGoogle: {
    alignItems: 'center',
    backgroundColor: '#EA4335',
    marginBottom: 7,
    width: 300,
    height: 40,
    borderRadius: 5,
    padding: 8,
    alignSelf: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

  },

  footer: {
   alignItems: 'baseline',
   justifyContent: 'space-between',
   flexDirection:'row',
   
 },

});


