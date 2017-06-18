import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import InputText from '../components/InputText';

export default class EsqueciSenha extends React.Component {

  static navigationOptions = {
    title: 'Envio de Senha',
  };

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
          
                <View style={styles.formWraper}>
                    <Text style={styles.texto}>Informe seu email que lhe enviaremos sua senha.</Text>
                    <InputText placeholder='Email'/>
                </View>

                <View style={styles.buttons}>
                    <View style={styles.btnEnvia}>
                        <Text style={styles.title}>Enviar</Text>
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