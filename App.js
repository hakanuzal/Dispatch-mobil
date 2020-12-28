import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import Header from './src/components/Header';
import App from './AppContainer';
import bgImage from './assets/favicon.png';
const App = () => {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center'
  },
});
export default App;