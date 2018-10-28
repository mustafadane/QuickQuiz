import React, { Component } from 'react'
import { BottomNavigation, BottomNavigationAction } from 'react-native-material-ui'
import { selectScreen } from '../redux/store'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { Link, withRouter } from "react-router-native"

const LinkWithProp = props => {
    return (
        <Link to={props.to}>{props.label}</Link>
    )
}

class BottomNav extends Component {
    constructor () {
        super()
        this.state = {
            active: 'quizzes'
        }
    }

    handleOnPress = (screen) => {

        // this.setState({active: screen})
        console.log(this.state.active)

    }

    componentWillReceiveProps(){

    }

    render() {
        return (
    <BottomNavigation active={this.props.location.pathname.slice(1)} hidden={false}  >
        <Link
            to='/quizzes'
            component={BottomNavigation.Action}
            key="quizzes"
                icon="list"
                label='Quizzes'

        />
        <Link
            to='/progress'
            component={BottomNavigation.Action}
            key="progress"
                icon="assessment"
                label='Progress'

        />
        <Link
            to='/ask'
            component={BottomNavigation.Action}
            key="ask"
                icon="help"
                label='Ask'
                onPress={() => {}}
        />
        <Link
            to='/edit'
            component={BottomNavigation.Action}
            key="edit"
                icon="edit"
                label='Edit'
                onPress={() => {}}
        />

    </BottomNavigation>
        )
    }
}

const mapDispatch = (dispatch) => ({
    selectScreen: (screen) => dispatch(selectScreen(screen))
})

// export default connect(null, mapDispatch)(BottomNav)

export default withRouter(BottomNav)
