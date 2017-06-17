import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

class MultilineText extends React.Component {

    state = {
        text: ""
    }
    render() {
        const {inputText, removeBorder} = styles
        return (
            <View style={inputText}>
                <TextInput
                    style={removeBorder}
                    onChangeText={(text) => this.setState({text})}
                    editable = {true}
                    multiline = {true}
                    numberOfLines = {8}
                />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    inputText: {
        borderBottomColor: 'purple',
        borderBottomWidth: 1,
    },
    removeBorder: {
        borderWidth: 0,
        height: 100, 
    }
})

export default MultilineText