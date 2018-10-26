import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'


//action types
const SELECT_SCREEN = 'SELECT_SCREEN'
const SELECT_QUIZ = 'SELECT_QUIZ'

//action creators
export const selectScreen = (screen) => ({
    type: SELECT_SCREEN,
    screen
})

export const selectQuiz = quiz => ({
    type: SELECT_QUIZ,
    quiz
})

//thunks
// export const sel

//initial state
const initialState = {
    selectedScreen: 'login',
    isLoggedIn: false,
    quizzes: [],
    selectedQuiz: {},
}

//reducer

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_SCREEN:
            return {...state, selectedScreen: action.screen}
        case SELECT_QUIZ:
            return {...state, selectedQuiz: action.quiz}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store
