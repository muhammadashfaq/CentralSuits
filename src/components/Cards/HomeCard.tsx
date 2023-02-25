import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { WP, colors, HP } from '../../utils';
import { Divider, Icon } from '@rneui/base';
import { DonutChart } from 'react-native-circular-chart';
import { CircularChart } from '../Charts/CircularChart';
import { PieChart } from 'react-native-gifted-charts';

const width = Dimensions.get('window').width;
const PADDING = 10;

interface HomeCardProps { }

const HomeCard = (props: HomeCardProps) => {
  const pieData = [
    { value: 3, color: '#F2994A', gradientCenterColor: '#F2994A', text: '14%' },
    { value: 16, color: '#1F8CCA', gradientCenterColor: '#1F8CCA', text: '86%' },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flexDirection: 'row' }}>
        <PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={65}
          innerRadius={40}
          centerLabelComponent={() => {
            return (
              <Text style={{ fontSize: 14, color: '#828282', textAlign: 'center' }}>
                Rent {'\n'}Status
              </Text>
            );
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 0.5 }}></View>
          <View style={{ flex: 0.5 }}>
            <View style={styles.textcontainer}>
              <Text style={styles.monthly}>
                Monthly Rent{'\n'}$41913.89{'\n'}
                {'\n'}Received {'\t'} Pending{'\n'}$37800.00. $1680.00
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Divider style={{ marginVertical: HP('0.2') }} />
    </View>
  );
};

const Header = () => (
  <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: HP('1'),
    }}
  >
    <Text style={{ fontSize: 20, fontWeight: '700' }}>Rent Status</Text>
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ right: WP('1') }}>November 2022</Text>
      <Icon type={'antdesign'} size={13} name={'down'} />
    </TouchableOpacity>
  </View>
);

export { HomeCard };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: WP('5'),
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    padding: HP('1'),
  },

  textcontainer: {
    width: 150,
    height: 83,
  },
  monthly: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
});
