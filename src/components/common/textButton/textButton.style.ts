import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  textButton: {
    // width: '100%',
    backgroundColor: color.primary,
    height: scale(50),
    borderRadius: scale(50),
    marginBottom: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  outlinedButton: {
    // width: '100%',
    backgroundColor: 'transparent',
    height: scale(50),
    borderRadius: scale(50),
    borderWidth: scale(0.6),
    borderColor: color.gray,
    marginBottom: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  onlyTextButton: {
    // width: '100%',
    backgroundColor: 'transparent',
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(10),
    borderRadius: scale(50),
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLable: {
    fontFamily: font.satoshiBlack,
    fontSize: scale(17),
  },
});
