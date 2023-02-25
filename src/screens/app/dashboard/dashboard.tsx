import { Icon } from '@rneui/base';
import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { BarChart, PieChart } from 'react-native-gifted-charts';
import { UserHeader } from '../../../components';
import { appImages, colors, HP, WP } from '../../../utils';

interface DashboardProps { }

const Header = ({ title, date }) => (
  <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: HP('1'),
    }}
  >
    <Text style={{ fontSize: 20, fontWeight: '600' }}>{title}</Text>
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ right: WP('1'), color: "#57686B" }}>{date}</Text>
      <Icon type={'antdesign'} size={13} name={'down'} color="#57686B" />
    </TouchableOpacity>
  </View>
);

const pieData = [
  { value: 10, color: '#F2994A', gradientCenterColor: '#F2994A', text: '14%' },
  { value: 16, color: '#1F8CCA', gradientCenterColor: '#1F8CCA', text: '86%' },
];


const Dashboard = (props: DashboardProps) => {
  const barData = [
    {
      value: 40,
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 20, frontColor: '#ED6665' },
    {
      value: 50,
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 40, frontColor: '#ED6665' },
    {
      value: 75,
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 25, frontColor: '#ED6665' },
    {
      value: 30,
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 20, frontColor: '#ED6665' },
    {
      value: 60,
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 40, frontColor: '#ED6665' },
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 30, frontColor: '#ED6665' },
    {
      value: 65,
      label: 'Jul',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 30, frontColor: '#ED6665' },
    {
      value: 65,
      label: 'Jul',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: { color: 'gray' },
      frontColor: '#177AD5',
    },
    { value: 30, frontColor: '#ED6665' },
  ];

  const renderTitle = () => {
    return (
      <View style={{}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginStart: HP(2)
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#177AD5',
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
                color: '#57686B',
                fontStyle: 'italic'
              }}>
              Income
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#ED6665',
                marginRight: 8,
              }}
            />
            <Text
              style={{
                width: 60,
                height: 16,
                color: '#57686B',
                fontStyle: 'italic'

              }}>
              Expenses
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <UserHeader
            title={"Hello"}
            description={"John Doe"}
            icon={appImages.notification} />

          {/* Bottom Header View */}
          <View style={{ marginTop: HP(2) }}>
            <Header title={"Rent Status"} date={"November 2022"} />
            <View style={styles.bottomLine} />
          </View>

          {/* Bar and statistics */}
          <View style={{ flexDirection: 'row', margin: HP(2) }}>
            <PieChart
              data={pieData}
              donut
              showGradient
              sectionAutoFocus
              radius={70}
              innerRadius={45}
              centerLabelComponent={() => {
                return (
                  <Text style={styles.label}>
                    Rent {'\n'}Status
                  </Text>
                );
              }}
            />

            <View style={{ width: WP(40), marginTop: HP(1.5), start: HP(2) }}>
              <Text style={{ fontSize: 14, color: '#8B98B1' }}>Monthly Rent</Text>
              <Text style={styles.totalAmount}>$41913.89</Text>
              <View style={styles.statusContainer}>
                <View style={{ justifyContent: 'center' }}>
                  <View style={styles.sign}>
                    <View style={styles.dot} />
                    <Text style={styles.statusText}>Received</Text>
                  </View>
                  <Text style={styles.amount}>$37800.00</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <View style={styles.sign}>
                    <View style={[styles.dot, { backgroundColor: '#F2994A' }]} />
                    <Text style={styles.statusText}>Pending</Text>
                  </View>
                  <Text style={styles.amount}>$1680.00</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.barContainer}>
            <View style={{ marginHorizontal: HP(1), marginTop: HP(1) }}>
              <Header title={"Property Revenue Overview"} date={"Month"} />
              <Text style={{ color: "#57686B", fontSize: 14, start: 10 }}>Shows Revenue from jan 2022 to Dec 2022</Text>
              <View style={[styles.bottomLine, { width: WP(80), marginVertical: HP(1.5) }]} />

              <View style={{ marginTop: HP(2) }}>
                {renderTitle()}
                <BarChart
                  roundedTop
                  roundedBottom
                  yAxisLabelTexts={['0$', '10$', '20$', '30$', '40$']}
                  data={barData}
                  barWidth={6}
                  initialSpacing={5}
                  spacing={24}
                  yAxisThickness={0}
                  stepValue={1000}
                  noOfSections={4}
                  hideRules
                  yAxisColor={'white'}
                  yAxisTextStyle={{ color: '#999999' }}
                  xAxisColor={'white'}
                  labelWidth={40}
                  xAxisLabelTextStyle={{ color: '#999999', fontSize: 10 }}
                />
              </View>
              <View style={[styles.bottomLine, { width: WP(80), marginTop: HP(4) }]} />
            </View>
            <View style={styles.boxContainer}>
              <View style={styles.totalBox}>
                <Text style={styles.boxTitleText}>Total Income</Text>
              </View>
              <View style={styles.totalBox}>
                <Text style={styles.boxTitleText}>Total Expenses</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    marginTop: HP(1.5),
    marginHorizontal: WP(4)
  },
  bottomLine: {
    width: WP(88), height: HP(0.1), backgroundColor: '#BDBDBD', alignSelf: 'center', opacity: 0.7
  },
  textContainer: {
    width: 150,
    height: 83,
  },
  monthly: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  label: {
    fontSize: 14, color: '#828282', textAlign: 'center'
  },
  sign: {
    flexDirection: 'row', alignItems: 'center'
  },
  dot: {
    width: 10, height: 10, backgroundColor: '#1F8CCA'
  },
  statusContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: HP(2)
  },
  amount: {
    color: '#333333', fontSize: 16, marginTop: HP(1), fontWeight: '400'
  },
  statusText: {
    start: 5, color: '#8B98B1', fontSize: 12
  },
  totalAmount: {
    color: "#333333", fontSize: 20, fontWeight: 'bold', marginTop: HP(1)
  },
  barContainer: {
    width: WP(90),
    marginTop: HP(2),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1,
    alignSelf: 'center',
    marginBottom: HP(2)
  },
  totalBox: {
    width: WP(38), height: HP(8), borderWidth: 1, borderColor: '#BDBDBD', borderRadius: 10, opacity: 0.7
  },
  boxContainer: {
    flexDirection: 'row', justifyContent: 'space-between', margin: HP(2)
  },
  boxTitleText: {
    color: '#8B98B1', margin: HP(1.5), fontSize: 14
  }
});
