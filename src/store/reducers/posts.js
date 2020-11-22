import { ADD_POST } from '../actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'João e Maria',
        email: 'joaoemaria@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
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
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
    }]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer