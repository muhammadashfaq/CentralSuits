import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {HomeHeader, HomeCard} from '../../../components';
import {colors, HP} from '../../../utils';

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      {/* <View style={{marginVertical: HP('1')}} /> */}
      <Image
        source={require('../../../assets/images/homescreen.png')}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          bottom: HP('10'),
        }}
        resizeMode={'contain'}
      />
      {/* <HomeCard /> */}
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
