import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textButton: {
    // width: '100%',
    backgroundColor: color.primary,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  outlinedButton: {
    // width: '100%',
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 50,
    borderWidth: 0.4,
    borderColor: color.inactive,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  onlyTextButton: {
    // width: '100%',
    backgroundColor: 'transparent',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 50,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLable: {
    fontFamily: font.satoshiBlack,
    fontSize: 17,
  },
});
