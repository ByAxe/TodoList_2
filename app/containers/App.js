import React, {Component} from 'react'
import {FlatList, ScrollView, StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'
import {Grid, Row} from "react-native-easy-grid";

import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from "../components/Input";
import {actionCreators} from "../redux/todoRedux";
import Item from "../components/Item";

const styles = StyleSheet.create({
    list: {
        borderWidth: 0.5,
        borderColor: '#dadada'
    },
    row: {
        padding: 15,
        fontSize: 16
    },
    content: {
        flex: 1,
        alignItems: 'stretch',
    }
});

const mapStateToProps = (state) => ({
    items: state.items,
});

const extractKey = ({id}) => id.toString();

class App extends Component {

    onAddTodo = (text) => {
        const {dispatch} = this.props;
        dispatch(actionCreators.addItem(text));
    };

    onPressRemove = (index) => {
        const {dispatch} = this.props;
        dispatch(actionCreators.removeItem(index));
    };

    onRemoveChecked = () => {
        const {dispatch} = this.props;
        dispatch(actionCreators.removeChecked());
    };

    onPressCheck = (index) => {
        const {dispatch} = this.props;
        dispatch(actionCreators.toggleItemCompleted(index))
    };

    renderItem = ({item}) => {
        return (
            <Item
                item={item}
                onPressCheck={this.onPressCheck}
                onPressRemove={this.onPressRemove}
            />
        )
    };


    render() {
        return (
            <Grid>
                <Row size={8}>
                    <Title title={'To-Do List'}/>
                </Row>
                <Row size={84}>
                    <View style={styles.content}>
                        <Row size={10}>
                            <Input
                                placeholder={'Enter an item'}
                                onSubmitEditing={this.onAddTodo}
                            />
                        </Row>
                        <Row size={90}>
                            <ScrollView>
                                <FlatList
                                    data={this.props.items}
                                    renderItem={this.renderItem}
                                    keyExtractor={extractKey}
                                />
                            </ScrollView>
                        </Row>
                    </View>
                </Row>
                <Row size={8}>
                    <Footer
                        onRemoveChecked={this.onRemoveChecked}
                        text={'Remove completed items'}
                    />
                </Row>
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(App)
