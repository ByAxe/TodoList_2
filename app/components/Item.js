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
});

export default class Item extends Component {

    state = {
        checked: false,
    };

    render() {
        const {onPressCheck, item} = this.props;
        const {id, text} = item;

        return (
            <Row style={styles.listItem}>
                <Text style={styles.row}>{text}</Text>
                <CheckBox
                    checked={this.state.checked}
                    onPress={() => {
                        this.setState({checked: !this.state.checked});
                        onPressCheck(id)
                    }}
                />
            </Row>
        )
    }
}
