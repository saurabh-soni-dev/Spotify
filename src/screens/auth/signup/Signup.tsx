import {CustomStatusBar, CustomText, Header} from '@components/componentsIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './signup.style';
import useSignup from './useSignup';

const Signup: FC = () => {
  const {} = useSignup();
  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor={color.backgroundDark} />
      <Header title="Create account" />
      <View style={styles.mainContainer}>
        <CustomText>Signup</CustomText>
      </View>
    </View>
  );
};

export default Signup;
