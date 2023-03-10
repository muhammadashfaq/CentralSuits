import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {appLogos, colors, HP, WP} from '../../../utils';

interface SplashProps {}

const Splash = (props: SplashProps) => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
      // navigation.navigate('App', {
      //   screen: 'Home',
      // });
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode={'contain'}
        source={appLogos.appLogo}
        style={styles.logoStyle}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logoStyle: {
    width: WP('60'),
    height: HP('60'),
  },
});
