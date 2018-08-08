import React, {Component} from 'react'
import {StyleSheet, Text} from 'react-native'
import {CheckBox, Icon} from 'react-native-elements'
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
        borderWidth: 0,
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

    onPressRemove = () => {
        const {onPressRemove, item} = this.props

        onPressRemove(item.id)
    };

    render() {
        const {item} = this.props;
        const {backgroundColor} = this.state;
        const layoutStyle = {backgroundColor};

        return (
            <Row style={[styles.listItem, layoutStyle]}>
                <Row size={75}>
                    <Text style={styles.row}>{item.text}</Text>
                </Row>
                <Row size={25}>
                    <Row size={60}>
                        <CheckBox
                            containerStyle={styles.checkBox}
                            checked={this.state.checked}
                            onPress={this.onPressCheck}
                        />
                    </Row>
                    <Row size={40}>
                        <Icon
                            name='close'
                            onPress={this.onPressRemove}
                            color='rosybrown'
                        />
                    </Row>
                </Row>
            </Row>
        )
    }
}
