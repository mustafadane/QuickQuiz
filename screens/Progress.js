import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import BottomNav from '../components/BottomNavigation'
import styles from './styles'

export class Progress extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                <Text>this is progress</Text>
                </ScrollView>

            </View>
        )
    }
}

export default Progress
