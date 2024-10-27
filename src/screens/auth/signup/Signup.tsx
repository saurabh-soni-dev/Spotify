import {
  CustomStatusBar,
  CustomTextInput,
  Header,
  TextButton,
} from '@components/componentsIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './signup.style';
import useSignup from './useSignup';

const Signup: FC = () => {
  const {email, error, isNext, updateFieldValue, onpressNext} = useSignup();
  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor={color.backgroundDark} />
      <Header title="Create account" />
      <View style={styles.mainContainer}>
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
      </View>
    </View>
  );
};

export default Signup;
