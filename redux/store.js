import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

const URL = 'http://quiz-server-1.herokuapp.com/api/'


//action types
const SELECT_SCREEN = 'SELECT_SCREEN'
const SELECT_QUIZ = 'SELECT_QUIZ'
const GOT_QUIZZES = 'GOT_QUIZZES'

//action creators
export const selectScreen = (screen) => ({
    type: SELECT_SCREEN,
    screen
})

export const selectQuiz = quiz => ({
    type: SELECT_QUIZ,
    quiz
})
const gotQuizzes = quizzes => ({
    type: GOT_QUIZZES,
    quizzes
})

//thunks
export const fetchQuizzes = () => {
    return async (dispatch) => {
    const { data } = await axios.get(URL+'quizzes')
    dispatch(gotQuizzes(data))
    }
}
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
        case GOT_QUIZZES:
            return {...state, quizzes:action.quizzes}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store
