import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SplashProps {}

const Splash = (props: SplashProps) => {
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {}
});
