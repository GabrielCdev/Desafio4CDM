import registerRootComponent from 'expo/build/launch/registerRootComponent'
import React from 'react'
import { Provider } from 'react-redux'

import Navigator from './src/Navigator'

import storeConfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://facsgram.firebaseio.com/'

const store = storeConfig()
const Redux = () => {
    return(
        <Provider store={store}>
            <Navigator />
        </Provider>
    )
}

registerRootComponent(Redux)
