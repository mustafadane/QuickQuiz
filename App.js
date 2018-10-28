import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import Toolbar from "./components/Toolbar";
import BottomNav from './components/BottomNavigation'
import Card from './components/QuestionCard'
import { connect } from 'react-redux'
import { selectScreen } from './redux/store'
import Quizzes from './screens/Quizzes'
import Edit from './screens/Edit'
import Login from './screens/Login'
import Progress from './screens/Progress'
import Ask from './screens/Ask'
import TakeQuiz from "./screens/TakeQuiz";
import { BottomNavigation } from 'react-native-material-ui'
import styles from './screens/styles'

import {
  createStackNavigator,
} from 'react-navigation';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const helperObject = {
  quizzes: Quizzes,
  edit: Edit,
  progress: Progress
}

const RootStack = createStackNavigator({
    Login,
    Progress,
    Quizzes,
    Ask,
    Edit,
    TakeQuiz,
    // BottomNav,
    // BottomNavigation
  },
  {
    initialRouteName: 'Login'
  }
)

// class Screens extends React.Component {
//   render() {
//     return (
//       // <View>
//         <RootStack>
//           {this.props.children}
//         </RootStack>

//     )
//   }
// }


export default class App extends React.Component {
  render() {
    return (
      //<View style={styles.container}>

        <RootStack />

        ///<BottomNav style={styles.bottom} />
        //</RootStack>
        /* <Text>DENEME</Text> */

      //</View>
    )



  }
}

//OLD FART
  /*

class App extends React.Component {





  render() {
    // const firstUpper = (str) => {
    //   return str[0].toUpperCase() + str.slice(1)
    // }

    if(this.props.selectedScreen === 'login'){
      return (
        <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Toolbar title='Login'/>
          <Text>Selected Screen: {this.props.selectedScreen}</Text>
          <Login />
          </ScrollView>
          <BottomNavigation style={styles.bottom} />
      </View>
      )
    }
    if(this.props.selectedScreen === 'quizzes'){
      return (
        <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Toolbar title='Quizzes' />
          <Text>Selected Screen: {this.props.selectedScreen}</Text>
          <Quizzes />
          </ScrollView>
          <BottomNavigation style={styles.bottom} />
      </View>
      )
    }
    if(this.props.selectedScreen === 'progress'){
      return (
        <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Toolbar title='Progress'/>
          <Text>Selected Screen: {this.props.selectedScreen}</Text>
          <Progress />
          </ScrollView>
          <BottomNavigation style={styles.bottom} />
      </View>
      )
    }
    if(this.props.selectedScreen === 'ask'){
      return (
        <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Toolbar title='Ask'/>
          <Text>Selected Screen: {this.props.selectedScreen}</Text>
          <Ask />
          </ScrollView>
          <BottomNavigation style={styles.bottom} />
      </View>
      )
    }
    if(this.props.selectedScreen === 'edit'){
      return (
        <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Toolbar title='Edit' />
          <Text>Selected Screen: {this.props.selectedScreen}</Text>
          <Edit />
          </ScrollView>
          <BottomNavigation style={styles.bottom} />
      </View>
      )
    }
    if(this.props.selectedScreen === 'takeQuiz'){
      return (
        <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Toolbar  title={this.props.selectedQuiz.title} />
          <Text>Selected Screen: {this.props.selectedScreen}</Text>
          <TakeQuiz />
          </ScrollView>
          <BottomNavigation style={styles.bottom} />
      </View>
      )
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Toolbar />
          <Text>Selected Screen: {this.props.selectedScreen}</Text>

        </ScrollView>
        <BottomNavigation style={styles.bottom} />
      </View>
    );
  }
}
 */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "space-between"
//   },
//   toolbar: {
//     width: 375,
//     height: 100,
//     borderBottomWidth: 5
//   }
// });

const mapState = state => ({
  selectedScreen: state.selectedScreen,
  selectedQuiz: state.selectedQuiz
})

const mapDispatch = (dispatch) => ({
  selectScreen: (screen) => dispatch(selectScreen(screen))
})

// export default connect(mapState, mapDispatch)(App)
