import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

class InputText extends React.Component {

    state = {
        text: ""
    }
    render() {
        const {placeholder} = this.props
        const {inputText, removeBorder} = styles
        return (
            <View style={inputText}>
                <TextInput
                placeholder={placeholder}
                style={removeBorder}
                onChangeText={(text) => this.setState({text})}
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
        height: 40, 
    }
})

export default InputText