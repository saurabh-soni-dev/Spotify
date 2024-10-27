import color from '@theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundDark,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: color.backgroundDark,
    paddingHorizontal: 24,
  },
  labelStyle: {
    marginBottom: 3,
  },
  password: {
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: color.inactive,
    alignSelf: 'center',
    paddingHorizontal: 40,
    marginTop: 40,
  },
  focusLoginButton: {
    backgroundColor: color.white,
    alignSelf: 'center',
    paddingHorizontal: 40,
    marginTop: 40,
  },
  loginWithoutPassButton: {
    backgroundColor: color.backgroundLight,
    alignSelf: 'center',
    paddingHorizontal: 15,
    marginTop: 30,
    height: 35,
    borderWidth: 0.5,
    borderColor: color.gray,
  },
});
