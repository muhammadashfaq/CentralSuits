import * as React from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageProps,
} from 'react-native';
import {appIcons, appImages, colors, fontFamily, HP, WP} from '../../utils';

interface ExcerciseCardProps {
  title: String;
  image: ImageSourcePropType;
}

const ExcerciseCard = ({title, image}: ExcerciseCardProps) => {
  const renderFavView = (isFavorite: boolean) => {
    return (
      <TouchableOpacity
        style={{
          width: 35,
          height: 35,
          backgroundColor: `${colors.primary}30`,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          position: 'absolute',
          right: WP('4'),
          top: HP('1.5'),
        }}
      >
        <Image
          resizeMode={'contain'}
          style={{width: 20, height: 25, tintColor: colors.primary}}
          source={appIcons.unfilledHeartIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity style={styles.container}>
      {renderFavView(false)}
      <Image
        source={image}
        style={{
          width: 150,
          height: 120,
          alignSelf: 'center',
          marginTop: HP('3'),
        }}
        resizeMode={'contain'}
      />
      <Text
        style={{
          fontFamily: fontFamily['DMSans-Bold'],
          alignSelf: 'center',
          paddingVertical: HP('2'),
          // bottom: HP('0'),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {ExcerciseCard};

const styles = StyleSheet.create({
  container: {
    width: WP('48'),
    //  height: HP('18'),
    borderRadius: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1,
    marginHorizontal: WP('2.5'),
    marginTop: HP('1'),
    marginBottom: HP('1'),
  },
});
