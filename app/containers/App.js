import React, {Component} from 'react'
import {FlatList, ScrollView, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import {Grid, Row} from "react-native-easy-grid";

import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from "../components/Input";

const styles = StyleSheet.create({
    list: {
        borderWidth: 0.5,
        borderColor: '#dadada'
    },
    row: {
        padding: 15,
    },
});

const mapStateToProps = (state) => ({
    items: state.items,
});

const extractKey = ({id}) => id.toString();

class App extends Component {

    renderItem = ({item}) => {
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    };

    render() {
        return (
            <Grid>
                <Row size={8}>
                    <Title/>
                </Row>
                <Row size={84}>
                    <ScrollView>
                        <Row size={15}>
                            <Input></Input>
                        </Row>
                        <Row size={85}>
                            <FlatList
                                data={this.props.items}
                                renderItem={this.renderItem}
                                keyExtractor={extractKey}
                            />
                        </Row>
                    </ScrollView>
                </Row>
                <Row size={8}>
                    <Footer/>
                </Row>
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(App)
