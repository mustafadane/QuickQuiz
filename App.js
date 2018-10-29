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
import { Route, Switch, withRouter } from "react-router-native"


class App extends React.Component {
  constructor(){
    super()
    this.state={
      key:0
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.setState({
        key: Math.random()
      })
    }
  }

  render() {
    // console.log('props:', this.props)
    return (

      <View style={styles.container}>
        <View style={styles.statusBar}>

            <ToolBar title='title here' />
            <ScrollView>
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/quizzes' component={Quizzes} />
                <Route path='/progress' component={Progress} />
                <Route path='/ask' component={Ask} />
                <Route path='/edit' component={Edit} />
                <Route path='/takequiz' component={TakeQuiz} />
              </Switch>
            </ScrollView>
            <BottomNav />
        </View>
      </View>
    )
  }
}

export default withRouter(App)
