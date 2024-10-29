import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    borderRadius: scale(10),
    backgroundColor: color.backgroundDark,
    marginVertical: scale(5),
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  image: {
    borderRadius: scale(4),
    width: scale(45),
    height: scale(45),
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
