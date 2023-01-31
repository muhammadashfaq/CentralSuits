import {StyleSheet} from 'react-native';
import {colors, family, HP, WP} from '../../utils';

const CommonStyles = StyleSheet.create({
  feedDescription: {
    fontFamily: family.BeVietnamPro_Regular,
    color: colors.white,
    paddingVertical: HP('1.5'),
  },
});

export {CommonStyles};
