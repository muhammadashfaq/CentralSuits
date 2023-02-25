import * as React from 'react';
import {ImageSourcePropType, Dimensions} from 'react-native';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageProps,
} from 'react-native';
import {appImages, colors, HP, WP} from '../../utils';

interface LiveCameraProps {
  title: String;
  image: ImageSourcePropType;
}

const LiveCameraCard = ({title, image}: LiveCameraProps) => {
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
        {/* <Image
          resizeMode={'contain'}
          style={{width: 20, height: 25, tintColor: colors.primary}}
          source={appIcons.unfilledHeartIcon}
        /> */}
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity style={styles.container}>
      {renderFavView(false)}
      <Image
        source={appImages.propertyImage}
        style={{
          width: 174,
          height: 160,
          alignSelf: 'center',
          marginTop: HP('0.5'),
          borderRadius: 10,
        }}
        resizeMode={'cover'}
      />
      <Text
        style={{
          alignSelf: 'center',
          paddingVertical: HP('1'),
          fontWeight: '500',
          fontSize: 16,
          paddingLeft: HP('1'),
        }}
      >
        Camera 1
      </Text>
    </TouchableOpacity>
  );
};

export {LiveCameraCard};

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    width: Dimensions.get('window').width / 2.3,
    //  height: HP('25'),
    borderRadius: 10,
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
    marginHorizontal: WP('1.5'),
    marginTop: HP('1'),
    marginBottom: HP('1'),
  },
});
