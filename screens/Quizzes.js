import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-material-ui';
import { connect } from "react-redux";

export class Quizzes extends Component {
    render() {
        return (
            <View>
                <Text>this is quizes</Text>
                <ListItem
                    divider
                    centerElement={{
                      primaryText: 'Primary text',
                    }}
                    onPress={() => {}}
                />
            </View>
        )
    }
}

export default connect()(Quizzes)
