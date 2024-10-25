import {
  GestureResponderEvent,
  LayoutChangeEvent,
  Text,
  TextStyle,
} from 'react-native';
import React, {FC, memo} from 'react';
import {styles} from './customText.style';

interface CustomTextProps {
  children: React.ReactNode;
  allowFontScaling?: boolean;
  numberOfLines?: number;
  textStyle?: TextStyle;
  onLayout?: (event: LayoutChangeEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
}

const CustomText: FC<CustomTextProps> = ({
  children,
  allowFontScaling = false,
  numberOfLines,
  textStyle,
  onLayout,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
}) => {
  return (
    <Text
      allowFontScaling={allowFontScaling}
      numberOfLines={numberOfLines}
      style={[styles.textStyle, {...textStyle}]}
      onLayout={onLayout}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}>
      {children || null}
    </Text>
  );
};

export default memo(CustomText);
