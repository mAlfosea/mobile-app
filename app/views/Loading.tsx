import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>Welcome!</Text>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
