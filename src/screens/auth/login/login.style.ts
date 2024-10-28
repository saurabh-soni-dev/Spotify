import color from '@theme/color';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundDark,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: color.backgroundDark,
    paddingHorizontal: scale(24),
  },
  labelStyle: {
    marginBottom: scale(3),
  },
  password: {
    marginTop: scale(30),
  },
  loginButton: {
    backgroundColor: color.inactive,
    alignSelf: 'center',
    paddingHorizontal: scale(40),
    marginTop: scale(40),
  },
  focusLoginButton: {
    backgroundColor: color.white,
    alignSelf: 'center',
    paddingHorizontal: scale(40),
    marginTop: scale(40),
  },
  loginWithoutPassButton: {
    backgroundColor: color.backgroundLight,
    alignSelf: 'center',
    paddingHorizontal: scale(25),
    marginTop: scale(30),
    height: scale(35),
    borderWidth: scale(0.5),
    borderColor: color.gray,
  },
});
