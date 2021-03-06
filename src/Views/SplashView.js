import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Image } from "react-native";
import { Container } from "native-base";
import { DBService } from "../Services/DBService";
import * as Actions from "../Actions";
import { connect } from "react-redux";
import { VIEW_MAIN, VIEW_LOGIN } from "../Config/Strings";

class SplashView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    DBService.initDB();
    // DBService.unsetLoggedInStatus();
    DBService.getTokenIfUserAvailable((token, isLoggedIn) => {
      console.log("Logged in status: " + isLoggedIn);
      console.log("Token from DB: " + token);
      if (token != null && isLoggedIn === 1) {
        this.setTokenToState(token);
        setTimeout(() => {
          this.props.navigation.navigate(VIEW_MAIN);
        }, 2000);
      } else {
        setTimeout(() => {
          this.props.navigation.navigate(VIEW_LOGIN);
        }, 2000);
      }
    });
  }

  setTokenToState(token) {
    console.log('Setting auth token to redux state.');
    this.props.setAuthToken(token);
  }

  render() {
    console.log(this.props);
    return (
      <Container style={styles.container}>
        <View>
          <StatusBar hidden={true} />
          <Image
            style={styles.image}
            resizeMode={"contain"}
            source={require("./images/hc_300.png")}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 100,
    width: 100
  }
});

export default connect(
  null,
  Actions
)(SplashView);
