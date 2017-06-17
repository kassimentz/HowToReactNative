import React from 'react';
import {View, Text, Button, StyleSheet, TextInput, Dimensions} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const deviceWidth = Dimensions.get("window").width;

class Search extends React.Component {

    state = {
        text: ""
    }
    render() {
        const {placeholder} = this.props
        const {inputText, removeBorder,searchView} = styles
        return (
            <View style={searchView}>
                <TextInput
                placeholder={placeholder}
                style={removeBorder}
                onChangeText={(text) => this.setState({text})}
                />
                <EvilIcons name="search" size={32} color="black" />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    searchView: {
        borderColor: 'purple',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 7,
        
    },
    removeBorder: {
        borderWidth: 0,
        height: 35, 
        width: 0.7*deviceWidth,
    }
})

export default Search