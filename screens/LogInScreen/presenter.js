import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
  <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <View style={styles.header}>
      <Text style={styles.headerText}>Patronus</Text>
    </View>
    <View style={styles.content}>
      <TextInput
        placeholder="아이디"
        placeholderTextColor="black"
        style={styles.textInput}
        autoCapitalize={"none"} 
        autoCorrect={false}
      />
      <TextInput
        placeholder="비밀번호"
        placeholderTextColor="black"
        style={styles.textInput}
        autoCapitalize={"none"}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <View>
          <Text>로그인</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbContainer}>
        <View style={styles.fbView}>
          <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
          <Text style={styles.fbText}>페이스북 아이디로 로그인</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

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
    fontSize: 38,
    fontWeight: "bold"
  },
  content: {
    flex: 4,
    paddingLeft: 30,
    backgroundColor: "white",
    paddingTop: 20,
    justifyContent: "flex-start"
  },
  fbContainer: {
    marginTop: 50
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
  },
  textInput: {
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 2,
    width: width - 80,
    marginBottom: 25,
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default LogInScreen;
