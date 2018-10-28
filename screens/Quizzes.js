import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ListItem } from 'react-native-material-ui';
import { connect } from "react-redux";
import { fetchQuizzes, fetchQuiz, selectScreen } from '../redux/store'
import BottomNav from '../components/BottomNavigation'
import styles from './styles'

export class Quizzes extends Component {
    componentDidMount(){
        this.props.fetchQuizzes()
    }

    selectQuiz = (quizId) => {
        this.props.fetchQuiz(quizId)
        this.props.selectScreen('takeQuiz')
    }

    render() {
        return (

            <View>
                <Text>this is quizes</Text>
                    {this.props.quizzes.length
                    ? this.props.quizzes
                    .filter(quiz => quiz.isActive)
                    .map(quiz =>
                            <ListItem
                                key={quiz.id}
                                divider
                                centerElement={{
                                    primaryText: `${quiz.title}`,
                                    secondaryText: `${quiz.activeDate}`
                                }}
                                onPress={() => {this.selectQuiz(quiz.id)}}
                            />
                        )
                    : <Text>No Quizzes Yet!</Text>
                }
                </View>

        )
    }
}

const mapState = state => ({
    quizzes: state.quizzes
})
const mapDispatch = dispatch => ({
    fetchQuizzes: () => dispatch(fetchQuizzes()),
    fetchQuiz: (quizId) => dispatch(fetchQuiz(quizId)),
    selectScreen: (screen) => dispatch(selectScreen(screen))
})
export default connect(mapState, mapDispatch)(Quizzes)
