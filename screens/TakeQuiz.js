import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text } from 'react-native'
import Card from '../components/QuestionCard'
import {  fetchQuiz } from '../redux/store'


class TakeQuiz extends Component {

    componentDidMount(){
        this.props.fetchQuiz(1)
    }

    render() {
        console.log('props:',this.props)
        // console.log('selectedQuiz:', this.props.selectedQuiz)
        return (

                <Text>This is take quiz</Text>

        )
    }
}


const mapState = state => ({
    selectedQuiz: state.selectedQuiz
})

const mapDispatch = dispatch => ({
    fetchQuiz: (quizId) => dispatch(fetchQuiz(quizId))
})

export default connect(mapState, mapDispatch)(TakeQuiz)
