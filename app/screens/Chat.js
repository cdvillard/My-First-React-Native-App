import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}/>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green'
  }
});

export {
  Chat
};