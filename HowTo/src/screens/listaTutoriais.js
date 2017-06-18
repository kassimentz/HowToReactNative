import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, Dimensions, ScrollView } from 'react-native';
import { Constants, Video} from 'expo';
import ThumbTutorial from '../components/ThumbTutorial';
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
          <ScrollView>
              <View style={styles.body}>
            
                  <View style={styles.formWraper}>
                      <Search placeholder='Pesquisa'/>  
                  </View>  

                  <View style={styles.line}>
                    <ThumbTutorial navigate={navigate} conteudo={'1'}/>
                    <ThumbTutorial navigate={navigate} conteudo={'1'}/>
                    <ThumbTutorial navigate={navigate} conteudo={'1'}/>
                    <ThumbTutorial navigate={navigate} conteudo={'1'}/>
                  </View>
              
              </View>
            </ScrollView>
        </View>
      
    );
  }

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    
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

  line: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'stretch',
    padding: 10,
    flexWrap: 'wrap',
  },
  
  col: {
    flex: 1,
    
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


});