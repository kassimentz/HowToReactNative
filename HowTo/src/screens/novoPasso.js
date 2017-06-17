import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image } from 'react-native';
import { Constants, Video} from 'expo';
import MultilineText from '../components/MultilineText';
import { TabNavigator } from "react-navigation";

export default class NovoPasso extends React.Component {

static navigationOptions = {
    title: 'NovoPasso',
  };

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
          
                <View style={styles.formWraper}>
                    {/*trocar por video*/}
                    {/*<Image source={{uri:'https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif'}} style={styles.image}/>*/}
                    <Video 
                        style={styles.video}
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        muted={false}
                        resizeMode="cover"
                        repeat
                        />
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
video: {
    height: 300,
    width: 300,
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