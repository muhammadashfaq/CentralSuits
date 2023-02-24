import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import { HomeCard, UserHeader } from '../../../components';
import { appImages, colors, HP, WP } from '../../../utils';

interface DashboardProps { }

const Dashboard = (props: DashboardProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        marginTop: HP(1.5),
        marginHorizontal: WP(4)
      }}>
        <UserHeader
          title={"Hello"}
          description={"John Doe"}
          icon={appImages.notification} />
      </View>
      <View style={{ marginVertical: HP('1') }} />
      <HomeCard />
    </SafeAreaView >
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
