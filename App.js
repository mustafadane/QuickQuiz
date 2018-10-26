import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import Toolbar from "./components/Toolbar";
import BottomNavigation from './components/BottomNavigation'
import Card from './components/QuestionCard'
import { connect, Provider } from 'react-redux'
import { selectScreen } from './redux/store'


class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Toolbar />
          <Text>Selected Screen: {this.props.selectedScreen}</Text>
          <Card />
          <Card />
          <Card />
        </ScrollView>
        <BottomNavigation style={styles.bottom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "space-between"
  },
  toolbar: {
    width: 375,
    height: 100,
    borderBottomWidth: 5
  }
});

const mapState = state => ({
  selectedScreen: state.selectedScreen
})

const mapDispatch = (dispatch) => ({
  selectScreen: (screen) => dispatch(selectScreen(screen))
})

export default connect(mapState, mapDispatch)(App)
