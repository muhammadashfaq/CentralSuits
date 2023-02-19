import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {HomeHeader} from '../../../components';
import {colors} from '../../../utils';

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
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
