import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import BottomNav from '../components/BottomNavigation'
import styles from './styles'

export class Ask extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <Text>this is ask</Text>
                </ScrollView>
                {/* <BottomNav
                style={styles.bottom}
                navigation={this.props.navigation} active='ask'/> */}
            </View>
        )
    }
}

export default Ask
