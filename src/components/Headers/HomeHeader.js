import React from 'react';
import {Text, View, Image} from 'react-native';
import {appImages, colors, HP, WP} from '../../utils';
import {Avatar} from '@rneui/themed';

const HomeHeader = ({params}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: WP('4'),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Avatar size={'medium'} rounded source={appImages.userPhoto} />
        <View
          style={{
            paddingLeft: WP('2'),
            height: HP('5'),
            justifyContent: 'space-around',
          }}>
          <Text style={{color: colors.black}}>Hello,</Text>
          <Text style={{fontSize: 17, fontWeight: '500', color: colors.black}}>
            John Doe!
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
          width: 60,
          height: 60,
          borderRadius: 60 / 2,
          justifyContent: 'center',
        }}>
        <Image
          source={appImages.notification}
          style={{width: 28, height: 28}}
        />
      </View>
    </View>
  );
};

export {HomeHeader};
