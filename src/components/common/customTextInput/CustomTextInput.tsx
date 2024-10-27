import {CustomText} from '@components/componentsIndex';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo, useRef, useState} from 'react';
import {Text, TextInput, TextStyle, TouchableOpacity, View} from 'react-native';
import {styles} from './customTextInput.style';

export type ReturnKeyType = 'done' | 'go' | 'next' | 'search' | 'send';
export type ReturnKeyTypeAndroid = 'none' | 'previous';
export type ReturnKeyTypeIOS =
  | 'default'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo'
  | 'emergency-call';
export type KeyboardType =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'url';
export type KeyboardTypeIOS =
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'name-phone-pad'
  | 'twitter'
  | 'web-search';
export type KeyboardTypeAndroid = 'visible-password';

interface CustomTextInputProps {
  label?: string;
  labelStyle?: TextStyle;
  placeholder?: string;
  placeholderTextColor?: string;
  error?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  editable?: boolean;
  keyboardType?: KeyboardType | KeyboardTypeAndroid | KeyboardTypeIOS;
  keyboardAppearance?: 'default' | 'light' | 'dark' | undefined;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  spellCheck?: boolean | undefined;
  inputMode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
  returnKeyType?: ReturnKeyType | ReturnKeyTypeAndroid | ReturnKeyTypeIOS;
  inputBoxStyle?: object;
  inputStyle?: object;
  containerStyle?: object;
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  label,
  labelStyle,
  placeholder,
  placeholderTextColor,
  error,
  value,
  onChangeText,
  secureTextEntry,
  editable = true,
  keyboardType = 'default',
  keyboardAppearance,
  maxLength = 50,
  multiline = false,
  numberOfLines = 1,
  returnKeyType,
  spellCheck,
  inputMode,
  inputBoxStyle,
  inputStyle,
  containerStyle,
  ...props
}) => {
  const labelStyles = {...styles.label, ...labelStyle};

  const inputRef = useRef<TextInput>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [visiblePassword, setVisiblePassword] = useState<boolean>(
    secureTextEntry ?? false,
  );
  const checkIsFocusedHandler = () => {
    setTimeout(() => {
      if (inputRef?.current) {
        let result = inputRef.current?.isFocused();
        setIsFocus(result);
      }
    }, 0);
  };

  const secureTextEntryHandler = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <CustomText textStyle={labelStyles}>{label}</CustomText>}
      <View
        style={[
          styles.inputBoxStyle,
          isFocus && styles.focusInputBoxStyle,
          inputBoxStyle,
        ]}>
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          allowFontScaling={false}
          value={value}
          onChangeText={onChangeText}
          onFocus={checkIsFocusedHandler}
          cursorColor={color.primary}
          editable={editable}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          secureTextEntry={visiblePassword}
          keyboardType={keyboardType}
          keyboardAppearance={keyboardAppearance}
          spellCheck={spellCheck}
          returnKeyType={returnKeyType}
          inputMode={inputMode}
          style={[styles.inputStyle, inputStyle]}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.passwordIcon}
            onPress={secureTextEntryHandler}>
            {visiblePassword ? <SvgIndex.openEye /> : <SvgIndex.closeEye />}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default memo(CustomTextInput);
