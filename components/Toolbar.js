import React from 'react'
import { Toolbar } from 'react-native-material-ui'

const MyToolbar = () => {
    return <Toolbar
    leftElement='arrow-back'
    centerElement="Home"
    rightElement={{
        menu: {
            icon: "more-vert",
            labels: ["item 1", "item 2"]
        }
    }}
    onRightElementPress={ (label) => { console.log(label) }}
    />
}

export default MyToolbar
