import { StyleSheet } from 'react-native'
import { Constants } from 'expo';

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
    },
    statusBar: {
      // backgroundColor: "#C2185B",
      // height: Constants.statusBarHeight,
      paddingTop: Constants.statusBarHeight
    }
  });

export default styles
