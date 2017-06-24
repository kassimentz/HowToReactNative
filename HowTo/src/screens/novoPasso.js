import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, Dimensions } from 'react-native';
import { Constants, Video} from 'expo';
import MultilineText from '../components/MultilineText';
import { TabNavigator } from "react-navigation";

const deviceWidth = Dimensions.get("window").width;

export default class NovoPasso extends React.Component {

static navigationOptions = {
    title: 'Novo Passo',
  };

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
          
                <View>
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
      
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex:1,
  },
  body: {
    flex:1,
    marginLeft: 10,
    marginRight: 10,
  },
  video: {
    height: 9/16*deviceWidth,
    width: deviceWidth,
    marginBottom: 30,
    alignSelf: 'center',
  },

  buttons: {
    alignSelf: 'stretch',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    flexDirection:'row',
    marginBottom: 5,
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
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});