import {CustomText} from '@components/componentsIndex';
import React, {FC, memo} from 'react';
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  TextStyle,
  TouchableHighlight,
} from 'react-native';
import {styles} from './textButton.style';
import color from '@theme/color';

interface TextButtonProps {
  type: 'onlyText' | 'textButton' | 'outlinedButton';
  label: string;
  labelStyle?: TextStyle;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  underlayColor?: ColorValue;
  isLoading?: boolean;
}

const TextButton: FC<TextButtonProps> = ({
  type,
  label,
  labelStyle,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  disabled,
  underlayColor,
  isLoading,
}) => {
  return type == 'textButton' ? (
    <TouchableHighlight
      style={styles.textButton}
      activeOpacity={1}
      disabled={disabled}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      underlayColor={underlayColor}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={color.background} />
      ) : (
        <CustomText textStyle={labelStyle}>{label}</CustomText>
      )}
    </TouchableHighlight>
  ) : type == 'onlyText' ? (
    <TouchableHighlight
      style={styles.onlyTextButton}
      activeOpacity={1}
      disabled={disabled}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      underlayColor={underlayColor}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={color.background} />
      ) : (
        <CustomText textStyle={labelStyle}>{label}</CustomText>
      )}
    </TouchableHighlight>
  ) : (
    <TouchableHighlight
      style={styles.outlinedButton}
      activeOpacity={1}
      disabled={disabled}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      underlayColor={underlayColor}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={color.background} />
      ) : (
        <CustomText textStyle={labelStyle}>{label}</CustomText>
      )}
    </TouchableHighlight>
  );
};

export default memo(TextButton);
