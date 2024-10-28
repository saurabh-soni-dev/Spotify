import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';
export const styles = StyleSheet.create({
  textStyle: {
    fontFamily: font.satoshiRegular,
    fontSize: scale(14),
    color: color.white,
  },
});
