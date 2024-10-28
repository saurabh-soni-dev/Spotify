import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    marginBottom: scale(10),
  },
  label: {
    textAlign: 'left',
    fontFamily: font.satoshiBlack,
    fontSize: scale(34),
    color: color.white,
    marginBottom: scale(10),
  },
  inputBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.gray,
    borderRadius: scale(5),
    height: scale(50),
  },
  focusInputBoxStyle: {
    backgroundColor: color.inactive,
  },
  inputStyle: {
    width: '88%',
    height: scale(50),
    paddingHorizontal: scale(10),
    fontSize: scale(17),
    color: color.white,
    fontFamily: font.satoshiMedium,
  },
  passwordIcon: {
    height: scale(50),
    width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    marginTop: scale(10),
    fontSize: scale(14),
    color: color.white,
    fontFamily: font.satoshiRegular,
  },
});
