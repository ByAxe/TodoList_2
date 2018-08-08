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
        const {text, onRemoveChecked} = this.props;

        return (
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={onRemoveChecked}
                    style={styles.touchableOpacity}
                >
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
