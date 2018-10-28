import React, { Component } from 'react'
import { BottomNavigation, BottomNavigationAction } from 'react-native-material-ui'
import { selectScreen } from '../redux/store'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'


class BottomNav extends Component {
    // constructor () {
    //     super()
    //     this.state = {
    //         active: 'quizzes'
    //     }
    // }

    handleOnPress = (screen) => {
        // this.props.selectScreen(screen)
        // this.setState({active: screen})
        // const { navigate } = this.props.navigation;
        // navigate('Quizzes')
    }

    render() {
        return (
    <BottomNavigation active={this.props.active} hidden={false}  >
        <BottomNavigation.Action
            key="quizzes"
            icon="list"
            label="Quizzes"
            onPress={() => this.props.navigation.navigate('Quizzes')}
        />
        <BottomNavigation.Action
            key="progress"
            icon="assessment"
            label="Progress"
            onPress={() => this.props.navigation.navigate('Progress')}
        />
        <BottomNavigation.Action
            key="ask"
            icon="help"
            label="Ask"
            onPress={() => this.props.navigation.navigate('Ask')}
        />
        <BottomNavigation.Action
            key="edit"
            icon="edit"
            label="edit"
            onPress={() => this.props.navigation.navigate('Edit')}
        />
    </BottomNavigation>
        )
    }
}

const mapDispatch = (dispatch) => ({
    selectScreen: (screen) => dispatch(selectScreen(screen))
})

// export default connect(null, mapDispatch)(BottomNav)

export default withNavigation(BottomNav)
