import React, { Component } from 'react'
import { View } from 'react-native'

// Components:
import Header from './components/Header'
import Post from './components/Post'

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Maria',
      comment: 'Bela foto!'
    }, {
      nickname: 'João',
      comment: 'Vish, faço melhor!! HAHAHA'
    }]

    return(
      <View style={{ flex: 1}}>
        <Header />
        <Post image={require('../assets/imgs/fence.jpg')} comments={comments} />
      </View>
    )
  }
}