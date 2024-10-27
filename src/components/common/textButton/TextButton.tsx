import {CustomText} from '@components/componentsIndex';
import color from '@theme/color';
import React, {FC, memo, useMemo, useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  ColorValue,
  GestureResponderEvent,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './textButton.style';

interface TextButtonProps {
  type: 'onlyText' | 'textButton' | 'outlinedButton';
  label: string;
  labelStyle?: TextStyle;
  leftIcon?: React.JSX.ElementType;
  underlayColor?: ColorValue;
  disabled?: boolean;
  isLoading?: boolean;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  buttonContainerStyle?: ViewStyle;
}

const TextButton: FC<TextButtonProps> = ({
  type,
  label,
  labelStyle,
  onLongPress,
  onPress,
  disabled,
  underlayColor,
  isLoading,
  leftIcon,
  buttonContainerStyle,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const buttonStyles = {
    transform: [{scale}],
  };

  const buttonStyle =
    type === 'textButton'
      ? styles.textButton
      : type === 'onlyText'
      ? styles.onlyTextButton
      : styles.outlinedButton;

  const LeftIcon = useMemo(() => leftIcon as React.JSX.ElementType, [leftIcon]);
  const labelStyles = {
    ...labelStyle,
    ...styles.buttonLable,
  };

  return (
    <Animated.View style={buttonStyles}>
      <TouchableHighlight
        style={[buttonStyle, buttonContainerStyle]}
        activeOpacity={1}
        disabled={disabled}
        onLongPress={onLongPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        underlayColor={underlayColor}>
        <>
          {type !== 'onlyText' && leftIcon && <LeftIcon />}
          <View style={styles.titleView}>
            {isLoading ? (
              <ActivityIndicator size={'small'} color={color.backgroundDark} />
            ) : (
              <CustomText textStyle={labelStyles}>{label}</CustomText>
            )}
          </View>
        </>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default memo(TextButton);
