import React, { Component } from 'react'
import { BottomNavigation, BottomNavigationAction } from 'react-native-material-ui'
import { selectScreen } from '../redux/store'
import { connect } from 'react-redux'


export class BottomNav extends Component {
    constructor () {
        super()
        this.state = {
            active: 'quizes'
        }
    }

    handleOnPress = (screen) => {
        this.props.selectScreen(screen)
        this.setState({active: screen})
    }

    render() {
        return (
    <BottomNavigation active={this.state.active} hidden={false}  >
        <BottomNavigation.Action
            key="quizes"
            icon="list"
            label="Quizes"
            onPress={() => this.handleOnPress('quizes')}
        />
        <BottomNavigation.Action
            key="progress"
            icon="assessment"
            label="Progress"
            onPress={() => this.handleOnPress('progress')}
        />
        <BottomNavigation.Action
            key="ask"
            icon="help"
            label="Ask"
            onPress={() => this.handleOnPress('ask')}
        />
        <BottomNavigation.Action
            key="edit"
            icon="edit"
            label="edit"
            onPress={() => this.handleOnPress('edit')}
        />
    </BottomNavigation>
        )
    }
}

const mapDispatch = (dispatch) => ({
    selectScreen: (screen) => dispatch(selectScreen(screen))
})

export default connect(null, mapDispatch)(BottomNav)
