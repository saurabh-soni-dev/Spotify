import {FC} from 'react';
import useLogin from './useLogin';
import {styles} from './login.style';
import {
  CustomStatusBar,
  CustomTextInput,
  Header,
  TextButton,
} from '@components/componentsIndex';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import color from '@theme/color';

const Login: FC = () => {
  const {
    loginInfo,
    updateFieldValue,
    errors,
    isLogin,
    onpressLogin,
    onpressLoginWithoutPassword,
  } = useLogin();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <CustomStatusBar backgroundColor={color.backgroundDark} />
        <Header />
        <View style={styles.mainContainer}>
          <CustomTextInput
            label={`Email or username`}
            labelStyle={styles.labelStyle}
            value={loginInfo.email}
            onChangeText={value => updateFieldValue('email', value)}
            inputMode="email"
            keyboardType="email-address"
            returnKeyType="next"
            error={errors.email}
          />
          <CustomTextInput
            containerStyle={styles.password}
            label={`Password`}
            labelStyle={styles.labelStyle}
            value={loginInfo.password}
            onChangeText={value => updateFieldValue('password', value)}
            secureTextEntry={true}
            inputMode="text"
            keyboardType="visible-password"
            returnKeyType="next"
            error={errors.password}
          />
          <TextButton
            type="onlyText"
            label="Log in"
            disabled={!isLogin}
            underlayColor={color.inactive}
            labelStyle={{color: color.backgroundDark}}
            buttonContainerStyle={
              isLogin ? styles.focusLoginButton : styles.loginButton
            }
            onPress={onpressLogin}
          />
          <TextButton
            type="onlyText"
            label="Log in without password"
            underlayColor={color.backgroundDark}
            labelStyle={{color: color.white}}
            buttonContainerStyle={styles.loginWithoutPassButton}
            onPress={onpressLoginWithoutPassword}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
