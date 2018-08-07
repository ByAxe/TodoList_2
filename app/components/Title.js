import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        color: 'white',
        padding: 20
    }
});

export default class Title extends Component {

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>To-Do List</Text>
            </View>
        )
    }
}
