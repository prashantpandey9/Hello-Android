import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text>Open Up App.js to start working</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
