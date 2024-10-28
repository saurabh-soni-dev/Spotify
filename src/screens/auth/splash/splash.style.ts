import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

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
    padding: scale(24),
  },
  logo: {
    height: scale(75),
    width: scale(75),
    marginBottom: scale(25),
  },
  sloganText: {
    textAlign: 'center',
    fontFamily: font.satoshiBlack,
    fontSize: scale(34),
    color: color.white,
  },
  signupText: {
    color: color.backgroundDark,
  },
  loginText: {
    color: color.white,
  },
});
