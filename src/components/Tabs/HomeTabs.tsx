import React, {useState} from 'react';
import {Tab} from '@rneui/themed';
import {Text, View, StyleSheet} from 'react-native';
import {colors, HP, WP} from '../../utils';

interface HomeTabsProps {
  tabIndex: any;
  setTabIndex: any;
}

const HomeTabs = ({tabIndex, setTabIndex}: HomeTabsProps) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 30,
        margin: HP('2'),
        padding: HP('0.5'),
        borderColor: '#E8E8E8',
        marginTop: HP('6'),
      }}
    >
      <Tab
        value={tabIndex}
        onChange={setTabIndex}
        scrollable
        titleStyle={{
          color: colors.primary,
        }}
        disableIndicator
      >
        <Tab.Item
          containerStyle={active => ({
            backgroundColor: active ? `${colors.primary}` : '#F5F5F5',
            width: WP('40'),
            borderRadius: 30,
          })}
          style={{borderBottomWidth: 0, borderWidth: 0}}
          titleStyle={active => ({
            color: active ? `${colors.white}` : '#828282',
            fontWeight: active ? '700' : '400',
            fontSize: 16,
          })}
          buttonStyle={active => ({
            backgroundColor: active ? `${colors.primary}` : '#F5F5F5',
          })}
        >
          My Properties
        </Tab.Item>
        <Tab.Item
          style={{
            borderBottomWidth: 0,
            borderWidth: 0,
          }}
          containerStyle={active => ({
            width: WP('40'),
            backgroundColor: active ? `${colors.primary}` : '#F5F5F5',
            borderRadius: 30,
          })}
          titleStyle={active => ({
            color: active ? `${colors.white}` : '#828282',
            fontWeight: active ? '700' : '500',
            fontSize: 16,
          })}
          buttonStyle={active => ({
            backgroundColor: active ? `${colors.primary}30` : '#F5F5F5',
          })}
        >
          Live Cameras
        </Tab.Item>
      </Tab>
    </View>
  );
};

export {HomeTabs};

const styles = StyleSheet.create({
  container: {},
});
