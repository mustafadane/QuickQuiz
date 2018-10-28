import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import BottomNav from './components/BottomNavigation'
import ToolBar from './components/Toolbar'

import Quizzes from './screens/Quizzes'
import Edit from './screens/Edit'
import Login from './screens/Login'
import Progress from './screens/Progress'
import Ask from './screens/Ask'
import TakeQuiz from "./screens/TakeQuiz";
import styles from './screens/styles'
import { Route } from "react-router-native"


export default class App extends React.Component {
  render() {
    return (

      <View>


      <View style={styles.statusBar}>

            <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <ToolBar title='title here' />
            <ScrollView>
              <Route exact path='/' component={Login} />
              <Route path='/quizzes' component={Quizzes} />
              <Route path='/progress' component={Progress} />
              <Route path='/ask' component={Ask} />
              <Route path='/edit' component={Edit} />
              <Route path='/takequiz' component={TakeQuiz} />
            </ScrollView>
            <View style={styles.bottom} >
              <BottomNav />
            </View>

        </View>
      </View>
      </View>
    )
  }
}

