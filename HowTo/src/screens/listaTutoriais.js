import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, Dimensions } from 'react-native';
import { Constants, Video} from 'expo';

import Search from '../components/Search';
import { EvilIcons } from '@expo/vector-icons';

const deviceWidth = Dimensions.get("window").width;

export default class ListaTutoriais extends React.Component {

static navigationOptions = {
    title: 'Tutoriais',
    headerRight: <EvilIcons name="search" size={32} color="black" />,
  };

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
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.body}>
          
                <View style={styles.formWraper}>
                    <Search placeholder='Pesquisa'/>  
                    <Button title="Ver Passo" onPress={() => navigate('PassoDetalhe')} />
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