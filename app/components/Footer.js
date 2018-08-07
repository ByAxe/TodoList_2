import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
    touchableOpacity: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    text: {
        color: 'rosybrown',
        fontSize: 14
    },
});

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={styles.text}>Remove completed items</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
