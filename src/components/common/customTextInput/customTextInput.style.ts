import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    textAlign: 'left',
    fontFamily: font.satoshiBlack,
    fontSize: 34,
    color: color.white,
    marginBottom: 10,
  },
  inputBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.gray,
    borderRadius: 5,
    height: 50,
  },
  focusInputBoxStyle: {
    backgroundColor: color.inactive,
  },
  inputStyle: {
    width: '88%',
    height: 50,
    paddingHorizontal: 10,
    fontSize: 17,
    color: color.white,
    fontFamily: font.satoshiMedium,
  },
  passwordIcon: {
    height: 50,
    width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    marginTop: 10,
    fontSize: 14,
    color: color.white,
    fontFamily: font.satoshiRegular,
  },
});
