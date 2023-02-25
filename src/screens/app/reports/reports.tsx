import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { HP, WP } from '../../../utils';
import { styles } from './styles'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Sheet from './Sheet';
import Chart from './Chart';
import { Icon } from '@rneui/base';

interface ReportsProps { }

const renderScene = SceneMap({
  sheet: Sheet,
  chart: Chart,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    style={{ backgroundColor: "transparent" }}
    indicatorStyle={{ backgroundColor: '#BDBDBD' }}
    inactiveColor={"red"}
    activeColor={"green"}
    renderLabel={({ route, focused }) => (
      <Text style={{ color: focused ? "#1F8CCA" : '#828282' }}>
        {route.title}
      </Text>
    )}
  />
);

const Reports = (props: ReportsProps) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'sheet', title: 'Sheet View' },
    { key: 'chart', title: 'Chart View' },
  ]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topHeader}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>{"Monthly Occupancy Report"}</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ right: WP('1') }}>2022</Text>
          <Icon type={'antdesign'} size={13} name={'down'} />
        </TouchableOpacity>
      </View>

      {/* tab view */}
      <TabView style={styles.tabViewContainer}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}

      />
    </SafeAreaView>
  );
};

export default Reports;

