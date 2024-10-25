import {View, StatusBarProps, StatusBar} from 'react-native';
import React, {FC, memo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import color from '@theme/color';

interface CustomStatusBarProps {
  statusBarProps?: StatusBarProps;
  backgroundColor?: string;
  hidden?: boolean;
  animated?: boolean;
  translucent?: boolean;
  barStyle?: 'default' | 'dark-content' | 'light-content';
}
const CustomStatusBar: FC<CustomStatusBarProps> = ({
  statusBarProps,
  backgroundColor,
  hidden,
  animated,
  translucent,
  barStyle,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: backgroundColor ?? color.background,
        },
      ]}>
      <StatusBar
        animated={animated}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={translucent}
        hidden={hidden}
        {...props}
      />
    </View>
  );
};

export default memo(CustomStatusBar);
