import React from 'react';
import {Text, View} from 'react-native';

const Spacer = ({horizental = 0, vertical = 0}) => (
  <View style={{paddingHorizontal: horizental, paddingVertical: vertical}} />
);

export {Spacer};
