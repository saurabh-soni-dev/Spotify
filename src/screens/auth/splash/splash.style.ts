import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    padding: hp('3%'),
  },
  logo: {
    height: hp('20%'),
    width: wp('22%'),
  },
  sloganText: {
    textAlign: 'center',
    fontFamily: font.satoshiBold,
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
