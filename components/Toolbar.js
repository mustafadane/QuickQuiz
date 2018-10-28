import React from 'react'
import { Toolbar } from 'react-native-material-ui'
import { connect } from 'react-redux'



const MyToolbar = (props) => {
    return <Toolbar
    // leftElement='arrow-back'
    centerElement={props.title}
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
