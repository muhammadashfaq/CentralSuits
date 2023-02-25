import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { appImages, colors, HP, WP } from '../../utils';
import { Avatar } from '@rneui/themed';

interface userHeaderProps {
  title: String,
  description: String,
  icon: ImageSourcePropType,
}

const UserHeader = (props: userHeaderProps) => {
  const { title, description, icon } = props;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Avatar size={'medium'} rounded source={appImages.userPhoto} />
        <View style={styles.titleText}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    paddingLeft: WP('2'),
    height: HP('5'),
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  description: {
    color: colors.black,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export { UserHeader };
