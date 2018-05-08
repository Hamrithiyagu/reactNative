import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FlexComponent from './FlexComponent';
import MultiFlexComponent from './MultiFlexComponent';


export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <FlexComponent color="red" />
        <FlexComponent color="green" />
        <MultiFlexComponent color="blue" />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'stretch'
  },
});
