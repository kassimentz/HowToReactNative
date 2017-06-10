import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = ({name, age}) => {
    const {container, text} = styles
    return (
        <View style={container}>
            <Text style={text}>{name}</Text>
            <Text style={text}>{age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        
    },

    text: {
        color: 'white',
        fontSize: 30,
    }
})

export default Profile