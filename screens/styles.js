import { StyleSheet } from 'react-native'
import { Constants } from 'expo';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      // alignItems: "center",
      justifyContent: "space-between"
    },
    toolbar: {
      width: 375,
      height: 100,
      borderBottomWidth: 5
    },
    statusBar: {
      paddingTop: Constants.statusBarHeight,
      flex: 1,
      justifyContent: 'space-between'
    }
  });

export default styles
