import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HP, WP } from '../../../utils'
import { BarChart } from "react-native-gifted-charts";

const Chart = () => {
    const data = [
        { value: 2500, frontColor: '#1F8CCA' },
        { value: 3500, frontColor: '#1F8CCA' },
        { value: 4500, frontColor: '#1F8CCA' },
        { value: 5200, frontColor: '#1F8CCA' },
        { value: 1700, frontColor: '#1F8CCA' },
        { value: 2700, frontColor: '#1F8CCA' },
        { value: 1200, frontColor: '#1F8CCA' },
        { value: 3000, frontColor: '#1F8CCA' },
        { value: 2000, frontColor: '#1F8CCA' },
        { value: 4000, frontColor: '#1F8CCA' },
        { value: 4000, frontColor: '#1F8CCA' },
        { value: 1000, frontColor: '#1F8CCA' },
    ];
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.innerHeader}>
                    <Text style={[styles.text]}>Number of Rooms Nights Sold</Text>
                </View>
                <View style={styles.separator} />

                <View style={{
                    marginTop: HP(2), marginBottom: HP(2), width: WP(80),
                    alignSelf: 'center'
                }}>
                    <BarChart
                        data={data}
                        barWidth={6}
                        initialSpacing={5}
                        spacing={24}
                        yAxisThickness={0}
                        stepValue={1000}
                        maxValue={5000}
                        noOfSections={6}
                        // hideRules
                        cappedBars
                        capColor={"#1F8CCA"}
                        capRadius={10}
                        yAxisColor={'white'}
                        yAxisTextStyle={{ color: 'lightgray' }}
                        yAxisLabelTexts={['0', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']}
                        xAxisLabelTexts={['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                        xAxisColor={'white'}
                        labelWidth={40}
                        xAxisLabelTextStyle={{ color: '#999999', fontSize: 10 }}

                    />

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', margin: 15 }}>
                    <View style={{ width: 6, height: 6, backgroundColor: '#F2C94C', borderRadius: 20 }} />
                    <Text style={{ color: "#1F8CCA", fontSize: 9, marginStart: 5 }}>Last updated by Yesterday</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Chart

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
    innerHeader: {
        margin: HP(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        fontWeight: '500',
        fontSize: 15
    },
    separator: {
        width: WP(90), height: 1, backgroundColor: '#BDBDBD'
    },
})