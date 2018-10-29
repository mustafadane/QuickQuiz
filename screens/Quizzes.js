import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ListItem } from 'react-native-material-ui';
import { connect } from "react-redux";
import { fetchQuizzes, fetchQuiz } from '../redux/store'
import BottomNav from '../components/BottomNavigation'
import styles from './styles'
import { Link, Redirect } from 'react-router-native'

export class Quizzes extends Component {
    componentDidMount(){
        this.props.fetchQuizzes()
    }

    selectQuiz = (quizId) => {
        console.log('clicked')
        this.props.history.push('/takequiz/?1', replace)

    }

    render() {
        return (

            <View>
                <Text>this is quizes</Text>
                    {this.props.quizzes.length
                    ? this.props.quizzes
                    .filter(quiz => quiz.isActive)
                    .map(quiz =>
                            // <Link to='/takequiz' key={quiz.id}>
                            //     <ListItem
                            //         divider
                            //         centerElement={{
                            //             primaryText: `${quiz.title}`,
                            //             secondaryText: `${quiz.activeDate}`
                            //         }}
                            //         onPress={() => {this.selectQuiz(quiz.id)}}
                            //     />
                            // </Link>
                            // <Link
                            //     to='/takequiz'
                            //     key={quiz.id}
                            //     component= {ListItem}
                            //     divider
                            //     centerElement={{
                            //         primaryText: `${quiz.title}`,
                            //         secondaryText: `${quiz.activeDate}`
                            //     }}
                            //     onPress={() => {this.selectQuiz(quiz.id)}}
                            // />
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
                {/* <Link to='/takequiz?1'><Text>take quiz</Text></Link> */}
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
})
export default connect(mapState, mapDispatch)(Quizzes)
