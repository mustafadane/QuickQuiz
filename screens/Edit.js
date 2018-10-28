import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import BottomNav from '../components/BottomNavigation'
import styles from './styles'

export class Edit extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <Text>this is edit</Text>
            </ScrollView>
                {/* <BottomNav style={styles.bottom} navigation={this.props.navigation} active='edit'/> */}
            </View>
        )
    }
}

export default Edit
