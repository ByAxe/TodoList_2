import React, {Component} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'

import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from "../components/Input";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
});

const mapStateToProps = (state) => ({
    items: state.items,
});


class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Title/>
                <ScrollView style={styles.container}>
                    <Input></Input>
                </ScrollView>
                <Footer/>
            </View>
        )
    }
}

export default connect(mapStateToProps)(App)
