import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    flex: 1,
    padding: 24,
  },
  logo: {
    height: 75,
    width: 75,
    marginBottom: 25,
  },
  sloganText: {
    textAlign: 'center',
    fontFamily: font.satoshiBlack,
    fontSize: 34,
    color: color.white,
  },
  signupText: {
    color: color.backgroundDark,
  },
  loginText: {
    color: color.white,
  },
});
