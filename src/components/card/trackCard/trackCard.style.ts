import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const createStyles = (
  hp: (percentage: number) => number,
  wp: (percentage: number) => number,
  fs: (percentage: number) => number,
  is: (percentage: number) => number,
) => {
  return StyleSheet.create({
    container: {
      padding: wp(2),
      borderRadius: wp(1.5),
      backgroundColor: color.backgroundDark,
      marginVertical: hp(0.6),
    },
    flexRowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: hp(1),
    },
    image: {
      borderRadius: wp(0.7),
      width: hp(6),
      height: hp(6),
      resizeMode: 'cover',
    },
    trackInfo: {
      width: '65%',
    },
    title: {
      fontFamily: font.satoshiMedium,
    },
    artistName: {
      fontFamily: font.satoshiMedium,
    },
  });
};
