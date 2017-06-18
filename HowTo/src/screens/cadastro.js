import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import InputText from '../components/InputText';

export default class Cadastro extends React.Component {

  static navigationOptions = {
    title: 'Cadastro',
  };

    render() {
      console.log(this.props);
    return (
        <View style={styles.container}>
            <View style={styles.body}>
          
                <View style={styles.formWraper}>
                  {/*<InputText placeholder={`${this.props.navigation.state.params.id}`}/> para pegar um valor enviado junto da navegacao*/}
                  <InputText placeholder='Nome'/>

                  <InputText placeholder='Email'/>

                  <InputText placeholder='Senha'/>

                  <InputText placeholder='Repita a Senha'/>
                </View>

                <View style={styles.buttons}>
                    <View style={styles.btnCancela}>
                        <Text style={styles.title}>Cancelar</Text>
                    </View>

                    <View style={styles.btnCadastro}>
                        <Text style={styles.title}>Cadastrar</Text>
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

  },


});