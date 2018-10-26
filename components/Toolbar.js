import React from 'react'
import { Toolbar } from 'react-native-material-ui'
import { connect } from 'react-redux'

const firstUpper = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}

const MyToolbar = (props) => {
    return <Toolbar
    leftElement='arrow-back'
    centerElement={firstUpper(props.selectedScreen)}
    rightElement={{
        menu: {
            icon: "more-vert",
            labels: ["item 1", "item 2"]
        }
    }}
    onRightElementPress={ (label) => { console.log(label) }}
    />
}

const mapState = (state) => ({
    selectedScreen: state.selectedScreen
})

export default connect(mapState)(MyToolbar)
