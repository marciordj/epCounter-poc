import React from 'react';

import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello worldddd</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1440',
    flex: 1
  },
  text: {
    color: 'red'
  }
});

export default App;
