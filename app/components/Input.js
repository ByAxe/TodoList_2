import React, {Component} from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

const styles = StyleSheet.create({
    view: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray',
        alignItems: 'stretch',
    },
    input: {
        margin: 15,
        fontSize: 18,
    }
});

export default class Input extends Component {

    state = {
        text: ''
    };

    onChangeText = (text) => this.setState({text});

    onSubmitEditing = () => {
        const {onSubmitEditing} = this.props;
        const {text} = this.state;

        if (!text) return;

        onSubmitEditing(text);
        this.setState({text: ''})
    };

    render() {
        const {placeholder} = this.props;
        const {text} = this.state;

        return (
            <View style={styles.view}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderColor={'lightgray'}
                    autofocus={true}
                    value={text}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSubmitEditing}
                />
            </View>
        )
    }
}
