import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input as RNInput, Icon} from '@rneui/themed';
import {fontFamily, colors, HP, size, WP} from '../../utils';

const Input = ({
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry,
  renderErrorMessage,
  errorMessage,
  onChangeText,
  disableFullscreenUI,
  autoCapitalize,
  touched,
  blurOnSubmit,
  onBlur,
  value,
  onSubmitEditing,
  editable,
  inputContainerStyle,
  label,
  labelStyle,
  containerStyle,
  inputStyle,
  placeholderTextColor,
  multiline,
  maxLength,
  keyboardType,
  passwordEyeColor = 'black',
  isClickable = false,
  disabled = false,
}) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <RNInput
      label={
        renderErrorMessage ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: HP('1'),
            }}>
            <Icon
              name={'infocirlceo'}
              size={16}
              type={'antdesign'}
              color={colors.red}
            />
            <Text
              numberOfLines={1}
              style={{
                fontFamily: fontFamily['DMSans-Medium'],
                color: colors.error,
                paddingLeft: WP('1.5'),
              }}>
              {errorMessage}
            </Text>
          </View>
        ) : (
          label
        )
      }
      labelStyle={[styles.labelStyle, labelStyle]}
      placeholder={placeholder}
      disabled={disabled}
      placeholderTextColor={'#00000060'}
      secureTextEntry={showPass}
      inputContainerStyle={[
        styles.inputContainerStyle,
        inputContainerStyle,
        {borderColor: renderErrorMessage ? colors.error : colors.g1},
      ]}
      inputStyle={[styles.inputStyle, inputStyle]}
      leftIcon={leftIcon}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      disableFullscreenUI={disableFullscreenUI}
      autoCapitalize={autoCapitalize}
      blurOnSubmit={blurOnSubmit}
      editable={editable}
      renderErrorMessage={renderErrorMessage}
      containerStyle={[styles.containerStyle, containerStyle]}
      rightIcon={
        secureTextEntry
          ? null
          : // <Icon
            //   onPress={() => {
            //     setShowPass(!showPass);
            //   }}
            //   name={!showPass ? 'eye-outline' : 'eye-off-outline'}
            //   type={'material-community'}
            //   size={22}
            //   color={passwordEyeColor}
            //   tvParallaxProperties={undefined}
            // />
            rightIcon
      }
      // errorMessage={errorMessage}
      style={{fontSize: 11}}
      renderErrorMessage={false}
      autoCompleteType={undefined}
      onSubmitEditing={onSubmitEditing}
      multiline={multiline}
      maxLength={maxLength}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: HP('1'),
    /// marginHorizontal: HP('2'),
  },
  inputStyle: {
    fontFamily: fontFamily['DMSans-Bold'],
    fontSize: 12,
    borderBottomWidth: 0,
    paddingHorizontal: WP('1'),
    color: colors.black,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  inputContainerStyle: {
    borderRadius: 7,
    backgroundColor: colors.white,
    paddingHorizontal: WP('2'),
    borderColor: '#CBCBCB',
    borderWidth: 1,
    padding: 0,
    margin: 0,
    height: HP('5'),
    // marginHorizontal: HP('2'),
  },
  labelStyle: {
    color: colors.black,
    fontFamily: fontFamily.Poppin_Light,
    marginLeft: HP('0.5'),
    marginBottom: HP('0.5'),
  },
});

export {Input};
