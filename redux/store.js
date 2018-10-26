import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'


//action types
const SELECT_SCREEN = 'SELECT_SCREEN'

//action creators
export const selectScreen = (screen) => ({
    type: SELECT_SCREEN,
    screen
})

//thunks

//initial state
const initialState = {
    selectedScreen: 'login',
    isLoggedIn: false,
    quizes: [],
    selectedQuiz: {},
}

//reducer

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_SCREEN:
            return {...state, selectedScreen: action.screen}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store
