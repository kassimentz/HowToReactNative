import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, Dimensions } from 'react-native';
import { Constants, Video} from 'expo';

const deviceWidth = Dimensions.get("window").width;

export default class DetalhePasso extends React.Component {

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
        <View style={styles.container}>
            <View style={styles.body}>
          
                <View style={styles.formWraper}>
                    <Video 
                        style={styles.video}
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        muted={false}
                        resizeMode="cover"
                        repeat
                        />
                    <View style={styles.passoWrapper}>

                        <Button style={styles.btnPasso} title="<" onPress={this._handleButtonPress} />

                        <Text style={styles.texto}>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. 
                            Manduma pindureta quium dia nois paga. Leite de capivaris, leite de mula manquis sem cabeça. Cevadis im ampola pa arma uma pindureta.</Text>

                        <Button style={styles.btnPasso} title=">" onPress={this._handleButtonPress} />
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
    paddingHorizontal: 20,
  },
  body: {
    marginTop: 40,
    marginBottom: 40,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  formWraper: {
    margin: 40,

  },
video: {
    height: 9/16*deviceWidth,
    width: deviceWidth,
    marginBottom: 30,
    alignSelf: 'center',
    
  },
  passoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  btnPasso: {
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
    textAlign: 'justify',
    marginBottom: 30,
    width: 0.8*deviceWidth,
    
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },


});