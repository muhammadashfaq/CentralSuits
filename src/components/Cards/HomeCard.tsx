import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {WP, colors, HP} from '../../utils';
import {Divider, Icon} from '@rneui/base';

interface HomeCardProps {}

const HomeCard = (props: HomeCardProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <Text style={{fontSize: 16, fontWeight: '700'}}>Rent Status</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>November 2022</Text>
          <Icon type={'antdesign'} name={'down'} />
        </View>
      </View>
      <Divider style={{marginVertical: HP('1')}} />
    </View>
  );
};

export {HomeCard};

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
});
