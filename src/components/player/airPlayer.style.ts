import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    overflow: 'hidden',
    width: '100%',
    borderRadius: 5,
  },
  image: {
    borderRadius: 4,
    width: 45,
    height: 45,
    resizeMode: 'cover',
  },
  flexRowBetween: {
    height: '94%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  flexRow: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  controlView: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
  },
  progressContainer: {
    height: '6%',
    width: '100%',
    paddingHorizontal: 6,
  },
  progressBackground: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
  },
  progressBar: {
    height: 2,
    backgroundColor: color.white,
    borderRadius: 2,
  },
  titleText: {
    fontSize: 16,
    fontFamily: font.satoshiBold,
    lineHeight: 22,
    color: color.white,
  },
  artistName: {
    fontSize: 12,
    fontFamily: font.satoshiMedium,
    color: color.white,
    opacity: 0.8,
  },
});
