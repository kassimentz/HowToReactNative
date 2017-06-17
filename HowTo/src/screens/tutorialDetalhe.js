import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, Dimensions } from 'react-native';
import { Constants, Video} from 'expo';

const deviceWidth = Dimensions.get("window").width;

export default class TutorialDetalhe extends React.Component {
static navigationOptions = {
    title: 'Tutorial',
  };

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>

                <View style={styles.headerTutorial}>
                    <Image style={styles.imgPrincipal} source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }} />
                    <View style={styles.viewFotoUser}>
                        <Image style={styles.fotoUser} source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }} />
                     </View>
                    <Text style={styles.titleTutorial}>Receita de como fazer pão de queijo </Text>
                    <Text style={styles.descTutorial}> bla bla bla bla</Text>
                    
                    
                </View>

                <View style={styles.listaPassos}>
                   
                </View>

            </View>
        </View>
      
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingHorizontal: 20,
  },
  body: {
    marginTop: 40,
    marginBottom: 40,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTutorial: {
    flex: 2,
    backgroundColor: '#00ff00',
  },
  imgPrincipal: {
    height: 9/16*deviceWidth,
    width: deviceWidth,
    alignSelf: 'center',
  },
  fotoUser: {
    height: 60,
    width: 60,
    marginTop: -30,
    borderRadius: 30,
},
viewFotoUser:{
    alignItems: 'flex-end',
    margin:5,
},
  titleTutorial: {
    fontSize: 20,
  },
  descTutorial: {
    fontSize:10,
  },
 listaPassos: {
    flex: 1,
    backgroundColor: '#ff0000',
    width: deviceWidth,
  },
  

});