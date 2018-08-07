import React, {Component} from 'react'
import {Provider} from 'react-redux'

import configureStore from './app/store/configureStore'
import App from './app/containers/App'

import {AppRegistry} from 'react-native'

const store = configureStore();


class Container extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('TodoList_2', () => Container);
