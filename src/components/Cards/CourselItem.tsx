import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Card, Divider} from '@rneui/themed';
import {Rating} from 'react-native-ratings';
import {colors, fontFamily, HP, WP} from '../../utils';
import {Dimensions} from 'react-native';
import {appIcons} from '../../utils/styling/appAssets';

interface CourselItemProps {}

const CourselItem = (props: CourselItemProps) => {
  return (
    <Card containerStyle={styles.container}>
      <Text style={styles.reviewText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It is a long reader at its layout.
      </Text>
      <Rating
        style={{paddingVertical: HP('1.5')}}
        startingValue={5}
        imageSize={24}
        ratingCount={5}
        readonly
      />
      <Divider />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingTop: HP('1.5'),
        }}
      >
        <Image
          source={appIcons.personIcon}
          style={{tintColor: colors.primary, width: 20, height: 20}}
          resizeMode={'contain'}
        />
        <Text style={styles.personText}>Aspen Vetrovs</Text>
      </View>
    </Card>
  );
};

export {CourselItem};

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: 'white', // invisible color
  },
  reviewText: {
    textAlign: 'center',
    fontFamily: fontFamily['DMSans-Medium'],
    paddingHorizontal: WP('5'),
    fontSize: 16,
  },
  personText: {
    textAlign: 'center',
    fontFamily: fontFamily['DMSans-Bold'],
    fontSize: 16,
    paddingLeft: WP('2'),
  },
});
