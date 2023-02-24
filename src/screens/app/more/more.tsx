import * as React from 'react';
import { Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import { appImages, HP, WP } from '../../../utils';
import { styles } from './styles'

interface SplashProps { }

const More = (props: SplashProps) => {
  const [tableHead, setTableHead] = React.useState(['Date', 'Rooms \nOccupied', 'Accommodation \nBooked', 'Total \nRevenue']);
  const [tableData, setTableData] = React.useState([
    ["1 Jan-31 Jan", '58%', '432', '$32131.00'],
    ["2 Dec-12 Jan", '48%', '432', '$21414.00'],
    ["4 Jan-31 Jan", '38%', '829', '$34120.00'],
    ["5 Jan-31 Jan", '58%', '321', '$12342.00'],
    ["5 Jan-31 Jan", '58%', '776', '$34120.00'],
    ["7 Jan-31 Jan", '58%', '123', '$12312.00'],
    ["8 May-31 Jan", '58%', '273', '$34120.00'],
    ["9 Jan-31 Jan", '58%', '632', '$34120.00'],
    ["4 Jan-31 Jan", '58%', '776', '$12312.00'],
    ["1 Feb-31 Jan", '58%', '776', '$34120.00'],
    ["9 Jan-31 Jan", '58%', '324', '$321321.00'],
  ]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={appImages.backArrow} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={{ start: HP(4), fontWeight: '500', fontSize: 18 }}>Reservations by Location</Text>
      </View>
      <View style={styles.bottomLine} />

      <ScrollView>
        <ScrollView horizontal style={{ marginHorizontal: HP(2.6) }}>
          {[1, 2, 3, 4].map((item) => {
            return (
              <View style={styles.timeVariations}>
                <Text style={{ color: 'white' }}>All time</Text>
              </View>
            )
          })}
        </ScrollView>

        <View style={styles.innerContainer}>
          {/* inner header */}
          <View style={styles.innerHeader}>
            <Text style={[styles.text, { fontSize: 15 }]}>Top 10 Locations</Text>
            <Text style={[styles.text, { fontSize: 12, color: '#828282' }]}>Show All Locations</Text>
          </View>

          <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#F2F2F2' }}>
              <Row data={tableHead} flexArr={[1.4, 1, 1.8, 1.4]} style={styles.head} textStyle={styles.headingText} />
              <TableWrapper style={styles.wrapper}>
                <Rows data={tableData} flexArr={[1.4, 1, 1.8, 1.4]} style={styles.row} textStyle={styles.text} />
              </TableWrapper>
            </Table>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', margin: 15 }}>
            <View style={{ width: 6, height: 6, backgroundColor: '#F2C94C', borderRadius: 20 }} />
            <Text style={{ color: "#1F8CCA", fontSize: 9, marginStart: 5 }}>Last updated by Yesterday</Text>
          </View>

        </View>

        <View style={styles.mapContainer}>
          <Text style={{ color: "#333333", fontWeight: '500' }}>Map</Text>
          <Image source={appImages.map} style={styles.mapImage} />
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default More;