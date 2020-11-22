import React from 'react'
import { Provider } from 'react-redux'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import Navigator from './src/Navigator'

import storeConfig from './src/store/storeConfig'

const store = storeConfig()

const Redux = () => {
    return(
        <Provider store={store}>
            <Navigator />
        </Provider>
    )
}

registerRootComponent(Redux)
