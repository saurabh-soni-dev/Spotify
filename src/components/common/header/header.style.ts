import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp('6%'),
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  leftIconView: {
    height: 32,
    width: 32,
    backgroundColor: color.background,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleStyle: {
    flex: 0.9,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: font.satoshiBold,
  },
});
