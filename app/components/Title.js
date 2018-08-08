import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 14,
        color: 'white',
        padding: 25,
        textAlign: 'center',
    }
});

export default class Title extends Component {

    render() {
        const {title} = this.props;

        return (
            <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
            </View>
        )
    }
}
