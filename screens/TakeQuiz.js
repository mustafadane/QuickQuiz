import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native'
import Card from '../components/QuestionCard'


export class TakeQuiz extends Component {
    render() {
        console.log(this.props.selectedQuiz)
        return (
            <View >
                {/* {this.props.selectedQuiz.questions.map(question => (
                    <Text key={question.id}>{question.title}</Text>
                )) } */}


          {/* <Card />
          <Card />
          <Card /> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#fff",
      // alignItems: "center",
      // justifyContent: "space-between"
    }
  });

const mapState = state => ({
    selectedQuiz: state.selectedQuiz
})

export default connect(mapState)(TakeQuiz)
