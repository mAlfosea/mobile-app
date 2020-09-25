import React from 'react';
import { StyleSheet, Alert, AsyncStorage } from 'react-native';
import Login from './views/Login';
import Home from './views/Home';
import Loading from './views/Loading';

const ISCONNECTED_KEY = '@is_connected'

export default class App extends React.Component {

  state = {
    user: null,
    isConnected: null
  }

  async componentDidMount() {
    const isConnected = await AsyncStorage.getItem(ISCONNECTED_KEY) === "true";
    this.setState({ isConnected });
  }

  loginUser = () => {
    AsyncStorage.setItem(ISCONNECTED_KEY, 'true')
    this.setState({ isConnected: true });
  }

  logoutUser = () => {
    AsyncStorage.setItem(ISCONNECTED_KEY, 'false')
    this.setState({ isConnected: false });
  }

  render() {
    if (this.state.isConnected === null)
      return <Loading />;

    return (
      <>
        {!this.state.isConnected && <Login login={this.loginUser}/>}
        {this.state.isConnected && <Home logout={this.logoutUser}/>}
      </>
    );
  }
};

const styles = StyleSheet.create({
  view: {

  },
});
