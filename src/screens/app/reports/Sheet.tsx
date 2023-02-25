import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { appImages, HP, WP } from '../../../utils';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

const Sheet = () => {
  const [tableHead, setTableHead] = useState(['Date', 'Rooms \nOccupied', 'Accommodation \nBooked', 'Total \nRevenue']);
  const [tableData, setTableData] = useState([
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
    <ScrollView>
      <View style={styles.mainContainer}>
        {/* inner header */}
        <View style={styles.innerHeader}>
          <Text style={[styles.text, { fontSize: 15 }]}>Number of Rooms Nights Sold</Text>
          <Image source={appImages.download} style={styles.load} />
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
    </ScrollView>
  );
};

export default Sheet;

const styles = StyleSheet.create({
  mainContainer: {
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
  },
  load: {
    width: WP(5),
    height: WP(5),
    resizeMode: 'contain'
  },
  text: {
    textAlign: 'center',
    color: '#4F4F4F',
    fontWeight: '500',
    fontSize: 10
  },
  innerHeader: {
    margin: HP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  headingText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 12
  },

  container: {
    flex: 1,
  },
  head: {
    height: 40,
    backgroundColor: '#1F8CCA',
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    height: 40,
  },

});
