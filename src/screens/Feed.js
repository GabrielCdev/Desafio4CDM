import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'João e Maria',
            email: 'joaoemaria@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'João',
                comment: 'Show!'
            }, {
                nickname: 'Aristóteles_Dev',
                comment: 'Foto top! Onde tirou?'
            }]
        }, {
            id: Math.random(),
            nickname: 'Maria e João',
            email: 'mariaejoao@yahoo.com.br',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed