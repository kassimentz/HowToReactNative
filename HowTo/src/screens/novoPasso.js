import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import MultilineText from '../components/MultilineText';

export default class NovoPasso extends React.Component {

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
          
                <View style={styles.formWraper}>
                    {/*trocar por video*/}
                    <Image source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/cat.gif'}} style={styles.image}/>
                    <Text style={styles.texto}>Descrição do Passo</Text>
                    <MultilineText/>

                </View>

                <View style={styles.buttons}>
                    <View style={styles.btn}>
                        <Text style={styles.title}>Salvar</Text>
                    </View>

                    <View style={styles.btn}>
                        <Text style={styles.title}>Cancelar</Text>
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
image: {
    height: 200,
    width: 200,
    marginBottom: 30,
    alignSelf: 'center',
    
  },

  buttons: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },

  btn: {
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
    textAlign: 'left',
    marginBottom: 30,
    
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },


});