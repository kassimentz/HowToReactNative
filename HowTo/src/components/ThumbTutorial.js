import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const deviceWidth = Dimensions.get("window").width;

class ThumbTutorial extends React.Component {

    render() {
        
        const {touchble} = styles
        
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigate('Tutorial', {id: this.props.conteudo})} >
                <View style={styles.touchble} >
                    <Image source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/cat.gif'}} style={styles.image}/>
                    <View style={styles.textView}>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.colText}>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit.</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    
}

const styles = StyleSheet.create({
    touchble: {
        maxHeight: 0.5*deviceWidth,
        maxWidth: 0.5*deviceWidth,
        marginBottom:5,
    },
    image: {
        height: 0.25*deviceWidth,
        width: 0.4*deviceWidth,
        alignSelf: 'center',

     },
    textView: {
        maxHeight: 0.09*deviceWidth,
        maxWidth: 0.4*deviceWidth,
        
    }
})

export default ThumbTutorial
