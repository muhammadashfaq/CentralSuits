import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {Input, Spacer, AppButton} from '../../../components';
import {HP, WP, appLogos, colors} from '../../../utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface LoginProps {}

const Login = (props: LoginProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.logoView}>
          <Image
            resizeMode={'contain'}
            source={appLogos.appLogo}
            style={styles.logoStyle}
          />
        </View>
        <View style={styles.centerView}>
          <Text style={styles.signINText}>Sign In to your account.</Text>
          <Spacer vertical={HP('2')} />
          <Input label={'Email'} placeholder={'enter your email address..'} />
          <Input
            label={'Password'}
            placeholder={'enter your password'}
            secureTextEntry
          />
          <Spacer vertical={HP('0.3')} />
          <TouchableOpacity>
            <Text style={styles.forgotpass}>Forget password?</Text>
          </TouchableOpacity>
          <Spacer vertical={HP('3')} />
          <AppButton
            title={'Login'}
            style={{marginHorizontal: WP('2')}}
            onPress={() => {}}
          />
        </View>
        <View style={styles.bottomView}>
          <Text
            onPress={() => {
              Alert.alert('Privacy Policy');
            }}
            style={{color: colors.primary}}
          >
            Privacy Policy <Text style={{color: colors.black}}>|</Text>{' '}
            <Text
              onPress={() => {
                Alert.alert('Terms');
              }}
              style={{color: colors.primary}}
            >
              Terms & Conditions
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoView: {flex: 0.3, justifyContent: 'center', alignItems: 'center'},
  centerView: {flex: 0.5, marginHorizontal: WP('5')},
  bottomView: {
    flex: 0.3,
    //  backgroundColor: 'orange',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: HP('2'),
  },
  logoStyle: {
    width: WP('45'),
    height: HP('45'),
  },
  signINText: {
    //  fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: '500',
    alignSelf: 'center',
  },
  forgotpass: {
    //  fontFamily: 'Roboto',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});
