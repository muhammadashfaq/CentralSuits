import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, WP, HP} from '../../utils';

interface FlatlistHeaderProps {
  titleLeft: String;
  titleRight: String;
}

const FlatlistHeader = ({titleLeft, titleRight}: FlatlistHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: WP('5'),
        marginVertical: WP('2'),
      }}
    >
      <Text style={{fontSize: 19, fontWeight: 'bold'}}>{titleLeft}</Text>
      <Text
        style={{
          fontSize: 18,
          color: colors.primary,
          fontWeight: 'bold',
        }}
      >
        {titleRight}
      </Text>
    </View>
  );
};

export {FlatlistHeader};

const styles = StyleSheet.create({
  container: {},
});
