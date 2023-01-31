import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {MainNavigation} from './src/navigation';

interface AppProps {}

const App = (props: AppProps) => {
  return <MainNavigation />;
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
