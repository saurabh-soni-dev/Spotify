import {
  CustomStatusBar,
  CustomTextInput,
  Header,
  TextButton,
} from '@components/componentsIndex';
import color from '@theme/color';
import React, {FC, useRef} from 'react';
import {Animated, KeyboardAvoidingView, Platform, View} from 'react-native';
import {styles} from './signup.style';
import useSignup from './useSignup';

const Signup: FC = () => {
  const {email, error, isNext, updateFieldValue, onpressNext} = useSignup();

  const animatedValue = useRef(new Animated.Value(0)).current;

  // Function to handle the next button press
  const handleNextPress = () => {
    Animated.timing(animatedValue, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      animatedValue.setValue(0);
    });
  };

  // Interpolating the animated value to translate the view
  const translateX = animatedValue.interpolate({
    inputRange: [-300, 0],
    outputRange: [-300, 0],
    extrapolate: 'clamp',
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <CustomStatusBar backgroundColor={color.backgroundDark} />
        <Header title="Create account" />
        <Animated.View
          style={[styles.mainContainer, {transform: [{translateX}]}]}>
          <CustomTextInput
            containerStyle={styles.emailStyle}
            label={`What's your email address?`}
            value={email}
            onChangeText={value => updateFieldValue(value)}
            inputMode="email"
            keyboardType="email-address"
            returnKeyType="next"
            error={error}
          />
          <TextButton
            type="onlyText"
            label="Next"
            disabled={!isNext}
            underlayColor={color.inactive}
            labelStyle={{color: color.backgroundDark}}
            buttonContainerStyle={
              isNext ? styles.focusNextButton : styles.nextButton
            }
            onPress={onpressNext}
          />
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
