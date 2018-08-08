import React, {Component} from 'react'
import {StyleSheet, Text} from 'react-native'
import {CheckBox} from 'react-native-elements'
import {Row} from "react-native-easy-grid";

const styles = StyleSheet.create({
    row: {
        padding: 15,
        fontSize: 16
    },
    listItem: {
        justifyContent: 'space-between'
    },
    checkBox: {
        backgroundColor: 'transparent',
        borderWidth: 0
    }
});

export default class Item extends Component {

    state = {
        checked: false,
        backgroundColor: 'white'
    };

    onPressCheck = () => {
        const {onPressCheck, item} = this.props;

        let checked = !this.state.checked;
        let backgroundColor = checked ? '#f9f9f9' : 'white';

        this.setState({
            checked: checked,
            backgroundColor: backgroundColor
        });

        onPressCheck(item.id)
    };

    render() {
        const {item} = this.props;
        const {backgroundColor} = this.state;
        const layoutStyle = {backgroundColor};

        return (
            <Row style={[styles.listItem, layoutStyle]}>
                <Text style={styles.row}>{item.text}</Text>
                <CheckBox
                    containerStyle={styles.checkBox}
                    checked={this.state.checked}
                    onPress={this.onPressCheck}
                />
            </Row>
        )
    }
}
