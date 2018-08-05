import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import LogInScreen from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false
  };
  static propTypes = {
    login: PropTypes.func.isRequired,
    fbLogin: PropTypes.func.isRequired
  };

  render() {
    return (
      <LogInScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
        fbLogin={this._handleFBLogin}
      />
    );
  }

  _changeUsername = text => {
    this.setState({ username: text });
  };

  _changePassword = text => {
    this.setState({ password: text });
  };

  _submit = async () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;

    if (!isSubmitting) {
      this.setState({
        isSubmitting: true
      });
      if (username && password) {
        const loginResult = await login(username, password);
        if (!loginResult) {
          Alert.alert("아이디와 비밀번호를 다시 확인해주세요");
          this.setState({
            isSubmitting: false
          });
        }
      } else {
        Alert.alert("아이디와 비밀번호를 모두 입력해주세요");
        this.setState({
          isSubmitting: false
        });
      }
    }
  };

  _handleFBLogin = async () => {
    this.setState({ isSubmitting: true });
    const facebookResult = await this.props.fbLogin();
    if (!facebookResult) {
      this.setState({ isSubmitting: false });
    }
  };
}

export default Container;
