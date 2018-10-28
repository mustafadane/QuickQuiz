import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import BottomNav from '../components/BottomNavigation';

export class Login extends Component {
    static navigationOptions = {
        title: 'Login',
      };

    render() {
        // const {navigate} = this.props.navigation

        return (
            <View>
                <Text>this is login</Text>

            </View>
        )
    }
}

export default Login
