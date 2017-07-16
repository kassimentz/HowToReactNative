import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

class InputText extends React.Component {

    render() {
        const {placeholder, value, onChangeText} = this.props
        const {inputText, removeBorder} = styles
        return (
            <View style={inputText}>
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder={placeholder}
                    value={value}
                    style={removeBorder}
                    onChangeText={onChangeText}
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