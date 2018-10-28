import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-material-ui';
import { connect } from "react-redux";
import { fetchQuizzes } from '../redux/store'

export class Quizzes extends Component {
    componentDidMount(){
        this.props.fetchQuizzes()
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
                                onPress={() => {}}
                            />
                        )
                    : <Text>No Quizzes Yet!</Text>
                }
                <ListItem
                    divider
                    centerElement={{
                      primaryText: 'Primary text',
                      secondaryText: 'secondary'
                    }}
                    onPress={() => {}}
                />
                <ListItem
                    divider
                    centerElement={{
                      primaryText: 'Primary text',
                      secondaryText: 'secondary'
                    }}
                    onPress={() => {}}
                />
            </View>
        )
    }
}

const mapState = state => ({
    quizzes: state.quizzes
})
const mapDispatch = dispatch => ({
    fetchQuizzes: () => dispatch(fetchQuizzes())
})
export default connect(mapState, mapDispatch)(Quizzes)
