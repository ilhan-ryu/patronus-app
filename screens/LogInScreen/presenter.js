import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
  <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <View style={styles.header}>
      <Text style={styles.headerText}>PATRONUS🦌</Text>
    </View>
    <View style={styles.content}>
      <TextInput
        placeholder="아이디"
        placeholderTextColor="black"
        style={styles.textInput}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={props.username}
        onChangeText={props.changeUsername}
      />
      <TextInput
        placeholder="비밀번호"
        placeholderTextColor="black"
        style={styles.textInput}
        autoCapitalize={"none"}
        secureTextEntry={true}
        value={props.password}
        onChangeText={props.changePassword}
        returnKeyType={"send"}
        onEndEditing={props.submit}
      />
      <View style={styles.loginContainer}>
        {props.isSubmitting ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity onPressOut={props.isSubmitting ? null : props.submit}>
            <Text style={styles.loginBtn}>로그인</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={styles.fbContainer} onPressOut={props.fbLogin}>
        <View style={styles.fbView}>
          <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
          <Text style={styles.fbText}>페이스북 아이디로 로그인</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

LogInScreen.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  fbLogin: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    paddingLeft: 30,
    paddingTop: 50,
    backgroundColor: "white",
    justifyContent: "center",
    width
  },
  headerText: {
    fontSize: 45,
    fontWeight: "bold"
  },
  content: {
    flex: 3,
    paddingLeft: 30,
    backgroundColor: "white",
    paddingTop: 20,
    justifyContent: "flex-start"
  },
  textInput: {
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 2,
    width: width - 100,
    marginBottom: 25,
    fontSize: 16,
    fontWeight: "bold"
  },
  loginContainer: {
    flexDirection: "row"
  },
  loginBtn: {
    fontSize: 15,
    marginTop: 10,
    marginRight: 10,
    textAlign: "left"
  },
  fbContainer: {
    marginTop: 30
  },
  fbView: {
    flexDirection: "row",
    alignItems: "center"
  },
  fbText: {
    color: "#3E99EE",
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 14
  }
});

export default LogInScreen;
