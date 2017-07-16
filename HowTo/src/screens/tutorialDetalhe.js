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
                    <Text style={styles.descTutorial}> Lorem ipsum dolor sit amet, ultricies mauris, lectus wisi. Proin donec. 
                      Elit scelerisque metus, sit nascetur. 
                  </Text>
                    
                </View>

                <View style={styles.listaPassos}>
                   <Image style={styles.fotoPasso} source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }} />
                   <Text style={styles.textPassos}>Passo 1: Nunc eros faucibus. Erat vestibulum orci, dis semper augue. Metus viverra, sodales turpis fusce. </Text>
                </View>

                <View style={styles.listaPassos}>
                   <Image style={styles.fotoPasso} source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }} />
                   <Text style={styles.textPassos}>Passo 2: orem ipsum dolor sit amet, ultricies mauris, lectus wisi. Proin donec. 
                      Elit scelerisque metus, sit nascetur. </Text>
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
    marginTop: 1,
    marginBottom: 40,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTutorial: {
    flex:1
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
    fontSize: 16,
  },
  descTutorial: {
    fontSize:12,
  },
 listaPassos: {

    flexDirection: 'row',
    width: deviceWidth,
    marginTop: 2,
    marginBottom: 2,
  },
  
  fotoPasso: {
    width:70,
    height:70,
    
  },
  textPassos:{
    fontSize:11,
    width:250,
  }
});