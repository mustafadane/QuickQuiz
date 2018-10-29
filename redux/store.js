import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

const URL = 'http://quiz-server-1.herokuapp.com/api/'


//action types
const SELECT_QUIZ = 'SELECT_QUIZ'
const GOT_QUIZZES = 'GOT_QUIZZES'
const GOT_QUIZ = 'GOT_QUIZ'

//action creators

export const selectQuiz = quiz => ({
    type: SELECT_QUIZ,
    quiz
})
const gotQuizzes = quizzes => ({
    type: GOT_QUIZZES,
    quizzes
})
const gotQuiz = quiz => ({
    type: GOT_QUIZ,
    quiz
})

//thunks
export const fetchQuizzes = () => {
    return async (dispatch) => {
    const { data } = await axios.get(URL+'quizzes')
    dispatch(gotQuizzes(data))
    }
}

export const fetchQuiz = (quizId) => {
    return async (dispatch) => {
        const { data } = await axios.get(`${URL}quizzes/${quizId}`)
        dispatch(gotQuiz(data))
    }
}

//initial state
const initialState = {
    isLoggedIn: false,
    quizzes: [],
    selectedQuiz: {},
}

//reducer

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SELECT_QUIZ:
            return {...state, selectedQuiz: action.quiz}
        case GOT_QUIZZES:
            return {...state, quizzes: action.quizzes}
        case GOT_QUIZ:
            return {...state, selectedQuiz: action.quiz}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store
