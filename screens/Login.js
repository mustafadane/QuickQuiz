import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import BottomNav from '../components/BottomNavigation';

export class Login extends Component {
    static navigationOptions = {
        title: 'Login',
      };

    render() {
        const {navigate} = this.props.navigation
        return(
            <View>
        <Button
            title="Go to Jane's profile"
            onPress={() =>
            navigate('Quizzes')
            }
        />
        {/* <BottomNav navigation={this.props.navigation} /> */}
        </View>
        )
        // return (
        //     <View>
        //         <Text>this is login</Text>
        //         <BottomNavigation />
        //     </View>
        // )
    }
}

export default Login
