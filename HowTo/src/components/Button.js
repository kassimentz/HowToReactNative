import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Btn = ({title, onPress}) => {
    const {container, text} = styles
    return (
        <View style={container}>
            <Button onPress={onPress} style={text} title={title}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },

    text: {
        color: 'white',
        fontSize: 30,
    }
})

export default Btn