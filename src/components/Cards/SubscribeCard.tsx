import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, fontFamily, HP, WP} from '../../utils';

interface SubscribeCardProps {}

const SubscribeCard = (props: SubscribeCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Subscribe to Get Access `}</Text>
      <Text style={styles.subtitle}>{`$16 USD / month`}</Text>
      <Text style={styles.description}>{`*when you subscribe for a year`}</Text>
    </View>
  );
};

export {SubscribeCard};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: WP('4'),
    borderRadius: 20,
    backgroundColor: `${colors.primary}20`,
    // height: HP('13'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: HP('1.5'),
  },
  title: {
    fontFamily: fontFamily['DMSans-Bold'],
    color: colors.black,
    paddingVertical: HP('0.1'),
    fontSize: 18,
  },
  subtitle: {
    fontFamily: fontFamily['DMSans-Bold'],
    color: colors.primary,
    paddingVertical: HP('0.4'),
    fontSize: 18,
  },
  description: {
    fontFamily: fontFamily['DMSans-Regular'],
    color: colors.black,
    fontSize: 15,
  },
});
