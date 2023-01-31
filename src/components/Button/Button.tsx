import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors, fontFamily, HP} from '../../utils';

interface AppButtonProps {
  title: String;
  onPress: () => void;
  backgorundColor?: String;
  disabled?: boolean;
  style?: ViewStyle;
}

const AppButton = ({
  title,
  onPress,
  backgorundColor,
  disabled,
  style,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, {...style}]}
    >
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export {AppButton};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: HP('5'),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.white,
    fontFamily: fontFamily['DMSans-Bold'],
    fontSize: 16,
  },
});
