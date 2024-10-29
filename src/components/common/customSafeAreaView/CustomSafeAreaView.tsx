import React, {FC, memo, ReactNode} from 'react';
import {SafeAreaView, View, ViewStyle} from 'react-native';
import {styles} from './customSafeAreaView.style';

interface CustomSafeAreaViewProps {
  children?: ReactNode;
  style?: ViewStyle;
}
const CustomSafeAreaView: FC<CustomSafeAreaViewProps> = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView />
      {children}
    </View>
  );
};

export default memo(CustomSafeAreaView);
